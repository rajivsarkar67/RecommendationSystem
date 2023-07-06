import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'RecommendationSystem';
  text_from_dropdown = 'Enter User ID : ';
  selectedTab = 'Response';
  convertedArray: any = [];
  tabArray = ['Response', 'User Chart'];

  chart1: any;

  userData: any = [{'Response':
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

  zoneData: any = [{'Response':
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

  overallData: any = [{'Response':
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

  ngOnInit(): void {
    for(let pair of Object.entries(this.userData[0]['Response'])){
      this.convertedArray.push({name: pair[0], values: pair[1]});
    }
  }

  ngAfterViewInit(): void {
    this.createTrendPieChart();
  }

  dropdownChanged(val: any){
    if(val === "user"){
      this.text_from_dropdown = 'Enter User ID : ';
      this.tabArray = ['Response', 'User Chart'];
    }
    else if(val === "zone"){
      this.text_from_dropdown = 'Enter Zone ID : ';
      this.tabArray = ['Response','Zone Chart'];
    }
    else if(val === "user_zone"){
      this.text_from_dropdown = 'Enter User ID : ';
      this.tabArray = ['Response','User Chart', 'Zone Chart'];
    }
    else if(val === "videoname"){
      this.text_from_dropdown = 'Enter Video Name : ';
      this.tabArray = ['Response','Video Chart'];
    }
    else if(val === "instructor"){
      this.text_from_dropdown = 'Enter Instructor ID and Name : ';
      this.tabArray = ['Response','Instructor Chart'];
    }
    else if(val === "foci"){
      this.text_from_dropdown = 'Enter Foci : ';
      this.tabArray = ['Response'];
    }
    else if(val === "category"){
      this.text_from_dropdown = 'Enter Category : ';
      this.tabArray = ['Response'];
    }
    else if(val === "equipment"){
      this.text_from_dropdown = 'Enter Equipment : ';
      this.tabArray = ['Response'];
    }
    else if(val === "overall"){
      // this.tabArray = ['Response','Zone Trend Chart', 'Trend Pie Chart'];
      this.tabArray = ['Response', 'Trend Pie Chart'];
    }
  }

  generateGraph(button){
    this.selectedTab = button;

    if(button === 'User Chart'){
      this.createUserChart();
    }
    if(button === 'Zone Chart'){
      this.createZoneChart();
    }
    if(button === 'Trend Pie Chart'){
      this.createTrendPieChart();
    }
  }

  createUserChart(){
    new Chart("user_chart_1", {
      type: 'bar',
      data: {
        labels: this.userData[0]['Graph'][0]['User chart'][0]['user_top_intensity']['labels'],
        datasets: [{
          label: '# of Votes',
          data: this.userData[0]['Graph'][0]['User chart'][0]['user_top_intensity']['values'],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
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

    new Chart("user_chart_2", {
      type: 'bar',
      data: {
        labels: this.userData[0]['Graph'][0]['User chart'][0]['user_top_foci']['labels'],
        datasets: [{
          label: '# of Votes',
          data: this.userData[0]['Graph'][0]['User chart'][0]['user_top_foci']['values'],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
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

    new Chart("user_chart_3", {
      type: 'bar',
      data: {
        labels: this.userData[0]['Graph'][0]['User chart'][0]['watch_again_videos_foci']['labels'],
        datasets: [{
          label: '# of Votes',
          data: this.userData[0]['Graph'][0]['User chart'][0]['watch_again_videos_foci']['values'],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
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

    new Chart("user_chart_4", {
      type: 'bar',
      data: {
        labels: this.userData[0]['Graph'][0]['User chart'][0]['recommendations']['values'],
        datasets: [{
          label: '# of Votes',
          data: this.userData[0]['Graph'][0]['User chart'][0]['recommendations']['labels'],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
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
    new Chart("zone_chart_1", {
      type: 'bar',
      data: {
        labels: this.zoneData[0]['Graph'][0]['Zone chart'][0]['zone_top_intensity']['labels'],
        datasets: [{
          label: '# of Votes',
          data: this.zoneData[0]['Graph'][0]['Zone chart'][0]['zone_top_intensity']['values'],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
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

    new Chart("zone_chart_2", {
      type: 'bar',
      data: {
        labels: this.zoneData[0]['Graph'][0]['Zone chart'][0]['recommendations']['values'],
        datasets: [{
          label: '# of Votes',
          data: this.zoneData[0]['Graph'][0]['Zone chart'][0]['recommendations']['labels'],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
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

    new Chart("zone_chart_3", {
      type: 'bar',
      data: {
        labels: this.zoneData[0]['Graph'][0]['Zone chart'][0]['similar_zone_graph']['labels'],
        datasets: [{
          label: '# of Votes',
          data: this.zoneData[0]['Graph'][0]['Zone chart'][0]['similar_zone_graph']['values'],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
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

  createTrendPieChart(){
    new Chart("trend_pie_chart_1", {
    type: 'pie', //this denotes tha type of chart

    data: {// values on X-Axis
      labels: this.overallData[0]['Graph'][0]['Pie chart'][0]['zone_pie']['labels'],
        datasets: [{
    label: 'My First Dataset',
    data: this.overallData[0]['Graph'][0]['Pie chart'][0]['zone_pie']['values'],
    backgroundColor: [
      // 'red',
      // 'pink',
      // 'green',
			// 'yellow',
      // 'orange',
      // 'blue',
      // 'cyan',
      // 'black',
      // 'gray',
      // 'brown'	
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

    new Chart("trend_pie_chart_2", {
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

    new Chart("trend_pie_chart_3", {
      type: 'bar',
      data: {
        labels: this.overallData[0]['Graph'][0]['Pie chart'][0]['top_countries_bar']['labels'],
        datasets: [{
          label: '# of Votes',
          data: this.overallData[0]['Graph'][0]['Pie chart'][0]['top_countries_bar']['values'],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
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

    new Chart("trend_pie_chart_4", {
      type: 'bar',
      data: {
        labels: this.overallData[0]['Graph'][0]['Pie chart'][0]['top_category_bar']['labels'],
        datasets: [{
          label: '# of Votes',
          data: this.overallData[0]['Graph'][0]['Pie chart'][0]['top_category_bar']['values'],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
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

    new Chart("trend_pie_chart_5", {
      type: 'bar',
      data: {
        labels: this.overallData[0]['Graph'][0]['Pie chart'][0]['top_equipment_bar']['labels'],
        datasets: [{
          label: '# of Votes',
          data: this.overallData[0]['Graph'][0]['Pie chart'][0]['top_equipment_bar']['values'],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
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