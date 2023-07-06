import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'RecommendationSystem';
  text_from_dropdown = 'Enter User ID : ';
  selectedTab = 'Response';
  convertedArray: any = [];
  tabArray = ['Response', 'User Chart'];

  trialData: any = {'1. Trending Videos':
              [{'value': "Stretch Total Body 20mins with Lisa #1",'img': 'https://images.unsplash.com/photo-1562771379-eafdca7a02f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'},
              {'value': "Meditation 20mins with Liana #2",'img': 'https://images.pexels.com/photos/8436490/pexels-photo-8436490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
              {'value': "25 min Pilates Bodyweight Arms Workout",'img': 'https://images.pexels.com/photos/1103242/pexels-photo-1103242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
              {'value': 'Walking: 40 Min Power Walk w/ Meghan','img': 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
              {'value': '20-Minute Ab-Blast Dance Cardio Workout','img': 'https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'},
              {'value': 'Move With Meaning','img': 'https://images.pexels.com/photos/1582161/pexels-photo-1582161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},],
              '2. Trending Instructors': 
              [{'value': "9452,Shauna Hawkes",'img': 'https://images.pexels.com/photos/5302897/pexels-photo-5302897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
              {'value': "9289,Jason Loebig",'img': 'https://images.pexels.com/photos/6456140/pexels-photo-6456140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
              {'value': '9474,Angela Mifsud','img': 'https://images.pexels.com/photos/6551212/pexels-photo-6551212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
              {'value': '9453,Jan Denecke','img': 'https://images.pexels.com/photos/6111626/pexels-photo-6111626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
              {'value': '9457,Brodie Rees','img': 'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'},]}

  newData: any = [{'Response':
                  {'1. Trending Videos':
                  [{'value': 'Beginner Burn: Cardio', 'img': 'https://thumbs.fod247.io/thumbnails/e2907877bf669b5a2e59a3824193ceab.jpg'},
                  {'value': '30 min Total Body Apt Friendly Workout', 'img': 'https://thumbs.fod247.io/thumbnails/2b696d6fa55969f98508121e4eb6bd43.jpg'},
                  {'value': '30-Minute HIIT Strength 1:1', 'img': 'https://thumbs.fod247.io/thumbnails/93b3c0b772265809d8dbe5f03c5d808b.jpg'},
                  {'value': 'R1ZE 7: CORE K1LLER', 'img': ''},
                  {'value': '20-Minute Single Dumbbell Demolition', 'img': 'https://thumbs.fod247.io/thumbnails/0ef1ea45f2cb4eec69fac805555e8a45.jpg'},
                  {'value': '15-Minute Abs & Core Burnout', 'img': 'https://thumbs.fod247.io/thumbnails/d64c344eb6cc53107b6bf24b84cf30f3.jpg'},
                  {'value': 'Beginner Burn: Core', 'img': 'https://thumbs.fod247.io/thumbnails/8a6ef6a0e8badeea277aaed21449128b.jpg'},
                  {'value': '20-Minute Nonstop Abs & Core', 'img': ''}, {'value': 'Hike-O-Vision Pinnacles NP High Peaks Trail Three', 'img': 'https://thumbs.fod247.io/thumbnails/9aa4652d5ab9ab31e59f16383062d71a.jpg'},
                  {'value': 'Kenta Seki: Fusion 15 - Core', 'img': 'https://thumbs.fod247.io/thumbnails/c1b8931ca47aa085449ce096565eb662.jpg'}],
                  '2. Trending Instructors':
                  [{'value': '4415,Will Brereton', 'img': 'https://thumbs.fod247.io/thumbnails/10851d57c93ce24a73dcb9403847ee4e.jpg'},
                  {'value': '9407,Frances Flores', 'img': ''},
                  {'value': '4649,Jillian Michaels', 'img': ''},
                  {'value': '6762,Kenta Seki', 'img': ''},
                  {'value': '5196,Josephine Gorchoff', 'img': 'https://thumbs.fod247.io/thumbnails/aee271c0870b002f710b3129db8fc0cb.jpg'},
                  {'value': '9408,Gideon Akande', 'img': ''},
                  {'value': '9380,Jaime McFaden', 'img': ''},
                  {'value': '9362,Casey Van-Roose', 'img': ''},
                  {'value': '9271,Jeni DelPozo', 'img': ''},
                  {'value': '3670,Mike Donavanik', 'img': ''}],
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
                  'values': [0.6581595974119339, 0.03271028037383177, 0.03199137311286844, 0.023005032350826744, 0.022645578720345075, 0.017253774263120056, 0.017253774263120056, 0.016175413371675055, 0.015815959741193385, 0.01509705248023005]},
                  'trending_pie':
                  {'labels': ['Upper Body Breakdown', 'Arms and Abs', 'Walking: 40 Min Power Walk w/ Meghan', 'SH1FT 46: LIIT', 'Move With Meaning', 'Rhythmic Reps', '30 min Compound Exercises with Low Impact Cardio', 'Getting in Tune', '30 min Plyometric Tabata Routine'],
                  'values': [0.08087706685837527, 0.04852624011502516, 0.03486700215672178, 0.02875629043853343, 0.026240115025161753, 0.02480230050323508, 0.024083393242271746, 0.02372393961179008, 0.02372393961179008]}}]}]}]

  ngOnInit(): void {
    console.log(this.newData[0]);
    for(let pair of Object.entries(this.newData[0]['Response'])){
      this.convertedArray.push({name: pair[0], values: pair[1]});
      console.log(pair[0]);
      console.log(pair[1]);
    }
    console.log(this.convertedArray);
  }
  dropdownChanged(val: any){
    console.log(val);
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
      this.tabArray = ['Response','Zone Trend Chart', 'Trend Pie Chart'];
    }
  }
}