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
  b2cData = [{"Response": {}, "Graph": [
                                        {"B2C Charts": [{"USA_Usertype":
                                            {"labels": ["B2C Mobile - Apple", "B2C Mobile - Android", "FLEX Web - Windows OS", "Guzzle Url", "FLEX Web - Mac OS", "FLEX Web - Android OS", "FLEX Web - Linux/Unix OS", "Media Hub", "Unknown"],
                                            "values": [0.30965567059956656, 0.205514086202745, 0.18974235492415123, 0.13821333975439443, 0.09390801830002408, 0.027570431013725017, 0.013243438478208525, 0.012280279316156995, 0.009872381411028173]},
                                            "AUS_Usertype":
                                            {"labels": ["Guzzle Url", "B2C Mobile - Android", "Media Hub", "B2C Mobile - Apple", "FLEX Web - Windows OS"], 
                                            "values": [0.9173387096774194, 0.04032258064516129, 0.03528225806451613, 0.004032258064516129, 0.0030241935483870967]}, 
                                            "GBR_Usertype": 
                                            {"labels": ["Guzzle Url", "B2C Mobile - Apple", "B2C Mobile - Android", "Media Hub", "FLEX Web - Mac OS", "FLEX Web - Android OS", "FLEX Web - Windows OS"], 
                                            "values": [0.9468675654242664, 0.01586042823156225, 0.013481363996827915, 0.007930214115781126, 0.006344171292624901, 0.006344171292624901, 0.0031720856463124504]}, 
                                            "CAN_Usertype": 
                                            {"labels": ["Guzzle Url", "FLEX Web - Mac OS", "B2C Mobile - Apple", "B2C Mobile - Android", "FLEX Web - Windows OS", "Media Hub"], 
                                            "values": [0.4245810055865922, 0.1787709497206704, 0.1787709497206704, 0.17318435754189945, 0.03910614525139665, 0.00558659217877095]}, 
                                            "NZL_Usertype": 
                                            {"labels": ["Guzzle Url", "B2C Mobile - Apple", "FLEX Web - Windows OS", "FLEX Web - Mac OS"], 
                                            "values": [0.9363207547169812, 0.03773584905660377, 0.01650943396226415, 0.009433962264150943]}, 
                                            "licence_pie": 
                                            {"labels": ["Renewing Royalty Free", "Platform Pay-per-play", "Elective Add-on and Enterprise Pay-per-play", "Owned", "Perpetual Royalty Free", "Customer Content", "Elective Add-On"], 
                                            "values": [43.13, 36.92, 16.21, 2.4, 0.92, 0.4, 0.01]}, 
                                            "watch_day_flex": 
                                            {"labels": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], 
                                            "values": [469, 546, 627, 418, 375, 202, 180]}, 
                                            "watch_time_day_flex": 
                                            {"labels": ["Morning", "Afternoon", "Evening", "Night"], 
                                            "values": [298, 1262, 430, 827]}, 
                                            "watch_time_hour_compare": 
                                            {"labels": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], 
                                            "valuesFlex": [122, 115, 73, 34, 34, 29, 14, 12, 11, 28, 91, 142, 182, 229, 293, 194, 172, 192, 150, 115, 165, 147, 120, 153], 
                                            "valuesB2c": [275, 264, 221, 167, 115, 45, 39, 21, 20, 81, 193, 293, 311, 296, 252, 233, 201, 192, 177, 163, 241, 298, 278, 305]}, 
                                            "watch_day_b2c_android": 
                                            {"labels": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], 
                                            "values": [321, 339, 372, 278, 250, 162, 179]}, 
                                            "watch_day_b2c_ios": 
                                            {"labels": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], 
                                            "values": [512, 496, 550, 349, 323, 269, 281]}, 
                                            "watch_time_day_b2c_android": 
                                            {"labels": ["Morning", "Afternoon", "Evening", "Night"], 
                                            "values": [264, 558, 257, 822]}, 
                                            "watch_time_day_b2c_ios": 
                                            {"labels": ["Morning", "Afternoon", "Evening", "Night"], 
                                            "values": [383, 927, 324, 1146]}, 
                                            "watch_time_hour_b2c_compare": 
                                            {"labels": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], 
                                            "valuesAND": [132, 128, 71, 82, 63, 11, 22, 8, 12, 20, 56, 146, 115, 91, 116, 84, 77, 75, 74, 64, 119, 120, 87, 128], 
                                            "valuesIOS": [143, 136, 150, 85, 52, 34, 17, 13, 8, 61, 137, 147, 196, 205, 136, 149, 124, 117, 103, 99, 122, 178, 191, 177]}}]}]}]
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
  b2cChart1: any;
  b2cChart2: any;
  b2cChart3: any;
  b2cChart4: any;
  b2cChart5: any;
  b2cChart6: any;
  b2cChart7: any;
  b2cChart8: any;
  b2cChart9: any;
  b2cChart10: any;
  b2cChart11: any;
  b2cChart12: any;
  b2cChart13: any;
  b2cChart14: any;
  

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
    this.convertedArray = [];
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
    else if(val === "b2c"){
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
        this.createResponseChart('userData');
        this.createUserChart();
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
        this.createResponseChart('zoneData');
        this.createZoneChart();
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
        this.createResponseChart('userZoneData');
        this.createUserZoneChart();
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
        this.createResponseChart('videonameData');
        this.createVideonameChart();
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
        this.createResponseChart('instructorData');
        this.createInstructorChart();
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
      this.selectedTab = 'State Chart';
    }
    else if(val === "overall"){
      this.tabArray = ['Response', 'Trend Pie Chart'];
      this.apiService.getOverallData({}).subscribe(resp => {
        this.overallData = JSON.parse(resp);
        this.createResponseChart('overallData');
        this.createTrendPieChart();
      })
      this.selectedTab = 'Response';
    }
    else if(val === "b2c"){
      this.tabArray = ['B2C Analytics'];
      // this.apiService.getb2cData({}).subscribe(resp => {
      //   this.b2cData = JSON.parse(resp);
      //   console.log(this.b2cData);
      //   this.createb2cChart();
      // })
      this.createb2cChart();
      this.selectedTab = 'B2C Analytics';
    }
    this.showMainWrapper =  true;
  }

  createUserChart(){
    this.userChart1?.destroy();
    this.userChart2?.destroy();
    this.userChart3?.destroy();
    this.userChart4?.destroy();
    this.userChart5?.destroy();

    console.log(this.userData[0]['Graph'][0]['User chart'][0]);

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
        labels: this.userData[0]['Graph'][0]['User chart'][0]['user_equip']['labels'],
        datasets: [{
          label: 'Count',
          data: this.userData[0]['Graph'][0]['User chart'][0]['user_equip']['values'],
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

  createb2cChart(){
    this.b2cChart1?.destroy();
    this.b2cChart2?.destroy();
    this.b2cChart3?.destroy();
    this.b2cChart4?.destroy();
    this.b2cChart5?.destroy();
    this.b2cChart6?.destroy();
    this.b2cChart7?.destroy();
    this.b2cChart8?.destroy();
    this.b2cChart9?.destroy();
    this.b2cChart10?.destroy();
    this.b2cChart11?.destroy();
    this.b2cChart12?.destroy();
    this.b2cChart13?.destroy();
    this.b2cChart14?.destroy();

    this.b2cChart1 = new Chart("b2c_chart_1", {
      type: 'bar',
      data: {
        labels: this.b2cData[0]['Graph'][0]['B2C Charts'][0]['USA_Usertype']['labels'],
        datasets: [{
          label: 'Count',
          data: this.b2cData[0]['Graph'][0]['B2C Charts'][0]['USA_Usertype']['values'],
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

    this.b2cChart2 = new Chart("b2c_chart_2", {
      type: 'bar',
      data: {
        labels: this.b2cData[0]['Graph'][0]['B2C Charts'][0]['AUS_Usertype']['labels'],
        datasets: [{
          label: 'Count',
          data: this.b2cData[0]['Graph'][0]['B2C Charts'][0]['AUS_Usertype']['values'],
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

    this.b2cChart3 = new Chart("b2c_chart_3", {
      type: 'bar',
      data: {
        labels: this.b2cData[0]['Graph'][0]['B2C Charts'][0]['GBR_Usertype']['labels'],
        datasets: [{
          label: 'Count',
          data: this.b2cData[0]['Graph'][0]['B2C Charts'][0]['GBR_Usertype']['values'],
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

    this.b2cChart4 = new Chart("b2c_chart_4", {
      type: 'bar',
      data: {
        labels: this.b2cData[0]['Graph'][0]['B2C Charts'][0]['CAN_Usertype']['labels'],
        datasets: [{
          label: 'Count',
          data: this.b2cData[0]['Graph'][0]['B2C Charts'][0]['CAN_Usertype']['values'],
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

    this.b2cChart5 = new Chart("b2c_chart_5", {
      type: 'bar',
      data: {
        labels: this.b2cData[0]['Graph'][0]['B2C Charts'][0]['NZL_Usertype']['labels'],
        datasets: [{
          label: 'Count',
          data: this.b2cData[0]['Graph'][0]['B2C Charts'][0]['NZL_Usertype']['values'],
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

    this.b2cChart6 = new Chart("b2c_chart_6", {
      type: 'pie', //this denotes tha type of chart
      data: {// values on X-Axis
        labels: this.b2cData[0]['Graph'][0]['B2C Charts'][0]['licence_pie']['labels'],
          datasets: [{
            label: '',
            data: this.b2cData[0]['Graph'][0]['B2C Charts'][0]['licence_pie']['values'],
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

      this.b2cChart7 = new Chart("b2c_chart_7", {
        type: 'bar',
        data: {
          labels: this.b2cData[0]['Graph'][0]['B2C Charts'][0]['watch_day_flex']['labels'],
          datasets: [{
            label: 'Count',
            data: this.b2cData[0]['Graph'][0]['B2C Charts'][0]['watch_day_flex']['values'],
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

      this.b2cChart8 = new Chart("b2c_chart_8", {
        type: 'bar',
        data: {
          labels: this.b2cData[0]['Graph'][0]['B2C Charts'][0]['watch_time_day_flex']['labels'],
          datasets: [{
            label: 'Count',
            data: this.b2cData[0]['Graph'][0]['B2C Charts'][0]['watch_time_day_flex']['values'],
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

      this.b2cChart9 = new Chart("b2c_chart_9", {
        type: 'line',
        data: {
          labels: this.b2cData[0]['Graph'][0]['B2C Charts'][0]['watch_time_hour_compare']['labels'],
          datasets: [{
            label: 'Android',
            data: this.b2cData[0]['Graph'][0]['B2C Charts'][0]['watch_time_hour_compare']['valuesFlex'],
            backgroundColor: ['#e95b5c'],
            borderWidth: 1
          },
          {
            label: 'iOS',
            data: this.b2cData[0]['Graph'][0]['B2C Charts'][0]['watch_time_hour_compare']['valuesB2c'],
            backgroundColor: ['#4762a5'],
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

      this.b2cChart10 = new Chart("b2c_chart_10", {
        type: 'bar',
        data: {
          labels: this.b2cData[0]['Graph'][0]['B2C Charts'][0]['watch_day_b2c_android']['labels'],
          datasets: [{
            label: 'Count',
            data: this.b2cData[0]['Graph'][0]['B2C Charts'][0]['watch_day_b2c_android']['values'],
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

      this.b2cChart11 = new Chart("b2c_chart_11", {
        type: 'bar',
        data: {
          labels: this.b2cData[0]['Graph'][0]['B2C Charts'][0]['watch_day_b2c_ios']['labels'],
          datasets: [{
            label: 'Count',
            data: this.b2cData[0]['Graph'][0]['B2C Charts'][0]['watch_day_b2c_ios']['values'],
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

      this.b2cChart12 = new Chart("b2c_chart_12", {
        type: 'bar',
        data: {
          labels: this.b2cData[0]['Graph'][0]['B2C Charts'][0]['watch_time_day_b2c_android']['labels'],
          datasets: [{
            label: 'Count',
            data: this.b2cData[0]['Graph'][0]['B2C Charts'][0]['watch_time_day_b2c_android']['values'],
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

      this.b2cChart13 = new Chart("b2c_chart_13", {
        type: 'bar',
        data: {
          labels: this.b2cData[0]['Graph'][0]['B2C Charts'][0]['watch_time_day_b2c_ios']['labels'],
          datasets: [{
            label: 'Count',
            data: this.b2cData[0]['Graph'][0]['B2C Charts'][0]['watch_time_day_b2c_ios']['values'],
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

      this.b2cChart14 = new Chart("b2c_chart_14", {
        type: 'line',
        data: {
          labels: this.b2cData[0]['Graph'][0]['B2C Charts'][0]['watch_time_hour_b2c_compare']['labels'],
          datasets: [{
            label: 'Android',
            data: this.b2cData[0]['Graph'][0]['B2C Charts'][0]['watch_time_hour_b2c_compare']['valuesAND'],
            backgroundColor: ['#e95b5c'],
            borderWidth: 1
          },
          {
            label: 'iOS',
            data: this.b2cData[0]['Graph'][0]['B2C Charts'][0]['watch_time_hour_b2c_compare']['valuesIOS'],
            backgroundColor: ['#4762a5'],
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
}