/* Curated, local exercise catalog. See THIRD_PARTY_NOTICES.md for sources. */
const EXERCISE_CATALOG = {
  "db_bench": {
    "data": [
      "哑铃卧推",
      "Dumbbell Bench Press",
      "胸部",
      "哑铃 + 卧推凳",
      "8–12次",
      [
        "肩胛骨收紧并稳定贴凳，双脚稳踩地面",
        "手腕保持中立，哑铃缓慢下降到可控的位置",
        "胸部发力上推，避免肘部过度外展"
      ]
    ],
    "mediaId": "0289",
    "sourceName": "dumbbell bench press",
    "sourceInstructions": [
      "Lie flat on a bench with your feet flat on the ground and your back pressed against the bench.",
      "Hold a dumbbell in each hand, with your palms facing forward and your arms extended above your chest.",
      "Lower the dumbbells slowly to the sides of your chest, keeping your elbows at a 90-degree angle.",
      "Pause for a moment, then push the dumbbells back up to the starting position, fully extending your arms.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "bb_bench": {
    "data": [
      "杠铃卧推",
      "Barbell Bench Press",
      "胸部",
      "杠铃 + 卧推凳",
      "6–10次",
      [
        "肩胛收紧，双脚踩稳",
        "有控制地下降至适合的触胸位置",
        "向上推起时保持臀部接触凳面"
      ]
    ],
    "mediaId": "0025",
    "sourceName": "barbell bench press",
    "sourceInstructions": [
      "Lie flat on a bench with your feet flat on the ground and your back pressed against the bench.",
      "Grasp the barbell with an overhand grip slightly wider than shoulder-width apart.",
      "Lift the barbell off the rack and hold it directly above your chest with your arms fully extended.",
      "Lower the barbell slowly towards your chest, keeping your elbows tucked in.",
      "Pause for a moment when the barbell touches your chest.",
      "Push the barbell back up to the starting position by extending your arms.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "进阶",
    "environment": "gym"
  },
  "incline_bench": {
    "data": [
      "上斜哑铃卧推",
      "Incline Dumbbell Press",
      "胸部",
      "哑铃 + 可调凳",
      "8–12次",
      [
        "将卧推凳调到适度上斜，避免过陡",
        "保持肩胛稳定，双臂在可控范围下降",
        "沿自然轨迹推起，避免耸肩"
      ]
    ],
    "mediaId": "0314",
    "sourceName": "dumbbell incline bench press",
    "sourceInstructions": [
      "Set up an incline bench at a 45-degree angle.",
      "Sit on the bench with your feet flat on the ground and your back pressed firmly against the bench.",
      "Hold a dumbbell in each hand, palms facing forward, and lift them to shoulder height.",
      "Slowly lower the dumbbells to the sides of your chest, keeping your elbows at a 90-degree angle.",
      "Push the dumbbells back up to the starting position, fully extending your arms.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "chest_machine": {
    "data": [
      "器械胸推",
      "Machine Chest Press",
      "胸部",
      "胸推机",
      "10–12次",
      [
        "将座椅调至握柄接近胸部高度",
        "保持肩背稳定，控制推起",
        "缓慢回程，不让配重撞击"
      ]
    ],
    "mediaId": "0576",
    "sourceName": "lever chest press",
    "sourceInstructions": [
      "Adjust the seat height and position yourself on the machine with your back flat against the pad.",
      "Grasp the handles with an overhand grip and position your elbows at a 90-degree angle.",
      "Push the handles forward until your arms are fully extended, exhaling during the movement.",
      "Pause briefly at the end of the movement, then slowly return to the starting position, inhaling as you do so.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "gym"
  },
  "pushup": {
    "data": [
      "俯卧撑",
      "Push-up",
      "胸部",
      "徒手",
      "10–20次",
      [
        "身体保持一条直线，收紧核心",
        "肘部沿自然方向屈曲下降",
        "推回时避免塌腰或耸肩"
      ]
    ],
    "mediaId": "0662",
    "sourceName": "push-up",
    "sourceInstructions": [
      "Start in a high plank position with your hands slightly wider than shoulder-width apart and your feet together.",
      "Engage your core and lower your body towards the ground by bending your elbows, keeping your body in a straight line.",
      "Pause for a moment when your chest is just above the ground, then push yourself back up to the starting position by straightening your arms.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "pullup": {
    "data": [
      "引体向上",
      "Pull-up",
      "背部",
      "门框引体杆 / 健身房单杠",
      "6–10次",
      [
        "先确认门框杆安装牢固",
        "用背部带动身体上拉，避免大幅摆荡",
        "控制下降，避免放松肩部猛坠"
      ]
    ],
    "mediaId": "0652",
    "sourceName": "pull-up",
    "sourceInstructions": [
      "Hang from a pull-up bar with your palms facing away from you and your arms fully extended.",
      "Engage your core and squeeze your shoulder blades together.",
      "Pull your body up towards the bar by bending your elbows and bringing your chest towards the bar.",
      "Pause at the top of the movement, then slowly lower your body back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "进阶",
    "environment": "home"
  },
  "lat_pulldown": {
    "data": [
      "高位下拉",
      "Lat Pulldown",
      "背部",
      "高位下拉机",
      "10–12次",
      [
        "坐稳并固定大腿",
        "下拉至上胸前方，肘部朝下",
        "缓慢回放，避免身体大幅后仰"
      ]
    ],
    "mediaId": "0198",
    "sourceName": "cable pulldown",
    "sourceInstructions": [
      "Adjust the cable pulldown machine so that the seat is at a comfortable height and the knee pad is secured.",
      "Sit on the seat with your back straight and your feet flat on the ground.",
      "Grasp the cable bar with an overhand grip, slightly wider than shoulder-width apart.",
      "Lean back slightly and engage your core.",
      "Pull the cable bar down towards your chest, squeezing your shoulder blades together.",
      "Pause for a moment at the bottom of the movement, then slowly release the bar back to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "gym"
  },
  "seated_row": {
    "data": [
      "坐姿划船",
      "Seated Cable Row",
      "背部",
      "坐姿绳索划船",
      "10–12次",
      [
        "脊柱保持自然中立，胸口打开",
        "将握柄拉近躯干，肘部向后",
        "控制前送，不要借腰反复甩动"
      ]
    ],
    "mediaId": "0861",
    "sourceName": "cable seated row",
    "sourceInstructions": [
      "Sit on the cable row machine with your feet flat on the footrests and your knees slightly bent.",
      "Grasp the handles with an overhand grip, keeping your back straight and your shoulders relaxed.",
      "Pull the handles towards your body, squeezing your shoulder blades together.",
      "Pause for a moment at the peak of the movement, then slowly release the handles back to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "gym"
  },
  "barbell_row": {
    "data": [
      "杠铃俯身划船",
      "Barbell Row",
      "背部",
      "杠铃",
      "8–12次",
      [
        "髋部向后折叠，躯干稳固",
        "向腹部附近拉杠，避免耸肩",
        "缓慢放下，脊柱始终中立"
      ]
    ],
    "mediaId": "0027",
    "sourceName": "barbell bent over row",
    "sourceInstructions": [
      "Stand with your feet shoulder-width apart and knees slightly bent.",
      "Bend forward at the hips while keeping your back straight and chest up.",
      "Grasp the barbell with an overhand grip, hands slightly wider than shoulder-width apart.",
      "Pull the barbell towards your lower chest by retracting your shoulder blades and squeezing your back muscles.",
      "Pause for a moment at the top, then slowly lower the barbell back to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "进阶",
    "environment": "gym"
  },
  "db_row": {
    "data": [
      "单臂哑铃划船",
      "One-arm Dumbbell Row",
      "背部",
      "哑铃 + 卧推凳",
      "每侧10次",
      [
        "一手支撑凳面，背部保持中立",
        "拉起哑铃时肘部向髋部方向移动",
        "缓慢放下，不要扭转躯干"
      ]
    ],
    "mediaId": "0292",
    "sourceName": "dumbbell one arm bent-over row",
    "sourceInstructions": [
      "Stand with your feet shoulder-width apart, holding a dumbbell in one hand with your palm facing your body.",
      "Bend your knees slightly and hinge forward at the hips, keeping your back straight and your core engaged.",
      "Let the dumbbell hang straight down towards the floor, with your arm fully extended.",
      "Pull the dumbbell up towards your chest, keeping your elbow close to your body and squeezing your shoulder blades together.",
      "Pause for a moment at the top, then slowly lower the dumbbell back down to the starting position.",
      "Repeat for the desired number of repetitions, then switch sides."
    ],
    "level": "基础",
    "environment": "home"
  },
  "bb_squat": {
    "data": [
      "杠铃深蹲",
      "Barbell Squat",
      "腿臀",
      "杠铃 + 安全架",
      "8–12次",
      [
        "脚跟稳定，腹部收紧",
        "在自己可控的范围下蹲，膝盖跟随脚尖",
        "保持躯干稳定，用腿臀站起"
      ]
    ],
    "mediaId": "0043",
    "sourceName": "barbell full squat",
    "sourceInstructions": [
      "Stand with your feet shoulder-width apart, toes slightly turned out.",
      "Hold the barbell across your upper back, resting it on your traps or rear delts.",
      "Engage your core and keep your chest up as you begin to lower your body down.",
      "Bend at the knees and hips, pushing your hips back and down as if sitting into a chair.",
      "Lower yourself until your thighs are parallel to the ground or slightly below.",
      "Keep your knees in line with your toes and your weight in your heels.",
      "Drive through your heels to stand back up, extending your hips and knees.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "进阶",
    "environment": "gym"
  },
  "goblet_squat": {
    "data": [
      "高脚杯深蹲",
      "Goblet Squat",
      "腿臀",
      "哑铃",
      "12–15次",
      [
        "双手稳稳托住哑铃靠近胸前",
        "下蹲时保持脚掌贴地、脊柱中立",
        "用腿臀站起，不要让膝盖突然内扣"
      ]
    ],
    "mediaId": "1760",
    "sourceName": "dumbbell goblet squat",
    "sourceInstructions": [
      "Stand with your feet shoulder-width apart, holding a dumbbell vertically against your chest with both hands.",
      "Keeping your chest up and core engaged, lower your body down into a squat position by pushing your hips back and bending your knees.",
      "Continue lowering until your thighs are parallel to the ground, or as low as you can comfortably go.",
      "Pause for a moment at the bottom, then push through your heels to return to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "rdl": {
    "data": [
      "哑铃罗马尼亚硬拉",
      "Dumbbell Romanian Deadlift",
      "腿臀",
      "哑铃",
      "10–12次",
      [
        "双膝微屈，髋部向后推",
        "哑铃贴近腿移动，保持背部自然中立",
        "感觉腿后侧伸展后利用臀部伸髋站起"
      ]
    ],
    "mediaId": "1459",
    "sourceName": "dumbbell romanian deadlift",
    "sourceInstructions": [
      "Stand with your feet shoulder-width apart, holding a dumbbell in each hand with an overhand grip.",
      "Keeping your back straight and your core engaged, hinge at the hips and lower the dumbbells towards the ground, allowing your knees to bend slightly.",
      "Lower the dumbbells until you feel a stretch in your hamstrings, then push through your heels and engage your glutes to return to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "legpress": {
    "data": [
      "腿举机",
      "Leg Press",
      "腿臀",
      "腿举机",
      "10–15次",
      [
        "调整座椅至下背能够稳稳贴靠",
        "膝盖沿脚尖方向弯曲和伸展",
        "不要在底部让骨盆卷起或锁死膝盖"
      ]
    ],
    "mediaId": "0739",
    "sourceName": "sled 45в° leg press",
    "sourceInstructions": [
      "Adjust the seat and footplate of the sled machine to a comfortable position.",
      "Sit on the sled machine with your back against the backrest and your feet shoulder-width apart on the footplate.",
      "Grip the handles on the sides of the seat for stability.",
      "Push the footplate away from your body by extending your legs, keeping your heels on the footplate.",
      "Continue pushing until your legs are almost fully extended, but without locking your knees.",
      "Pause for a moment at the top of the movement, then slowly lower the footplate back towards your body by bending your knees.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "gym"
  },
  "legcurl": {
    "data": [
      "腿弯举机",
      "Leg Curl Machine",
      "腿臀",
      "腿弯举机",
      "10–15次",
      [
        "调整转轴和腿垫位置",
        "脚跟向臀部方向弯曲膝盖",
        "控制回放，避免借力摇晃"
      ]
    ],
    "mediaId": "0586",
    "sourceName": "lever lying leg curl",
    "sourceInstructions": [
      "Adjust the machine to fit your body and select the desired weight.",
      "Lie face down on the machine with your legs straight and your heels against the padded lever.",
      "Grasp the handles or the sides of the machine for stability.",
      "Keeping your upper body stationary, exhale and curl your legs up as far as possible without lifting your hips off the pad.",
      "Hold the contracted position for a brief pause as you squeeze your hamstrings.",
      "Inhale and slowly lower the lever back to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "gym"
  },
  "hipthrust": {
    "data": [
      "杠铃臀桥",
      "Barbell Glute Bridge",
      "腿臀",
      "杠铃 + 瑜伽垫",
      "10–12次",
      [
        "仰卧屈膝，双脚踩稳，杠铃置于髋前并加软垫",
        "收紧臀部抬髋至躯干与大腿大致成线",
        "缓慢下降，顶端避免过度反弓腰部"
      ]
    ],
    "mediaId": "1409",
    "sourceName": "barbell glute bridge",
    "sourceInstructions": [
      "Start by lying flat on your back on the ground with your knees bent and feet flat on the floor.",
      "Place a barbell across your hips, holding it securely with both hands.",
      "Engage your glutes and core muscles, then lift your hips off the ground until your body forms a straight line from your knees to your shoulders.",
      "Pause for a moment at the top, squeezing your glutes.",
      "Slowly lower your hips back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "进阶",
    "environment": "gym"
  },
  "shoulder_press": {
    "data": [
      "哑铃肩推",
      "Dumbbell Shoulder Press",
      "肩部",
      "哑铃 + 卧推凳",
      "8–12次",
      [
        "胸廓保持稳定，不要过度挺腰",
        "哑铃沿自然路线向上推举",
        "控制下降，肘部不必强行张开到180度"
      ]
    ],
    "mediaId": "0405",
    "sourceName": "dumbbell seated shoulder press",
    "sourceInstructions": [
      "Sit on a bench with a dumbbell in each hand, resting on your thighs.",
      "Raise the dumbbells to shoulder height, palms facing forward.",
      "Press the dumbbells upward until your arms are fully extended overhead.",
      "Pause for a moment at the top, then slowly lower the dumbbells back to shoulder height.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "machine_shoulder": {
    "data": [
      "器械肩推",
      "Machine Shoulder Press",
      "肩部",
      "肩推机",
      "10–12次",
      [
        "调整座椅使握柄处于舒适高度",
        "推起时保持颈肩放松",
        "缓慢下放，不让配重撞击"
      ]
    ],
    "mediaId": "0603",
    "sourceName": "lever shoulder press",
    "sourceInstructions": [
      "Adjust the seat height and position yourself on the machine with your back against the backrest.",
      "Grasp the handles with an overhand grip and position your hands at shoulder level.",
      "Push the handles upward until your arms are fully extended, but do not lock your elbows.",
      "Pause for a moment at the top, then slowly lower the handles back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "gym"
  },
  "lateral_raise": {
    "data": [
      "哑铃侧平举",
      "Dumbbell Lateral Raise",
      "肩部",
      "哑铃",
      "12–15次",
      [
        "手肘轻微弯曲，双臂在身体两侧",
        "将哑铃抬到舒适的肩部高度",
        "缓慢下降，避免身体借力摆荡"
      ]
    ],
    "mediaId": "0334",
    "sourceName": "dumbbell lateral raise",
    "sourceInstructions": [
      "Stand with your feet shoulder-width apart and hold a dumbbell in each hand, palms facing your body.",
      "Keep your back straight and engage your core.",
      "Raise your arms out to the sides until they are parallel to the floor, keeping a slight bend in your elbows.",
      "Pause for a moment at the top, then slowly lower your arms back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "rear_fly": {
    "data": [
      "反向飞鸟",
      "Reverse Fly",
      "肩部",
      "哑铃 / 反向飞鸟机",
      "12–15次",
      [
        "胸口稳定、肩胛自然移动",
        "手臂向身体两侧展开",
        "避免抬肩、耸肩和甩重量"
      ]
    ],
    "mediaId": "0383",
    "sourceName": "dumbbell reverse fly",
    "sourceInstructions": [
      "Stand with your feet shoulder-width apart and hold a dumbbell in each hand.",
      "Bend your knees slightly and hinge forward at the hips, keeping your back straight.",
      "Extend your arms straight down in front of you, palms facing each other.",
      "Keeping a slight bend in your elbows, raise your arms out to the sides until they are parallel to the ground.",
      "Pause for a moment at the top, then slowly lower your arms back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ez_curl": {
    "data": [
      "EZ杠弯举",
      "EZ Bar Curl",
      "手臂",
      "EZ曲杠",
      "10–12次",
      [
        "肘部保持接近躯干",
        "前臂弯举杠铃，避免腰部后仰借力",
        "缓慢下降到可控位置"
      ]
    ],
    "mediaId": "0447",
    "sourceName": "ez barbell curl",
    "sourceInstructions": [
      "Stand up straight with your feet shoulder-width apart and hold the ez barbell with an underhand grip, palms facing up.",
      "Keep your elbows close to your torso and your upper arms stationary throughout the movement.",
      "Exhale as you curl the barbell up towards your shoulders, contracting your biceps.",
      "Pause for a moment at the top, then inhale as you slowly lower the barbell back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "进阶",
    "environment": "gym"
  },
  "hammer_curl": {
    "data": [
      "哑铃锤式弯举",
      "Hammer Curl",
      "手臂",
      "哑铃",
      "10–12次",
      [
        "双手掌心相对握住哑铃",
        "肘部贴近身体完成弯举",
        "缓慢下放，不借肩部前摆"
      ]
    ],
    "mediaId": "0313",
    "sourceName": "dumbbell hammer curl",
    "sourceInstructions": [
      "Stand up straight with a dumbbell in each hand, palms facing your torso.",
      "Keep your elbows close to your torso and rotate the palms of your hands until they are facing forward.",
      "This will be your starting position.",
      "Now, keeping the upper arms stationary, exhale and curl the weights while contracting your biceps.",
      "Continue to raise the weights until your biceps are fully contracted and the dumbbells are at shoulder level.",
      "Hold the contracted position for a brief pause as you squeeze your biceps.",
      "Then, inhale and slowly begin to lower the dumbbells back to the starting position.",
      "Repeat for the recommended amount of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "tricep_pushdown": {
    "data": [
      "绳索下压",
      "Cable Triceps Pushdown",
      "手臂",
      "绳索训练器",
      "10–15次",
      [
        "固定上臂，手肘在身体附近",
        "伸直手肘推动握柄向下",
        "缓慢回程，不要用身体重量下压"
      ]
    ],
    "mediaId": "0200",
    "sourceName": "cable pushdown (with rope attachment)",
    "sourceInstructions": [
      "Attach a rope attachment to a high pulley on a cable machine.",
      "Stand facing the machine with your feet shoulder-width apart and a slight bend in your knees.",
      "Grasp the rope with an overhand grip, palms facing each other.",
      "Keep your elbows close to your sides and your upper arms stationary throughout the exercise.",
      "Exhale and push the rope downward by extending your elbows until your arms are fully extended.",
      "Pause for a moment, then inhale and slowly return to the starting position by allowing your elbows to flex.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "gym"
  },
  "overhead_triceps": {
    "data": [
      "哑铃臂屈伸",
      "Overhead Triceps Extension",
      "手臂",
      "哑铃",
      "10–12次",
      [
        "肩膀保持舒适且稳固",
        "控制肘关节屈曲并伸展",
        "避免过分拱腰"
      ]
    ],
    "mediaId": "2188",
    "sourceName": "dumbbell seated triceps extension",
    "sourceInstructions": [
      "Sit on a bench with your back straight and feet flat on the ground.",
      "Hold a dumbbell with both hands and extend your arms straight up overhead.",
      "Bend your elbows and lower the dumbbell behind your head, keeping your upper arms close to your ears.",
      "Pause for a moment, then straighten your arms and return to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "hanging_knee": {
    "data": [
      "悬垂举膝",
      "Hanging Knee Raise",
      "核心",
      "引体杆",
      "10–15次",
      [
        "握稳杠杆并先让肩带稳定",
        "收腹带动膝盖朝身体抬起",
        "慢慢下降，避免晃动甩腿"
      ]
    ],
    "mediaId": "1764",
    "sourceName": "hanging leg hip raise",
    "sourceInstructions": [
      "Hang from a pull-up bar with your arms fully extended and your palms facing away from you.",
      "Engage your core and lift your legs up by flexing your hips and knees until your thighs are parallel to the ground.",
      "Pause for a moment at the top, then slowly lower your legs back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "crunch": {
    "data": [
      "卷腹",
      "Crunch",
      "核心",
      "瑜伽垫",
      "12–20次",
      [
        "下背自然贴地，双脚稳固",
        "轻微抬起肩胛，用腹部发力",
        "缓慢回落，不要拉扯颈部"
      ]
    ],
    "mediaId": "0274",
    "sourceName": "crunch floor",
    "sourceInstructions": [
      "Lie flat on your back with your knees bent and feet flat on the ground.",
      "Place your hands behind your head with your elbows pointing outwards.",
      "Engage your abs and lift your shoulders off the ground, curling forward towards your knees.",
      "Pause for a moment at the top, then slowly lower your shoulders back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_3294": {
    "data": [
      "弓箭俯卧撑",
      "Archer Push Up",
      "胸部",
      "徒手",
      "8–12次",
      [
        "双手宽于肩撑地，收紧腹臀",
        "屈一侧手肘降低身体，另一侧手臂伸展",
        "先练熟标准俯卧撑，再逐步增加侧移幅度"
      ]
    ],
    "mediaId": "3294",
    "sourceName": "archer push up",
    "sourceInstructions": [
      "Start in a push-up position with your hands slightly wider than shoulder-width apart.",
      "Extend one arm straight out to the side, parallel to the ground.",
      "Lower your body by bending your elbows, keeping your back straight and core engaged.",
      "Push back up to the starting position.",
      "Repeat on the other side, extending the opposite arm out to the side.",
      "Continue alternating sides for the desired number of repetitions."
    ],
    "level": "进阶",
    "environment": "home"
  },
  "ex_0033": {
    "data": [
      "下斜杠铃卧推",
      "Barbell Decline Bench Press",
      "胸部",
      "杠铃 + 训练凳",
      "8–12次",
      [
        "双脚固定在下斜凳，肩胛贴紧凳面",
        "缓慢下放杠铃至下胸附近，再推回",
        "使用安全架或保护者，避免杠铃撞胸"
      ]
    ],
    "mediaId": "0033",
    "sourceName": "barbell decline bench press",
    "sourceInstructions": [
      "Lie on a decline bench with your feet secured and your head lower than your hips.",
      "Grasp the barbell with an overhand grip slightly wider than shoulder-width apart.",
      "Unrack the barbell and lower it slowly towards your chest, keeping your elbows tucked in.",
      "Pause for a moment at the bottom, then push the barbell back up to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "进阶",
    "environment": "gym"
  },
  "ex_0047": {
    "data": [
      "上斜杠铃卧推",
      "Barbell Incline Bench Press",
      "胸部",
      "杠铃 + 训练凳",
      "8–12次",
      [
        "调整上斜凳，双脚踩地并收紧肩胛",
        "杠铃下降至上胸前方，再沿自然轨迹推起",
        "保持臀部贴凳，不要过分挺腰"
      ]
    ],
    "mediaId": "0047",
    "sourceName": "barbell incline bench press",
    "sourceInstructions": [
      "Set up an incline bench at a 45-degree angle.",
      "Lie down on the bench with your feet flat on the ground.",
      "Grasp the barbell with an overhand grip, slightly wider than shoulder-width apart.",
      "Unrack the barbell and lower it slowly towards your chest, keeping your elbows at a 45-degree angle.",
      "Pause for a moment at the bottom, then push the barbell back up to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "进阶",
    "environment": "gym"
  },
  "ex_0308": {
    "data": [
      "哑铃飞鸟",
      "Dumbbell Fly",
      "胸部",
      "哑铃",
      "8–12次",
      [
        "仰卧凳上，双手持铃伸向胸前",
        "肘部微屈向两侧打开，再将双臂合拢",
        "肩部舒适范围内移动，不追求过深拉伸"
      ]
    ],
    "mediaId": "0308",
    "sourceName": "dumbbell fly",
    "sourceInstructions": [
      "Lie flat on a bench with a dumbbell in each hand, palms facing each other.",
      "Extend your arms straight up over your chest, with a slight bend in your elbows.",
      "Keeping a slight bend in your elbows, lower your arms out to the sides in a wide arc until you feel a stretch in your chest.",
      "Pause for a moment, then reverse the movement and bring the dumbbells back up to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0319": {
    "data": [
      "上斜哑铃飞鸟",
      "Dumbbell Incline Fly",
      "胸部",
      "哑铃 + 训练凳",
      "8–12次",
      [
        "仰靠上斜凳，肩胛稳定贴凳",
        "肘部略弯，向两侧展开后合拢",
        "使用轻重量，动作中保持肘部角度稳定"
      ]
    ],
    "mediaId": "0319",
    "sourceName": "dumbbell incline fly",
    "sourceInstructions": [
      "Set an incline bench to a 45-degree angle.",
      "Sit on the bench with a dumbbell in each hand, palms facing each other.",
      "Lie back on the bench and press the dumbbells up to the starting position, directly above your chest.",
      "Lower the dumbbells out to the sides in a wide arc until you feel a stretch in your chest.",
      "Pause for a moment, then squeeze your chest muscles to bring the dumbbells back up to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0301": {
    "data": [
      "下斜哑铃卧推",
      "Dumbbell Decline Bench Press",
      "胸部",
      "哑铃 + 训练凳",
      "8–12次",
      [
        "固定双脚仰卧下斜凳，哑铃置于胸侧",
        "缓慢下放，再用胸部将哑铃推起",
        "起落哑铃时请同伴协助，避免失控"
      ]
    ],
    "mediaId": "0301",
    "sourceName": "dumbbell decline bench press",
    "sourceInstructions": [
      "Lie down on a decline bench with your feet secured and your head lower than your hips.",
      "Hold a dumbbell in each hand and extend your arms straight up above your chest, palms facing forward.",
      "Lower the dumbbells slowly to the sides of your chest, keeping your elbows at a 90-degree angle.",
      "Push the dumbbells back up to the starting position, fully extending your arms.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0227": {
    "data": [
      "站姿绳索夹胸",
      "Cable Standing Fly",
      "胸部",
      "绳索训练器",
      "8–12次",
      [
        "双脚前后站稳，双手握住两侧绳索",
        "肘部微屈，双臂向胸前合拢",
        "回程缓慢，避免身体前后摆动借力"
      ]
    ],
    "mediaId": "0227",
    "sourceName": "cable standing fly",
    "sourceInstructions": [
      "Attach the handles to the cables at chest height.",
      "Stand with your feet shoulder-width apart, facing away from the cable machine.",
      "Grasp the handles with an overhand grip, palms facing forward.",
      "Step forward slightly to create tension in the cables.",
      "Keep your core engaged and your back straight throughout the exercise.",
      "With a slight bend in your elbows, slowly bring your arms forward and together in front of your chest.",
      "Squeeze your chest muscles at the peak of the movement.",
      "Slowly reverse the movement, returning your arms to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "gym"
  },
  "ex_0179": {
    "data": [
      "低位绳索飞鸟",
      "Cable Low Fly",
      "胸部",
      "绳索训练器",
      "8–12次",
      [
        "滑轮调至低位，双脚前后站稳",
        "双臂从身体两侧向前上方合拢",
        "手肘保持微屈，避免耸肩"
      ]
    ],
    "mediaId": "0179",
    "sourceName": "cable low fly",
    "sourceInstructions": [
      "Attach the handles to the low pulleys of a cable machine and select an appropriate weight.",
      "Stand in the middle of the machine with your feet shoulder-width apart and a slight bend in your knees.",
      "Grasp the handles with an overhand grip and extend your arms out to the sides, keeping a slight bend in your elbows.",
      "Maintaining control, slowly bring your arms forward in a sweeping motion, crossing them in front of your body.",
      "Pause for a moment at the peak of the movement, feeling the stretch in your chest muscles.",
      "Reverse the motion and slowly return your arms to the starting position, keeping tension on your chest muscles throughout.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "gym"
  },
  "ex_0596": {
    "data": [
      "蝴蝶机夹胸",
      "Lever Seated Fly",
      "胸部",
      "固定器械",
      "8–12次",
      [
        "调节座椅，让手柄位于胸部附近",
        "双臂合拢，感受胸部收缩后慢慢打开",
        "背部贴靠椅背，不用肩部猛推"
      ]
    ],
    "mediaId": "0596",
    "sourceName": "lever seated fly",
    "sourceInstructions": [
      "Adjust the seat height and position yourself on the machine with your back against the pad.",
      "Grasp the handles with a pronated grip and keep your elbows slightly bent.",
      "Exhale and push the handles forward, bringing them together in front of your chest.",
      "Pause for a moment, squeezing your chest muscles.",
      "Inhale and slowly return to the starting position, allowing your chest muscles to stretch.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "gym"
  },
  "ex_0251": {
    "data": [
      "双杠臂屈伸（胸部）",
      "Chest Dip",
      "胸部",
      "徒手",
      "8–12次",
      [
        "双手撑稳双杠，躯干适度前倾",
        "屈肘缓慢下降，再推起身体",
        "肩部不适时缩小幅度或改用胸推"
      ]
    ],
    "mediaId": "0251",
    "sourceName": "chest dip",
    "sourceInstructions": [
      "Position yourself on parallel bars with your arms fully extended and your body straight.",
      "Lower your body by bending your elbows until your shoulders are below your elbows.",
      "Push yourself back up to the starting position by straightening your arms.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0493": {
    "data": [
      "上斜俯卧撑",
      "Incline Push-Up",
      "胸部",
      "徒手",
      "8–12次",
      [
        "双手撑在稳定高台上，身体成直线",
        "屈肘让胸部靠近高台，再推起",
        "确认支撑物牢固，腹部不要下沉"
      ]
    ],
    "mediaId": "0493",
    "sourceName": "incline push-up",
    "sourceInstructions": [
      "Place your hands on an elevated surface, such as a bench or step, slightly wider than shoulder-width apart.",
      "Extend your legs behind you, resting on the balls of your feet, creating a straight line from your head to your heels.",
      "Lower your chest towards the elevated surface by bending your elbows, keeping your body in a straight line.",
      "Pause for a moment at the bottom, then push yourself back up to the starting position by straightening your arms.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0279": {
    "data": [
      "下斜俯卧撑",
      "Decline Push-Up",
      "胸部",
      "徒手",
      "8–12次",
      [
        "双脚放稳在高台上，双手撑地",
        "身体保持直线，屈肘下降再推起",
        "高台不宜过高，避免颈部前伸"
      ]
    ],
    "mediaId": "0279",
    "sourceName": "decline push-up",
    "sourceInstructions": [
      "Place your hands on the ground slightly wider than shoulder-width apart, with your feet elevated on a stable surface.",
      "Keep your body in a straight line from head to toe, engaging your core muscles.",
      "Lower your chest towards the ground by bending your elbows, keeping them close to your body.",
      "Push through your palms to extend your arms and return to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_3211": {
    "data": [
      "跪姿俯卧撑",
      "Kneeling Push-Up (Male)",
      "胸部",
      "徒手",
      "8–12次",
      [
        "双膝着垫，双手撑地，肩髋膝成线",
        "胸部朝地面下降，再推回起点",
        "不要只弯腰点头，保持躯干整体移动"
      ]
    ],
    "mediaId": "3211",
    "sourceName": "kneeling push-up (male)",
    "sourceInstructions": [
      "Start by kneeling on the ground with your hands shoulder-width apart, fingers pointing forward.",
      "Extend your legs behind you, resting on the balls of your feet, so that your body forms a straight line from head to heels.",
      "Engage your core and lower your body towards the ground by bending your elbows, keeping them close to your sides.",
      "Continue lowering until your chest is just above the ground, then push back up to the starting position by straightening your arms.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0659": {
    "data": [
      "墙壁俯卧撑",
      "Push-Up (Wall)",
      "胸部",
      "徒手",
      "8–12次",
      [
        "面向墙站立，双手在胸部高度撑墙",
        "屈肘靠近墙面，再推回站姿",
        "双脚防滑，身体始终成直线"
      ]
    ],
    "mediaId": "0659",
    "sourceName": "push-up (wall)",
    "sourceInstructions": [
      "Stand facing a wall, about arm's length away.",
      "Place your hands on the wall at shoulder height, slightly wider than shoulder-width apart.",
      "Step back a few feet, keeping your body straight and your feet hip-width apart.",
      "Bend your elbows and lower your chest towards the wall, keeping your body in a straight line.",
      "Push back up to the starting position, straightening your arms.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_1311": {
    "data": [
      "宽距俯卧撑",
      "Wide Hand Push Up",
      "胸部",
      "徒手",
      "8–12次",
      [
        "双手略宽于肩，脚尖撑地",
        "缓慢屈肘下降，再推起身体",
        "手距不要过宽，避免肩部疼痛"
      ]
    ],
    "mediaId": "1311",
    "sourceName": "wide hand push up",
    "sourceInstructions": [
      "Start in a high plank position with your hands wider than shoulder-width apart.",
      "Keep your body in a straight line from head to toe.",
      "Lower your chest towards the ground by bending your elbows, keeping them close to your sides.",
      "Push through your palms to extend your arms and return to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0375": {
    "data": [
      "哑铃仰卧上拉",
      "Dumbbell Pullover",
      "胸部",
      "哑铃",
      "8–12次",
      [
        "仰卧长凳，双手托住一只哑铃",
        "肘部微屈，将哑铃向头后下放再拉回",
        "腹部收紧，不要通过挺腰增加幅度"
      ]
    ],
    "mediaId": "0375",
    "sourceName": "dumbbell pullover",
    "sourceInstructions": [
      "Lie flat on a bench with your head at one end and your feet on the floor.",
      "Hold a dumbbell with both hands and extend your arms straight above your chest.",
      "Keeping a slight bend in your elbows, slowly lower the dumbbell behind your head until you feel a stretch in your chest and shoulders.",
      "Pause for a moment, then raise the dumbbell back to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_1326": {
    "data": [
      "反手引体向上",
      "Chin-Up",
      "背部",
      "徒手",
      "8–12次",
      [
        "反手握杠，肩带先保持稳定",
        "屈肘将身体上拉，再缓慢下降",
        "不要摆腿借力或突然松肩"
      ]
    ],
    "mediaId": "1326",
    "sourceName": "chin-up",
    "sourceInstructions": [
      "Hang from a pull-up bar with your palms facing towards you and your hands shoulder-width apart.",
      "Engage your core and pull your body up towards the bar, leading with your chest.",
      "Continue pulling until your chin is above the bar.",
      "Pause for a moment at the top, then slowly lower your body back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "进阶",
    "environment": "home"
  },
  "ex_0651": {
    "data": [
      "对握引体向上",
      "Pull Up (Neutral Grip)",
      "背部",
      "徒手",
      "8–12次",
      [
        "掌心相对握住对握把手",
        "双肘朝身体两侧下拉，提升身体",
        "控制下降，保持颈部自然"
      ]
    ],
    "mediaId": "0651",
    "sourceName": "pull up (neutral grip)",
    "sourceInstructions": [
      "Hang from a pull-up bar with a neutral grip (palms facing each other) and your arms fully extended.",
      "Engage your core and squeeze your shoulder blades together.",
      "Pull your body up towards the bar by bending your elbows and driving your elbows down towards your hips.",
      "Continue pulling until your chin is above the bar.",
      "Pause for a moment at the top, then slowly lower your body back down to the starting position with control.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_1429": {
    "data": [
      "宽握引体向上",
      "Wide Grip Pull-Up",
      "背部",
      "徒手",
      "8–12次",
      [
        "正手略宽于肩握杠，双脚离地",
        "用背部发力上拉，再缓慢回落",
        "握距适中，避免向后仰头"
      ]
    ],
    "mediaId": "1429",
    "sourceName": "wide grip pull-up",
    "sourceInstructions": [
      "Hang from a pull-up bar with your palms facing away from you and your hands wider than shoulder-width apart.",
      "Engage your core and squeeze your shoulder blades together.",
      "Pull your body up towards the bar until your chin is above the bar.",
      "Lower your body back down to the starting position with control.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "进阶",
    "environment": "home"
  },
  "ex_0499": {
    "data": [
      "反向划船",
      "Inverted Row",
      "背部",
      "徒手",
      "8–12次",
      [
        "双手握稳低杠，脚跟着地，身体成线",
        "胸部靠近杠杆，再慢慢伸臂",
        "杠杆必须牢固，不要用髋部顶起借力"
      ]
    ],
    "mediaId": "0499",
    "sourceName": "inverted row",
    "sourceInstructions": [
      "Set up a bar at waist height or use a suspension trainer.",
      "Stand facing the bar or suspension trainer, with your feet shoulder-width apart.",
      "Grab the bar or handles with an overhand grip, slightly wider than shoulder-width apart.",
      "Lean back, keeping your body straight and your heels on the ground.",
      "Pull your chest towards the bar or handles, squeezing your shoulder blades together.",
      "Pause for a moment at the top, then slowly lower yourself back to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0245": {
    "data": [
      "反手高位下拉",
      "Cable Underhand Pulldown",
      "背部",
      "绳索训练器",
      "8–12次",
      [
        "坐稳固定大腿，反手握住拉杆",
        "将杠拉向上胸，再缓慢伸臂",
        "手腕保持自然，避免大幅后仰"
      ]
    ],
    "mediaId": "0245",
    "sourceName": "cable underhand pulldown",
    "sourceInstructions": [
      "Adjust the cable machine so that the pulldown bar is at a height above your head.",
      "Sit down on the seat and grab the pulldown bar with an underhand grip, hands slightly wider than shoulder-width apart.",
      "Keep your back straight and lean back slightly.",
      "Pull the bar down towards your chest, squeezing your shoulder blades together.",
      "Pause for a moment at the bottom of the movement, then slowly release the bar back up to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "gym"
  },
  "ex_2616": {
    "data": [
      "V把高位下拉",
      "Cable Lateral Pulldown With V-Bar",
      "背部",
      "绳索训练器",
      "8–12次",
      [
        "固定大腿，双手对握V形把手",
        "肘部向下，拉至胸前再控制回放",
        "胸口打开，不要耸肩"
      ]
    ],
    "mediaId": "2616",
    "sourceName": "cable lateral pulldown with v-bar",
    "sourceInstructions": [
      "Sit down on the cable pulldown machine and grab the v-bar attachment with an overhand grip.",
      "Adjust the knee pad so that your thighs are secured under it.",
      "Keep your back straight and lean back slightly.",
      "Pull the v-bar down towards your upper chest while keeping your elbows close to your body.",
      "Squeeze your back muscles at the bottom of the movement.",
      "Slowly return the v-bar to the starting position and repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "gym"
  },
  "ex_0238": {
    "data": [
      "直臂绳索下拉",
      "Cable Straight Arm Pulldown",
      "背部",
      "绳索训练器",
      "8–12次",
      [
        "面对高位滑轮，双膝微屈，髋部后移",
        "手臂保持微屈，将握柄拉至大腿前",
        "固定躯干，避免用腰部甩动"
      ]
    ],
    "mediaId": "0238",
    "sourceName": "cable straight arm pulldown",
    "sourceInstructions": [
      "Attach a straight bar to the high pulley of a cable machine.",
      "Stand facing the machine with your feet shoulder-width apart.",
      "Grasp the bar with an overhand grip, keeping your arms straight and your palms facing down.",
      "Engage your lats and pull the bar down towards your thighs, keeping your arms straight throughout the movement.",
      "Pause for a moment at the bottom, then slowly return the bar to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "gym"
  },
  "ex_0189": {
    "data": [
      "单臂绳索俯身划船",
      "Cable One Arm Bent Over Row",
      "背部",
      "绳索训练器",
      "8–12次",
      [
        "髋部后折，一手握住低位绳索",
        "肘部向髋部拉近，再慢慢伸臂",
        "肩膀保持平稳，不旋转躯干"
      ]
    ],
    "mediaId": "0189",
    "sourceName": "cable one arm bent over row",
    "sourceInstructions": [
      "Stand facing a cable machine with your feet shoulder-width apart.",
      "Bend your knees slightly and hinge forward at the hips, keeping your back straight.",
      "Grasp the cable handle with one hand, palm facing inward, and extend your arm fully.",
      "Pull the cable handle towards your body, keeping your elbow close to your side, until your hand reaches your lower chest.",
      "Pause for a moment, then slowly extend your arm back to the starting position.",
      "Repeat for the desired number of repetitions, then switch sides."
    ],
    "level": "基础",
    "environment": "gym"
  },
  "ex_0218": {
    "data": [
      "宽握坐姿划船",
      "Cable Seated Wide-Grip Row",
      "背部",
      "绳索训练器",
      "8–12次",
      [
        "坐稳踏板，双手宽握横杆",
        "将横杆拉向躯干，肩胛自然靠拢",
        "脊柱中立，不向后猛倒"
      ]
    ],
    "mediaId": "0218",
    "sourceName": "cable seated wide-grip row",
    "sourceInstructions": [
      "Sit on the cable row machine with your feet flat on the footrests and your knees slightly bent.",
      "Grasp the handle with a wide overhand grip, palms facing down.",
      "Keep your back straight and lean slightly forward from the hips.",
      "Pull the handle towards your lower chest, squeezing your shoulder blades together.",
      "Pause for a moment at the peak of the contraction.",
      "Slowly release the handle back to the starting position, fully extending your arms.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "gym"
  },
  "ex_0327": {
    "data": [
      "上斜凳哑铃划船",
      "Dumbbell Incline Row",
      "背部",
      "哑铃 + 训练凳",
      "8–12次",
      [
        "胸口俯靠上斜凳，双手持铃下垂",
        "肘部向后拉起，再缓慢下放",
        "胸部保持贴凳，避免耸肩"
      ]
    ],
    "mediaId": "0327",
    "sourceName": "dumbbell incline row",
    "sourceInstructions": [
      "Set up an incline bench at a 45-degree angle.",
      "Grab a dumbbell in each hand and sit on the bench with your chest against the incline.",
      "Extend your arms fully, allowing the dumbbells to hang straight down from your shoulders.",
      "Pull the dumbbells up towards your chest, squeezing your shoulder blades together.",
      "Pause for a moment at the top, then slowly lower the dumbbells back to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_3017": {
    "data": [
      "潘德雷划船",
      "Barbell Pendlay Row",
      "背部",
      "杠铃",
      "8–12次",
      [
        "髋部后折，背部中立，杠铃置于地面",
        "从地面将杠铃拉近腹部，控制放回",
        "每次重复重新稳定姿势，避免弓背"
      ]
    ],
    "mediaId": "3017",
    "sourceName": "barbell pendlay row",
    "sourceInstructions": [
      "Stand with your feet shoulder-width apart and your knees slightly bent.",
      "Bend forward at the hips, keeping your back straight and your chest up.",
      "Grasp the barbell with an overhand grip, slightly wider than shoulder-width apart.",
      "Pull the barbell towards your upper abdomen, squeezing your shoulder blades together.",
      "Lower the barbell back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "进阶",
    "environment": "gym"
  },
  "ex_0118": {
    "data": [
      "反手杠铃划船",
      "Barbell Reverse Grip Bent Over Row",
      "背部",
      "杠铃",
      "8–12次",
      [
        "反手握杠，膝微屈并髋部后折",
        "沿腿前将杠拉至腹部附近",
        "上臂不要过度后拉，躯干保持稳定"
      ]
    ],
    "mediaId": "0118",
    "sourceName": "barbell reverse grip bent over row",
    "sourceInstructions": [
      "Stand with your feet shoulder-width apart and knees slightly bent.",
      "Hold a barbell with an overhand grip, palms facing down, and hands slightly wider than shoulder-width apart.",
      "Bend forward at the hips, keeping your back straight and chest up, until your torso is almost parallel to the floor.",
      "Pull the barbell towards your lower chest, squeezing your shoulder blades together.",
      "Pause for a moment at the top, then slowly lower the barbell back to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "进阶",
    "environment": "gym"
  },
  "ex_0406": {
    "data": [
      "哑铃耸肩",
      "Dumbbell Shrug",
      "背部",
      "哑铃",
      "8–12次",
      [
        "双脚站稳，哑铃自然垂于身体两侧",
        "双肩向上提起，再缓慢下沉",
        "不要绕肩或用颈部前伸借力"
      ]
    ],
    "mediaId": "0406",
    "sourceName": "dumbbell shrug",
    "sourceInstructions": [
      "Stand with your feet shoulder-width apart and hold a dumbbell in each hand with your palms facing your body.",
      "Keep your arms straight and let the dumbbells hang by your sides.",
      "Raise your shoulders as high as possible, as if you are trying to touch your ears with your shoulders.",
      "Hold the contraction for a second, then slowly lower your shoulders back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0095": {
    "data": [
      "杠铃耸肩",
      "Barbell Shrug",
      "背部",
      "杠铃",
      "8–12次",
      [
        "双手正握杠铃，站姿稳定",
        "肩膀竖直向上耸起，再慢慢放下",
        "手臂自然伸直，不转动肩膀"
      ]
    ],
    "mediaId": "0095",
    "sourceName": "barbell shrug",
    "sourceInstructions": [
      "Stand with your feet shoulder-width apart and hold a barbell in front of you with an overhand grip.",
      "Keep your arms straight and your back straight throughout the exercise.",
      "Lift your shoulders up towards your ears as high as possible, squeezing your traps at the top.",
      "Hold for a moment, then slowly lower your shoulders back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "进阶",
    "environment": "gym"
  },
  "ex_0489": {
    "data": [
      "罗马椅背伸",
      "Hyperextension",
      "背部",
      "徒手",
      "8–12次",
      [
        "髋部靠稳罗马椅垫，脚踝固定",
        "从髋部屈曲下降，再抬至身体成线",
        "顶端不后仰过伸腰部"
      ]
    ],
    "mediaId": "0489",
    "sourceName": "hyperextension",
    "sourceInstructions": [
      "Adjust the hyperextension bench so that your upper thighs are resting on the pad and your feet are secured.",
      "Cross your arms over your chest or place your hands behind your head.",
      "Lower your upper body towards the ground while keeping your back straight.",
      "Pause for a moment at the bottom, then raise your upper body back up until it is in line with your legs.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0521": {
    "data": [
      "壶铃交替叛逆划船",
      "Kettlebell Alternating Renegade Row",
      "背部",
      "壶铃",
      "8–12次",
      [
        "双手撑稳壶铃，双脚分开形成平板支撑",
        "一侧肘向后划起，放下后换侧",
        "壶铃底部需稳定，避免骨盆扭转"
      ]
    ],
    "mediaId": "0521",
    "sourceName": "kettlebell alternating renegade row",
    "sourceInstructions": [
      "Start in a high plank position with your hands gripping the kettlebells and your feet hip-width apart.",
      "Engage your core and keep your body in a straight line from head to heels.",
      "Pull one kettlebell up towards your chest, keeping your elbow close to your body.",
      "Lower the kettlebell back down to the starting position and repeat with the other arm.",
      "Continue alternating arms for the desired number of repetitions."
    ],
    "level": "进阶",
    "environment": "home"
  },
  "ex_0579": {
    "data": [
      "器械高位下拉",
      "Lever Front Pulldown",
      "背部",
      "固定器械",
      "8–12次",
      [
        "调整座椅和腿垫，双手握稳上方把手",
        "肘部向下拉，再慢慢回放",
        "背部保持稳定，不用身体重量猛拉"
      ]
    ],
    "mediaId": "0579",
    "sourceName": "lever front pulldown",
    "sourceInstructions": [
      "Adjust the seat height and position yourself on the machine with your knees under the pads and your feet flat on the ground.",
      "Grasp the handles with an overhand grip, slightly wider than shoulder-width apart.",
      "Sit upright with your chest lifted and your shoulders back, maintaining a slight arch in your lower back.",
      "Engage your lats and pull the handles down towards your chest, squeezing your shoulder blades together.",
      "Pause for a moment at the bottom of the movement, then slowly release the handles back to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "gym"
  },
  "ex_0606": {
    "data": [
      "器械T杠划船",
      "Lever T Bar Row",
      "背部",
      "固定器械",
      "8–12次",
      [
        "胸口贴靠支撑垫，双脚稳踩踏板",
        "拉起手柄至躯干附近，再缓慢放回",
        "保持颈部自然，肩膀不耸起"
      ]
    ],
    "mediaId": "0606",
    "sourceName": "lever t bar row",
    "sourceInstructions": [
      "Adjust the seat height and footplate position to ensure proper alignment.",
      "Sit on the machine with your chest against the pad and your feet flat on the footplate.",
      "Grasp the handles with an overhand grip, slightly wider than shoulder-width apart.",
      "Keep your back straight and engage your core.",
      "Pull the handles towards your torso, squeezing your shoulder blades together.",
      "Pause for a moment at the peak contraction, then slowly release the handles back to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "gym"
  },
  "ex_0042": {
    "data": [
      "杠铃前蹲",
      "Barbell Front Squat",
      "腿臀",
      "杠铃",
      "8–12次",
      [
        "杠铃置于肩前，抬肘并收紧腹部",
        "膝盖跟随脚尖下蹲，再站起",
        "使用安全架，保持脚掌稳定"
      ]
    ],
    "mediaId": "0042",
    "sourceName": "barbell front squat",
    "sourceInstructions": [
      "Start by standing with your feet shoulder-width apart, toes slightly turned out.",
      "Hold the barbell in front of your shoulders, resting it on your collarbone and shoulders.",
      "Engage your core and keep your chest up as you lower your body down into a squat position, pushing your hips back and bending your knees.",
      "Lower until your thighs are parallel to the ground, or as low as you can comfortably go.",
      "Pause for a moment at the bottom, then push through your heels to return to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "进阶",
    "environment": "gym"
  },
  "ex_0032": {
    "data": [
      "杠铃硬拉",
      "Barbell Deadlift",
      "腿臀",
      "杠铃",
      "8–12次",
      [
        "双脚与髋同宽，杠铃靠近小腿",
        "收紧背部，伸髋伸膝站起后控制落地",
        "杠铃贴近身体，避免弓背起拉"
      ]
    ],
    "mediaId": "0032",
    "sourceName": "barbell deadlift",
    "sourceInstructions": [
      "Stand with your feet shoulder-width apart and the barbell on the ground in front of you.",
      "Bend your knees and hinge at the hips to lower your torso and grip the barbell with an overhand grip, hands slightly wider than shoulder-width apart.",
      "Keep your back straight and chest lifted as you drive through your heels to lift the barbell off the ground, extending your hips and knees.",
      "As you stand up straight, squeeze your glutes and keep your core engaged.",
      "Lower the barbell back down to the ground by bending at the hips and knees, keeping your back straight.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "进阶",
    "environment": "gym"
  },
  "ex_0085": {
    "data": [
      "杠铃罗马尼亚硬拉",
      "Barbell Romanian Deadlift",
      "腿臀",
      "杠铃",
      "8–12次",
      [
        "站立持杠，双膝微屈，脊柱中立",
        "髋部向后移，杠铃贴腿下放后伸髋",
        "到腿后侧有拉伸感即可，不勉强触地"
      ]
    ],
    "mediaId": "0085",
    "sourceName": "barbell romanian deadlift",
    "sourceInstructions": [
      "Stand with your feet shoulder-width apart and your toes pointing forward.",
      "Hold the barbell with an overhand grip, hands slightly wider than shoulder-width apart.",
      "Bend at the hips, keeping your back straight and your knees slightly bent.",
      "Lower the barbell towards the ground, keeping it close to your body.",
      "Feel the stretch in your hamstrings as you lower the barbell.",
      "Once you feel a stretch in your hamstrings, push your hips forward and stand up straight.",
      "Squeeze your glutes at the top of the movement.",
      "Lower the barbell back down to the starting position and repeat for the desired number of repetitions."
    ],
    "level": "进阶",
    "environment": "gym"
  },
  "ex_0117": {
    "data": [
      "相扑硬拉",
      "Barbell Sumo Deadlift",
      "腿臀",
      "杠铃",
      "8–12次",
      [
        "宽距站立，脚尖外展，双手握杠",
        "膝盖朝脚尖方向，伸髋伸膝站起",
        "收紧背部，杠铃靠近身体"
      ]
    ],
    "mediaId": "0117",
    "sourceName": "barbell sumo deadlift",
    "sourceInstructions": [
      "Stand with your feet wider than shoulder-width apart, toes pointing outwards.",
      "Place a barbell on the ground in front of you, centered between your feet.",
      "Bend your knees and lower your hips, keeping your back straight and chest up, to grip the barbell with an overhand grip.",
      "Engage your core and drive through your heels to lift the barbell off the ground, extending your hips and knees simultaneously.",
      "As you lift, keep your chest up and back straight, and push your hips forward to fully engage your glutes.",
      "Pause for a moment at the top, then slowly lower the barbell back down to the starting position, maintaining control throughout the movement.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "进阶",
    "environment": "gym"
  },
  "ex_0054": {
    "data": [
      "杠铃弓步蹲",
      "Barbell Lunge",
      "腿臀",
      "杠铃",
      "8–12次",
      [
        "杠铃稳放上背，双脚前后分开",
        "两膝屈曲下降，用前腿发力站起",
        "保持骨盆稳定，初练者先用徒手"
      ]
    ],
    "mediaId": "0054",
    "sourceName": "barbell lunge",
    "sourceInstructions": [
      "Start by standing with your feet shoulder-width apart and a barbell resting on your upper back.",
      "Take a step forward with your right foot, keeping your torso upright.",
      "Lower your body by bending your right knee until your thigh is parallel to the ground.",
      "Push through your right heel to return to the starting position.",
      "Repeat with your left leg, alternating legs for the desired number of repetitions."
    ],
    "level": "进阶",
    "environment": "gym"
  },
  "ex_0078": {
    "data": [
      "杠铃后撤弓步蹲",
      "Barbell Rear Lunge",
      "腿臀",
      "杠铃",
      "8–12次",
      [
        "杠铃放稳上背，腹部收紧",
        "一脚向后迈步，下蹲后回到站姿",
        "前脚全脚掌着地，不让膝盖内扣"
      ]
    ],
    "mediaId": "0078",
    "sourceName": "barbell rear lunge",
    "sourceInstructions": [
      "Start by standing with your feet shoulder-width apart and a barbell resting on your upper back.",
      "Take a step backward with your right foot, landing on the ball of your foot.",
      "Bend both knees to lower your body until your left thigh is parallel to the ground.",
      "Push through your left heel to return to the starting position.",
      "Repeat with the other leg."
    ],
    "level": "进阶",
    "environment": "gym"
  },
  "ex_0336": {
    "data": [
      "哑铃弓步蹲",
      "Dumbbell Lunge",
      "腿臀",
      "哑铃",
      "8–12次",
      [
        "双手持铃垂在体侧，站姿稳定",
        "一脚向前跨出，下蹲再回到原位",
        "步幅以保持平衡和关节舒适为准"
      ]
    ],
    "mediaId": "0336",
    "sourceName": "dumbbell lunge",
    "sourceInstructions": [
      "Stand with your feet shoulder-width apart, holding a dumbbell in each hand.",
      "Take a step forward with your right foot, lowering your body into a lunge position.",
      "Keep your back straight and your chest up as you lower your body.",
      "Push through your right heel to return to the starting position.",
      "Repeat with your left leg.",
      "Alternate legs for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0381": {
    "data": [
      "哑铃后撤弓步蹲",
      "Dumbbell Rear Lunge",
      "腿臀",
      "哑铃",
      "8–12次",
      [
        "双手持铃站立，保持胸口打开",
        "一脚后撤下蹲，再用前腿站起",
        "前脚脚跟贴地，躯干不晃动"
      ]
    ],
    "mediaId": "0381",
    "sourceName": "dumbbell rear lunge",
    "sourceInstructions": [
      "Stand with your feet shoulder-width apart, holding a dumbbell in each hand.",
      "Take a step backward with your right foot, lowering your body into a lunge position.",
      "Bend your left knee and lower your body until your left thigh is parallel to the ground.",
      "Pause for a moment, then push through your left heel to return to the starting position.",
      "Repeat on the other side, stepping back with your left foot."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0410": {
    "data": [
      "哑铃保加利亚分腿蹲",
      "Dumbbell Single Leg Split Squat",
      "腿臀",
      "哑铃",
      "8–12次",
      [
        "后脚放在低凳上，前脚向前站稳",
        "屈前膝下降，再用前腿发力站起",
        "先徒手熟悉平衡，凳子需牢固"
      ]
    ],
    "mediaId": "0410",
    "sourceName": "dumbbell single leg split squat",
    "sourceInstructions": [
      "Stand with your feet shoulder-width apart, holding a dumbbell in each hand.",
      "Take a step forward with one foot and position your feet so that your front foot is flat on the ground and your back foot is elevated on a bench or step.",
      "Lower your body by bending your front knee and hip, keeping your back knee slightly bent and your back heel off the ground.",
      "Continue lowering until your front thigh is parallel to the ground, then push through your front heel to return to the starting position.",
      "Repeat for the desired number of repetitions, then switch legs and repeat."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0431": {
    "data": [
      "哑铃登阶",
      "Dumbbell Step-Up",
      "腿臀",
      "哑铃",
      "8–12次",
      [
        "面对稳定踏台，双手持铃",
        "一脚踩上踏台，用该腿力量登上",
        "控制下台，避免后脚大力蹬地借力"
      ]
    ],
    "mediaId": "0431",
    "sourceName": "dumbbell step-up",
    "sourceInstructions": [
      "Stand in front of a bench or step with a dumbbell in each hand, palms facing your body.",
      "Place your right foot on the bench or step, ensuring your entire foot is in contact with the surface.",
      "Push through your right heel and lift your body up onto the bench or step, straightening your right leg.",
      "Bring your left foot up onto the bench or step, standing fully upright.",
      "Step back down with your left foot, followed by your right foot, returning to the starting position.",
      "Repeat for the desired number of repetitions, then switch legs."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_1757": {
    "data": [
      "哑铃单腿硬拉",
      "Dumbbell Single Leg Deadlift",
      "腿臀",
      "哑铃",
      "8–12次",
      [
        "单腿站立，双手持轻哑铃",
        "髋部后折，另一腿向后伸，再回正",
        "骨盆保持水平，必要时扶稳支撑物"
      ]
    ],
    "mediaId": "1757",
    "sourceName": "dumbbell single leg deadlift",
    "sourceInstructions": [
      "Stand with your feet hip-width apart, holding a dumbbell in your right hand.",
      "Shift your weight onto your left leg and lift your right foot slightly off the ground.",
      "Keeping your back straight, hinge forward at the hips and lower the dumbbell towards the ground.",
      "At the same time, extend your right leg straight behind you, maintaining a slight bend in your left knee.",
      "Lower the dumbbell until your torso and right leg are parallel to the ground.",
      "Pause for a moment, then engage your glutes and hamstrings to return to the starting position.",
      "Repeat for the desired number of repetitions, then switch sides."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0413": {
    "data": [
      "哑铃深蹲",
      "Dumbbell Squat",
      "腿臀",
      "哑铃",
      "8–12次",
      [
        "双手持铃垂在体侧，双脚站稳",
        "髋膝同步屈曲下蹲，再站起",
        "膝盖跟随脚尖，不突然内扣"
      ]
    ],
    "mediaId": "0413",
    "sourceName": "dumbbell squat",
    "sourceInstructions": [
      "Stand with your feet shoulder-width apart, holding a dumbbell in each hand at your sides.",
      "Keeping your chest up and core engaged, lower your body down by bending at the knees and hips, as if sitting back into a chair.",
      "Continue lowering until your thighs are parallel to the ground, or as low as you can comfortably go.",
      "Pause for a moment at the bottom, then push through your heels to return to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0534": {
    "data": [
      "壶铃高脚杯深蹲",
      "Kettlebell Goblet Squat",
      "腿臀",
      "壶铃",
      "8–12次",
      [
        "双手托壶铃于胸前，双脚适度分开",
        "保持胸口打开，下蹲后站起",
        "脚掌稳定，避免腰部弯曲"
      ]
    ],
    "mediaId": "0534",
    "sourceName": "kettlebell goblet squat",
    "sourceInstructions": [
      "Stand with your feet shoulder-width apart, holding a kettlebell close to your chest with both hands.",
      "Keeping your chest up and core engaged, lower your body down into a squat position by bending at the knees and hips.",
      "Continue lowering until your thighs are parallel to the ground, or as low as you can comfortably go.",
      "Pause for a moment at the bottom, then push through your heels to return to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0549": {
    "data": [
      "壶铃摆荡",
      "Kettlebell Swing",
      "腿臀",
      "壶铃",
      "8–12次",
      [
        "双手握铃，髋部后折并保持背部中立",
        "通过伸髋带动壶铃向前摆动",
        "动力来自髋部，不靠肩部抡起"
      ]
    ],
    "mediaId": "0549",
    "sourceName": "kettlebell swing",
    "sourceInstructions": [
      "Stand with your feet shoulder-width apart, toes pointed slightly outward.",
      "Hold the kettlebell with both hands in front of your body, arms extended.",
      "Bend your knees slightly and hinge at the hips, pushing your butt back.",
      "Swing the kettlebell back between your legs, keeping your arms straight and maintaining a flat back.",
      "Drive your hips forward and swing the kettlebell up to shoulder height, using the momentum generated by your hips.",
      "Allow the kettlebell to swing back down between your legs and repeat the movement for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_3013": {
    "data": [
      "徒手臀桥",
      "Low Glute Bridge On Floor",
      "腿臀",
      "徒手",
      "8–12次",
      [
        "仰卧屈膝，双脚踩地，手臂放体侧",
        "臀部发力抬髋，再慢慢下降",
        "顶端不挺腰，腹部保持收紧"
      ]
    ],
    "mediaId": "3013",
    "sourceName": "low glute bridge on floor",
    "sourceInstructions": [
      "Lie flat on your back with your knees bent and feet flat on the ground.",
      "Place your arms by your sides, palms facing down.",
      "Engage your glutes and core, then lift your hips off the ground until your body forms a straight line from your knees to your shoulders.",
      "Pause for a moment at the top, squeezing your glutes.",
      "Slowly lower your hips back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_3561": {
    "data": [
      "臀桥交替抬腿",
      "Glute Bridge March",
      "腿臀",
      "徒手",
      "8–12次",
      [
        "仰卧屈膝，抬髋到稳定臀桥位置",
        "保持骨盆水平，交替抬起一只脚",
        "缩小抬腿幅度，避免髋部左右下沉"
      ]
    ],
    "mediaId": "3561",
    "sourceName": "glute bridge march",
    "sourceInstructions": [
      "Lie flat on your back with your knees bent and feet flat on the ground.",
      "Engage your glutes and lift your hips off the ground, forming a straight line from your knees to your shoulders.",
      "While keeping your hips lifted, lift one foot off the ground and bring your knee towards your chest.",
      "Lower your foot back to the ground and repeat the movement with the other leg.",
      "Continue alternating legs in a marching motion while maintaining the bridge position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_3645": {
    "data": [
      "单腿臀桥",
      "Single Leg Bridge With Outstretched Leg",
      "腿臀",
      "徒手",
      "8–12次",
      [
        "仰卧，一脚踩地，另一腿伸出",
        "用支撑侧臀部抬髋，再缓慢下降",
        "两侧髋部保持同高，不扭腰"
      ]
    ],
    "mediaId": "3645",
    "sourceName": "single leg bridge with outstretched leg",
    "sourceInstructions": [
      "Lie on your back with your knees bent and feet flat on the ground.",
      "Extend one leg straight out in front of you.",
      "Engage your glutes and lift your hips off the ground, forming a straight line from your knees to your shoulders.",
      "Hold for a moment at the top, then slowly lower your hips back down to the starting position.",
      "Repeat for the desired number of repetitions, then switch legs."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0585": {
    "data": [
      "器械腿屈伸",
      "Lever Leg Extension",
      "腿臀",
      "固定器械",
      "8–12次",
      [
        "调节座椅，让膝关节对齐器械转轴",
        "伸膝抬起腿垫，再慢慢回放",
        "不要猛踢或在顶端猛烈锁膝"
      ]
    ],
    "mediaId": "0585",
    "sourceName": "lever leg extension",
    "sourceInstructions": [
      "Adjust the seat height and backrest of the machine to fit your body.",
      "Sit on the machine with your back against the backrest and your feet on the footpad.",
      "Grasp the handles or sidebars for stability.",
      "Extend your legs forward by straightening your knees, lifting the weight.",
      "Pause for a moment at the top, then slowly lower the weight back to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "gym"
  },
  "ex_0599": {
    "data": [
      "坐姿腿弯举",
      "Lever Seated Leg Curl",
      "腿臀",
      "固定器械",
      "8–12次",
      [
        "坐稳并固定大腿，踝部放好腿垫",
        "脚跟向下后方弯曲，再缓慢回程",
        "背部贴靠座椅，避免抬臀"
      ]
    ],
    "mediaId": "0599",
    "sourceName": "lever seated leg curl",
    "sourceInstructions": [
      "Adjust the machine to fit your body and sit on it with your back against the backrest.",
      "Place your lower legs under the padded lever, just above your ankles.",
      "Grasp the handles on the sides of the machine for support.",
      "Keeping your upper legs stationary, exhale and curl your legs up as far as possible.",
      "Hold the contracted position for a brief pause as you squeeze your hamstrings.",
      "Inhale and slowly lower the lever back to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "gym"
  },
  "ex_0597": {
    "data": [
      "坐姿髋外展",
      "Lever Seated Hip Abduction",
      "腿臀",
      "固定器械",
      "8–12次",
      [
        "坐稳外展机，双腿抵住腿垫",
        "用臀部将双腿向外打开再合拢",
        "保持躯干稳定，不用上身摇摆借力"
      ]
    ],
    "mediaId": "0597",
    "sourceName": "lever seated hip abduction",
    "sourceInstructions": [
      "Adjust the seat height so that your knees are at a 90-degree angle.",
      "Sit on the machine with your back against the backrest and your feet on the footrests.",
      "Place your hands on the side handles for stability.",
      "Engage your abductors and slowly push your legs apart, away from the midline of your body.",
      "Pause for a moment at the end of the movement, then slowly bring your legs back together to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "gym"
  },
  "ex_0598": {
    "data": [
      "坐姿髋内收",
      "Lever Seated Hip Adduction",
      "腿臀",
      "固定器械",
      "8–12次",
      [
        "坐稳内收机，双腿打开到舒适角度",
        "双腿向中间合拢，再控制打开",
        "从轻重量开始，避免强行拉伸大腿内侧"
      ]
    ],
    "mediaId": "0598",
    "sourceName": "lever seated hip adduction",
    "sourceInstructions": [
      "Adjust the seat height and position yourself on the machine with your back against the backrest.",
      "Place your feet on the footrests and grasp the handles for stability.",
      "Engage your adductor muscles and slowly bring your legs together, squeezing your inner thighs.",
      "Pause for a moment at the peak contraction, then slowly return to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "gym"
  },
  "ex_0710": {
    "data": [
      "侧卧髋外展",
      "Side Hip Abduction",
      "腿臀",
      "徒手",
      "8–12次",
      [
        "侧卧垫上，头部有支撑，下腿微屈",
        "上方腿保持伸直，抬起后缓慢放下",
        "脚尖朝前，骨盆不向后翻"
      ]
    ],
    "mediaId": "0710",
    "sourceName": "side hip abduction",
    "sourceInstructions": [
      "Stand with your feet shoulder-width apart and your hands on your hips.",
      "Shift your weight to one leg and lift the opposite leg out to the side, keeping it straight.",
      "Pause for a moment at the top, then slowly lower your leg back down to the starting position.",
      "Repeat on the other side.",
      "Continue alternating sides for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_1373": {
    "data": [
      "站姿提踵",
      "Bodyweight Standing Calf Raise",
      "腿臀",
      "徒手",
      "8–12次",
      [
        "双脚稳站，必要时扶住固定支撑",
        "脚跟抬起至可控高度，再慢慢放下",
        "脚踝不要向外翻，避免弹震"
      ]
    ],
    "mediaId": "1373",
    "sourceName": "bodyweight standing calf raise",
    "sourceInstructions": [
      "Stand with your feet shoulder-width apart, toes pointing forward.",
      "Place your hands on a wall or stable surface for balance.",
      "Slowly raise your heels off the ground, lifting your body weight onto the balls of your feet.",
      "Pause for a moment at the top, then slowly lower your heels back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0417": {
    "data": [
      "哑铃站姿提踵",
      "Dumbbell Standing Calf Raise",
      "腿臀",
      "哑铃",
      "8–12次",
      [
        "双手持轻哑铃，双脚平稳着地",
        "用前脚掌发力抬脚跟再下降",
        "保持平衡，必要时单手扶稳"
      ]
    ],
    "mediaId": "0417",
    "sourceName": "dumbbell standing calf raise",
    "sourceInstructions": [
      "Stand with your feet shoulder-width apart, holding a dumbbell in each hand.",
      "Raise your heels off the ground as high as possible, using your calves.",
      "Pause for a moment at the top, then slowly lower your heels back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_1379": {
    "data": [
      "哑铃坐姿提踵",
      "Dumbbell Seated Calf Raise",
      "腿臀",
      "哑铃 + 训练凳",
      "8–12次",
      [
        "坐在凳边，哑铃稳放大腿靠膝处",
        "抬起脚跟，停顿后慢慢放下",
        "垫好毛巾，避免重量直接压在膝关节"
      ]
    ],
    "mediaId": "1379",
    "sourceName": "dumbbell seated calf raise",
    "sourceInstructions": [
      "Sit on a bench or chair with your feet flat on the ground and a dumbbell resting on your thighs.",
      "Place the balls of your feet on a raised surface such as a step or block, with your heels hanging off the edge.",
      "Hold onto the dumbbell for stability.",
      "Raise your heels as high as possible, lifting your body weight onto the balls of your feet.",
      "Pause for a moment at the top, then slowly lower your heels back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_2368": {
    "data": [
      "徒手分腿蹲",
      "Split Squats",
      "腿臀",
      "徒手",
      "8–12次",
      [
        "双脚前后分开，躯干直立",
        "屈两膝下降，再用双腿站起",
        "前脚全脚掌着地，保持平衡"
      ]
    ],
    "mediaId": "2368",
    "sourceName": "split squats",
    "sourceInstructions": [
      "Stand with your feet shoulder-width apart.",
      "Take a step forward with one foot and place it about two feet in front of the other foot.",
      "Lower your body by bending your knees and hips, keeping your back straight.",
      "Continue lowering until your front thigh is parallel to the ground, and your back knee is hovering just above the ground.",
      "Pause for a moment, then push through your front heel to return to the starting position.",
      "Repeat for the desired number of repetitions, then switch legs and repeat."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0514": {
    "data": [
      "跳跃深蹲",
      "Jump Squat",
      "腿臀",
      "徒手",
      "8–12次",
      [
        "双脚站稳，屈髋屈膝预备",
        "向上跳起，落地后屈膝缓冲",
        "轻柔落地，膝部不适改做普通深蹲"
      ]
    ],
    "mediaId": "0514",
    "sourceName": "jump squat",
    "sourceInstructions": [
      "Stand with your feet shoulder-width apart.",
      "Lower your body into a squat position by bending your knees and pushing your hips back.",
      "Jump explosively off the ground, extending your hips, knees, and ankles.",
      "While in mid-air, quickly bring your arms forward for balance.",
      "Land softly on the balls of your feet and immediately go into the next repetition.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_2137": {
    "data": [
      "阿诺德推举",
      "Dumbbell Arnold Press",
      "肩部",
      "哑铃",
      "8–12次",
      [
        "坐稳持铃，掌心朝向身体置于肩前",
        "边旋转前臂边向上推举，再控制返回",
        "动作平稳，腰部不反弓"
      ]
    ],
    "mediaId": "2137",
    "sourceName": "dumbbell arnold press",
    "sourceInstructions": [
      "Sit on a bench with back support and hold a dumbbell in each hand at shoulder level, palms facing your body and elbows bent.",
      "Press the dumbbells upward until your arms are fully extended and your palms are facing forward.",
      "Rotate your wrists as you lift, so that your palms are facing forward at the top of the movement.",
      "Pause for a moment at the top, then slowly lower the dumbbells back to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0310": {
    "data": [
      "哑铃前平举",
      "Dumbbell Front Raise",
      "肩部",
      "哑铃",
      "8–12次",
      [
        "双脚站稳，哑铃位于大腿前方",
        "手肘微屈，向前抬至舒适肩高再放下",
        "不靠后仰甩动重量"
      ]
    ],
    "mediaId": "0310",
    "sourceName": "dumbbell front raise",
    "sourceInstructions": [
      "Stand with your feet shoulder-width apart, holding a dumbbell in each hand with your palms facing your thighs.",
      "Keeping your arms straight, exhale and lift the dumbbells in front of you until they are at shoulder level.",
      "Pause for a moment at the top, then inhale and slowly lower the dumbbells back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0396": {
    "data": [
      "坐姿哑铃侧平举",
      "Dumbbell Seated Lateral Raise",
      "肩部",
      "哑铃 + 训练凳",
      "8–12次",
      [
        "坐稳长凳，双手持轻哑铃",
        "双臂向侧面抬至舒适高度，再缓慢下降",
        "手肘微弯，避免耸肩"
      ]
    ],
    "mediaId": "0396",
    "sourceName": "dumbbell seated lateral raise",
    "sourceInstructions": [
      "Sit on a bench with your feet flat on the ground and a dumbbell in each hand, resting on your thighs.",
      "Keep your back straight and core engaged.",
      "Raise the dumbbells to your sides with a slight bend in your elbows, until your arms are parallel to the ground.",
      "Pause for a moment at the top, then slowly lower the dumbbells back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0356": {
    "data": [
      "支撑式单臂侧平举",
      "Dumbbell One Arm Lateral Raise With Support",
      "肩部",
      "哑铃",
      "8–12次",
      [
        "一手扶稳立柱，另一手持轻哑铃",
        "向侧面抬起持铃手臂再慢慢放下",
        "躯干保持固定，不侧弯借力"
      ]
    ],
    "mediaId": "0356",
    "sourceName": "dumbbell one arm lateral raise with support",
    "sourceInstructions": [
      "Stand with your feet shoulder-width apart and hold a dumbbell in one hand, with your palm facing your body.",
      "Place your other hand on a stable surface, such as a bench or wall, for support.",
      "Keep your back straight and engage your core.",
      "Raise the dumbbell out to the side, keeping your arm straight and your palm facing down.",
      "Continue lifting until your arm is parallel to the ground.",
      "Pause for a moment at the top, then slowly lower the dumbbell back down to the starting position.",
      "Repeat for the desired number of repetitions, then switch sides."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0426": {
    "data": [
      "站姿哑铃肩推",
      "Dumbbell Standing Overhead Press",
      "肩部",
      "哑铃",
      "8–12次",
      [
        "双脚与髋同宽，哑铃放在肩侧",
        "腹部收紧，双臂向上推举后下降",
        "肋骨不外翻，不用腰部代偿"
      ]
    ],
    "mediaId": "0426",
    "sourceName": "dumbbell standing overhead press",
    "sourceInstructions": [
      "Stand with your feet shoulder-width apart, holding a dumbbell in each hand at shoulder level with your palms facing forward.",
      "Press the dumbbells upward until your arms are fully extended overhead.",
      "Pause for a moment at the top, then slowly lower the dumbbells back down to shoulder level.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0404": {
    "data": [
      "对握哑铃肩推",
      "Dumbbell Seated Shoulder Press (Parallel Grip)",
      "肩部",
      "哑铃 + 训练凳",
      "8–12次",
      [
        "坐稳靠背凳，掌心相对持铃",
        "沿自然轨迹向上推起，再缓慢下放",
        "肩部保持舒适，不强行压低手肘"
      ]
    ],
    "mediaId": "0404",
    "sourceName": "dumbbell seated shoulder press (parallel grip)",
    "sourceInstructions": [
      "Sit on a bench with a dumbbell in each hand, palms facing inward.",
      "Raise the dumbbells to shoulder height, elbows bent and palms facing forward.",
      "Press the dumbbells upward until your arms are fully extended overhead.",
      "Pause for a moment at the top, then slowly lower the dumbbells back to shoulder height.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0091": {
    "data": [
      "坐姿杠铃肩推",
      "Barbell Seated Overhead Press",
      "肩部",
      "杠铃 + 训练凳",
      "8–12次",
      [
        "坐稳靠背，双手握杠置于肩前",
        "向上推举，控制回到起点",
        "使用安全架，不过度挺腰"
      ]
    ],
    "mediaId": "0091",
    "sourceName": "barbell seated overhead press",
    "sourceInstructions": [
      "Sit on a bench with your back straight and feet flat on the ground.",
      "Hold the barbell with an overhand grip, slightly wider than shoulder-width apart.",
      "Lift the barbell off the rack and bring it to shoulder level, with your elbows bent and palms facing forward.",
      "Press the barbell overhead by extending your arms fully.",
      "Pause for a moment at the top, then slowly lower the barbell back to shoulder level.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "进阶",
    "environment": "gym"
  },
  "ex_1456": {
    "data": [
      "站姿杠铃推举",
      "Barbell Standing Close Grip Military Press",
      "肩部",
      "杠铃",
      "8–12次",
      [
        "双脚站稳，杠铃位于肩前",
        "收紧腹臀，将杠铃推至头顶再下降",
        "头部适度让开杠铃路线，避免后仰"
      ]
    ],
    "mediaId": "1456",
    "sourceName": "barbell standing close grip military press",
    "sourceInstructions": [
      "Stand with your feet shoulder-width apart and hold the barbell with an overhand grip, hands slightly closer than shoulder-width apart.",
      "Lift the barbell to shoulder height, keeping your elbows close to your body.",
      "Press the barbell overhead, extending your arms fully.",
      "Lower the barbell back to shoulder height.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "进阶",
    "environment": "gym"
  },
  "ex_0178": {
    "data": [
      "绳索侧平举",
      "Cable Lateral Raise",
      "肩部",
      "绳索训练器",
      "8–12次",
      [
        "站在低位滑轮旁，握稳把手",
        "手肘微屈，侧向抬臂后控制回程",
        "身体不倾斜摆动，使用轻重量"
      ]
    ],
    "mediaId": "0178",
    "sourceName": "cable lateral raise",
    "sourceInstructions": [
      "Stand with your feet shoulder-width apart and grasp the cable handles with an overhand grip.",
      "Keep your arms straight and your core engaged.",
      "Raise your arms out to the sides until they are parallel to the floor.",
      "Pause for a moment at the top, then slowly lower your arms back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "gym"
  },
  "ex_0162": {
    "data": [
      "绳索前平举",
      "Cable Front Raise",
      "肩部",
      "绳索训练器",
      "8–12次",
      [
        "背对低位滑轮，握住手柄站稳",
        "将手柄向前上抬至舒适高度再回放",
        "保持躯干稳定，避免耸肩"
      ]
    ],
    "mediaId": "0162",
    "sourceName": "cable front raise",
    "sourceInstructions": [
      "Stand with your feet shoulder-width apart and grasp the cable handle with an overhand grip.",
      "Keep your back straight and your core engaged.",
      "Raise the cable handle in front of you, keeping your arms straight and your palms facing down.",
      "Continue lifting until your arms are parallel to the floor.",
      "Pause for a moment at the top, then slowly lower the cable handle back to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "gym"
  },
  "ex_0203": {
    "data": [
      "绳索面拉",
      "Cable Rear Delt Row (With Rope)",
      "肩部",
      "绳索训练器",
      "8–12次",
      [
        "滑轮设在面部附近，双手握绳",
        "肘部向外，将绳拉向面部两侧",
        "轻重量控制，颈部保持放松"
      ]
    ],
    "mediaId": "0203",
    "sourceName": "cable rear delt row (with rope)",
    "sourceInstructions": [
      "Attach a rope handle to a low pulley cable machine.",
      "Stand facing the machine with your feet shoulder-width apart.",
      "Grasp the rope handle with an overhand grip, palms facing each other.",
      "Bend your knees slightly and hinge forward at the hips, keeping your back straight.",
      "Keep your elbows slightly bent and pull the rope towards your chest, squeezing your shoulder blades together.",
      "Pause for a moment at the top of the movement, then slowly release the tension and return to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "gym"
  },
  "ex_0235": {
    "data": [
      "绳索肩外旋",
      "Cable Standing Shoulder External Rotation",
      "肩部",
      "绳索训练器",
      "8–12次",
      [
        "侧对滑轮站稳，肘部贴近体侧",
        "固定上臂，前臂向外旋转后回正",
        "使用很轻重量，不扭转躯干"
      ]
    ],
    "mediaId": "0235",
    "sourceName": "cable standing shoulder external rotation",
    "sourceInstructions": [
      "Stand with your feet shoulder-width apart and your knees slightly bent.",
      "Hold the cable handle with your arm extended in front of you, parallel to the ground.",
      "Keep your elbow slightly bent and your shoulder blades pulled back.",
      "Slowly rotate your arm outward, away from your body, while keeping your elbow in the same position.",
      "Pause for a moment at the end of the movement, then slowly return to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "gym"
  },
  "ex_0863": {
    "data": [
      "侧卧哑铃肩外旋",
      "Dumbbell Lying External Shoulder Rotation",
      "肩部",
      "哑铃",
      "8–12次",
      [
        "侧卧垫上，上方手持轻哑铃，肘贴体侧",
        "保持肘弯曲，前臂向上外旋后缓慢下降",
        "不要抬肩或用大重量"
      ]
    ],
    "mediaId": "0863",
    "sourceName": "dumbbell lying external shoulder rotation",
    "sourceInstructions": [
      "Lie on your side on a flat bench with your upper arm against your side and your elbow bent 90 degrees.",
      "Hold a dumbbell in your hand with your palm facing down.",
      "Keeping your upper arm against your side, slowly rotate your forearm upward as far as possible.",
      "Pause for a moment at the top, then slowly lower your forearm back down to the starting position.",
      "Repeat for the desired number of repetitions, then switch sides."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0602": {
    "data": [
      "器械反向飞鸟",
      "Lever Seated Reverse Fly",
      "肩部",
      "固定器械",
      "8–12次",
      [
        "面对椅背坐稳，胸口贴靠支撑",
        "双臂向两侧打开，再控制合拢",
        "避免耸肩，幅度以肩部舒适为准"
      ]
    ],
    "mediaId": "0602",
    "sourceName": "lever seated reverse fly",
    "sourceInstructions": [
      "Adjust the seat height and position yourself on the machine with your chest against the pad and your feet flat on the floor.",
      "Grasp the handles with an overhand grip and keep your arms slightly bent.",
      "Exhale and squeeze your shoulder blades together as you pull the handles back and outward, away from your body.",
      "Pause for a moment at the peak contraction, then inhale and slowly return to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "gym"
  },
  "ex_0997": {
    "data": [
      "弹力带肩推",
      "Band Shoulder Press",
      "肩部",
      "弹力带",
      "8–12次",
      [
        "双脚踩稳弹力带，双手握带置于肩侧",
        "双臂向上推举，再控制回程",
        "检查弹力带完整性，保持腹部收紧"
      ]
    ],
    "mediaId": "0997",
    "sourceName": "band shoulder press",
    "sourceInstructions": [
      "Stand with your feet shoulder-width apart and place the band under your feet.",
      "Hold the band with your palms facing forward and raise your hands to shoulder height, elbows bent.",
      "Press the band overhead, fully extending your arms.",
      "Pause for a moment at the top, then slowly lower the band back to shoulder height.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0993": {
    "data": [
      "弹力带反向飞鸟",
      "Band Reverse Fly",
      "肩部",
      "弹力带",
      "8–12次",
      [
        "踩稳或固定弹力带，髋部后折",
        "肘部微屈，双臂向侧后方展开",
        "固定点需牢固，避免弹力带回弹"
      ]
    ],
    "mediaId": "0993",
    "sourceName": "band reverse fly",
    "sourceInstructions": [
      "Attach the band to a stationary object at chest height.",
      "Stand with your feet shoulder-width apart and hold the band with both hands in front of you.",
      "Keep your arms straight and lift them out to the sides until they are parallel to the ground.",
      "Squeeze your shoulder blades together at the top of the movement.",
      "Slowly lower your arms back to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0294": {
    "data": [
      "哑铃弯举",
      "Dumbbell Biceps Curl",
      "手臂",
      "哑铃",
      "8–12次",
      [
        "双手持铃自然下垂，双脚站稳",
        "固定上臂，屈肘举铃后缓慢下降",
        "避免腰部后仰和手腕折弯"
      ]
    ],
    "mediaId": "0294",
    "sourceName": "dumbbell biceps curl",
    "sourceInstructions": [
      "Stand up straight with a dumbbell in each hand, palms facing forward and arms fully extended.",
      "Keeping your upper arms stationary, exhale and curl the weights while contracting your biceps.",
      "Continue to raise the weights until your biceps are fully contracted and the dumbbells are at shoulder level.",
      "Hold the contracted position for a brief pause as you squeeze your biceps.",
      "Inhale and slowly begin to lower the dumbbells back to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0285": {
    "data": [
      "哑铃交替弯举",
      "Dumbbell Alternate Biceps Curl",
      "手臂",
      "哑铃",
      "8–12次",
      [
        "双手持铃置于体侧，腹部收紧",
        "交替屈肘举起一侧哑铃，再慢慢放下",
        "上臂靠近躯干，不前后甩动"
      ]
    ],
    "mediaId": "0285",
    "sourceName": "dumbbell alternate biceps curl",
    "sourceInstructions": [
      "Stand up straight with a dumbbell in each hand, palms facing forward and arms fully extended.",
      "Keeping your upper arms stationary, exhale and curl the weights while contracting your biceps.",
      "Continue to raise the dumbbells until your biceps are fully contracted and the dumbbells are at shoulder level.",
      "Hold the contracted position for a brief pause as you squeeze your biceps.",
      "Inhale and slowly begin to lower the dumbbells back to the starting position.",
      "Repeat for the desired number of repetitions, alternating arms."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0297": {
    "data": [
      "哑铃集中弯举",
      "Dumbbell Concentration Curl",
      "手臂",
      "哑铃",
      "8–12次",
      [
        "坐在凳边，持铃侧上臂靠大腿内侧",
        "固定上臂，屈肘抬铃后慢慢下降",
        "避免耸肩和扭腰借力"
      ]
    ],
    "mediaId": "0297",
    "sourceName": "dumbbell concentration curl",
    "sourceInstructions": [
      "Sit on a bench with your legs spread apart and a dumbbell in one hand, resting your elbow on the inside of your thigh.",
      "Fully extend your arm and hold the dumbbell with an underhand grip.",
      "Keeping your upper arm stationary, exhale and curl the weight up towards your shoulder while contracting your biceps.",
      "Continue to raise the dumbbell until your biceps are fully contracted and the dumbbell is at shoulder level.",
      "Hold the contracted position for a brief pause as you squeeze your biceps.",
      "Inhale and slowly lower the dumbbell back to the starting position.",
      "Repeat for the desired number of repetitions, then switch arms."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0315": {
    "data": [
      "上斜哑铃弯举",
      "Dumbbell Incline Biceps Curl",
      "手臂",
      "哑铃 + 训练凳",
      "8–12次",
      [
        "仰靠上斜凳，双臂自然下垂",
        "保持上臂稳定，弯举哑铃再下放",
        "从轻重量开始，不强行向后拉肩"
      ]
    ],
    "mediaId": "0315",
    "sourceName": "dumbbell incline biceps curl",
    "sourceInstructions": [
      "Sit on an incline bench with a dumbbell in each hand, palms facing forward, and arms fully extended.",
      "Keeping your upper arms stationary, exhale and curl the weights while contracting your biceps.",
      "Continue to raise the dumbbells until your biceps are fully contracted and the dumbbells are at shoulder level.",
      "Hold the contracted position for a brief pause as you squeeze your biceps.",
      "Inhale and slowly begin to lower the dumbbells back to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0372": {
    "data": [
      "哑铃牧师凳弯举",
      "Dumbbell Preacher Curl",
      "手臂",
      "哑铃 + 训练凳",
      "8–12次",
      [
        "上臂贴稳牧师凳，双手持铃",
        "缓慢屈肘举铃，再控制伸肘",
        "底端不猛烈锁肘，腋下不要悬空"
      ]
    ],
    "mediaId": "0372",
    "sourceName": "dumbbell preacher curl",
    "sourceInstructions": [
      "Sit on a preacher curl bench with your upper arms resting on the pad and your chest against it.",
      "Hold a dumbbell in each hand with your palms facing up and your arms fully extended.",
      "Keeping your upper arms stationary, exhale and curl the weights while contracting your biceps.",
      "Continue to raise the dumbbells until your biceps are fully contracted and the dumbbells are at shoulder level.",
      "Hold the contracted position for a brief pause as you squeeze your biceps.",
      "Inhale and slowly begin to lower the dumbbells back to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0298": {
    "data": [
      "哑铃交叉锤式弯举",
      "Dumbbell Cross Body Hammer Curl",
      "手臂",
      "哑铃",
      "8–12次",
      [
        "掌心向内持铃站稳",
        "一侧哑铃向对侧胸前弯举，再下降换侧",
        "不扭转躯干或耸肩"
      ]
    ],
    "mediaId": "0298",
    "sourceName": "dumbbell cross body hammer curl",
    "sourceInstructions": [
      "Stand up straight with a dumbbell in each hand, palms facing your body.",
      "Keep your elbows close to your torso and your upper arms stationary.",
      "Exhale and curl the weights while contracting your biceps, bringing the dumbbells across your body towards your opposite shoulder.",
      "Continue to raise the dumbbells until your biceps are fully contracted and the dumbbells are at shoulder level.",
      "Hold the contracted position for a brief pause as you squeeze your biceps.",
      "Inhale and slowly begin to lower the dumbbells back to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0439": {
    "data": [
      "佐特曼弯举",
      "Dumbbell Zottman Curl",
      "手臂",
      "哑铃",
      "8–12次",
      [
        "双手持铃，掌心向前站立",
        "弯举后转为掌心向下，控制下降",
        "旋转手腕时使用轻重量"
      ]
    ],
    "mediaId": "0439",
    "sourceName": "dumbbell zottman curl",
    "sourceInstructions": [
      "Stand up straight with a dumbbell in each hand, palms facing your body.",
      "Keep your elbows close to your torso and rotate your palms to face forward.",
      "Curl the dumbbells up to your shoulders while keeping your upper arms stationary.",
      "At the top of the movement, rotate your wrists so that your palms are facing away from your body.",
      "Slowly lower the dumbbells back to the starting position, rotating your palms back to facing your body.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0031": {
    "data": [
      "杠铃弯举",
      "Barbell Curl",
      "手臂",
      "杠铃",
      "8–12次",
      [
        "双手反握杠铃，上臂贴近体侧",
        "屈肘抬杠，再缓慢放回",
        "双膝自然放松，腰部不后仰"
      ]
    ],
    "mediaId": "0031",
    "sourceName": "barbell curl",
    "sourceInstructions": [
      "Stand up straight with your feet shoulder-width apart and hold a barbell with an underhand grip, palms facing forward.",
      "Keep your elbows close to your torso and exhale as you curl the weights while contracting your biceps.",
      "Continue to raise the bar until your biceps are fully contracted and the bar is at shoulder level.",
      "Hold the contracted position for a brief pause as you squeeze your biceps.",
      "Inhale as you slowly begin to lower the bar back to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "进阶",
    "environment": "gym"
  },
  "ex_0070": {
    "data": [
      "杠铃牧师凳弯举",
      "Barbell Preacher Curl",
      "手臂",
      "杠铃 + 训练凳",
      "8–12次",
      [
        "双臂靠稳牧师凳，双手握杠",
        "屈肘抬起杠铃，再控制下放",
        "不要突然完全伸直手肘"
      ]
    ],
    "mediaId": "0070",
    "sourceName": "barbell preacher curl",
    "sourceInstructions": [
      "Sit on a preacher bench with your upper arms resting on the pad and your chest against the support.",
      "Grasp the barbell with an underhand grip, slightly wider than shoulder-width apart.",
      "Keeping your upper arms stationary, exhale and curl the barbell up towards your shoulders.",
      "Pause for a moment at the top, squeezing your biceps.",
      "Inhale and slowly lower the barbell back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "进阶",
    "environment": "gym"
  },
  "ex_0868": {
    "data": [
      "绳索弯举",
      "Cable Curl",
      "手臂",
      "绳索训练器",
      "8–12次",
      [
        "面对低位滑轮站稳，握柄置于体前",
        "固定上臂，将手柄弯举至胸前再下降",
        "不要用身体重量后倒借力"
      ]
    ],
    "mediaId": "0868",
    "sourceName": "cable curl",
    "sourceInstructions": [
      "Stand facing the cable machine with your feet shoulder-width apart.",
      "Grasp the cable attachment with an underhand grip, palms facing up.",
      "Keep your elbows close to your sides and your upper arms stationary.",
      "Exhale and curl the cable attachment towards your shoulders, contracting your biceps.",
      "Pause for a moment at the top of the movement, squeezing your biceps.",
      "Inhale and slowly lower the cable attachment back to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "gym"
  },
  "ex_0165": {
    "data": [
      "绳索锤式弯举",
      "Cable Hammer Curl (With Rope)",
      "手臂",
      "绳索训练器",
      "8–12次",
      [
        "双手对握低位绳索两端",
        "保持掌心相对，屈肘拉起绳索",
        "上臂靠近躯干，控制回程"
      ]
    ],
    "mediaId": "0165",
    "sourceName": "cable hammer curl (with rope)",
    "sourceInstructions": [
      "Stand upright with your feet shoulder-width apart and a slight bend in your knees.",
      "Hold the cable rope attachment with an underhand grip, palms facing each other, and your arms fully extended.",
      "Keeping your upper arms stationary, exhale and curl the weights while contracting your biceps.",
      "Continue to raise the cable rope attachment until your biceps are fully contracted and the rope is at shoulder level.",
      "Hold the contracted position for a brief pause as you squeeze your biceps.",
      "Inhale and slowly begin to lower the cable rope attachment back to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "gym"
  },
  "ex_0030": {
    "data": [
      "窄握杠铃卧推",
      "Barbell Close-Grip Bench Press",
      "手臂",
      "杠铃 + 训练凳",
      "8–12次",
      [
        "仰卧凳上，双手以舒适窄距握杠",
        "肘部靠近身体，下放后推回",
        "握距不必过窄，保持手腕中立"
      ]
    ],
    "mediaId": "0030",
    "sourceName": "barbell close-grip bench press",
    "sourceInstructions": [
      "Lie flat on a bench with your feet flat on the ground and your back pressed against the bench.",
      "Grasp the barbell with a close grip, slightly narrower than shoulder-width apart.",
      "Unrack the barbell and lower it slowly towards your chest, keeping your elbows close to your body.",
      "Pause for a moment when the barbell touches your chest.",
      "Push the barbell back up to the starting position, fully extending your arms.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "进阶",
    "environment": "gym"
  },
  "ex_0060": {
    "data": [
      "杠铃仰卧臂屈伸",
      "Barbell Lying Triceps Extension Skull Crusher",
      "手臂",
      "杠铃",
      "8–12次",
      [
        "仰卧凳上，双手举杠于胸前上方",
        "固定上臂，屈肘让杠靠近额头上方再伸肘",
        "使用轻重量或保护者，避免杠铃接触头部"
      ]
    ],
    "mediaId": "0060",
    "sourceName": "barbell lying triceps extension skull crusher",
    "sourceInstructions": [
      "Lie flat on a bench with your feet flat on the ground and your head at the end of the bench.",
      "Hold the barbell with an overhand grip, hands shoulder-width apart, and extend your arms straight up over your chest.",
      "Keeping your upper arms stationary, slowly lower the barbell towards your forehead by bending your elbows.",
      "Pause for a moment when the barbell is just above your forehead, then extend your arms back up to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "进阶",
    "environment": "gym"
  },
  "ex_0351": {
    "data": [
      "哑铃仰卧臂屈伸",
      "Dumbbell Lying Triceps Extension",
      "手臂",
      "哑铃",
      "8–12次",
      [
        "仰卧长凳，双手持铃举在肩上方",
        "固定上臂，屈肘下放哑铃再伸直",
        "手肘不向两侧大幅张开"
      ]
    ],
    "mediaId": "0351",
    "sourceName": "dumbbell lying triceps extension",
    "sourceInstructions": [
      "Lie flat on a bench with a dumbbell in each hand, palms facing each other.",
      "Extend your arms straight up over your chest, keeping your elbows close to your body.",
      "Lower the dumbbells down towards your forehead, bending your elbows.",
      "Pause for a moment, then extend your arms back up to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0333": {
    "data": [
      "哑铃俯身臂屈伸",
      "Dumbbell Kickback",
      "手臂",
      "哑铃",
      "8–12次",
      [
        "髋部后折，上臂贴近体侧并抬至躯干旁",
        "固定上臂，向后伸肘再慢慢弯回",
        "使用轻重量，避免甩动肩膀"
      ]
    ],
    "mediaId": "0333",
    "sourceName": "dumbbell kickback",
    "sourceInstructions": [
      "Stand with your feet shoulder-width apart and hold a dumbbell in each hand.",
      "Bend your knees slightly and hinge forward at the hips, keeping your back straight.",
      "Bring your upper arms close to your sides, with your elbows bent at a 90-degree angle.",
      "Extend your arms straight back, squeezing your triceps at the top of the movement.",
      "Pause for a moment, then slowly lower the dumbbells back to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0194": {
    "data": [
      "绳索过顶臂屈伸",
      "Cable Overhead Triceps Extension (Rope Attachment)",
      "手臂",
      "绳索训练器",
      "8–12次",
      [
        "背向滑轮，双手握绳于头后",
        "上臂固定，向上前方伸直手肘再回放",
        "收紧腹部，避免挺腰"
      ]
    ],
    "mediaId": "0194",
    "sourceName": "cable overhead triceps extension (rope attachment)",
    "sourceInstructions": [
      "Attach a rope to a cable machine at a high position.",
      "Stand facing away from the machine with your feet shoulder-width apart.",
      "Grasp the rope with both hands, palms facing each other, and bring your hands above your head.",
      "Keep your upper arms close to your head and your elbows pointing forward.",
      "Slowly lower the rope behind your head by bending your elbows.",
      "Pause for a moment, then extend your arms back up to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "gym"
  },
  "ex_0207": {
    "data": [
      "反握绳索下压",
      "Cable Reverse-Grip Pushdown",
      "手臂",
      "绳索训练器",
      "8–12次",
      [
        "面对高位滑轮，反握手柄",
        "肘部贴近身体，向下伸肘再回放",
        "手腕保持稳定，不用体重下压"
      ]
    ],
    "mediaId": "0207",
    "sourceName": "cable reverse-grip pushdown",
    "sourceInstructions": [
      "Attach a straight bar to a high pulley cable machine.",
      "Stand facing the machine with your feet shoulder-width apart.",
      "Grasp the bar with an underhand grip, palms facing up, and your hands shoulder-width apart.",
      "Keep your elbows close to your sides and your upper arms stationary throughout the exercise.",
      "Using your triceps, push the bar down until your arms are fully extended and your triceps are contracted.",
      "Pause for a moment, then slowly return the bar to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "gym"
  },
  "ex_0241": {
    "data": [
      "V把绳索下压",
      "Cable Triceps Pushdown (V-Bar)",
      "手臂",
      "绳索训练器",
      "8–12次",
      [
        "正握V形把手，上臂贴近体侧",
        "伸肘下压至可控位置，缓慢回放",
        "肩部不要前后摆动"
      ]
    ],
    "mediaId": "0241",
    "sourceName": "cable triceps pushdown (v-bar)",
    "sourceInstructions": [
      "Attach a v-bar attachment to the cable machine at the highest setting.",
      "Stand facing the cable machine with your feet shoulder-width apart.",
      "Grasp the v-bar with an overhand grip, palms facing down, and your hands shoulder-width apart.",
      "Keep your elbows close to your sides and your upper arms stationary throughout the exercise.",
      "Engage your triceps and exhale as you push the v-bar down until your arms are fully extended.",
      "Pause for a moment at the bottom of the movement, squeezing your triceps.",
      "Inhale as you slowly return the v-bar to the starting position, maintaining control.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "gym"
  },
  "ex_0283": {
    "data": [
      "钻石俯卧撑",
      "Diamond Push-Up",
      "手臂",
      "徒手",
      "8–12次",
      [
        "双手靠近放在胸前下方撑地",
        "身体成直线，屈肘下降后推起",
        "手腕不适时增大手距或改为跪姿"
      ]
    ],
    "mediaId": "0283",
    "sourceName": "diamond push-up",
    "sourceInstructions": [
      "Start in a high plank position with your hands close together, forming a diamond shape with your thumbs and index fingers.",
      "Keep your body in a straight line from head to toe, engaging your core and glutes.",
      "Lower your chest towards the diamond shape formed by your hands, keeping your elbows close to your body.",
      "Pause for a moment at the bottom, then push yourself back up to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0129": {
    "data": [
      "屈膝凳上臂屈伸",
      "Bench Dip (Knees Bent)",
      "手臂",
      "徒手",
      "8–12次",
      [
        "双手撑稳身后凳边，双脚着地屈膝",
        "屈肘下降少许，再推起身体",
        "不追求深度，肩前不适立即停止"
      ]
    ],
    "mediaId": "0129",
    "sourceName": "bench dip (knees bent)",
    "sourceInstructions": [
      "Sit on the edge of a bench or chair with your hands gripping the edge next to your hips.",
      "Slide your butt off the bench and straighten your legs in front of you, keeping your heels on the ground.",
      "Bend your elbows and lower your body towards the ground, keeping your back close to the bench.",
      "Pause for a moment at the bottom, then push yourself back up to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0814": {
    "data": [
      "双杠臂屈伸（手臂）",
      "Triceps Dip",
      "手臂",
      "徒手",
      "8–12次",
      [
        "双手撑稳双杠，身体尽量直立",
        "屈肘缓慢下降，再伸肘撑起",
        "避免耸肩，肩部舒适范围内完成"
      ]
    ],
    "mediaId": "0814",
    "sourceName": "triceps dip",
    "sourceInstructions": [
      "Sit on the edge of a bench or chair with your hands gripping the edge, fingers pointing forward.",
      "Slide your butt off the bench, supporting your weight with your hands.",
      "Bend your elbows and lower your body towards the ground, keeping your back close to the bench.",
      "Pause for a moment at the bottom, then push yourself back up to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0276": {
    "data": [
      "死虫式",
      "Dead Bug",
      "核心",
      "徒手",
      "每侧8–12次",
      [
        "仰卧，手臂朝上，髋膝屈曲约90度",
        "交替伸出对侧手臂与腿，再收回",
        "保持下背稳定，不通过挺腰增加幅度"
      ]
    ],
    "mediaId": "0276",
    "sourceName": "dead bug",
    "sourceInstructions": [
      "Lie flat on your back with your arms extended towards the ceiling.",
      "Bend your knees and lift your legs off the ground, creating a 90-degree angle at your hips and knees.",
      "Engage your core and lower back to press your lower back into the ground.",
      "Slowly lower your right arm and left leg towards the ground, keeping them straight and hovering just above the floor.",
      "Pause for a moment, then return to the starting position.",
      "Repeat the movement with your left arm and right leg.",
      "Continue alternating sides for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0003": {
    "data": [
      "自行车卷腹",
      "Air Bike",
      "核心",
      "徒手",
      "每侧8–12次",
      [
        "仰卧，双手轻放头侧，双腿抬起",
        "对侧肩部朝膝盖转动，另一腿伸出",
        "不拉扯颈部，控制转动速度"
      ]
    ],
    "mediaId": "0003",
    "sourceName": "air bike",
    "sourceInstructions": [
      "Lie flat on your back with your hands placed behind your head.",
      "Lift your legs off the ground and bend your knees at a 90-degree angle.",
      "Bring your right elbow towards your left knee while simultaneously straightening your right leg.",
      "Return to the starting position and repeat the movement on the opposite side, bringing your left elbow towards your right knee while straightening your left leg.",
      "Continue alternating sides in a pedaling motion for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0006": {
    "data": [
      "仰卧交替摸脚跟",
      "Alternate Heel Touchers",
      "核心",
      "徒手",
      "每侧8–12次",
      [
        "仰卧屈膝，肩胛轻轻离地",
        "左右侧屈，交替向同侧脚跟伸手",
        "头颈自然，不要用惯性快速摆动"
      ]
    ],
    "mediaId": "0006",
    "sourceName": "alternate heel touchers",
    "sourceInstructions": [
      "Lie flat on your back with your knees bent and feet flat on the ground.",
      "Extend your arms straight out to the sides, parallel to the ground.",
      "Engaging your abs, lift your shoulders off the ground and reach your right hand towards your right heel.",
      "Return to the starting position and repeat on the left side, reaching your left hand towards your left heel.",
      "Continue alternating sides for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0872": {
    "data": [
      "反向卷腹",
      "Reverse Crunch",
      "核心",
      "徒手",
      "每侧8–12次",
      [
        "仰卧垫上，双膝弯曲抬起",
        "收腹轻卷骨盆，再慢慢放回",
        "不甩腿，控制下背回落"
      ]
    ],
    "mediaId": "0872",
    "sourceName": "reverse crunch",
    "sourceInstructions": [
      "Lie flat on your back with your arms extended along your sides.",
      "Bend your knees and lift your feet off the ground, bringing your thighs perpendicular to the floor.",
      "Contract your abs and curl your hips off the floor, bringing your knees towards your chest.",
      "Pause for a moment at the top, then slowly lower your hips back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0687": {
    "data": [
      "俄罗斯转体",
      "Russian Twist",
      "核心",
      "徒手",
      "每侧8–12次",
      [
        "坐稳垫上，屈膝，躯干适度后倾",
        "双手在胸前，躯干左右缓慢转动",
        "初练者双脚着地，不弓背甩动"
      ]
    ],
    "mediaId": "0687",
    "sourceName": "russian twist",
    "sourceInstructions": [
      "Sit on the ground with your knees bent and feet flat on the floor.",
      "Lean back slightly while keeping your back straight and your core engaged.",
      "Hold your hands together in front of your chest or hold a weight if desired.",
      "Lift your feet off the ground, balancing on your sit bones.",
      "Twist your torso to the right, bringing your hands or weight towards the right side of your body.",
      "Pause for a moment, then twist your torso to the left, bringing your hands or weight towards the left side of your body.",
      "Continue alternating sides for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0472": {
    "data": [
      "悬垂举腿",
      "Hanging Leg Raise",
      "核心",
      "徒手",
      "每侧8–12次",
      [
        "握稳单杠，先稳定肩带",
        "收腹抬起双腿，再缓慢下降",
        "避免摆荡，困难时改成屈膝版本"
      ]
    ],
    "mediaId": "0472",
    "sourceName": "hanging leg raise",
    "sourceInstructions": [
      "Hang from a pull-up bar with your arms fully extended and your palms facing away from you.",
      "Engage your core and lift your legs up in front of you, keeping them straight.",
      "Continue lifting until your legs are parallel to the ground or as high as you can comfortably go.",
      "Pause for a moment at the top, then slowly lower your legs back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0175": {
    "data": [
      "跪姿绳索卷腹",
      "Cable Kneeling Crunch",
      "核心",
      "绳索训练器",
      "每侧8–12次",
      [
        "跪在高位滑轮前，双手握绳在头侧",
        "收缩腹部让胸廓靠近骨盆，再慢慢回正",
        "髋部相对固定，不用手臂拉绳"
      ]
    ],
    "mediaId": "0175",
    "sourceName": "cable kneeling crunch",
    "sourceInstructions": [
      "Attach a rope handle to a high pulley and kneel down facing away from the machine.",
      "Hold the rope handle with both hands and place it behind your head, keeping your elbows out to the sides.",
      "Keeping your hips stationary, flex your waist and crunch your torso down towards your thighs.",
      "Pause for a moment at the bottom, then slowly return to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "gym"
  },
  "ex_0407": {
    "data": [
      "哑铃侧屈",
      "Dumbbell Side Bend",
      "核心",
      "哑铃",
      "每侧8–12次",
      [
        "单手持轻哑铃，另一手自然放体侧",
        "躯干向持铃侧轻侧屈，再回到中立",
        "不旋转躯干，避免大幅侧弯"
      ]
    ],
    "mediaId": "0407",
    "sourceName": "dumbbell side bend",
    "sourceInstructions": [
      "Stand up straight with your feet shoulder-width apart and hold a dumbbell in one hand, letting it hang down by your side.",
      "Keeping your back straight and your core engaged, slowly bend sideways at the waist towards the opposite side of the dumbbell, lowering the weight as far as you comfortably can.",
      "Pause for a moment, then slowly return to the starting position.",
      "Repeat for the desired number of repetitions, then switch sides and repeat."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0630": {
    "data": [
      "登山跑",
      "Mountain Climber",
      "全身",
      "徒手",
      "8–12次",
      [
        "双手撑地形成高位平板，腹部收紧",
        "双膝交替向胸前提起",
        "肩膀稳定在手腕上方，不塌腰"
      ]
    ],
    "mediaId": "0630",
    "sourceName": "mountain climber",
    "sourceInstructions": [
      "Start in a high plank position with your hands directly under your shoulders and your body in a straight line.",
      "Engage your core and bring your right knee towards your chest, then quickly switch and bring your left knee towards your chest.",
      "Continue alternating legs in a running motion, keeping your hips low and your core engaged.",
      "Maintain a steady pace and breathe evenly throughout the exercise.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_3699": {
    "data": [
      "平板支撑交替触肩",
      "Shoulder Tap",
      "核心",
      "徒手",
      "每侧8–12次",
      [
        "双手撑地，双脚适度分开",
        "交替抬手触碰对侧肩膀",
        "尽量不摇晃骨盆，放慢速度"
      ]
    ],
    "mediaId": "3699",
    "sourceName": "shoulder tap",
    "sourceInstructions": [
      "Start in a high plank position with your hands directly under your shoulders and your body in a straight line.",
      "Engage your core and lift your right hand off the ground, reaching across to tap your left shoulder.",
      "Place your right hand back on the ground and repeat with your left hand tapping your right shoulder.",
      "Continue alternating shoulder taps while keeping your hips and torso stable.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0464": {
    "data": [
      "平板支撑转髋",
      "Front Plank With Twist",
      "核心",
      "徒手",
      "每侧8–12次",
      [
        "前臂撑地，身体保持直线",
        "骨盆缓慢向左右两侧转动",
        "腰部不塌陷，保持小幅度控制"
      ]
    ],
    "mediaId": "0464",
    "sourceName": "front plank with twist",
    "sourceInstructions": [
      "Start in a high plank position with your hands directly under your shoulders and your body in a straight line from head to toe.",
      "Engage your core and glutes to maintain a stable position.",
      "Rotate your torso to the right, lifting your right arm and extending it towards the ceiling.",
      "Keep your hips and legs stable as you twist.",
      "Hold for a moment, then return to the starting position.",
      "Repeat the twist on the left side.",
      "Continue alternating sides for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0084": {
    "data": [
      "杠铃健腹轮",
      "Barbell Rollerout",
      "核心",
      "杠铃",
      "每侧8–12次",
      [
        "跪在垫上，双手握住可滚动杠铃",
        "收紧腹部，向前滚动后拉回",
        "从小幅度开始，不让腰部下沉"
      ]
    ],
    "mediaId": "0084",
    "sourceName": "barbell rollerout",
    "sourceInstructions": [
      "Kneel on the floor and hold a barbell with both hands, shoulder-width apart.",
      "Roll the barbell forward, extending your arms and keeping your core engaged.",
      "Continue rolling forward until your body is fully extended and your arms are overhead.",
      "Pause for a moment, then slowly roll the barbell back towards your knees, maintaining control.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "进阶",
    "environment": "gym"
  },
  "ex_0507": {
    "data": [
      "两头起",
      "Jackknife Sit-Up",
      "核心",
      "徒手",
      "每侧8–12次",
      [
        "仰卧，双臂伸向头顶，双腿伸直",
        "腹部发力同时抬起躯干与双腿",
        "缓慢回落，必要时先做屈膝版本"
      ]
    ],
    "mediaId": "0507",
    "sourceName": "jackknife sit-up",
    "sourceInstructions": [
      "Lie flat on your back with your legs extended and your arms overhead.",
      "Engage your core and lift your legs and upper body simultaneously, reaching your hands towards your toes.",
      "Pause for a moment at the top, then slowly lower your legs and upper body back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "进阶",
    "environment": "home"
  },
  "ex_0262": {
    "data": [
      "交叉卷腹",
      "Cross Body Crunch",
      "核心",
      "徒手",
      "每侧8–12次",
      [
        "仰卧屈膝，双手轻放头侧",
        "一侧肩部朝对侧膝盖方向抬起",
        "旋转来自躯干，不拉扯头颈"
      ]
    ],
    "mediaId": "0262",
    "sourceName": "cross body crunch",
    "sourceInstructions": [
      "Lie flat on your back with your knees bent and feet flat on the ground.",
      "Place your hands behind your head with your elbows pointing outwards.",
      "Engaging your abs, lift your upper body off the ground and twist to bring your right elbow towards your left knee.",
      "Pause for a moment at the top, then slowly lower your upper body back down to the starting position.",
      "Repeat on the other side, bringing your left elbow towards your right knee.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_0979": {
    "data": [
      "弹力带抗旋转推",
      "Band Horizontal Pallof Press",
      "核心",
      "弹力带",
      "每侧8–12次",
      [
        "侧对牢固固定的弹力带，双手握于胸前",
        "手臂向前推直再收回，抵抗身体旋转",
        "髋部与肩部朝正前方，呼吸自然"
      ]
    ],
    "mediaId": "0979",
    "sourceName": "band horizontal pallof press",
    "sourceInstructions": [
      "Attach the band to a sturdy anchor point at waist height.",
      "Stand perpendicular to the anchor point with your feet shoulder-width apart.",
      "Grasp the band handle with both hands and step away from the anchor point to create tension in the band.",
      "Bring your hands to your chest, keeping your elbows bent and close to your body.",
      "Engage your core and maintain a stable stance.",
      "Extend your arms straight out in front of you, pushing the band away from your body.",
      "Hold the extended position for a few seconds, focusing on maintaining tension in your core.",
      "Slowly bring your hands back to your chest, resisting the pull of the band.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_1160": {
    "data": [
      "波比跳",
      "Burpee",
      "全身",
      "徒手",
      "8–12次",
      [
        "站姿开始，屈髋屈膝将双手放地",
        "双脚后移到支撑位，再收腿站起跳跃",
        "轻柔落地，可用逐步后撤替代跳跃"
      ]
    ],
    "mediaId": "1160",
    "sourceName": "burpee",
    "sourceInstructions": [
      "Start in a standing position with your feet shoulder-width apart.",
      "Lower your body into a squat position by bending your knees and placing your hands on the floor in front of you.",
      "Kick your feet back into a push-up position.",
      "Perform a push-up, keeping your body in a straight line.",
      "Jump your feet back into the squat position.",
      "Jump up explosively, reaching your arms overhead.",
      "Land softly and immediately lower back into a squat position to begin the next repetition."
    ],
    "level": "基础",
    "environment": "home"
  },
  "ex_1471": {
    "data": [
      "毛毛虫爬行",
      "Inchworm",
      "核心",
      "徒手",
      "每侧8–12次",
      [
        "站立，屈髋向下让双手触地",
        "双手向前走到平板支撑，再向后走回",
        "膝盖可微屈，避免塌腰"
      ]
    ],
    "mediaId": "1471",
    "sourceName": "inchworm",
    "sourceInstructions": [
      "Start in a standing position with your feet hip-width apart.",
      "Bend forward at the waist and place your hands on the ground in front of you.",
      "Walk your hands forward until you are in a high plank position, with your body in a straight line from head to toe.",
      "Pause for a moment, then walk your hands back towards your feet, keeping your legs as straight as possible.",
      "Once your hands reach your feet, stand back up to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    "level": "基础",
    "environment": "home"
  }
};
