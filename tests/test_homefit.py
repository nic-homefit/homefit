"""Browser regression tests. Run: python -m unittest discover -s tests -v"""
import functools
import http.server
import json
import os
from pathlib import Path
import shutil
import threading
import unittest

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]


class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass


class HomeFitTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.server = http.server.ThreadingHTTPServer(
            ('127.0.0.1', 0), functools.partial(QuietHandler, directory=str(ROOT)))
        cls.thread = threading.Thread(target=cls.server.serve_forever, daemon=True)
        cls.thread.start()
        cls.url = f'http://127.0.0.1:{cls.server.server_port}'
        cls.playwright = sync_playwright().start()
        executable = os.environ.get('CHROMIUM_PATH') or shutil.which('chromium')
        options = {'headless': True, 'args': ['--no-sandbox']}
        if executable:
            options['executable_path'] = executable
        cls.browser = cls.playwright.chromium.launch(**options)

    @classmethod
    def tearDownClass(cls):
        cls.browser.close()
        cls.playwright.stop()
        cls.server.shutdown()
        cls.server.server_close()

    def setUp(self):
        self.context = self.browser.new_context(viewport={'width': 1440, 'height': 1000})
        self.page = self.context.new_page()
        self.errors = []
        self.page.on('pageerror', lambda error: self.errors.append(str(error)))
        self.page.goto(self.url)

    def tearDown(self):
        self.context.close()
        self.assertEqual(self.errors, [])

    def test_catalog_has_distinct_demonstrations_and_steps(self):
        result = self.page.evaluate('''() => {
          const items=Object.values(EXERCISE_CATALOG);
          return {count:items.length, unique:new Set(items.map(x=>x.mediaId)).size,
            valid:items.every(x=>x.data.length===6&&x.data[5].length===3&&x.data[5].every(Boolean)),
            plans:Object.values(plans).every(m=>Object.values(m).every(p=>p.every(id=>E[id])))};
        }''')
        self.assertGreater(result['count'], 100)
        self.assertEqual(result['count'], result['unique'])
        self.assertTrue(result['valid'])
        self.assertTrue(result['plans'])

    def test_all_media_decode_in_browser(self):
        result = self.page.evaluate('''async () => {
          const ids=Object.values(EXERCISE_CATALOG).map(x=>x.mediaId), failures=[];
          async function worker(){while(ids.length){const id=ids.pop(),v=document.createElement('video');
            v.muted=true;v.preload='auto';
            const ok=await new Promise(resolve=>{const timeout=setTimeout(()=>resolve(false),10000);
              v.onloadeddata=()=>{clearTimeout(timeout);resolve(v.videoWidth>0&&v.duration>0)};
              v.onerror=()=>{clearTimeout(timeout);resolve(false)};
              v.src='assets/exercises/'+id+'.mp4';v.load()});
            if(!ok)failures.push(id);v.removeAttribute('src');v.load();v.remove();}}
          await Promise.all(Array.from({length:4},worker));return failures;
        }''')
        self.assertEqual(result, [])

    def test_search_category_and_equipment(self):
        self.page.evaluate("goto('library')")
        self.assertEqual(self.page.locator('.movement-card').count(), 141)
        self.page.locator('#searchInput').fill('死虫')
        self.assertEqual(self.page.locator('.movement-card').count(), 1)
        self.page.locator('#searchInput').fill('Dumbbell')
        self.assertGreater(self.page.locator('.movement-card').count(), 20)
        self.page.locator('#searchInput').fill('')
        self.page.locator('.equipment-select').select_option('徒手')
        self.page.get_by_role('button', name='核心', exact=True).click()
        self.assertGreater(self.page.locator('.movement-card').count(), 5)
        self.page.locator('#searchInput').fill('no-such-exercise')
        self.assertEqual(self.page.locator('.movement-card').count(), 0)
        self.assertIn('没有找到动作', self.page.locator('#libraryResults').inner_text())

    def test_demo_plays_pauses_and_slow_motion(self):
        self.page.evaluate("openDetail('pushup')")
        self.page.wait_for_function("document.querySelector('video').currentTime > .15")
        self.page.locator('#demoToggle').click()
        self.assertTrue(self.page.locator('video').evaluate('(v)=>v.paused'))
        self.page.locator('#demoSpeed').click()
        self.assertEqual(self.page.locator('video').evaluate('(v)=>v.playbackRate'), .5)
        self.page.locator('#demoToggle').click()
        self.page.wait_for_function("!document.querySelector('video').paused")

    def test_reduced_motion_starts_paused(self):
        self.page.emulate_media(reduced_motion='reduce')
        self.page.evaluate("openDetail('pushup')")
        self.assertTrue(self.page.locator('video').evaluate('(v)=>v.paused'))
        self.assertEqual(self.page.locator('#demoToggle').get_attribute('aria-label'), '播放示范')

    def test_custom_plan_replacement_addition_and_persistence(self):
        self.page.locator('.swap-button').first.click()
        self.page.locator('#searchInput').fill('死虫')
        self.page.locator('.add-movement').click()
        self.assertIn('死虫', self.page.locator('.plan-row').first.inner_text())
        self.page.get_by_role('button', name='添加动作', exact=True).click()
        self.page.locator('#searchInput').fill('波比')
        self.page.locator('.add-movement').click()
        self.assertEqual(self.page.locator('.plan-row').count(), 7)
        self.page.reload()
        self.assertIn('死虫', self.page.locator('.plan-row').first.inner_text())
        self.assertEqual(self.page.locator('.plan-row').count(), 7)
        self.page.locator('.remove-plan').last.click()
        self.assertEqual(self.page.locator('.plan-row').count(), 6)

    def test_training_restore_timer_and_completion(self):
        self.page.get_by_role('button', name='开始今日训练', exact=False).click()
        self.page.locator('#weight').fill('12.5')
        self.page.locator('#reps').fill('9')
        self.page.get_by_role('button', name='完成这一组', exact=False).click()
        self.page.reload()
        self.assertEqual(self.page.evaluate('session.set'), 2)
        self.assertEqual(self.page.locator('#weight').input_value(), '12.5')
        self.page.get_by_role('button', name='开始休息', exact=False).click()
        self.page.wait_for_function('seconds < 60')
        self.page.get_by_role('button', name='重置', exact=True).click()
        self.assertEqual(self.page.locator('#seconds').inner_text(), '60')
        self.page.evaluate("openLibraryFor('session')")
        self.page.locator('#searchInput').fill('死虫')
        self.page.locator('.add-movement').click()
        self.assertIn('死虫', self.page.locator('h1').inner_text())
        self.assertEqual(self.page.locator('video').get_attribute('src'), 'assets/exercises/0276.mp4')
        for _ in range(11):
            self.page.get_by_role('button', name='完成这一组', exact=False).click()
        self.assertEqual(self.page.evaluate('session'), None)
        self.assertEqual(self.page.evaluate('data.workouts.length'), 1)
        self.assertEqual(self.page.evaluate('data.workouts[0].sets'), 12)
        self.assertEqual(self.page.evaluate('data.workouts[0].details[1].id'), 'ex_0276')
        self.assertEqual(self.page.locator('h1').inner_text(), '训练反馈')

    def test_nutrition_measurements_and_backup(self):
        self.page.evaluate("goto('food')")
        for field,value in [('fname','鸡胸肉'),('fgrams','150'),('fp100','23'),('fc100','120')]:
            self.page.locator('#'+field).fill(value)
        self.assertIn('34.5g', self.page.locator('#foodPreview').inner_text())
        self.page.get_by_role('button', name='记录这份食物', exact=False).click()
        self.assertEqual(self.page.evaluate('todayProtein()'), 34.5)
        self.assertEqual(self.page.evaluate('currentCals()'), 180)
        self.page.evaluate("goto('profile')")
        self.page.locator('#m_weight').fill('70.5')
        self.page.get_by_role('button', name='保存今日测量', exact=True).click()
        self.page.locator('#proteinTarget').fill('140')
        self.page.get_by_role('button', name='保存目标', exact=True).click()
        self.page.locator('#reminder').fill('18:30')
        self.page.get_by_role('button', name='保存时间', exact=True).click()
        with self.page.expect_download() as download:
            self.page.get_by_role('button', name='导出 JSON 备份', exact=False).click()
        backup=json.loads(Path(download.value.path()).read_text())
        self.assertEqual(backup['measurements'][0]['weight'], 70.5)
        self.assertEqual(backup['proteinTarget'], 140)
        self.assertEqual(backup['reminder'], '18:30')
        self.assertEqual(backup['food'][0]['name'], '鸡胸肉')
        self.page.on('dialog', lambda dialog: dialog.accept())
        backup['proteinTarget']=160
        self.page.locator('input[type=file]').set_input_files({
            'name':'backup.json','mimeType':'application/json',
            'buffer':json.dumps(backup).encode()})
        self.page.wait_for_function('data.proteinTarget===160')
        self.page.reload()
        self.assertEqual(self.page.evaluate('data.food.length'), 1)
        self.assertEqual(self.page.evaluate('data.measurements.length'), 1)

    def test_old_storage_survives_update(self):
        self.page.evaluate('''() => localStorage.setItem('homefit_v2',JSON.stringify({
          proteinTarget:155,food:[{name:'原有记录',date:dateToday(),protein:20}],
          workouts:[{date:dateToday(),sets:3}],measurements:[{date:dateToday(),weight:72}]}))''')
        self.page.reload()
        self.assertEqual(self.page.evaluate('data.proteinTarget'), 155)
        self.assertEqual(self.page.evaluate('todayProtein()'), 20)
        self.assertEqual(self.page.evaluate('data.workouts.length'), 1)
        self.assertEqual(self.page.evaluate('data.measurements[0].weight'), 72)

    def test_responsive_pages_have_no_horizontal_overflow(self):
        for width in [360,390,768,1440]:
            self.page.set_viewport_size({'width':width,'height':900})
            for section in ['train','library','food','feedback','profile']:
                self.page.evaluate('(p)=>goto(p)',section)
                self.assertFalse(self.page.evaluate('document.documentElement.scrollWidth>innerWidth'),(width,section))
            self.page.evaluate("openDetail('pushup')")
            self.assertFalse(self.page.evaluate('document.documentElement.scrollWidth>innerWidth'),(width,'detail'))

    def test_language_switch_persists_and_localizes_all_pages(self):
        self.page.locator('[data-language=en]').click()
        self.assertEqual(self.page.locator('html').get_attribute('lang'), 'en')
        self.assertEqual(self.page.locator('[data-language=en]').get_attribute('aria-pressed'), 'true')
        for section in ['train', 'library', 'food', 'feedback', 'profile']:
            self.page.evaluate('(p)=>goto(p)', section)
            self.assertNotRegex(self.page.locator('#app').inner_text(), r'[\u4e00-\u9fff]')
            for locator in ['#app [aria-label]', '#app [placeholder]']:
                values=self.page.locator(locator).evaluate_all(
                    '(els)=>els.map(e=>e.getAttribute("aria-label")||e.getAttribute("placeholder"))')
                for value in values:
                    self.assertNotRegex(value, r'[\u4e00-\u9fff]')
        # Every exercise has English metadata and written instructions, not just the first card.
        texts=self.page.evaluate('Object.keys(E).map(id=>displayExercise(id).flat(2).join(" "))')
        self.assertEqual(len(texts), 141)
        for text in texts:
            self.assertNotRegex(text, r'[\u4e00-\u9fff]')
        self.page.reload()
        self.assertEqual(self.page.locator('html').get_attribute('lang'), 'en')
        self.assertIn('Today', self.page.title())
        self.page.locator('[data-language=zh]').click()
        self.assertEqual(self.page.locator('html').get_attribute('lang'), 'zh-CN')
        self.assertIn('今天', self.page.locator('h1').inner_text())

    def test_language_switch_preserves_food_draft_and_user_text(self):
        self.page.evaluate("goto('food')")
        for field, value in [('fname','删除'),('fgrams','150'),('fp100','23'),('fc100','120')]:
            self.page.locator('#'+field).fill(value)
        self.page.locator('#fstate').select_option('cooked')
        self.page.locator('[data-language=en]').click()
        self.assertEqual(self.page.locator('#fname').input_value(), '删除')
        self.assertEqual(self.page.locator('#fgrams').input_value(), '150')
        self.assertEqual(self.page.locator('#fstate').input_value(), 'cooked')
        self.assertIn('Protein 34.5g', self.page.locator('#foodPreview').inner_text())
        self.page.get_by_role('button', name='Log this food', exact=False).click()
        self.assertEqual(self.page.evaluate('data.food[0].name'), '删除')
        self.assertIn('删除', self.page.locator('.listRow b').first.inner_text())
        self.page.locator('[data-language=zh]').click()
        self.assertEqual(self.page.evaluate('data.food[0].name'), '删除')
        self.assertIn('饮食与营养', self.page.locator('h1').inner_text())

    def test_language_switch_keeps_active_workout_timer_and_paused_video(self):
        self.page.get_by_role('button', name='开始今日训练', exact=False).click()
        self.page.locator('#weight').fill('17.5')
        self.page.locator('#reps').fill('11')
        self.page.wait_for_function("document.querySelector('video').currentTime>.2")
        self.page.locator('#demoToggle').click()
        position=self.page.locator('video').evaluate('(v)=>v.currentTime')
        self.page.get_by_role('button', name='开始休息', exact=False).click()
        self.page.wait_for_function('seconds<60')
        self.page.locator('[data-language=en]').click()
        self.page.wait_for_function("document.querySelector('video').readyState>=2")
        self.assertTrue(self.page.locator('video').evaluate('(v)=>v.paused'))
        self.assertAlmostEqual(self.page.locator('video').evaluate('(v)=>v.currentTime'),position,delta=.1)
        self.assertEqual(self.page.locator('#weight').input_value(), '17.5')
        self.assertEqual(self.page.locator('#reps').input_value(), '11')
        self.assertLess(self.page.evaluate('seconds'),60)
        self.assertTrue(self.page.evaluate('restActive'))
        self.assertEqual(self.page.evaluate('session.index'),0)
        self.page.locator('#demoSpeed').click()
        self.assertIn('speed', self.page.locator('#demoSpeed').inner_text())
        self.page.get_by_role('button',name='Complete set',exact=False).click()
        self.assertIn('Set 2 of 2', self.page.locator('#app').inner_text())
        self.assertEqual(self.page.evaluate('session.log[0].weight'),17.5)
        self.page.reload()
        self.assertEqual(self.page.locator('html').get_attribute('lang'),'en')
        self.assertEqual(self.page.evaluate('session.set'),2)

    def test_english_library_filters_keep_canonical_keys(self):
        self.page.locator('[data-language=en]').click()
        self.page.evaluate("goto('library')")
        self.page.get_by_role('button',name='Chest',exact=True).click()
        self.assertEqual(self.page.evaluate('category'),'胸部')
        self.page.locator('.equipment-select').select_option('哑铃')
        self.page.locator('#searchInput').fill('bench')
        self.assertGreater(self.page.locator('.movement-card').count(),0)
        self.page.locator('[data-language=zh]').click()
        self.assertEqual(self.page.evaluate('category'),'胸部')
        self.assertEqual(self.page.locator('.equipment-select').input_value(),'哑铃')
        self.assertEqual(self.page.locator('#searchInput').input_value(),'bench')
        self.page.locator('[data-language=en]').click()
        self.page.locator('.movement-cover').nth(1).click()
        self.assertNotRegex(self.page.locator('#app').inner_text(),r'[\u4e00-\u9fff]')
        self.assertIn('Good form',self.page.locator('#app').inner_text())
        self.page.get_by_role('button',name='Add to my workout',exact=False).click()
        self.assertIn('Workout updated',self.page.locator('#toast').inner_text())

    def test_english_layouts_have_no_horizontal_overflow(self):
        self.page.locator('[data-language=en]').click()
        for width in [360,390,768,1440]:
            self.page.set_viewport_size({'width':width,'height':900})
            for section in ['train','library','food','feedback','profile']:
                self.page.evaluate('(p)=>goto(p)',section)
                self.assertFalse(self.page.evaluate('document.documentElement.scrollWidth>innerWidth'),(width,section))
            self.page.evaluate("openDetail('pushup')")
            self.assertFalse(self.page.evaluate('document.documentElement.scrollWidth>innerWidth'),(width,'detail'))
            self.page.evaluate("detailId=null;page='train';if(!session)startSession();else render()")
            self.assertFalse(self.page.evaluate('document.documentElement.scrollWidth>innerWidth'),(width,'session'))



if __name__ == '__main__':
    unittest.main()
