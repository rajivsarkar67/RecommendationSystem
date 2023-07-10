import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'RecommendationSystem';
  text_from_dropdown = 'Enter User ID : ';
  showMainWrapper:boolean=false;
  selectedTab = '';
  convertedArray: any = [];
  // tabArray = ['Response', 'User Chart'];
  tabArray = [];
  userData: any = [];
  zoneData: any = [];
  userZoneData: any = [];
  videonameData: any = [];
  instructorData: any = [];
  fociData: any = [];
  categoryData: any = [];
  equipmentData: any = [];
  overallData: any = [];

  userChart1: any;
  userChart2: any;
  userChart3: any;
  userChart4: any;
  zoneChart1: any;
  zoneChart2: any;
  zoneChart3: any;
  videonameChart1: any;
  instructorChart1: any;
  instructorChart2: any;
  trendPieChart1: any;
  trendPieChart2: any;
  trendPieChart3: any;
  trendPieChart4: any;
  trendPieChart5: any;
  


  userDataStatic: any = [{'Response':
                        {'1. Recommendation':
                        [{'value': 'Kenta Seki: Hard Core Abs', 'img': 'https://thumbs.fod247.io/thumbnails/d10cb801004dc309571027156eed5322.jpg'},
                        {'value': 'R1ZE 7: CORE K1LLER', 'img': 'https://thumbs.fod247.io/thumbnails/108f6e1c304706dcde274ff306450748.jpg'},
                        {'value': 'Hike-O-Vision Pinnacles High Peaks Trail Part One', 'img': 'https://thumbs.fod247.io/thumbnails/f00a16f927a786cb855c8ccf525aedcd.jpg'},
                        {'value': '60 min Yoga Sculpt', 'img': 'https://thumbs.fod247.io/thumbnails/d437c82f6308c77fba21db99e96d1420.jpg'},
                        {'value': 'Dance Fit Fire', 'img': 'https://thumbs.fod247.io/thumbnails/d437c82f6308c77fba21db99e96d1420.jpg'}],
                        '2. Similar Users':
                        [{'value': '13428063 -- 0.6905288827950451', 'img': 'https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg'},
                        {'value': '13429617 -- 0.6905288827950451', 'img': 'https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg'},
                        {'value': '13434631 -- 0.6905288827950451', 'img': 'https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg'},
                        {'value': '13432988 -- 0.6773573041696719', 'img': 'https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg'},
                        {'value': '13383901 -- 0.6623665942639567', 'img': 'https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg'}],
                        '3. Watch Again Videos':
                        [{'value': '35 min Yoga Sculpt Workout', 'img': 'https://thumbs.fod247.io/thumbnails/d8bfed4f4b68b2a46d56631f3cbdd15e.jpg'},
                        {'value': '30 min Yoga Sculpt with Dumbbells','img': 'https://thumbs.fod247.io/thumbnails/3e9829c29ddaa372a3f525dbcc757a23.jpg'},
                        {'value': 'Kenta Seki: Hard Core Abs', 'img': 'https://thumbs.fod247.io/thumbnails/d10cb801004dc309571027156eed5322.jpg'},
                        {'value': 'Kenta Seki: Fusion 15 - Core', 'img': 'https://thumbs.fod247.io/thumbnails/c1b8931ca47aa085449ce096565eb662.jpg'},
                        {'value': '15 min Total Body Barre', 'img': 'https://thumbs.fod247.io/thumbnails/f6c78ef7335664c804ddd88fe3eb4132.jpg'},
                        {'value': 'R1ZE 7: CORE K1LLER', 'img': 'https://thumbs.fod247.io/thumbnails/108f6e1c304706dcde274ff306450748.jpg'},
                        {'value': 'M1ND 10: FULL BODY', 'img': 'https://thumbs.fod247.io/thumbnails/def845b45f27f93d090eab9824604d7b.jpg'}],
                        '4. Actual Response':
                        [{'value': '60 min Yoga Sculpt', 'img': 'https://thumbs.fod247.io/thumbnails/d437c82f6308c77fba21db99e96d1420.jpg'},
                        {'value': '35 min Yoga Sculpt Workout', 'img': 'https://thumbs.fod247.io/thumbnails/d8bfed4f4b68b2a46d56631f3cbdd15e.jpg'},
                        {'value': '15 min Yoga Stretch for Sore Muscles', 'img': 'https://thumbs.fod247.io/thumbnails/c8581bec991a017604a9509bd2ba40de.jpg'},
                        {'value': '30 min Yoga Sculpt with Dumbbells', 'img': 'https://thumbs.fod247.io/thumbnails/3e9829c29ddaa372a3f525dbcc757a23.jpg'},
                        {'value': '10 min Stretch Routine - Day 7', 'img': 'https://thumbs.fod247.io/thumbnails/4d2f356d7445f1348abe52fbc0b08957.jpg'},
                        {'value': 'Kenta Seki: Hard Core Abs', 'img': 'https://thumbs.fod247.io/thumbnails/d10cb801004dc309571027156eed5322.jpg'},
                        {'value': '57 Min Abs Workout | Plank & Core Moves', 'img': 'https://thumbs.fod247.io/thumbnails/121755a533266c1f794767519e2e5f25.jpg'},
                        {'value': 'Kenta Seki: Fusion 15 - Core', 'img': 'https://thumbs.fod247.io/thumbnails/c1b8931ca47aa085449ce096565eb662.jpg'},
                        {'value': '15 min Total Body Barre', 'img': 'https://thumbs.fod247.io/thumbnails/f6c78ef7335664c804ddd88fe3eb4132.jpg'},
                        {'value': '60 min No Equipment Yoga Sculpt Workout', 'img': 'https://thumbs.fod247.io/thumbnails/c271ad8c89081e87996522d3a2287216.jpg'},
                        {'value': 'R1ZE 7: CORE K1LLER', 'img': 'https://thumbs.fod247.io/thumbnails/108f6e1c304706dcde274ff306450748.jpg'},
                        {'value': 'M1ND 10: FULL BODY', 'img': 'https://thumbs.fod247.io/thumbnails/def845b45f27f93d090eab9824604d7b.jpg'}]},
                        'Graph':
                        [{'User chart':
                        [{'user_top_intensity': {'labels': ['Standard', 'Advanced', 'Easy'], 'values': [19, 6, 3]},
                        'user_top_foci': {'labels': ['Yoga', 'Strength', 'Lower Body,Upper Body,Strength', 'Yoga,Strength', 'Lower Body,Upper Body,Yoga'], 'values': [12, 10, 4, 1, 1]},
                        'watch_again_videos_foci': {'labels': ['Yoga', 'Strength', 'Yoga,Strength', 'Lower Body,Upper Body,Strength', 'Lower Body,Upper Body,Yoga'], 'values': [2, 3, 0, 1, 1]},
                        'recommendations': {'labels': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 'values': ['Kenta Seki: Hard Core Abs', 'R1ZE 7: CORE K1LLER', 'Hike-O-Vision Pinnacles High Peaks Trail Part One', '60 min Yoga Sculpt', 'Walking: 40 Min Power Walk w/ Meghan', 'Rowing: 15 Min Fast & Furious Row w/ Toby', 'Upper Body Breakdown', 'Move With Meaning', 'Upper Body Breakdown', 'Move With Meaning', 'Cycling: 30 Min Country Rhythm Ride w/ Brinn', 'Twist and Sculpt', 'Dance Fit Fire', 'Move With Meaning', 'Dance Fit Fire', 'Walking: 40 Min Power Walk w/ Meghan', 'Walking: 40 Min Power Walk w/ Meghan', 'Move With Meaning', 'Move With Meaning', 'Dance Fit Fire', 'Upper Body Breakdown', 'Upper Body Breakdown', 'Upper Body Breakdown', 'Move With Meaning']}}]}]}];

  zoneDataStatic: any = [{'Response':
                        {'1. Recommendation':
                        [{'value': 'Kenta Seki: Hard Core Abs', 'img': 'https://thumbs.fod247.io/thumbnails/d10cb801004dc309571027156eed5322.jpg'},
                        {'value': 'R1ZE 7: CORE K1LLER', 'img': 'https://thumbs.fod247.io/thumbnails/108f6e1c304706dcde274ff306450748.jpg'},
                        {'value': 'Hike-O-Vision Pinnacles High Peaks Trail Part One', 'img': 'https://thumbs.fod247.io/thumbnails/f00a16f927a786cb855c8ccf525aedcd.jpg'},
                        {'value': '60 min Yoga Sculpt', 'img': 'https://thumbs.fod247.io/thumbnails/d437c82f6308c77fba21db99e96d1420.jpg'},
                        {'value': 'Dance Fit Fire', 'img': 'https://thumbs.fod247.io/thumbnails/d437c82f6308c77fba21db99e96d1420.jpg'}],
                        '2. Similar Users':
                        [{'value': '13428063 -- 0.6905288827950451', 'img': 'https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg'},
                        {'value': '13429617 -- 0.6905288827950451', 'img': 'https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg'},
                        {'value': '13434631 -- 0.6905288827950451', 'img': 'https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg'},
                        {'value': '13432988 -- 0.6773573041696719', 'img': 'https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg'},
                        {'value': '13383901 -- 0.6623665942639567', 'img': 'https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg'}],
                        '3. Watch Again Videos':
                        [{'value': '35 min Yoga Sculpt Workout', 'img': 'https://thumbs.fod247.io/thumbnails/d8bfed4f4b68b2a46d56631f3cbdd15e.jpg'},
                        {'value': '30 min Yoga Sculpt with Dumbbells','img': 'https://thumbs.fod247.io/thumbnails/3e9829c29ddaa372a3f525dbcc757a23.jpg'},
                        {'value': 'Kenta Seki: Hard Core Abs', 'img': 'https://thumbs.fod247.io/thumbnails/d10cb801004dc309571027156eed5322.jpg'},
                        {'value': 'Kenta Seki: Fusion 15 - Core', 'img': 'https://thumbs.fod247.io/thumbnails/c1b8931ca47aa085449ce096565eb662.jpg'},
                        {'value': '15 min Total Body Barre', 'img': 'https://thumbs.fod247.io/thumbnails/f6c78ef7335664c804ddd88fe3eb4132.jpg'},
                        {'value': 'R1ZE 7: CORE K1LLER', 'img': 'https://thumbs.fod247.io/thumbnails/108f6e1c304706dcde274ff306450748.jpg'},
                        {'value': 'M1ND 10: FULL BODY', 'img': 'https://thumbs.fod247.io/thumbnails/def845b45f27f93d090eab9824604d7b.jpg'}],
                        '4. Actual Response':
                        [{'value': '60 min Yoga Sculpt', 'img': 'https://thumbs.fod247.io/thumbnails/d437c82f6308c77fba21db99e96d1420.jpg'},
                        {'value': '35 min Yoga Sculpt Workout', 'img': 'https://thumbs.fod247.io/thumbnails/d8bfed4f4b68b2a46d56631f3cbdd15e.jpg'},
                        {'value': '15 min Yoga Stretch for Sore Muscles', 'img': 'https://thumbs.fod247.io/thumbnails/c8581bec991a017604a9509bd2ba40de.jpg'},
                        {'value': '30 min Yoga Sculpt with Dumbbells', 'img': 'https://thumbs.fod247.io/thumbnails/3e9829c29ddaa372a3f525dbcc757a23.jpg'},
                        {'value': '10 min Stretch Routine - Day 7', 'img': 'https://thumbs.fod247.io/thumbnails/4d2f356d7445f1348abe52fbc0b08957.jpg'},
                        {'value': 'Kenta Seki: Hard Core Abs', 'img': 'https://thumbs.fod247.io/thumbnails/d10cb801004dc309571027156eed5322.jpg'},
                        {'value': '57 Min Abs Workout | Plank & Core Moves', 'img': 'https://thumbs.fod247.io/thumbnails/121755a533266c1f794767519e2e5f25.jpg'},
                        {'value': 'Kenta Seki: Fusion 15 - Core', 'img': 'https://thumbs.fod247.io/thumbnails/c1b8931ca47aa085449ce096565eb662.jpg'},
                        {'value': '15 min Total Body Barre', 'img': 'https://thumbs.fod247.io/thumbnails/f6c78ef7335664c804ddd88fe3eb4132.jpg'},
                        {'value': '60 min No Equipment Yoga Sculpt Workout', 'img': 'https://thumbs.fod247.io/thumbnails/c271ad8c89081e87996522d3a2287216.jpg'},
                        {'value': 'R1ZE 7: CORE K1LLER', 'img': 'https://thumbs.fod247.io/thumbnails/108f6e1c304706dcde274ff306450748.jpg'},
                        {'value': 'M1ND 10: FULL BODY', 'img': 'https://thumbs.fod247.io/thumbnails/def845b45f27f93d090eab9824604d7b.jpg'}]},
                        'Graph':
                        [{'Zone chart':
                        [{'zone_top_intensity': {'labels': ['Standard', 'Flex', 'Easy'], 'values': [5, 2, 1]},
                        'similar_zone_graph': {'labels': ['Morgan Ridge Apartments', 'Lansdale Area YMCA', 'Post Centennial Park Apartments', 'Fitness 1440 - Martin', 'Marriott Opelika'], 'values': [0.7167823027758217, 0.6671731862098226, 0.6490176320842918, 0.6251288671722571, 0.6239828845772188]},
                        'recommendations': {'labels': [1, 2, 3, 4, 5], 'values': ['20-Minute Pilates 101 Workout', 'Cardio Followed by Strength', 'Cycling: 30 Min Beg Rhythm Ride w/ Meghan', 'M1ND 6: STEP', 'SH1FT 41: BEAST']}}]}]}];

  userZoneDataStatic: any = [{'Response':
                            {'1. Recommendation Video for Zone The Estates at River Pointe':
                            [{'value': "90's Hip Hop - (CTA)", 'img': 'https://thumbs.fod247.io/thumbnails/9402641b5a04ee8a173bad26397688c7.jpg'},
                            {'value': 'BODYPUMP 103 - 30min - Spanish', 'img': 'https://thumbs.fod247.io/thumbnails/bodypump-103-30min-spanish.jpg'},
                            {'value': 'Climbing and Cruising in Spain', 'img': 'https://thumbs.fod247.io/thumbnails/climbing-and-cruising-in-spain.jpg'},
                            {'value': 'Mind Over Miles - UI Test', 'img': 'https://thumbs.fod247.io/thumbnails/e817f559ff20ffc47e531412-mind-over-miles---ui-test.jpg'},
                            {'value': 'POWER STEP 15', 'img': 'https://thumbs.fod247.io/thumbnails/power-step-15.jpg'},
                            {'value': 'POWER STEP 6', 'img': 'https://thumbs.fod247.io/thumbnails/power-step-6.jpg'},
                            {'value': 'POWER STEP 8', 'img': 'https://thumbs.fod247.io/thumbnails/power-step-8.jpg'},
                            {'value': 'SPRINT 18', 'img': 'https://thumbs.fod247.io/thumbnails/7fa5eb487da1bf3cd2822b2cd6dc9685.jpg'},
                            {'value': 'Triple Bypass', 'img': 'https://thumbs.fod247.io/thumbnails/triple-bypass.jpg'},
                            {'value': 'xtrain-cardio-leg-blast', 'img': 'https://thumbs.fod247.io/thumbnails/xtrain-cardio-leg-blast.jpg'}],
                            '2. Actual Data for Zone The Estates at River Pointe':
                            [{'value': "10-Minute Strong Beginner's Body Workout", 'img': 'https://thumbs.fod247.io/thumbnails/7d981fabd9ca48fe42e4f6908cc59dbd.jpg'},
                            {'value': '30-Minute Relax & Restore', 'img': 'https://thumbs.fod247.io/thumbnails/16ac87c5a97e0ee89b35a17a6fcb5cf8.jpg'},
                            {'value': 'HIIT FOR KIDS', 'img': 'https://thumbs.fod247.io/thumbnails/6e94ce7664c90cf6978e326daa83d9ca.jpg'},
                            {'value': 'Kenta Seki: Fusion 15 - Total Body', 'img': 'https://thumbs.fod247.io/thumbnails/9273b2f834f03a53799f784aa2faaa14.jpg'},
                            {'value': 'L1FT 16: POWER', 'img': 'https://thumbs.fod247.io/thumbnails/20aa6d5fef31fd468b2af1d8c2a09def.jpg'},
                            {'value': 'M1ND 6: STEP', 'img': 'https://thumbs.fod247.io/thumbnails/6d0af2846492d125294b0ecd2ff66750.jpg'},
                            {'value': 'R1ZE 9: LOW IMPACT STRENGTH', 'img': 'https://thumbs.fod247.io/thumbnails/8a6b3c1d93f86ac981e0849915af45cb.jpg'}],
                            '3. Recommendation Video for User 13358533':
                            [{'value': ' 30 Min Yoga Stretch Routine for Hamstrings - Jour', 'img': 'https://thumbs.fod247.io/thumbnails/010b9b226d10ac8be2b9340bdece35c7.jpg'},
                            {'value': ' 30 min Yoga Routine for Any Time Of Day ', 'img': 'https://thumbs.fod247.io/thumbnails/178f58e7fa85c6e0fdf4ea7c47ba8fda.jpg'},
                            {'value': 'Circuit 22 - Beginner 2', 'img': 'https://thumbs.fod247.io/thumbnails/530fe2713d12d53a8f096c27d9632a5d.jpg'},
                            {'value': 'LES MILLS BODYBALANCE 95 Express Strength', 'img': 'https://thumbs.fod247.io/thumbnails/c4366d6df0cfbc77898c6ec9d8981d2b.jpg'},
                            {'value': 'LES MILLS BODYBALANCE 96 (45 Mins)', 'img': 'https://thumbs.fod247.io/thumbnails/2f215b17f22be663c597cb357c96fd0a.jpg'},
                            {'value': 'Sleek Ballet Bootcamp - Beginners', 'img': 'https://thumbs.fod247.io/thumbnails/d00668d9332595019b0608b3371c3bd8.jpg'},
                            {'value': 'Strong Back and Strong Core', 'img': 'https://thumbs.fod247.io/thumbnails/strong-back-strong-core.jpg'},
                            {'value': 'lareines-muffin-top-workout', 'img': 'https://thumbs.fod247.io/thumbnails/lareines-muffin-top-workout.jpg'},
                            {'value': 'lauras-bedtime-yoga', 'img': 'https://thumbs.fod247.io/thumbnails/lauras-bedtime-yoga.jpg'},
                            {'value': 'mollys-stretch-plus-core-ab-lab-on-foam-roller', 'img': 'https://thumbs.fod247.io/thumbnails/mollys-stretch-plus-core-ab-lab-on-foam-roller.jpg'}],
                            '4. Actual Data for User 13358533': [{'value': '10 min Stretch Routine - Day 7', 'img': 'https://thumbs.fod247.io/thumbnails/4d2f356d7445f1348abe52fbc0b08957.jpg'},
                            {'value': '15 min Total Body Barre', 'img': 'https://thumbs.fod247.io/thumbnails/f6c78ef7335664c804ddd88fe3eb4132.jpg'},
                            {'value': '15 min Yoga Stretch for Sore Muscles', 'img': 'https://thumbs.fod247.io/thumbnails/c8581bec991a017604a9509bd2ba40de.jpg'},
                            {'value': '30 min Yoga Sculpt with Dumbbells', 'img': 'https://thumbs.fod247.io/thumbnails/3e9829c29ddaa372a3f525dbcc757a23.jpg'},
                            {'value': '35 min Yoga Sculpt Workout', 'img': 'https://thumbs.fod247.io/thumbnails/d8bfed4f4b68b2a46d56631f3cbdd15e.jpg'},
                            {'value': '57 Min Abs Workout | Plank & Core Moves', 'img': 'https://thumbs.fod247.io/thumbnails/121755a533266c1f794767519e2e5f25.jpg'},
                            {'value': '60 min Yoga Sculpt', 'img': 'https://thumbs.fod247.io/thumbnails/d437c82f6308c77fba21db99e96d1420.jpg'},
                            {'value': 'Kenta Seki: Fusion 15 - Core', 'img': 'https://thumbs.fod247.io/thumbnails/c1b8931ca47aa085449ce096565eb662.jpg'},
                            {'value': 'Kenta Seki: Hard Core Abs', 'img': 'https://thumbs.fod247.io/thumbnails/d10cb801004dc309571027156eed5322.jpg'},
                            {'value': 'M1ND 10: FULL BODY', 'img': 'https://thumbs.fod247.io/thumbnails/def845b45f27f93d090eab9824604d7b.jpg'}]},
                            'Graph':
                            [{'User chart':
                            [{'user_top_intensity':
                            {'labels': ['Standard', 'Advanced', 'Easy'], 'values': [19, 6, 3]},
                            'user_top_foci':
                            {'labels': ['Yoga', 'Strength', 'Lower Body,Upper Body,Strength', 'Yoga,Strength', 'Lower Body,Upper Body,Yoga'], 'values': [12, 10, 4, 1, 1]},
                            'watch_again_videos_foci':
                            {'labels': ['Yoga', 'Strength', 'Yoga,Strength', 'Lower Body,Upper Body,Strength', 'Lower Body,Upper Body,Yoga'], 'values': [2, 3, 0, 1, 1]},
                            'recommendations':
                            {'labels': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 'values': ['Kenta Seki: Hard Core Abs', 'R1ZE 7: CORE K1LLER', 'Hike-O-Vision Pinnacles High Peaks Trail Part One', '60 min Yoga Sculpt', '50 min Total Body Routine with Weights', '50 min Total Body Routine with Weights', 'Jillian Michaels: Lift and Shred Workout 1', 'Jillian Michaels: Lift and Shred Workout 1', '50 min Total Body Routine with Weights', 'Jillian Michaels: Lift and Shred Workout 1', '30 min Hybrid Yoga with Weights', '20-Minute Abs & Core Finisher', '20-Minute Abs & Core Finisher', '20-Minute Abs & Core Finisher', '10-Minute Barre Arms & Abs Workout With DB', '50 min Total Body Routine with Weights', '20-Minute Abs & Core Finisher', '30 min Tabata with Weights', 'Walking: 20 Min Double Up Walk w/ Annelisa', '45 min Strength & Cardio Workout', 'lareines-lose-that-baby-fat-burn-baby-burn', '30-Minute Barre x Pilates Fusion', 'Walking: 30 Min Hi & Lo Power Walk w/ Eric', 'AmyÃ\x83Â\x82Ã\x82Â\x92s Tone & Shape No Gear 2']}}]},
                            {'Zone chart':
                            [{'zone_top_intensity':
                            {'labels': ['Standard', 'Flex', 'Easy'], 'values': [5, 2, 1]},
                            'similar_zone_graph':
                            {'labels': ['Morgan Ridge Apartments', 'Lansdale Area YMCA', 'Post Centennial Park Apartments', 'Fitness 1440 - Martin', 'Marriott Opelika'], 'values': [0.7167823027758217, 0.6671731862098226, 0.6490176320842918, 0.6251288671722571, 0.6239828845772188]},
                            'recommendations':
                            {'labels': [1, 2, 3, 4, 5], 'values': ['Non-Stop Cardio Kickboxing', 'Jillian Michaels: Kickbox Fast Fix 3', 'ChristineÃ\x82Â\x92s Ab Lab Advanced', '20-Minute HIIT Strength Workout', 'Kenta Seki: Fusion 15 - Total Body']}}]}]}];

  videonameDataStatic: any = [{'Response':
                             {'Video Recommendations for Kenta Seki: Hard Core Abs':
                             [{'value': '30-Minute HIIT Bodyweight Burn', 'img': 'https://thumbs.fod247.io/thumbnails/11298128530eb1eea8df52a8af4ad89d.jpg'},
                             {'value': '10-Minute Barre Arms & Abs Workout With DB', 'img': 'https://thumbs.fod247.io/thumbnails/966b563ab4f6cb4cadf098b5f95925c8.jpg'},
                             {'value': '15-Minute Abs & Core Burnout', 'img': 'https://thumbs.fod247.io/thumbnails/d64c344eb6cc53107b6bf24b84cf30f3.jpg'},
                             {'value': 'Kenta Seki: Fusion 15 - Core', 'img': 'https://thumbs.fod247.io/thumbnails/c1b8931ca47aa085449ce096565eb662.jpg'},
                             {'value': 'HiLIT // Full Body 1', 'img': 'https://thumbs.fod247.io/thumbnails/f69763fcc7a5f042d042de83c3cfd88e.jpg'},
                             {'value': '20-Minute Abs & Core Finisher', 'img': 'https://thumbs.fod247.io/thumbnails/b551f4e9f32242044f4525710fdd3d8e.jpg'},
                             {'value': 'CORE 42 (15 Mins)', 'img': 'https://thumbs.fod247.io/thumbnails/7735d46117b81bf0ccb313250a98e3c7.jpg'},
                             {'value': 'CORE 43 Ab Blast', 'img': 'https://thumbs.fod247.io/thumbnails/3f83bf8fcf91b70322af5a602c66eeee.jpg'},
                             {'value': 'CORE 42 (30 Mins)', 'img': 'https://thumbs.fod247.io/thumbnails/43d1240707320387d6a53147f3856478.jpg'},
                             {'value': 'BODYPUMP 119 Arms', 'img': 'https://thumbs.fod247.io/thumbnails/d69214f0d0a4d008cd69eab64267fbab.jpg'},
                             {'value': 'BODYPUMP 119 Lower Body', 'img': 'https://thumbs.fod247.io/thumbnails/063ea75c1533527c4b629b71b830a9d8.jpg'},
                             {'value': 'BODYPUMP 119 (45 Mins)', 'img': 'https://thumbs.fod247.io/thumbnails/2c28d24862a5e01c711579529cc3aa3d.jpg'},
                             {'value': 'BODYPUMP 115 (45 Mins)', 'img': 'https://thumbs.fod247.io/thumbnails/fbbadbf923d8c06dab549434cbf6c097.jpg'},
                             {'value': 'CORE 44 Ab Blast', 'img': 'https://thumbs.fod247.io/thumbnails/5015c56b2903ba4ef2b67a5927fcfce7.jpg'},
                             {'value': 'BODYPUMP 114 (45 Mins)', 'img': 'https://thumbs.fod247.io/thumbnails/a20d227576dcbbd6e4d4c067592815c9.jpg'},
                             {'value': 'CORE 40 Ab Blast', 'img': 'https://thumbs.fod247.io/thumbnails/101876edb63c7257ee060eca671fa843.jpg'},
                             {'value': 'Kenta Seki: Fusion 15 - Total Body', 'img': 'https://thumbs.fod247.io/thumbnails/9273b2f834f03a53799f784aa2faaa14.jpg'}],
                             'People also Watching follow videos with Kenta Seki: Hard Core Abs':
                             [{'value': '15-Minute Abs & Core Burnout', 'img': 'https://thumbs.fod247.io/thumbnails/d64c344eb6cc53107b6bf24b84cf30f3.jpg'},
                             {'value': 'Kenta Seki: Hard Core Abs', 'img': 'https://thumbs.fod247.io/thumbnails/d10cb801004dc309571027156eed5322.jpg'},
                             {'value': '20-Minute Abs & Core Finisher', 'img': 'https://thumbs.fod247.io/thumbnails/b551f4e9f32242044f4525710fdd3d8e.jpg'},
                             {'value': '30-Minute Barre x Pilates Fusion', 'img': 'https://thumbs.fod247.io/thumbnails/5f305acb5440b63f037ee4c12dd41bcb.jpg'},
                             {'value': '30-Minute HIIT Bodyweight Burn', 'img': 'https://thumbs.fod247.io/thumbnails/11298128530eb1eea8df52a8af4ad89d.jpg'},
                             {'value': 'Non-Stop Cardio Kickboxing', 'img': 'https://thumbs.fod247.io/thumbnails/b4da9197c603bb3744838dbf2a4a8dad.jpg'}]},
                             'Graph':
                             [{'Video chart':
                             [{'frequently_watched_graph':
                             {'labels': ['15-Minute Abs & Core Burnout', 'Kenta Seki: Hard Core Abs', '20-Minute Abs & Core Finisher', '30-Minute Barre x Pilates Fusion', '30-Minute HIIT Bodyweight Burn', 'Non-Stop Cardio Kickboxing'], 'values': [1, 1, 1, 1, 1, 1]}}]}]}];

  instructorDataStatic: any = [{'Response':
                              {'1. Video Recommendations Videos for instructor Kenta Seki':
                              [{'value': ' 25 Min Abs Workout | Flat Abs Routine ', 'img': 'https://thumbs.fod247.io/thumbnails/b4d81636a617dd1afa853692cfef3f9a.jpg'},
                              {'value': ' 34 Minute Ultimate Abs Workout | Advanced ', 'img': 'https://thumbs.fod247.io/thumbnails/72bc0219c0eb4f510523994171b0da95.jpg'},
                              {'value': 'BODYBALANCE 90 Yoga', 'img': 'https://thumbs.fod247.io/thumbnails/912bde7a1a5c567815c8958b43c3b0a4.jpg'},
                              {'value': 'BODYBALANCE 91 Flexibility', 'img': 'https://thumbs.fod247.io/thumbnails/bc99f4234c83cb565156d502197317aa.jpg'},
                              {'value': 'BODYFLOW 89', 'img': 'https://thumbs.fod247.io/thumbnails/104fc94615a9709dc36eb6610c544833.jpg'},
                              {'value': 'BODYFLOW 90', 'img': 'https://thumbs.fod247.io/thumbnails/086bc06ae3446f800d8aa9300c93bcd0.jpg'},
                              {'value': 'BODYFLOW 91 Yoga', 'img': 'https://thumbs.fod247.io/thumbnails/587c282405dfc55fd06626339b2fc952.jpg'},
                              {'value': 'Flex Train', 'img': 'https://thumbs.fod247.io/thumbnails/flex-train.jpg'},
                              {'value': 'Xtrain Ride', 'img': 'https://thumbs.fod247.io/thumbnails/xtrain-ride.jpg'},
                              {'value': 'crossfire', 'img': 'https://thumbs.fod247.io/thumbnails/crossfire.jpg'}],
                              '2. Top Videos By Instructor Kenta Seki':
                              [{'value': '15-Minute Abs & Core Burnout', 'img': 'https://thumbs.fod247.io/thumbnails/d64c344eb6cc53107b6bf24b84cf30f3.jpg'},
                              {'value': 'Kenta Seki: Fusion 15 - Core', 'img': 'https://thumbs.fod247.io/thumbnails/c1b8931ca47aa085449ce096565eb662.jpg'},
                              {'value': 'Kenta Seki: Fusion 15 - Total Body', 'img': 'https://thumbs.fod247.io/thumbnails/9273b2f834f03a53799f784aa2faaa14.jpg'}],
                              '3. Actual Data': [{'value': '15-Minute Abs & Core Burnout', 'img': 'https://thumbs.fod247.io/thumbnails/d64c344eb6cc53107b6bf24b84cf30f3.jpg'},
                              {'value': 'Kenta Seki: Fusion 15 - Core', 'img': 'https://thumbs.fod247.io/thumbnails/c1b8931ca47aa085449ce096565eb662.jpg'},
                              {'value': 'Kenta Seki: Fusion 15 - Total Body', 'img': 'https://thumbs.fod247.io/thumbnails/9273b2f834f03a53799f784aa2faaa14.jpg'},
                              {'value': 'Kenta Seki: Hard Core Abs', 'img': 'https://thumbs.fod247.io/thumbnails/d10cb801004dc309571027156eed5322.jpg'}]},
                              'Graph':
                              [{'Instructor chart':
                              [{'top_videos':
                              {'labels': ['15-Minute Abs & Core Burnout', 'Kenta Seki: Hard Core Abs', 'Kenta Seki: Fusion 15 - Total Body', 'Kenta Seki: Fusion 15 - Core'], 'values': [124, 102, 92, 39]},
                              'top_bill_bord_videos':
                              {'labels': ['15-Minute Abs & Core Burnout', 'Kenta Seki: Fusion 15 - Core', 'Kenta Seki: Fusion 15 - Total Body'], 'values': [1, 1, 1]}}]}]}];

  fociDataStatic: any = [{'Response':
                        {'1. Video Recommendations for Foci strength':
                        [{'value': '10 Minute Body: Booty Boot Camp', 'img': 'https://thumbs.fod247.io/thumbnails/10-minute-body-booty-boot-camp.jpg'},
                        {'value': 'Beginner Shred - Workout 1', 'img': 'https://thumbs.fod247.io/thumbnails/beginner-shred-workout-1.jpg'},
                        {'value': 'RIP 22 - 30min', 'img': 'https://thumbs.fod247.io/thumbnails/rip-22-30min.jpg'},
                        {'value': 'RIP 22', 'img': 'https://thumbs.fod247.io/thumbnails/rip-22.jpg'},
                        {'value': 'RIP 18 - 30min', 'img': 'https://thumbs.fod247.io/thumbnails/rip-18-30min.jpg'},
                        {'value': 'One Week Shred - Workout 1', 'img': 'https://thumbs.fod247.io/thumbnails/one-week-shred-workout-1.jpg'},
                        {'value': "Lisette's Total Body Strengthening", 'img': 'https://thumbs.fod247.io/thumbnails/lisettes-total-body-strengthening.jpg'},
                        {'value': 'Killer Body - Upper Body', 'img': 'https://thumbs.fod247.io/thumbnails/killer-body-upper-body.jpg'},
                        {'value': 'Killer Body - Lower Body', 'img': 'https://thumbs.fod247.io/thumbnails/killer-body-lower-body.jpg'},
                        {'value': 'Killer Body - Core', 'img': 'https://thumbs.fod247.io/thumbnails/killer-body-core.jpg'},
                        {'value': 'Beginner Shred - Workout 1', 'img': 'https://thumbs.fod247.io/thumbnails/beginner-shred-workout-1.jpg'},
                        {'value': 'Beginner Shred - Workout 3', 'img': 'https://thumbs.fod247.io/thumbnails/beginner-shred-workout-3.jpg'},
                        {'value': 'Beginner Shred - Workout 2', 'img': 'https://thumbs.fod247.io/thumbnails/beginner-shred-workout-2.jpg'},
                        {'value': 'Killer Abs - Level 1', 'img': 'https://thumbs.fod247.io/thumbnails/killer-abs-level-1.jpg'},
                        {'value': 'Killer Abs - Level 3', 'img': 'https://thumbs.fod247.io/thumbnails/killer-abs-level-3.jpg'},
                        {'value': 'One Week Shred - Workout 1', 'img': 'https://thumbs.fod247.io/thumbnails/one-week-shred-workout-1.jpg'},
                        {'value': 'lisettes-total-body-strengthening', 'img': 'https://thumbs.fod247.io/thumbnails/lisettes-total-body-strengthening.jpg'},
                        {'value': 'rip-8', 'img': 'https://thumbs.fod247.io/thumbnails/rip-8.jpg'},
                        {'value': 'rip-7', 'img': 'https://thumbs.fod247.io/thumbnails/rip-7.jpg'},
                        {'value': 'rip-22-30min', 'img': 'https://thumbs.fod247.io/thumbnails/rip-22-30min.jpg'}]}}];

  categoryDataStatic: any = [{'Response':
                            {'1. Video Recommendations for Category cycling':
                            [{'value': 'R1DE RHYTHM RIDE', 'img': 'https://thumbs.fod247.io/thumbnails/cf46a7ba367f53a6c56b96ece340ee42.jpg'},
                            {'value': 'Beaver Creek, Colorado Road 30min', 'img': 'https://thumbs.fod247.io/thumbnails/959a6b6505be94afe152d7fa36d782c3.jpg'},
                            {'value': 'Hang Loose - Ride the World', 'img': 'https://thumbs.fod247.io/thumbnails/3213609038295cd22433cf0224783c04.jpg'},
                            {'value': '30 Minute Classic Rhythm Ride - EDM', 'img': 'https://thumbs.fod247.io/thumbnails/c39430c57722522b66b56ac1db2c0bb9.jpg'},
                            {'value': 'R1DE: BEAT EXPRESS STRENGTH', 'img': 'https://thumbs.fod247.io/thumbnails/f3bbbd482be2acb57854db-r1de%3A-beat-express-strength.jpg'},
                            {'value': 'Bike-O-Vision Marin California Coast', 'img': 'https://thumbs.fod247.io/thumbnails/e123537ccb3c20429d7204273c365513.jpg'},
                            {'value': 'Corsica, France Soundscape 30min', 'img': 'https://thumbs.fod247.io/thumbnails/477a75eb4c2ce21d1491aedabd3dc8f8.jpg'},
                            {'value': 'Revolution Vol. 39 - 30', 'img': 'https://thumbs.fod247.io/thumbnails/9be4e5957841b8b613ed7739f3f63525.jpg'},
                            {'value': '30 Minute Rhythm Ride - Heavy Hills', 'img': 'https://thumbs.fod247.io/thumbnails/2764fc03a7e6ba8dcf4311b174bdece0.jpg'},
                            {'value': 'Doyle Armstrong - Conquer your Cadence', 'img': 'https://thumbs.fod247.io/thumbnails/2fc4651d462297527fc88058c4037bd4.jpg'},
                            {'value': 'Cycling: 20 Min Rhythm Ride w/ Meghan', 'img': 'https://thumbs.fod247.io/thumbnails/8eb6d8fb6e154d3d10d61d4abc65dc6e.jpg'},
                            {'value': 'Cycling: 30 Min Beg Rhythm Ride w/ Meghan', 'img': 'https://thumbs.fod247.io/thumbnails/4160d61d88574fd3a560e365f0a7647d.jpg'},
                            {'value': 'Cycling: 30 Min Hills & Drills Ride w/ Lee', 'img': 'https://thumbs.fod247.io/thumbnails/6aba8d431b78a73892e34c6a5497bc12.jpg'},
                            {'value': 'Cycling: 45 Min Beg Rhythm Ride w/ Meghan', 'img': 'https://thumbs.fod247.io/thumbnails/2293470063cb010400b33a06af3f5613.jpg'},
                            {'value': '20 Min Low Impact Ride w/ Brinn', 'img': 'https://thumbs.fod247.io/thumbnails/3da92e964179b705c131c7919f0b97a2.jpg'},
                            {'value': 'Cycling: 20 Min Easy Ride w/ Bernard', 'img': 'https://thumbs.fod247.io/thumbnails/bd9c7b701c3d064b36be1e1a7e3fc9a5.jpg'},
                            {'value': 'Cycling: 20 Min HIIT Ride w/ Toby', 'img': 'https://thumbs.fod247.io/thumbnails/74d85e7eb1b144947d2e13a7fc721d97.jpg'},
                            {'value': 'Cycling: 30 Min Adv Rhythm Ride w/ David', 'img': 'https://thumbs.fod247.io/thumbnails/7d554c67dd90e6ce93230ee5187a62f2.jpg'},
                            {'value': 'Cycling: 30 Min Adv Rhythm Ride w/ Meghan', 'img': 'https://thumbs.fod247.io/thumbnails/c740d28165fa645099002af6a6ede5e8.jpg'},
                            {'value': 'Cycling: 45 Min Beg Rhythm Ride w/ Eric', 'img': 'https://thumbs.fod247.io/thumbnails/3eade237bab56af406ea3a58171ea365.jpg'},
                            {'value': 'R1DE 20 MIN LOW IMPACT', 'img': 'https://thumbs.fod247.io/thumbnails/6fce579d93054089c4a781ab75558397.jpg'},
                            {'value': '20 Minute Classic Rhythm Ride', 'img': 'https://thumbs.fod247.io/thumbnails/37b5301b098b13e1bc9beafb15a18d2d.jpg'},
                            {'value': 'R1DE 7', 'img': 'https://thumbs.fod247.io/thumbnails/19f9e00dbc269a6b4b59b6c897c3d066.jpg'},
                            {'value': '20 Minute Rhythm Based Endurance Ride', 'img': 'https://thumbs.fod247.io/thumbnails/738d9da671acefb290ce38ab574db9f5.jpg'},
                            {'value': 'Beautiful Glow - Ride the World (Voice Instructed)', 'img': 'https://thumbs.fod247.io/thumbnails/21c4c0dcced5d826d26637f02c5b9004.jpg'},
                            {'value': 'LES MILLS RPM 93', 'img': 'https://thumbs.fod247.io/thumbnails/830e8f0259e5b9763b67856566c78bf5.jpg'},
                            {'value': 'Alligator Alley, Florida Guided 25min', 'img': 'https://thumbs.fod247.io/thumbnails/alligator-alley-florida.jpg'},
                            {'value': 'R1DE: BEAT EXPRESS POWER', 'img': 'https://thumbs.fod247.io/thumbnails/970ee8d6ea1d649ed8e593a7b-r1de%3A-beat-express-power.jpg'},
                            {'value': 'Cycling: 45 Min Rhythm Ride w/ David', 'img': 'https://thumbs.fod247.io/thumbnails/35c787d9d7c3ba04319449b6d014e2fb.jpg'},
                            {'value': 'Cycling: 45 Min Rhythm Ride w/ Brinn', 'img': 'https://thumbs.fod247.io/thumbnails/92763758f7d774b0efc2cb0a801f0fe7.jpg'}]}}];

  equipmentDataStatic: any = [{'Response':
                             {'1. Video Recommendations for Equipment mat':
                             [{'value': '20 Min Dance Workout | Burn 150 Calories', 'img': 'https://thumbs.fod247.io/thumbnails/5e97444c99355e2ab54f7cc83e45e86d.jpg'},
                             {'value': '15 Min Total Ab and Core', 'img': 'https://thumbs.fod247.io/thumbnails/915505fdf11918ab3ab19e19ce2228e3.jpg'},
                             {'value': '30-Minute Yoga With Adriene to Reduce Stress', 'img': 'https://thumbs.fod247.io/thumbnails/b235ee9ad4b73347c6c97009e04b7e48.jpg'},
                             {'value': 'Nadia Narain: Yoga Express - Yoga Flow', 'img': 'https://thumbs.fod247.io/thumbnails/f0122f384cf992cc9807e7cdca2034d7.jpg'},
                             {'value': 'Sleek Ballet Bootcamp - Beginners', 'img': 'https://thumbs.fod247.io/thumbnails/d00668d9332595019b0608b3371c3bd8.jpg'},
                             {'value': 'Nadia Narain: Chair Yoga', 'img': 'https://thumbs.fod247.io/thumbnails/ac877aa75133fd1619311254bd8ce44f.jpg'},
                             {'value': ' 10 Minute Abs Workout ', 'img': 'https://thumbs.fod247.io/thumbnails/f38777e90c8cdd8118350a13227e3ac8.jpg'},
                             {'value': '23 Min Abs and Butt Workout ', 'img': 'https://thumbs.fod247.io/thumbnails/413bbb562ffdc94bc6327f454ededff3.jpg'},
                             {'value': 'nicoles-dance-with-lower-body-sculpting', 'img': 'https://thumbs.fod247.io/thumbnails/nicoles-dance-with-lower-body-sculpting.jpg'},
                             {'value': '20-Minute Yoga Cardio Sculpt', 'img': 'https://thumbs.fod247.io/thumbnails/21fed0ba7c4ac23b4dfb82a8deab999e.jpg'},
                             {'value': '20-Minute Detox Yoga Flow', 'img': 'https://thumbs.fod247.io/thumbnails/5f8b48ac9ccf8a3ad3c14c14d31bcd27.jpg'},
                             {'value': '25 min Abs Workout', 'img': 'https://thumbs.fod247.io/thumbnails/a47b367f8a7430690dd201ebb91d2d23.jpg'},
                             {'value': 'lauras-energizing-relaxing-yoga-for-everyone', 'img': 'https://thumbs.fod247.io/thumbnails/lauras-energizing-relaxing-yoga-for-everyone.jpg'},
                             {'value': ' 15 Minute Abs Workout ', 'img': 'https://thumbs.fod247.io/thumbnails/ca90e1ed7ba01e4d4f4eeb9e8ee95f9a.jpg'},
                             {'value': 'Pure Stretch ', 'img': 'https://thumbs.fod247.io/thumbnails/pure-stretch.jpg'}]}}];

  overallDataStatic: any = [{'Response':
                  {'1. Trending Videos':
                  [{'value': 'Beginner Burn: Cardio', 'img': 'https://thumbs.fod247.io/thumbnails/e2907877bf669b5a2e59a3824193ceab.jpg'},
                  {'value': '30 min Total Body Apt', 'img': 'https://thumbs.fod247.io/thumbnails/2b696d6fa55969f98508121e4eb6bd43.jpg'},
                  {'value': '30-Minute HIIT Strength 1:1', 'img': 'https://thumbs.fod247.io/thumbnails/93b3c0b772265809d8dbe5f03c5d808b.jpg'},
                  {'value': 'R1ZE 7: CORE K1LLER', 'img': 'https://thumbs.fod247.io/thumbnails/93b3c0b772265809d8dbe5f03c5d808b.jpg'},
                  {'value': '20-Minute Single Dumbbell', 'img': 'https://thumbs.fod247.io/thumbnails/0ef1ea45f2cb4eec69fac805555e8a45.jpg'},
                  {'value': '15-Minute Abs & Core', 'img': 'https://thumbs.fod247.io/thumbnails/d64c344eb6cc53107b6bf24b84cf30f3.jpg'},
                  {'value': 'Beginner Burn: Core', 'img': 'https://thumbs.fod247.io/thumbnails/8a6ef6a0e8badeea277aaed21449128b.jpg'},
                  {'value': '20-Minute Nonstop Abs & Core', 'img': 'https://thumbs.fod247.io/thumbnails/93b3c0b772265809d8dbe5f03c5d808b.jpg'},
                  {'value': 'Hike-O-Vision Pinnacles', 'img': 'https://thumbs.fod247.io/thumbnails/9aa4652d5ab9ab31e59f16383062d71a.jpg'},
                  {'value': 'Kenta Seki: Fusion 15', 'img': 'https://thumbs.fod247.io/thumbnails/c1b8931ca47aa085449ce096565eb662.jpg'}],
                  '2. Trending Instructors':
                  [{'value': '4415,Will Brereton', 'img': 'https://thumbs.fod247.io/thumbnails/10851d57c93ce24a73dcb9403847ee4e.jpg'},
                  {'value': '9407,Frances Flores', 'img': 'https://thumbs.fod247.io/thumbnails/93b3c0b772265809d8dbe5f03c5d808b.jpg'},
                  {'value': '4649,Jillian Michaels', 'img': 'https://thumbs.fod247.io/thumbnails/93b3c0b772265809d8dbe5f03c5d808b.jpg'},
                  {'value': '6762,Kenta Seki', 'img': 'https://thumbs.fod247.io/thumbnails/93b3c0b772265809d8dbe5f03c5d808b.jpg'},
                  {'value': '5196,Josephine Gorchoff', 'img': 'https://thumbs.fod247.io/thumbnails/aee271c0870b002f710b3129db8fc0cb.jpg'},
                  {'value': '9408,Gideon Akande', 'img': 'https://thumbs.fod247.io/thumbnails/93b3c0b772265809d8dbe5f03c5d808b.jpg'},
                  {'value': '9380,Jaime McFaden', 'img': 'https://thumbs.fod247.io/thumbnails/93b3c0b772265809d8dbe5f03c5d808b.jpg'},
                  {'value': '9362,Casey Van-Roose', 'img': 'https://thumbs.fod247.io/thumbnails/93b3c0b772265809d8dbe5f03c5d808b.jpg'},
                  {'value': '9271,Jeni DelPozo', 'img': 'https://thumbs.fod247.io/thumbnails/93b3c0b772265809d8dbe5f03c5d808b.jpg'},
                  {'value': '3670,Mike Donavanik', 'img': 'https://thumbs.fod247.io/thumbnails/93b3c0b772265809d8dbe5f03c5d808b.jpg'}],
                  '3. Trending Categories':
                  [{'value': 'Strength', 'img': 'https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg'},
                  {'value': 'Yoga & Pilates', 'img': 'https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg'},
                  {'value': 'Cycling', 'img': 'https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg'},
                  {'value': 'HIIT', 'img': 'https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg'},
                  {'value': 'HIIT, Strength', 'img': 'https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg'}],
                  '4. Trending Equipments':
                  [{'value': 'Mat', 'img': 'https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg'},
                  {'value': 'Exercise Mat, Mat', 'img': 'https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg'},
                  {'value': 'Cycle', 'img': 'https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg'},
                  {'value': 'Dumbbell', 'img': 'https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg'},
                  {'value': 'Dumbbell, Exercise Mat, Mat', 'img': 'https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg'}]}, 
  'Graph': [{'Pie chart':
                  [{'top_countries_bar':
                  {'labels': ['USA', 'AUS', 'GBR', 'CAN', 'ESP', 'NZL', 'FIN', 'TUR', 'US', 'GGY'],
                  'values': [9486, 1497, 943, 371, 87, 53, 16, 16, 10, 6]},
                  'top_category_bar':
                  {'labels': ['Cycling', 'Yoga & Pilates', 'Cycling, Cycling', 'Strength', 'Core, Strength', 'HIIT, Strength', 'Core, Strength, Cardio', 'HIIT', 'Core', 'Strength, Cardio'],
                  'values': [2940, 1399, 696, 688, 579, 573, 513, 486, 473, 395]},
                  'top_equipment_bar':
                  {'labels': ['Cycle', 'Mat', 'Exercise Mat, Mat', 'Yoga Mat, Mat', 'Dumbbell, Exercise Mat, Mat', 'Dumbbell', 'Step, Bar, Plate', 'Dumbbell, Yoga Mat, Mat', 'Dumbbell, Mat', 'Dumbbell, Bar'],
                  'values': [3953, 1773, 1766, 869, 711, 418, 391, 273, 188, 152]},
                  'zone_pie':
                  {'labels': ['Your Fitness Offering', 'Cox Corporate Services, LLC', 'Denver International Airport', 'JJ Keller', 'Iowa Western Community College', 'Belle Chasse YMCA', 'CareSource', 'SIRVA', 'Eskenazi Health-', 'Town of Ajax'],
                  // {'labels': ['Your Fitness Offering', 'Cox Corporate Services, LLC', 'Denver International Airport', 'JJ Keller', 'Iowa Western Community College', 'Belle Chasse YMCA', 'CareSource', 'SIRVA', 'Eskenazi Health-'],
                  'values': [0.6581595974119339, 0.03271028037383177, 0.03199137311286844, 0.023005032350826744, 0.022645578720345075, 0.017253774263120056, 0.017253774263120056, 0.016175413371675055, 0.015815959741193385, 0.01509705248023005]},
                  'trending_pie':
                  {'labels': ['Upper Body Breakdown', 'Arms and Abs', 'Walking: 40 Min Power Walk w/ Meghan', 'SH1FT 46: LIIT', 'Move With Meaning', 'Rhythmic Reps', '30 min Compound Exercises with Low Impact Cardio', 'Getting in Tune', '30 min Plyometric Tabata Routine'],
                  'values': [0.08087706685837527, 0.04852624011502516, 0.03486700215672178, 0.02875629043853343, 0.026240115025161753, 0.02480230050323508, 0.024083393242271746, 0.02372393961179008, 0.02372393961179008]}}]}]}];

  constructor(private apiService: ApiService){ }

  ngOnInit(): void { }
  
  createResponseChart(value){  
    this.convertedArray = [];
    for(let pair of Object.entries(eval(`this.${value}[0]['Response']`))){
      this.convertedArray.push({name: pair[0], values: pair[1]});
    }
  }

  dropdownChanged(val: any){
    this.selectedTab = '';
    this.tabArray = [];
    if(val === "user"){
      this.text_from_dropdown = 'Enter User ID : ';
    }
    else if(val === "zone"){
      this.text_from_dropdown = 'Enter Zone ID : ';
    }
    else if(val === "user_zone"){
      this.text_from_dropdown = 'Enter User ID : ';
    }
    else if(val === "videoname"){
      this.text_from_dropdown = 'Enter Video Name : ';
    }
    else if(val === "instructor"){
      this.text_from_dropdown = 'Enter Instructor ID and Name : ';
    }
    else if(val === "foci"){
      this.text_from_dropdown = 'Enter Foci : ';
    }
    else if(val === "category"){
      this.text_from_dropdown = 'Enter Category : ';
    }
    else if(val === "equipment"){
      this.text_from_dropdown = 'Enter Equipment : ';
    }
    else if(val === "overall"){
    }
  }

  captureDetails(val: any){
    this.showMainWrapper =  true;
    this.selectedTab = 'Response';
    if(val === "user"){
      this.tabArray = ['Response', 'User Chart'];
      // this.apiService.getUserData({"UserId":13358533}).subscribe(resp => {
      //   this.userData = JSON.parse(resp);
      //   this.createUserChart();
      //   this.createResponseChart('userData');
      // })
      this.userData = this.userDataStatic;
      this.createUserChart();
      this.createResponseChart('userData');
    }
    else if(val === "zone"){
      this.tabArray = ['Response','Zone Chart'];
      // this.apiService.getZoneData({"ZoneName":"The Estates at River Pointe"}).subscribe(resp => {
      //   this.zoneData = JSON.parse(resp);
      //   this.createZoneChart();
      //   this.createResponseChart('zoneData');
      // })
      this.zoneData = this.zoneDataStatic;
      this.createZoneChart();
      this.createResponseChart('zoneData');
    }
    else if(val === "user_zone"){
      this.tabArray = ['Response','User Chart', 'Zone Chart'];
      // this.apiService.getUserZoneData({"ZoneName":"The Estates at River Pointe","UserId":13358533}).subscribe(resp => {
      //   this.userZoneData = JSON.parse(resp);
      //   this.createUserZoneChart();
      //   this.createResponseChart('userZoneData');
      // })
      this.userZoneData =this.userZoneDataStatic;
      this.createUserZoneChart();
      this.createResponseChart('userZoneData');
    }
    else if(val === "videoname"){
      this.tabArray = ['Response','Video Chart'];
      // this.apiService.getVideonameData({"VideoName" : "Kenta Seki: Hard Core Ab"}).subscribe(resp => {
      //   this.videonameData = JSON.parse(resp);
      //   this.createVideonameChart();
      //   this.createResponseChart('videonameData');
      // });
      this.videonameData = this.videonameDataStatic;
      this.createVideonameChart();
      this.createResponseChart('videonameData');
    }
    else if(val === "instructor"){
      this.tabArray = ['Response','Instructor Chart'];
      // this.apiService.getInstructorData({"InstructorId":"Kenta Seki"}).subscribe(resp => {
      //   this.instructorData = JSON.parse(resp);
      //   this.createInstructorChart();
      //   this.createResponseChart('instructorData');
      // });
      this.instructorData = this.instructorDataStatic;
      this.createInstructorChart();
      this.createResponseChart('instructorData');
    }
    else if(val === "foci"){
      this.tabArray = ['Response'];
      // this.apiService.getFociData({"Foci": "strength"}).subscribe(resp => {
      //   this.fociData = JSON.parse(resp);
      //   this.createResponseChart('fociData');
      // })
      this.fociData = this.fociDataStatic;
      this.createResponseChart('fociData');
    }
    else if(val === "category"){
      this.tabArray = ['Response'];
      // this.apiService.getCategoryData({"Category" : "cycling"}).subscribe(resp => {
      //   this.categoryData = JSON.parse(resp);
      //   this.createResponseChart('categoryData');
      // })
      this.categoryData = this.categoryDataStatic;
      this.createResponseChart('categoryData');
    }
    else if(val === "equipment"){
      this.tabArray = ['Response'];
      // this.apiService.getEquipmentData({"Equipment" : "mat"}).subscribe(resp => {
      //   this.equipmentData = JSON.parse(resp);
      //   this.createResponseChart('equipmentData');
      // })
      this.equipmentData = this.equipmentDataStatic;
      this.createResponseChart('equipmentData');
    }
    else if(val === "overall"){
      // this.tabArray = ['Response','Zone Trend Chart', 'Trend Pie Chart'];
      this.tabArray = ['Response', 'Trend Pie Chart'];
      // this.apiService.getOverallData({}).subscribe(resp => {
      //   this.overallData = JSON.parse(resp);
      //   this.createTrendPieChart();
      //   this.createResponseChart('overallData');
      // })
      this.overallData = this.overallDataStatic;
      this.createTrendPieChart();
      this.createResponseChart('overallData');
    }
  }

  createUserChart(){
    this.userChart1?.destroy();
    this.userChart2?.destroy();
    this.userChart3?.destroy();
    this.userChart4?.destroy();

    this.userChart1 = new Chart("user_chart_1", {
      type: 'bar',
      data: {
        labels: this.userData[0]['Graph'][0]['User chart'][0]['user_top_intensity']['labels'],
        datasets: [{
          label: '# of Votes',
          data: this.userData[0]['Graph'][0]['User chart'][0]['user_top_intensity']['values'],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          },
        },
      }
    });

    this.userChart2 = new Chart("user_chart_2", {
      type: 'bar',
      data: {
        labels: this.userData[0]['Graph'][0]['User chart'][0]['user_top_foci']['labels'],
        datasets: [{
          label: '# of Votes',
          data: this.userData[0]['Graph'][0]['User chart'][0]['user_top_foci']['values'],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          },
        },
      }
    });

    this.userChart3 = new Chart("user_chart_3", {
      type: 'bar',
      data: {
        labels: this.userData[0]['Graph'][0]['User chart'][0]['watch_again_videos_foci']['labels'],
        datasets: [{
          label: '# of Votes',
          data: this.userData[0]['Graph'][0]['User chart'][0]['watch_again_videos_foci']['values'],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          },
        },
      }
    });

    this.userChart4 = new Chart("user_chart_4", {
      type: 'bar',
      data: {
        labels: this.userData[0]['Graph'][0]['User chart'][0]['recommendations']['values'],
        datasets: [{
          label: '# of Votes',
          data: this.userData[0]['Graph'][0]['User chart'][0]['recommendations']['labels'],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          },
        },
      }
    });
  }

  createZoneChart(){
    this.zoneChart1?.destroy();
    this.zoneChart2?.destroy();
    this.zoneChart3?.destroy();

    this.zoneChart1 = new Chart("zone_chart_1", {
      type: 'bar',
      data: {
        labels: this.zoneData[0]['Graph'][0]['Zone chart'][0]['zone_top_intensity']['labels'],
        datasets: [{
          label: '# of Votes',
          data: this.zoneData[0]['Graph'][0]['Zone chart'][0]['zone_top_intensity']['values'],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          },
        },
      }
    });

    this.zoneChart2 = new Chart("zone_chart_2", {
      type: 'bar',
      data: {
        labels: this.zoneData[0]['Graph'][0]['Zone chart'][0]['recommendations']['values'],
        datasets: [{
          label: '# of Votes',
          data: this.zoneData[0]['Graph'][0]['Zone chart'][0]['recommendations']['labels'],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          },
        },
      }
    });

    this.zoneChart3 = new Chart("zone_chart_3", {
      type: 'bar',
      data: {
        labels: this.zoneData[0]['Graph'][0]['Zone chart'][0]['similar_zone_graph']['labels'],
        datasets: [{
          label: '# of Votes',
          data: this.zoneData[0]['Graph'][0]['Zone chart'][0]['similar_zone_graph']['values'],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          },
        },
      }
    });
  }

  createUserZoneChart(){
    this.userChart1?.destroy();
    this.userChart2?.destroy();
    this.userChart3?.destroy();
    this.userChart4?.destroy();
    this.zoneChart1?.destroy();
    this.zoneChart2?.destroy();
    this.zoneChart3?.destroy();

    this.userChart1 = new Chart("user_chart_1", {
      type: 'bar',
      data: {
        labels: this.userZoneData[0]['Graph'][0]['User chart'][0]['user_top_intensity']['labels'],
        datasets: [{
          label: '# of Votes',
          data: this.userZoneData[0]['Graph'][0]['User chart'][0]['user_top_intensity']['values'],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          },
        },
      }
    });

    this.userChart2 = new Chart("user_chart_2", {
      type: 'bar',
      data: {
        labels: this.userZoneData[0]['Graph'][0]['User chart'][0]['user_top_foci']['labels'],
        datasets: [{
          label: '# of Votes',
          data: this.userZoneData[0]['Graph'][0]['User chart'][0]['user_top_foci']['values'],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          },
        },
      }
    });

    this.userChart3 = new Chart("user_chart_3", {
      type: 'bar',
      data: {
        labels: this.userZoneData[0]['Graph'][0]['User chart'][0]['watch_again_videos_foci']['labels'],
        datasets: [{
          label: '# of Votes',
          data: this.userZoneData[0]['Graph'][0]['User chart'][0]['watch_again_videos_foci']['values'],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          },
        },
      }
    });

    this.userChart4 = new Chart("user_chart_4", {
      type: 'bar',
      data: {
        labels: this.userZoneData[0]['Graph'][0]['User chart'][0]['recommendations']['values'],
        datasets: [{
          label: '# of Votes',
          data: this.userZoneData[0]['Graph'][0]['User chart'][0]['recommendations']['labels'],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          },
        },
      }
    });

    this.zoneChart1 = new Chart("zone_chart_1", {
      type: 'bar',
      data: {
        labels: this.userZoneData[0]['Graph'][1]['Zone chart'][0]['zone_top_intensity']['labels'],
        datasets: [{
          label: '# of Votes',
          data: this.userZoneData[0]['Graph'][1]['Zone chart'][0]['zone_top_intensity']['values'],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          },
        },
      }
    });

    this.zoneChart2 = new Chart("zone_chart_2", {
      type: 'bar',
      data: {
        labels: this.userZoneData[0]['Graph'][1]['Zone chart'][0]['recommendations']['values'],
        datasets: [{
          label: '# of Votes',
          data: this.userZoneData[0]['Graph'][1]['Zone chart'][0]['recommendations']['labels'],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          },
        },
      }
    });

    this.zoneChart3 = new Chart("zone_chart_3", {
      type: 'bar',
      data: {
        labels: this.userZoneData[0]['Graph'][1]['Zone chart'][0]['similar_zone_graph']['labels'],
        datasets: [{
          label: '# of Votes',
          data: this.userZoneData[0]['Graph'][1]['Zone chart'][0]['similar_zone_graph']['values'],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          },
        },
      }
    });
  }

  createVideonameChart(){
    this.videonameChart1?.destroy();
    this.videonameChart1 = new Chart("videoname_chart_1", {
      type: 'bar',
      data: {
        labels: this.videonameData[0]['Graph'][0]['Video chart'][0]['frequently_watched_graph']['labels'],
        datasets: [{
          label: '# of Votes',
          data: this.videonameData[0]['Graph'][0]['Video chart'][0]['frequently_watched_graph']['values'],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          },
        },
      }
    })
  }

  createInstructorChart(){
    this.instructorChart1?.destroy();
    this.instructorChart2?.destroy();

    this.instructorChart1 = new Chart("instructor_chart_1", {
      type: 'bar',
      data: {
        labels: this.instructorData[0]['Graph'][0]['Instructor chart'][0]['top_videos']['labels'],
        datasets: [{
          label: '# of Votes',
          data: this.instructorData[0]['Graph'][0]['Instructor chart'][0]['top_videos']['values'],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          },
        },
      }
    })

    this.instructorChart2 = new Chart("instructor_chart_2", {
      type: 'bar',
      data: {
        labels: this.instructorData[0]['Graph'][0]['Instructor chart'][0]['top_bill_bord_videos']['labels'],
        datasets: [{
          label: '# of Votes',
          data: this.instructorData[0]['Graph'][0]['Instructor chart'][0]['top_bill_bord_videos']['values'],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          },
        },
      }
    })
  }

  createTrendPieChart(){
    this.trendPieChart1?.destroy();
    this.trendPieChart2?.destroy();
    this.trendPieChart3?.destroy();
    this.trendPieChart4?.destroy();
    this.trendPieChart5?.destroy();

    this.trendPieChart1 = new Chart("trend_pie_chart_1", {
    type: 'pie', //this denotes tha type of chart

    data: {// values on X-Axis
      labels: this.overallData[0]['Graph'][0]['Pie chart'][0]['zone_pie']['labels'],
        datasets: [{
    label: 'My First Dataset',
    data: this.overallData[0]['Graph'][0]['Pie chart'][0]['zone_pie']['values'],
    backgroundColor: [
      'rgba(255, 99, 132, 0.75)',
      'rgba(54, 162, 235, 0.75)',
      'rgba(255, 206, 86, 0.75)',
      'rgba(75, 192, 192, 0.75)',
      'rgba(153, 102, 255, 0.75)',
      'rgba(255, 159, 64, 0.75)',
      'yellow',
      'orange',
      'cyan',
      'gray',
    ],
    hoverOffset: 4
  }],
      },
      options: {
        aspectRatio:2.5
      }

    });

    this.trendPieChart2 = new Chart("trend_pie_chart_2", {
      type: 'pie', //this denotes tha type of chart
  
      data: {// values on X-Axis
        labels: this.overallData[0]['Graph'][0]['Pie chart'][0]['trending_pie']['labels'],
          datasets: [{
      label: 'My First Dataset',
      data: this.overallData[0]['Graph'][0]['Pie chart'][0]['trending_pie']['values'],
      backgroundColor: [
        'rgba(255, 99, 132, 0.75)',
        'rgba(54, 162, 235, 0.75)',
        'rgba(255, 206, 86, 0.75)',
        'rgba(75, 192, 192, 0.75)',
        'rgba(153, 102, 255, 0.75)',
        'rgba(255, 159, 64, 0.75)',
        'yellow',
        'orange',
        'cyan',
        'gray',
      ],
      hoverOffset: 4
    }],
        },
        options: {
          aspectRatio:2.5
        }
  
    });

    this.trendPieChart3 = new Chart("trend_pie_chart_3", {
      type: 'bar',
      data: {
        labels: this.overallData[0]['Graph'][0]['Pie chart'][0]['top_countries_bar']['labels'],
        datasets: [{
          label: '# of Votes',
          data: this.overallData[0]['Graph'][0]['Pie chart'][0]['top_countries_bar']['values'],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          },
        },
      }
    });

    this.trendPieChart4 = new Chart("trend_pie_chart_4", {
      type: 'bar',
      data: {
        labels: this.overallData[0]['Graph'][0]['Pie chart'][0]['top_category_bar']['labels'],
        datasets: [{
          label: '# of Votes',
          data: this.overallData[0]['Graph'][0]['Pie chart'][0]['top_category_bar']['values'],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    this.trendPieChart5 = new Chart("trend_pie_chart_5", {
      type: 'bar',
      data: {
        labels: this.overallData[0]['Graph'][0]['Pie chart'][0]['top_equipment_bar']['labels'],
        datasets: [{
          label: '# of Votes',
          data: this.overallData[0]['Graph'][0]['Pie chart'][0]['top_equipment_bar']['values'],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

  }
}