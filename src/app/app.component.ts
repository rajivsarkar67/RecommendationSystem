import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  backgroundColorArr = ['#e95b5c','#8ed1e6','#e8a34d','#4762a5','#1caa90','#f9da8d', '#ffdb00', '#00b0f0', '#aef78e', '#8191a2'];
  title = 'RecommendationSystem';
  text_from_dropdown = 'Enter User ID : ';
  showMainWrapper:boolean=false;
  selectedTab = '';
  convertedArray: any = [];
  tabArray = [];
  userData: any = [];
  zoneData: any = [];
  userZoneData: any = [];
  videonameData: any = [];
  instructorData: any = [];
  fociData: any = [];
  categoryData: any = [];
  equipmentData: any = [];
  countryData: any = [];
  stateData: any = [];
  overallData: any = [];
  firstBox = '';
  secondBox = '';

  userChart1: any;
  userChart2: any;
  userChart3: any;
  userChart4: any;
  userChart5: any;
  zoneChart1: any;
  zoneChart2: any;
  zoneChart3: any;
  videonameChart1: any;
  instructorChart1: any;
  instructorChart2: any;
  countryChart1: any;
  countryChart2: any;
  countryChart3: any;
  countryChart4: any;
  countryChart5: any;
  countryChart6: any;
  countryChart7: any;
  countryChart8: any;
  stateChart1: any;
  stateChart2: any;
  stateChart3: any;
  stateChart4: any;
  stateChart5: any;
  stateChart6: any;
  stateChart7: any;
  stateChart8: any;
  trendPieChart1: any;
  trendPieChart2: any;
  trendPieChart3: any;
  trendPieChart4: any;
  trendPieChart5: any;
  
  countryDataStatic: any = [{"Response": {},
                            "Graph":
                            [{"Country chart":
                            [{"top_states_bar":
                            {"labels": ["FL", "TX", "MN", "CA", "NC"], "values": [25107, 21321, 19206, 10719, 9191]},
                            "top_category_pie":
                            {"labels": ["Cycling", "Yoga & Pilates", "Strength", "Core", "HIIT", "Dance", "Cycling, Cycling", "HIIT, Strength", "Youth", "Dance, Cardio"], "values": [0.132009534583064, 0.09088154492566257, 0.060485011312217195, 0.05609647705235941, 0.04967780381383322, 0.04500141402714932, 0.037810075953458304, 0.03368414673561732, 0.03269432773109244, 0.030669238849385907]},
                            "top_equipment_pie":
                            {"labels": ["Cycle", "Mat", "Exercise Mat, Mat", "Yoga Mat, Mat", "Dumbbell, Exercise Mat, Mat", "Dumbbell", "Dumbbell, Mat", "Dumbbell, Yoga Mat, Mat", "Treadmill", "Step"], "values": [0.2750651881142726, 0.20377374709877075, 0.10237399352416975, 0.07004498696237714, 0.06107624860311184, 0.04382647067251211, 0.038439496833720166, 0.023224161150749306, 0.014026189862173702, 0.01352474282930743]},
                            "trending_videos_pie":
                            {"labels": ["20-Minute Nonstop Abs & Core", "10-Minute Bodyweight HIIT Workout", "10-Minute Yoga Deep Stretch", "25-Minute Box N' Burn Bootcamp", "30-Minute Hip-Hop Tabata to Torch Calories", "MOVE! 90's Hip Hop", "No Crunch Necessary", "R1DE 20 MIN LOW IMPACT", "Cycling: 45 Min Rhythm Ride w/ David"], "values": [0.014549274096260244, 0.011824535130413079, 0.010233370772494695, 0.008366612587878032, 0.008184616664586713, 0.007472232621989267, 0.007311036232788386, 0.007300636465743167, 0.006411456383377013]},
                            "states_video_percentile":
                            {"labels": ["CA", "CO", "FL", "IL", "MA", "MN", "NC", "NJ", "PA", "TX"], "values25": [70, 90, 19, 106, 96, 1591, 30, 65, 13, 11], "values50": [61, 87, 14, 90, 96, 1362, 30, 62, 13, 7], "values75": [55, 84, 11, 78, 91, 1256, 27, 60, 13, 5]},
                            "watch_day_country":
                            {"labels": ["Friday", "Monday", "Saturday", "Sunday", "Thursday", "Tuesday", "Wednesday"], "values": [28781, 30765, 22586, 18976, 31477, 33158, 33148]},
                            "watch_time_day_country":
                            {"labels": ["Afternoon", "Evening", "Morning", "Night"], "values": [76936, 35266, 21209, 65480]},
                            "watch_time_hour_country":
                            {"labels": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], "values": [9356, 7338, 4950, 3241, 2074, 1409, 1126, 1066, 1479, 3097, 6136, 8305, 10404, 13454, 13251, 13893, 13521, 12413, 12004, 11350, 11912, 13268, 12761, 11083]}}]}]}];

  stateDataStatic: any = [{"Response": {},
                          "Graph":
                          [{"State chart":
                          [{"top_zones_bar":
                          {"labels": ["Luna at Lake Shadow-", "Workout Anytime Palm Bay", "Seminole State College of Florida", "On Top of the World Communities - 2", "Isla Antigua"], "values": [1012, 529, 501, 484, 482]},
                          "top_category_pie":
                          {"labels": ["Cycling", "Yoga & Pilates", "Core", "Dance", "HIIT", "Strength", "Cycling, Cycling", "Youth", "HIIT, Strength", "HIIT, Cardio"], "values": [0.12473126841309022, 0.08261008042041564, 0.06131061390238076, 0.056732223903177004, 0.0549008679034955, 0.05390556572975556, 0.05151684051277968, 0.03893622103670674, 0.035870690341587706, 0.03304403216816625]},
                          "top_equipment_pie":
                          {"labels": ["Cycle", "Mat", "Exercise Mat, Mat", "Yoga Mat, Mat", "Dumbbell, Exercise Mat, Mat", "Dumbbell, Mat", "Dumbbell", "Dumbbell, Yoga Mat, Mat", "Treadmill", "Elliptical"], "values": [0.30516751845542306, 0.21714934696195343, 0.10607609312890404, 0.06672345258375922, 0.05985235661555934, 0.04077228847245883, 0.04031800113571834, 0.018909710391822827, 0.011300397501419647, 0.011300397501419647]},
                          "trending_videos_pie":
                          {"labels": ["20-Minute Abs & Core Finisher", "10-Minute Bodyweight HIIT Workout", "10-Minute Yoga Deep Stretch", "R1DE 20 MIN LOW IMPACT", "30-Minute HIIT Bodyweight Burn", "Cycling: 45 Min Rhythm Ride w/ David", "20 Minute Rhythm Ride - Latin Beats", "25-Minute Box N' Burn Bootcamp", "30-Minute Hip-Hop Tabata to Torch Calories"], "values": [0.01786359439604994, 0.013006302436674562, 0.01204287262655052, 0.011440728995222993, 0.01051744209385412, 0.010116013006302436, 0.009674441009995585, 0.009634298101240417, 0.009433583557464573]},
                          "zones_video_percentile":
                          {"labels": ["Isla Antigua", "Legacy Gateway Apartments", "Luna at Lake Shadow-", "Marriott Harbor Beach Resort - Fitness Center", "On Top of the World Communities - 2", "Seminole State College of Florida", "Serenity at Lake Wales", "The Oasis at Brandon", "Venetian Apartments", "Workout Anytime Palm Bay"], "values25": [0, 0, 0, 0, 11, 0, 0, 0, 0, 0], "values50": [0, 0, 0, 0, 10, 0, 0, 0, 0, 0], "values75": [0, 0, 0, 0, 8, 0, 0, 0, 0, 0]},
                          "watch_day_states":
                          {"labels": ["Friday", "Monday", "Saturday", "Sunday", "Thursday", "Tuesday", "Wednesday"], "values": [3370, 3908, 3182, 2836, 3895, 3849, 4078]},
                          "watch_time_day_states":
                        {"labels": ["Afternoon", "Evening", "Morning", "Night"], "values": [9887, 4301, 2748, 8182]},
                        "watch_time_hour_states":
                        {"labels": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], "values": [1284, 959, 600, 395, 232, 137, 158, 135, 410, 520, 588, 937, 1365, 1638, 1761, 1791, 1672, 1660, 1451, 1407, 1443, 1475, 1520, 1580]}}]}]}];
  

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
    this.firstBox = '';
    this.secondBox = '';
    if(val === "user"){
      this.text_from_dropdown = 'Enter User ID : ';
    }
    else if(val === "zone"){
      this.text_from_dropdown = 'Enter Zone Name : ';
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
    else if(val === "country"){
      this.text_from_dropdown = 'Enter Country : ';
    }
    else if(val === "state"){
      this.text_from_dropdown = 'Enter State : ';
    }
    else if(val === "overall"){
    }
  }

  // Getting called on submit button click
  captureDetails(val: any){
    if(val === "user"){
      if(!this.firstBox){
        return;
      }
      this.tabArray = ['Response', 'User Chart'];
      this.apiService.getUserData({"UserId":this.firstBox}).subscribe(resp => {
        this.userData = JSON.parse(resp);
        this.createUserChart();
        this.createResponseChart('userData');
      })
      this.selectedTab = 'Response';
    }
    else if(val === "zone"){
      if(!this.firstBox){
        return;
      }
      this.tabArray = ['Response','Zone Chart'];
      this.apiService.getZoneData({"ZoneName":this.firstBox}).subscribe(resp => {
        this.zoneData = JSON.parse(resp);
        this.createZoneChart();
        this.createResponseChart('zoneData');
      })
      this.selectedTab = 'Response';
    }
    else if(val === "user_zone"){
      if(!this.firstBox || !this.secondBox){
        return;
      }
      this.tabArray = ['Response','User Chart', 'Zone Chart'];
      this.apiService.getUserZoneData({"ZoneName":this.secondBox,"UserId":this.firstBox}).subscribe(resp => {
        this.userZoneData = JSON.parse(resp);
        this.createUserZoneChart();
        this.createResponseChart('userZoneData');
      })
      this.selectedTab = 'Response';
    }
    else if(val === "videoname"){
      if(!this.firstBox){
        return;
      }
      this.tabArray = ['Response','Video Chart'];
      this.apiService.getVideonameData({"VideoName" : this.firstBox}).subscribe(resp => {
        this.videonameData = JSON.parse(resp);
        this.createVideonameChart();
        this.createResponseChart('videonameData');
      });
      this.selectedTab = 'Response';
    }
    else if(val === "instructor"){
      if(!this.firstBox){
        return;
      }
      this.tabArray = ['Response','Instructor Chart'];
      this.apiService.getInstructorData({"InstructorId":this.firstBox}).subscribe(resp => {
        this.instructorData = JSON.parse(resp);
        this.createInstructorChart();
        this.createResponseChart('instructorData');
      });
      this.selectedTab = 'Response';
    }
    else if(val === "foci"){
      if(!this.firstBox){
        return;
      }
      this.tabArray = ['Response'];
      this.apiService.getFociData({"Foci": this.firstBox}).subscribe(resp => {
        this.fociData = JSON.parse(resp);
        this.createResponseChart('fociData');
      })
      this.selectedTab = 'Response';
    }
    else if(val === "category"){
      if(!this.firstBox){
        return;
      }
      this.tabArray = ['Response'];
      this.apiService.getCategoryData({"Category" : this.firstBox}).subscribe(resp => {
        this.categoryData = JSON.parse(resp);
        this.createResponseChart('categoryData');
      })
      this.selectedTab = 'Response';
    }
    else if(val === "equipment"){
      if(!this.firstBox){
        return;
      }
      this.tabArray = ['Response'];
      this.apiService.getEquipmentData({"Equipment" : this.firstBox}).subscribe(resp => {
        this.equipmentData = JSON.parse(resp);
        this.createResponseChart('equipmentData');
      })
      this.selectedTab = 'Response';
    }
    else if(val === "country"){
      if(!this.firstBox){
        return;
      }
      this.tabArray = ['Country Chart'];
      this.apiService.getCountryData({"Country" : this.firstBox}).subscribe(resp => {
        this.countryData = JSON.parse(resp);
        this.createCountryChart();
      })
      // this.countryData = this.countryDataStatic;
      // this.createCountryChart();
      this.selectedTab = 'Country Chart';
    }
    else if(val === "state"){
      if(!this.firstBox){
        return;
      }
      this.tabArray = ['State Chart'];
      this.apiService.getStateData({"State" : this.firstBox}).subscribe(resp => {
        this.stateData = JSON.parse(resp);
        this.createStateChart();
      })
      // this.stateData = this.stateDataStatic;
      // this.createStateChart();
      this.selectedTab = 'State Chart';
    }
    else if(val === "overall"){
      this.tabArray = ['Response', 'Trend Pie Chart'];
      this.apiService.getOverallData({}).subscribe(resp => {
        this.overallData = JSON.parse(resp);
        this.createTrendPieChart();
        this.createResponseChart('overallData');
      })
      this.selectedTab = 'Response';
    }
    this.showMainWrapper =  true;
  }

  createUserChart(){
    this.userChart1?.destroy();
    this.userChart2?.destroy();
    this.userChart3?.destroy();
    this.userChart4?.destroy();
    this.userChart5?.destroy();

    this.userChart1 = new Chart("user_chart_1", {
      type: 'bar',
      data: {
        labels: this.userData[0]['Graph'][0]['User chart'][0]['user_top_intensity']['labels'],
        datasets: [{
          label: 'Count',
          data: this.userData[0]['Graph'][0]['User chart'][0]['user_top_intensity']['values'],
          backgroundColor: this.backgroundColorArr,
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
          label: 'Count',
          data: this.userData[0]['Graph'][0]['User chart'][0]['user_top_foci']['values'],
          backgroundColor: this.backgroundColorArr,
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
          label: 'Count',
          data: this.userData[0]['Graph'][0]['User chart'][0]['watch_again_videos_foci']['values'],
          backgroundColor: this.backgroundColorArr,
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
        labels: this.userData[0]['Graph'][0]['User chart'][0]['equipment']['values'],
        datasets: [{
          label: 'Count',
          data: this.userData[0]['Graph'][0]['User chart'][0]['equipment']['labels'],
          backgroundColor: this.backgroundColorArr,
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

    this.userChart5 = new Chart("user_chart_5", {
      type: 'bar',
      data: {
        labels: this.userData[0]['Graph'][0]['User chart'][0]['recommendations']['values'],
        datasets: [{
          label: 'Count',
          data: this.userData[0]['Graph'][0]['User chart'][0]['recommendations']['labels'],
          backgroundColor: this.backgroundColorArr,
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
          label: 'Count',
          data: this.zoneData[0]['Graph'][0]['Zone chart'][0]['zone_top_intensity']['values'],
          backgroundColor: this.backgroundColorArr,
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
          label: 'Count',
          data: this.zoneData[0]['Graph'][0]['Zone chart'][0]['recommendations']['labels'],
          backgroundColor: this.backgroundColorArr,
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
          label: 'Count',
          data: this.zoneData[0]['Graph'][0]['Zone chart'][0]['similar_zone_graph']['values'],
          backgroundColor: this.backgroundColorArr,
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
          label: 'Count',
          data: this.userZoneData[0]['Graph'][0]['User chart'][0]['user_top_intensity']['values'],
          backgroundColor: this.backgroundColorArr,
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
          label: 'Count',
          data: this.userZoneData[0]['Graph'][0]['User chart'][0]['user_top_foci']['values'],
          backgroundColor: this.backgroundColorArr,
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
          label: 'Count',
          data: this.userZoneData[0]['Graph'][0]['User chart'][0]['watch_again_videos_foci']['values'],
          backgroundColor: this.backgroundColorArr,
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
          label: 'Count',
          data: this.userZoneData[0]['Graph'][0]['User chart'][0]['recommendations']['labels'],
          backgroundColor: this.backgroundColorArr,
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
          label: 'Count',
          data: this.userZoneData[0]['Graph'][1]['Zone chart'][0]['zone_top_intensity']['values'],
          backgroundColor: this.backgroundColorArr,
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
          label: 'Count',
          data: this.userZoneData[0]['Graph'][1]['Zone chart'][0]['recommendations']['labels'],
          backgroundColor: this.backgroundColorArr,
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
          label: 'Count',
          data: this.userZoneData[0]['Graph'][1]['Zone chart'][0]['similar_zone_graph']['values'],
          backgroundColor: this.backgroundColorArr,
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
          label: 'Count',
          data: this.videonameData[0]['Graph'][0]['Video chart'][0]['frequently_watched_graph']['values'],
          backgroundColor: this.backgroundColorArr,
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
          label: 'Count',
          data: this.instructorData[0]['Graph'][0]['Instructor chart'][0]['top_videos']['values'],
          backgroundColor: this.backgroundColorArr,
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
          label: 'Count',
          data: this.instructorData[0]['Graph'][0]['Instructor chart'][0]['top_bill_bord_videos']['values'],
          backgroundColor: this.backgroundColorArr,
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

  createCountryChart(){
    this.countryChart1?.destroy();
    this.countryChart2?.destroy();
    this.countryChart3?.destroy();
    this.countryChart4?.destroy();
    this.countryChart5?.destroy();
    this.countryChart6?.destroy();
    this.countryChart7?.destroy();
    this.countryChart8?.destroy();

    this.countryChart1 = new Chart("country_chart_1", {
      type: 'bar',
      data: {
        labels: this.countryData[0]['Graph'][0]['Country chart'][0]['top_states_bar']['labels'],
        datasets: [{
          label: 'Count',
          data: this.countryData[0]['Graph'][0]['Country chart'][0]['top_states_bar']['values'],
          backgroundColor: this.backgroundColorArr,
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

    this.countryChart2 = new Chart("country_chart_2", {
      type: 'bar',
      data: {
        labels: this.countryData[0]['Graph'][0]['Country chart'][0]['top_category_pie']['labels'],
        datasets: [{
          label: 'Count',
          data: this.countryData[0]['Graph'][0]['Country chart'][0]['top_category_pie']['values'],
          backgroundColor: this.backgroundColorArr,
          borderWidth: 1
        }]
      },
      options: {}
    });

    this.countryChart3 = new Chart("country_chart_3", {
      type: 'pie',
      data: {
        labels: this.countryData[0]['Graph'][0]['Country chart'][0]['top_equipment_pie']['labels'],
        datasets: [{
          label: 'Count',
          data: this.countryData[0]['Graph'][0]['Country chart'][0]['top_equipment_pie']['values'],
          backgroundColor: this.backgroundColorArr,
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          legend: {
            position: 'left'
          }
        }
      },
    });

    this.countryChart4 = new Chart("country_chart_4", {
      type: 'pie',
      data: {
        labels: this.countryData[0]['Graph'][0]['Country chart'][0]['trending_videos_pie']['labels'],
        datasets: [{
          label: 'Count',
          data: this.countryData[0]['Graph'][0]['Country chart'][0]['trending_videos_pie']['values'],
          backgroundColor: this.backgroundColorArr,
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          legend: {
            position: 'left'
          }
        }
      }
    });
    
    this.countryChart5 = new Chart("country_chart_5", {
      type: 'bar',
      data: {
        labels: this.countryData[0]['Graph'][0]['Country chart'][0]['states_video_percentile']['labels'],
        datasets: [{
            label: '25%',
            backgroundColor: '#e95b5c',
            data: this.countryData[0]['Graph'][0]['Country chart'][0]['states_video_percentile']['values25'],
        }, {
            label: '50%',
            backgroundColor: '#8ed1e6',
            data: this.countryData[0]['Graph'][0]['Country chart'][0]['states_video_percentile']['values50'],
        }, {
            label: '75%',
            backgroundColor: '#e8a34d',
            data: this.countryData[0]['Graph'][0]['Country chart'][0]['states_video_percentile']['values75'],
        }],
      },
      options: {
      }
    });

    this.countryChart6 = new Chart("country_chart_6", {
      type: 'bar',
      data: {
        labels: this.countryData[0]['Graph'][0]['Country chart'][0]['watch_day_country']['labels'],
        datasets: [{
          label: 'Count',
          data: this.countryData[0]['Graph'][0]['Country chart'][0]['watch_day_country']['values'],
          backgroundColor: this.backgroundColorArr,
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

    this.countryChart7 = new Chart("country_chart_7", {
      type: 'bar',
      data: {
        labels: this.countryData[0]['Graph'][0]['Country chart'][0]['watch_time_day_country']['labels'],
        datasets: [{
          label: 'Count',
          data: this.countryData[0]['Graph'][0]['Country chart'][0]['watch_time_day_country']['values'],
          backgroundColor: this.backgroundColorArr,
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

    this.countryChart8 = new Chart("country_chart_8", {
      type: 'line',
      data: {
        labels: this.countryData[0]['Graph'][0]['Country chart'][0]['watch_time_hour_country']['labels'],
        datasets: [{
          label: 'Count',
          data: this.countryData[0]['Graph'][0]['Country chart'][0]['watch_time_hour_country']['values'],
          backgroundColor: this.backgroundColorArr,
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

  createStateChart(){
    this.stateChart1?.destroy();
    this.stateChart2?.destroy();
    this.stateChart3?.destroy();
    this.stateChart4?.destroy();
    this.stateChart5?.destroy();
    this.stateChart6?.destroy();
    this.stateChart7?.destroy();
    this.stateChart8?.destroy();

    this.stateChart1 = new Chart("state_chart_1", {
      type: 'bar',
      data: {
        labels: this.stateData[0]['Graph'][0]['State chart'][0]['top_zones_bar']['labels'],
        datasets: [{
          label: 'Count',
          data: this.stateData[0]['Graph'][0]['State chart'][0]['top_zones_bar']['values'],
          backgroundColor: this.backgroundColorArr,
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

    this.stateChart2 = new Chart("state_chart_2", {
      type: 'bar',
      data: {
        labels: this.stateData[0]['Graph'][0]['State chart'][0]['top_category_pie']['labels'],
        datasets: [{
          label: 'Count',
          data: this.stateData[0]['Graph'][0]['State chart'][0]['top_category_pie']['values'],
          backgroundColor: this.backgroundColorArr,
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          legend: {
            // title: {
            //   display: true,
            //   text: 'Legend Title',
            // }
            // position: 'right'
          }
        }
      },
    });

    this.stateChart3 = new Chart("state_chart_3", {
      type: 'doughnut',
      data: {
        labels: this.stateData[0]['Graph'][0]['State chart'][0]['top_equipment_pie']['labels'],
        datasets: [{
          label: 'Count',
          data: this.stateData[0]['Graph'][0]['State chart'][0]['top_equipment_pie']['values'],
          backgroundColor: this.backgroundColorArr,
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          legend: {
            position: 'left'
          }
        }
      },
    });

    this.stateChart4 = new Chart("state_chart_4", {
      type: 'doughnut',
      data: {
        labels: this.stateData[0]['Graph'][0]['State chart'][0]['trending_videos_pie']['labels'],
        datasets: [{
          label: 'Count',
          data: this.stateData[0]['Graph'][0]['State chart'][0]['trending_videos_pie']['values'],
          backgroundColor: this.backgroundColorArr,
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          legend: {
            position: 'left'
          }
        }
      }
    });

    this.stateChart5 = new Chart("state_chart_5", {
      type: 'bar',
      data: {
        labels: this.stateData[0]['Graph'][0]['State chart'][0]['zones_video_percentile']['labels'],
        datasets: [{
            label: '25%',
            backgroundColor: '#e95b5c',
            data: this.stateData[0]['Graph'][0]['State chart'][0]['zones_video_percentile']['values25'],
        }, {
            label: '50%',
            backgroundColor: '#83d1e6',
            data: this.stateData[0]['Graph'][0]['State chart'][0]['zones_video_percentile']['values50'],
        }, {
            label: '75%',
            backgroundColor: '#e8a34d',
            data: this.stateData[0]['Graph'][0]['State chart'][0]['zones_video_percentile']['values75'],
        }],
    },
    options: {}
    });

    this.stateChart6 = new Chart("state_chart_6", {
      type: 'bar',
      data: {
        labels: this.stateData[0]['Graph'][0]['State chart'][0]['watch_day_states']['labels'],
        datasets: [{
          label: 'Count',
          data: this.stateData[0]['Graph'][0]['State chart'][0]['watch_day_states']['values'],
          backgroundColor: this.backgroundColorArr,
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

    this.stateChart7 = new Chart("state_chart_7", {
      type: 'bar',
      data: {
        labels: this.stateData[0]['Graph'][0]['State chart'][0]['watch_time_day_states']['labels'],
        datasets: [{
          label: 'Count',
          data: this.stateData[0]['Graph'][0]['State chart'][0]['watch_time_day_states']['values'],
          backgroundColor: this.backgroundColorArr,
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

    this.stateChart8 = new Chart("state_chart_8", {
      type: 'line',
      data: {
        labels: this.stateData[0]['Graph'][0]['State chart'][0]['watch_time_hour_states']['labels'],
        datasets: [{
          label: 'Count',
          data: this.stateData[0]['Graph'][0]['State chart'][0]['watch_time_hour_states']['values'],
          backgroundColor: this.backgroundColorArr,
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
          label: '',
          data: this.overallData[0]['Graph'][0]['Pie chart'][0]['zone_pie']['values'],
          backgroundColor: this.backgroundColorArr,
        }],
      },
      options: {
        plugins: {
          legend: {
            position: 'left'
          }
        }
      }

    });

    this.trendPieChart2 = new Chart("trend_pie_chart_2", {
      type: 'pie', //this denotes tha type of chart
  
      data: {// values on X-Axis
        labels: this.overallData[0]['Graph'][0]['Pie chart'][0]['trending_pie']['labels'],
          datasets: [{
          label: '',
          data: this.overallData[0]['Graph'][0]['Pie chart'][0]['trending_pie']['values'],
          backgroundColor: this.backgroundColorArr,
        }],
      },
      options: {
        plugins: {
          legend: {
            position: 'left'
          }
        }
      }
  
    });

    this.trendPieChart3 = new Chart("trend_pie_chart_3", {
      type: 'bar',
      data: {
        labels: this.overallData[0]['Graph'][0]['Pie chart'][0]['top_countries_bar']['labels'],
        datasets: [{
          label: 'Count',
          data: this.overallData[0]['Graph'][0]['Pie chart'][0]['top_countries_bar']['values'],
          backgroundColor: this.backgroundColorArr,
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
          label: 'Count',
          data: this.overallData[0]['Graph'][0]['Pie chart'][0]['top_category_bar']['values'],
          backgroundColor: this.backgroundColorArr,
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
          label: 'Count',
          data: this.overallData[0]['Graph'][0]['Pie chart'][0]['top_equipment_bar']['values'],
          backgroundColor: this.backgroundColorArr,
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