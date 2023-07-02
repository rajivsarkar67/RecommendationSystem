import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'RecommendationSystem';
  text_from_dropdown = 'Enter User ID : ';
  button_from_dropdown = 'User Chart';
  selectedTab = 1;
  convertedArray: any = [];
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

  ngOnInit(): void {
    for(let pair of Object.entries(this.trialData)){
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
      this.button_from_dropdown = 'User Chart';
    }
    else if(val === "zone"){
      this.text_from_dropdown = 'Enter Zone ID : ';
      this.button_from_dropdown = 'Zone Chart';
    }
    else if(val === "user_zone"){
      this.text_from_dropdown = 'Enter User ID : ';
      this.button_from_dropdown = 'User Chart';
    }
    else if(val === "videoname"){
      this.text_from_dropdown = 'Enter Video Name : ';
      this.button_from_dropdown = 'Video Chart';
    }
    else if(val === "instructor"){
      this.text_from_dropdown = 'Enter Instructor ID and Name : ';
      this.button_from_dropdown = 'Instructor Chart';
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
      this.button_from_dropdown = 'Zone Trend Chart';
    }
  }
}