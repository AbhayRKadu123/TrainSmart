let data = {
    exercises: [
        {
            exercise_name: "Bench Press",
            targeted_muscle: "Chest",
            equipment: "Barbell",
            instructions: [
              "Lie down on a bench with feet flat on the floor.",
              "Grip the barbell with hands slightly wider than shoulder-width.",
              "Lower the barbell slowly to your chest.",
              "Press the barbell back up until arms are fully extended."
            ],
            sets: 4,
            reps: "8-12",
            image_url: "https://bizweb.dktcdn.net/100/011/344/files/barbell-bench-press-min.gif?v=1679371272602"
          },
          {
            exercise_name: "Incline Bench Press",
            targeted_muscle: "Upper Chest",
            equipment: "Barbell",
            instructions: [
              "Set the bench to a 45-degree incline.",
              "Grip the barbell with hands slightly wider than shoulder-width.",
              "Lower the barbell to your upper chest.",
              "Press back up to extend your arms."
            ],
            sets: 4,
            reps: "8-12",
            image_url: "https://www.fitadium.com/conseils/wp-content/uploads/2020/08/00471301-Barbell-Incline-Bench-Press_Chest_720.gif"
          },
          {
            exercise_name: "Dumbbell Flyes",
            targeted_muscle: "Chest",
            equipment: "Dumbbells",
            instructions: [
              "Lie down on a bench with a dumbbell in each hand.",
              "Extend your arms above your chest with palms facing each other.",
              "Lower the weights to the sides, keeping a slight bend in the elbows.",
              "Return to starting position by squeezing your chest."
            ],
            sets: 3,
            reps: "10-15",
            image_url: "https://th.bing.com/th/id/R.530bd32f5a362ccf6acde6ee530ea92f?rik=kpdvSGzHZIISlg&riu=http%3a%2f%2fnewlife.com.cy%2fwp-content%2fuploads%2f2019%2f11%2f03081301-Dumbbell-Fly_Chest-FIX_360.gif&ehk=TK5KmeJcMtmKCQJtbeLlyY78LI98Fo1o28XksW6qST8%3d&risl=&pid=ImgRaw&r=0"
          },
          {
            exercise_name: "Dumbbell Shoulder Press",
            targeted_muscle: "Shoulders",
            equipment: "Dumbbells",
            instructions: [
              "Sit on a bench with a dumbbell in each hand at shoulder height.",
              "Press the dumbbells upward until your arms are fully extended.",
              "Lower back to shoulder height slowly."
            ],
            sets: 4,
            reps: "8-12",
            image_url: "https://menspower.nl/wp-content/uploads/2018/02/dumbbell-shoulder-press.gif"
          },
          {
            exercise_name: "Lateral Raises",
            targeted_muscle: "Shoulders",
            equipment: "Dumbbells",
            instructions: [
              "Stand with a dumbbell in each hand at your sides.",
              "Lift the dumbbells outward to shoulder height.",
              "Lower the weights back down slowly."
            ],
            sets: 3,
            reps: "12-15",
            image_url: "https://th.bing.com/th/id/OIP.qUoLJU8NS8-cxk6jgYM3pAHaHa?rs=1&pid=ImgDetMain"
          },
          {
            exercise_name: "Front Raises",
            targeted_muscle: "Shoulders",
            equipment: "Dumbbells",
            instructions: [
              "Hold a dumbbell in each hand at your thighs.",
              "Raise one or both dumbbells to shoulder height in front of you.",
              "Lower back to starting position."
            ],
            sets: 3,
            reps: "10-15",
            image_url: "https://homeworkouts.org/wp-content/uploads/anim-dumbbell-front-raises.gif"
          },
          {
            exercise_name: "Skull Crusher",
            targeted_muscle: "Triceps",
            equipment: "Barbell",
            instructions: [
              "Lie on a bench with a barbell held above your chest.",
              "Lower the barbell towards your forehead by bending your elbows.",
              "Extend your arms to return to the starting position."
            ],
            sets: 3,
            reps: "10-12",
            image_url: "https://www.inspireusafoundation.org/wp-content/uploads/2022/08/flat-bench-skull-crusher.gif"
          },
          {
            exercise_name: "Tricep Extension",
            targeted_muscle: "Triceps",
            equipment: "Dumbbell",
            instructions: [
              "Hold a dumbbell with both hands overhead.",
              "Lower the dumbbell behind your head by bending your elbows.",
              "Extend your arms back to the starting position."
            ],
            sets: 3,
            reps: "10-12",
            image_url: "https://menspower.nl/wp-content/uploads/2018/02/dumbbell-triceps-extension.gif"
          },
          {
            exercise_name: "Tricep Dips",
            targeted_muscle: "Triceps",
            equipment: "Bodyweight",
            instructions: [
              "Place your hands on a bench behind you with feet extended.",
              "Lower your body by bending your elbows until arms are at a 90-degree angle.",
              "Push yourself back up to starting position."
            ],
            sets: 3,
            reps: "10-15",
            image_url: "https://fitliferegime.com/wp-content/uploads/2022/08/How-To-Do-Tricep-Dips.gif"
          }, {
            exercise_name: 'Pull-Ups',
            targeted_muscle: 'Back',
            equipment: 'None',
            instructions: [
              'Hang from a bar with your palms facing away.',
              'Pull your body up until your chin is above the bar.',
              'Lower yourself back down with control.'
            ],
            sets: 3,
            reps: '6-10',
            image_url: 'https://www.inspireusafoundation.org/wp-content/uploads/2023/05/weighted-chin-up-muscles.gif'
          },
          {
            exercise_name: 'Bent-Over Barbell Rows',
            targeted_muscle: 'Back',
            equipment: 'Barbell',
            instructions: [
              'Stand with your feet shoulder-width apart, bending slightly at the knees.',
              'Bend forward at the hips and grab the barbell with an overhand grip.',
              'Pull the barbell towards your torso, squeezing your shoulder blades together.'
            ],
            sets: 3,
            reps: '8-12',
            image_url: 'https://th.bing.com/th/id/R.bc7fb79315d13d39b9612813a641ca5b?rik=IvHIvVMCpwdwsA&riu=http%3a%2f%2fnewlife.com.cy%2fwp-content%2fuploads%2f2019%2f11%2f00271301-Barbell-Bent-Over-Row_Back-FIX_360.gif&ehk=%2bBPjUpgYtAHAGmFBJrcIS%2fFSH%2fwGFls%2bm%2f9cKi3dXUk%3d&risl=&pid=ImgRaw&r=0'
          },
          {
            exercise_name: 'Seated Cable Rows',
            targeted_muscle: 'Back',
            equipment: 'Cable Machine',
            instructions: [
              'Sit at a cable row machine with your feet on the platform.',
              'Pull the handle towards your abdomen, keeping your back straight.',
              'Slowly return to the starting position.'
            ],
            sets: 3,
            reps: '10-15',
            image_url: 'https://i.pinimg.com/originals/3b/19/fd/3b19fd3ba0efec4c4021d3a58dbdba91.gif'
          },
          {
            exercise_name: 'Dumbbell Rows',
            targeted_muscle: 'Back',
            equipment: 'Dumbbells',
            instructions: [
              'Place one knee and hand on a bench for support.',
              'Hold a dumbbell in the opposite hand and pull it towards your hip.',
              'Lower the dumbbell back down with control.'
            ],
            sets: 3,
            reps: '8-12 (each arm)',
            image_url: 'https://www.oldschoollabs.com/wp-content/uploads/2020/12/02921301-Dumbbell-Bent-over-Row_back_Back_720.gif'
          },
          {
            exercise_name: 'Face Pulls',
            targeted_muscle: 'Shoulders',
            equipment: 'Cable Machine',
            instructions: [
              'Stand facing a cable machine with the pulley at upper chest height.',
              'Grab the rope attachment with both hands and pull towards your face.',
              'Squeeze your shoulder blades together at the end of the movement.'
            ],
            sets: 3,
            reps: '12-15',
            image_url: 'https://www.bodybuilding.de/wp-content/uploads/2023/07/Animation-FP-stehend-beiarmig.gif'
          },
          {
            exercise_name: 'Bicep Curls',
            targeted_muscle: 'Biceps',
            equipment: 'Dumbbells',
            instructions: [
              'Stand with a dumbbell in each hand at your sides.',
              'Curl the weights up towards your shoulders, keeping your elbows close to your body.',
              'Lower the dumbbells back to the starting position.'
            ],
            sets: 3,
            reps: '10-15',
            image_url: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/03/dumbbell-bicep-curl.gif'
          },
          {
            exercise_name: 'Lat Pulldowns',
            targeted_muscle: 'Back',
            equipment: 'Lat Pulldown Machine',
            instructions: [
              'Sit at a lat pulldown machine and grab the bar with an overhand grip.',
              'Pull the bar down to your upper chest, squeezing your shoulder blades together.',
              'Slowly return the bar to the starting position.'
            ],
            sets: 3,
            reps: '8-12',
            image_url: 'https://th.bing.com/th/id/OIP.MXfG1T_5-lSYM3XnJDUMbgHaHa?rs=1&pid=ImgDetMain'
          },
          {
            exercise_name: 'Reverse Flyes',
            targeted_muscle: 'Shoulders',
            equipment: 'Dumbbells',
            instructions: [
              'Stand with a dumbbell in each hand and bend at the hips.',
              'Raise the dumbbells out to the sides, squeezing your shoulder blades together.',
              'Lower the weights back down with control.'
            ],
            sets: 3,
            reps: '10-15',
            image_url: 'https://fitliferegime.com/wp-content/uploads/2023/04/Incline-Dumbbell-Reverse-Delt-Fly.gif'
          },
          {
            exercise_name: 'Hammer Curls',
            targeted_muscle: 'Biceps',
            equipment: 'Dumbbells',
            instructions: [
              'Stand with a dumbbell in each hand at your sides, palms facing in.',
              'Curl the weights up towards your shoulders, keeping your elbows close to your body.',
              'Lower the dumbbells back to the starting position.'
            ],
            sets: 3,
            reps: '10-15',
            image_url: 'https://i.pinimg.com/originals/45/38/18/453818257067e0df3ee77eb9d184f015.gif'
          }, {
            exercise_name: 'Squats',
            targeted_muscle: 'Quadriceps, Hamstrings, Glutes',
            equipment: 'Barbell (optional)',
            instructions: [
              'Stand with feet shoulder-width apart, toes slightly pointed out.',
              'Lower your body by bending your knees and hips, keeping your chest up and back straight.',
              'Go down until your thighs are parallel to the ground, then push through your heels to return to the starting position.'
            ],
            sets: 3,
            reps: '8-12',
            image_url: 'https://cdn.shopify.com/s/files/1/0250/0362/2496/files/image4_480x480.gif?v=1664478787'
          },
          {
            exercise_name: 'Lunges',
            targeted_muscle: 'Quadriceps, Hamstrings, Glutes',
            equipment: 'Dumbbells (optional)',
            instructions: [
              'Stand upright, take a step forward with one leg, and lower your hips until both knees are bent at about a 90-degree angle.',
              'The back knee should almost touch the ground, and the front knee should stay above the ankle.',
              'Push through the front heel to return to the starting position and repeat on the other leg.'
            ],
            sets: 3,
            reps: '10-15 (each leg)',
            image_url: 'https://www.inspireusafoundation.org/wp-content/uploads/2023/07/bodyweight-forward-lunge.gif'
          },
          {
            exercise_name: 'Leg Press',
            targeted_muscle: 'Quadriceps, Hamstrings, Glutes',
            equipment: 'Leg Press Machine',
            instructions: [
              'Sit on the leg press machine with your back against the pad and feet shoulder-width apart on the platform.',
              'Push the platform away by extending your legs but do not lock your knees.',
              'Slowly return to the starting position.'
            ],
            sets: 3,
            reps: '10-15',
            image_url: 'https://th.bing.com/th/id/OIP.x-PSRxxxZ_7_E8j2GkYLygAAAA?rs=1&pid=ImgDetMain'
          },
          {
            exercise_name: 'Deadlifts',
            targeted_muscle: 'Hamstrings, Glutes, Lower Back',
            equipment: 'Barbell',
            instructions: [
              'Stand with your feet hip-width apart, barbell over the middle of your feet.',
              'Bend at your hips and knees to grab the bar with an overhand grip.',
              'Keep your back straight and lift the bar by extending your hips and knees to a standing position.'
            ],
            sets: 3,
            reps: '6-10',
            image_url: 'https://www.inspireusafoundation.org/wp-content/uploads/2021/10/how-to-deadlift.gif'
          },
          {
            exercise_name: 'Leg Curls',
            targeted_muscle: 'Hamstrings',
            equipment: 'Leg Curl Machine',
            instructions: [
              'Lie face down on the leg curl machine with your knees just off the edge and legs straight.',
              'Curl your legs up towards your glutes while keeping your hips down on the pad.',
              'Slowly lower back to the starting position.'
            ],
            sets: 3,
            reps: '10-15',
            image_url: 'https://cdn.shortpixel.ai/client/q_lqip,ret_wait/https://menspower.nl/wp-content/uploads/2018/05/lying-leg-curl.gif'
          },
          {
            exercise_name: 'Calf Raises',
            targeted_muscle: 'Calves',
            equipment: 'None (optional: dumbbells)',
            instructions: [
              'Stand with your feet shoulder-width apart and push through the balls of your feet to raise your heels off the ground.',
              'Hold for a moment at the top, then slowly lower back down.'
            ],
            sets: 3,
            reps: '12-20',
            image_url: 'https://www.inspireusafoundation.org/wp-content/uploads/2023/03/dumbbell-calf-raise.gif'
          },
          {
            exercise_name: 'Leg Extensions',
            targeted_muscle: 'Quadriceps',
            equipment: 'Leg Extension Machine',
            instructions: [
              'Sit on the leg extension machine with your back against the pad and feet under the padded lever.',
              'Extend your legs straight out in front of you while exhaling, then lower them back to the starting position.'
            ],
            sets: 3,
            reps: '10-15',
            image_url: 'https://i.pinimg.com/originals/19/77/ae/1977aec3424113ef355b1b3bca2655bc.jpg'
          },
          {
            exercise_name: 'Glute Bridges',
            targeted_muscle: 'Glutes, Hamstrings',
            equipment: 'None (optional: barbell)',
            instructions: [
              'Lie on your back with your knees bent and feet flat on the floor.',
              'Push through your heels and lift your hips off the ground, squeezing your glutes at the top.',
              'Lower back down and repeat.'
            ],
            sets: 3,
            reps: '10-15',
            image_url: 'https://gymvisual.com/img/p/6/6/7/0/6670.gif'
          },
          {
            exercise_name: 'Step-Ups',
            targeted_muscle: 'Quadriceps, Glutes',
            equipment: 'Bench or Step',
            instructions: [
              'Stand facing a bench or step with feet hip-width apart.',
              'Step up with one foot, pushing through your heel to lift your body onto the step.',
              'Step back down and repeat on the other leg.'
            ],
            sets: 3,
            reps: '10-15 (each leg)',
            image_url: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/11/step-up-com-halteres.gif'
          },
          {
            exercise_name: "Crunch",
            targeted_muscle: "Rectus Abdominis",
            equipment: "None",
            instructions: [
                "Lie on your back with your knees bent and feet flat on the floor.",
                "Place your hands behind your head or crossed over your chest.",
                "Engage your core and lift your upper body towards your knees.",
                "Hold for a second at the top, then lower back down."
            ],
            sets: 3,
            reps: "15-20",
            image_url: "https://i.pinimg.com/originals/39/cf/a0/39cfa010f845cd22c986ddd6612fe273.gif"
        },
        {
            exercise_name: "Plank",
            targeted_muscle: "Core (including Rectus Abdominis, Transverse Abdominis, and Obliques)",
            equipment: "None",
            instructions: [
                "Lie face down on a mat.",
                "Lift your body off the ground with your forearms and toes, keeping a straight line from head to heels.",
                "Engage your core and hold the position without letting your hips sag or rise."
            ],
            sets: 3,
            reps: "30-60 seconds",
            image_url: "https://th.bing.com/th/id/R.f7979dfc8b43294f480d475e1e823246?rik=FYAaQc%2fVJyDj8A&riu=http%3a%2f%2fmedia-s3-us-east-1.ceros.com%2ffidelity-interactive%2fimages%2f2019%2f04%2f23%2ffa0ba91510838f144dea9eb30cc005a7%2fplanks.gif&ehk=FBd1J%2bb3X8O6vv6UO4a4SOk%2fvLPk9u%2boRkPShVG2eu8%3d&risl=&pid=ImgRaw&r=0"
        },
        {
            exercise_name: "Bicycle Crunch",
            targeted_muscle: "Rectus Abdominis and Obliques",
            equipment: "None",
            instructions: [
                "Lie on your back with your knees raised and hands behind your head.",
                "Bring your right elbow towards your left knee while extending your right leg.",
                "Switch sides, bringing your left elbow towards your right knee.",
                "Continue alternating sides in a pedaling motion."
            ],
            sets: 3,
            reps: "15-20 per side",
            image_url: "https://gymvisual.com/33535-thickbox_default/bicycle-v-up-male.jpg"
        },
        {
            exercise_name: "Russian Twist",
            targeted_muscle: "Obliques and Rectus Abdominis",
            equipment: "Medicine ball or weight (optional)",
            instructions: [
                "Sit on the floor with your knees bent and feet flat.",
                "Lean back slightly while keeping your back straight.",
                "Hold a medicine ball or weight in front of you and twist your torso to the right, then to the left."
            ],
            sets: 3,
            reps: "10-15 per side",
            image_url: "https://th.bing.com/th/id/OIP.uhehkrjEMdS-_FloDmT6tgHaHa?rs=1&pid=ImgDetMain"
        },
        {
            exercise_name: "Leg Raises",
            targeted_muscle: "Lower Abdominals",
            equipment: "None",
            instructions: [
                "Lie on your back with your legs straight.",
                "Place your hands under your glutes for support.",
                "Lift your legs towards the ceiling while keeping them straight.",
                "Slowly lower them back down without touching the floor."
            ],
            sets: 3,
            reps: "10-15",
            image_url: "https://www.inspireusafoundation.org/wp-content/uploads/2022/06/lying-leg-raise.gif"
        },
        {
            exercise_name: "Mountain Climbers",
            targeted_muscle: "Core, including Rectus Abdominis and Obliques",
            equipment: "None",
            instructions: [
                "Start in a plank position with your hands directly under your shoulders.",
                "Bring your right knee towards your chest, then return it to the starting position.",
                "Switch legs, bringing your left knee towards your chest.",
                "Continue alternating legs quickly."
            ],
            sets: 3,
            reps: "20-30 (alternating sides)",
            image_url: "https://th.bing.com/th/id/OIP.N-BAHmFQld0woo2EzkWm3AHaHa?rs=1&pid=ImgDetMain"
        },{
            exercise_name: "Reverse Pec Deck Fly",
            targeted_muscle: "Rear Deltoids",
            equipment: "Pec Deck Machine",
            instructions: [
                "Sit on the pec deck machine with your chest against the pad and your arms extended forward, holding the handles.",
                "Adjust the seat height so that your arms are at shoulder level.",
                "Keeping a slight bend in your elbows, pull the handles out to the sides until your arms are parallel to the floor.",
                "Squeeze your shoulder blades together at the peak of the movement.",
                "Slowly return to the starting position."
            ],
            sets: 3,
            reps: "10-15",
            image_url: "https://boxlifemagazine.com/wp-content/uploads/2023/06/pec-deck-inverse.gif" // Replace with an actual image URL
        }, {
            exercise_name: "Preacher Curl",
            targeted_muscle: "Biceps Brachii",
            equipment: "Barbell or Dumbbell",
            instructions: [
                "Sit at a preacher bench with your arms resting on the pad.",
                "Grip the barbell or dumbbell with both hands, palms facing up.",
                "Curl the weight towards your shoulders while keeping your upper arms stationary.",
                "Lower the weight back down to the starting position."
            ],
            sets: 3,
            reps: "8-12",
            image_url: "https://64.media.tumblr.com/2d744e212411971088a6d4772b7b72c8/fc7d30136f3e6ce7-11/s540x810/a7d8fee0b80ff4eb96e8425baafdd744cf1c7a5c.gifv"
        },
        {
            exercise_name: "Wrist Curl",
            targeted_muscle: "Forearm Flexors",
            equipment: "Dumbbell or Barbell",
            instructions: [
                "Sit on a bench and rest your forearms on your thighs, with your wrists hanging off the edge.",
                "Hold a dumbbell or barbell with an underhand grip.",
                "Curl the weight up by flexing your wrists.",
                "Lower the weight back down to the starting position."
            ],
            sets: 3,
            reps: "12-15",
            image_url: "https://th.bing.com/th/id/R.2c9fc0eab9d24737325d3362e2686f18?rik=pDSUWff9h8Zqjg&riu=http%3a%2f%2fnewlife.com.cy%2fwp-content%2fuploads%2f2019%2f11%2f14411301-Dumbbell-Over-Bench-One-Arm-Reverse-Wrist-Curl_Forearms_360.gif&ehk=xza2hiaSuNZD9PCl3TOKJ9echHuvxse6CWT0l25%2bkhs%3d&risl=&pid=ImgRaw&r=0"
        },
        {
            exercise_name: "Reverse Wrist Curl",
            targeted_muscle: "Forearm Extensors",
            equipment: "Dumbbell or Barbell",
            instructions: [
                "Sit on a bench and rest your forearms on your thighs, with your wrists hanging off the edge.",
                "Hold a dumbbell or barbell with an overhand grip.",
                "Curl the weight up by extending your wrists.",
                "Lower the weight back down to the starting position."
            ],
            sets: 3,
            reps: "12-15",
            image_url: "https://karoldeliberato.com.br/wp-content/uploads/2023/05/image132.gif"
        }
      ]
      
}

module.exports = data;