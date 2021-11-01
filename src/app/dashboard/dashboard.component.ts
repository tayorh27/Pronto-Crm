import { Jobs } from './../model/jobs';
import { DataService } from './../services/data.services';
import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import 'firebase/firestore';
import 'firebase/database';
import * as firebase from 'firebase/app';
import { quiz } from '../model/docs';
import { health } from '../model/health';
import { social } from '../model/socio';
import { AdminUsersService } from '../services/admin-users.service';
import { Ticket } from '../model/tickets';


// import { LegendItem, ChartType } from '../md/md-chart/md-chart.component';

// import * as Chartist from 'chartist';

declare const $: any
declare interface JobStatus {
  status: string
  length: number
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit, AfterViewInit {

  service = new AdminUsersService()

  totalCustomer = 0
  totalTechnician = 0
  totalJob = 0
  jobStatus: JobStatus[] = []

  user_type = ''

  notification_count = 0
  notifications = []

  tickets: Ticket[] = []

  totalTicketCount = 0
  enqueuedCount = 0
  assignedCount = 0
  resolvedCount = 0

  getTickets() {
    firebase.firestore().collection("tickets").orderBy("timestamp", "desc").onSnapshot(query => {
      this.tickets = []
      query.forEach(ticket => {
        const t: Ticket = <Ticket>ticket.data()
        this.tickets.push(t)
      })

      this.totalTicketCount = this.tickets.length
      this.enqueuedCount = this.getTicketsByTypeCount("enqueue")
      this.assignedCount = this.getTicketsByTypeCount("assigned")
      this.resolvedCount = this.getTicketsByTypeCount("resolved")
    })
  }

  getTicketsByTypeCount(type: string) {
    const t = this.tickets.filter((val, ind, arr) => {
      return val.ticket_type.toLowerCase() === type.toLowerCase()
    })
    return t.length
  }

  getNotifications() {
    const email = localStorage.getItem('email')
    firebase.firestore().collection('notifications').where('email', '==', email).where('read', '==', false).orderBy('timestamp', 'desc').onSnapshot(query => {
      this.notifications = []
      this.notification_count = query.size
      query.forEach(q => {
        const n = q.data()
        this.notifications.push(n)
      })
    })
  }

  async updateNot(id: string) {
    await firebase.firestore().collection('notifications').doc(id).update({ 'read': true })
  }

  // constructor(private datas: DataService) { }

  getCustomer() {
    firebase.firestore().collection('customers').get().then(query => {
      this.totalCustomer = query.size
    })

  }

  getTechnicians() {
    firebase.firestore().collection('users').where('user_type', '==', 'technician').get().then(query => {
      this.totalTechnician = query.size
    })
  }

  getJobs() {
    firebase.firestore().collection('jobs').get().then(query => {
      this.totalJob = query.size
      query.forEach(data => {
        const job = <Jobs>data.data()
        const check = this.checkIfExsit(job.status)
        if (check.e) {
          const len = check.l
          this.jobStatus.splice(check.i, 1)
          this.jobStatus.push({ status: job.status, length: len + 1 })
        }
        else {
          this.jobStatus.push({ status: job.status, length: 1 })
        }
      })
    })
  }

  checkIfExsit(status: string) {
    var index = 0
    var found = false
    var length = 0
    for (let i = 0; i < this.jobStatus.length; i++) {

      if (this.jobStatus[i].status == status) {
        index = i
        found = true
        length = this.jobStatus[i].length
      }
    }
    return { i: index, e: found, l: length }
  }
  setvk(s) {
    s.name = "Jonh";
    s.age = 15;
    s.id = 100;
    console.log(s)
}
  ngOnInit() {
    // this.totalRows = this.datas.getMessage()
    // console.log(this.totalRows);
    // const a = ['test1a', 'test2', 'test1b', 'test1c', 'test3'];//, ['Wrong answer', 'OK', 'Runtime error', 'OK', 'Time limit exceeded']
    // console.log(a.splice(2,3))
    
   

    const email = localStorage.getItem('email')
    this.service.getUserData(email).then(user => {
      this.user_type = user.user_type
      if (user.user_type === 'admin') {
        this.getTickets()
        this.getCustomer()
        // this.getTechnicians()
        // this.getJobs()
        this.getNotifications()
      }
    })
    // this.getQuestion(['test1a', 'test2', 'test1b', 'test1c', 'test3'], ['Wrong answer', 'OK', 'Runtime error', 'OK', 'Time limit exceeded'])
  }

  getQuestion(T:string[], R:string[]) {
    T[Symbol.iterator]()

    const store = {};
    var n_ok_groups = 0;
    var total_groups = 0;

    for(var i = 0; i < T.length; i++) {

        const t = T[i];
        const r = R[i];
        
        const t1 = t.substring(t.length - 2);
        // console.log(t1);
        const start = t1.split("")[0];

        if(start.match(/^\d/)) {
          // console.log("he");
          const sT1 = t1.split("");
          const ini = sT1[0];
          if(store[ini] == undefined) {
            store[ini] = (r === "OK") ? 1 : -1;
          }else{
            var res = (r === "OK") ? 1 : -1;
            if(store[ini] < 0) {
              res = 1;
            }
            store[ini] = store[ini] * res;
          }
          
        }else {

        // console.log("here");
          const sT1 = t1.split("");
          const ini = sT1[1];
          if(store[ini] === undefined) {
            store[ini] = (r === "OK") ? 1 : -1;
          }else {
            var res = (r === "OK") ? 1 : -1;
            if(store[ini] < 0) {
              res = 1;
            }
            store[ini] = store[ini] * res;
          }
        }
    }
    console.log(store)
    for(const key in store) {

      total_groups = total_groups + 1;
      if(store[key] > 0) {
        n_ok_groups = n_ok_groups + 1;
      }
    }

    const ans = Math.round(n_ok_groups * 100 / total_groups);
    console.log(ans);


  }

  ngAfterViewInit() {
    // this.workQuiz()
  }

  

  workQuiz() {
    var reply = `Quiz(
      id: "2",
      articleId: "",
      name: 'Socio-Economic',
      description: 'How Well Do You Know Your Socio-Economic?',
      color: MyColors.apple_color,
      questions: [`
    const questions = social.split('|')
    questions.forEach((quest, index) => {
      var questLine = ""
      const q = quest.split('\n')
      questLine += `Questions(
        id: "${index}",
        question: "${q[1]}",
        answer: "",
        options: [`
      const arr = []
      for (let i = 2; i < q.length; i++) {
        if (q[i].length > 0) {
          arr.push(`"${q[i]}"`)
        }
      }
      questLine += arr.join(',')
      questLine += `]),`
      reply += questLine
    })
    reply += `])`
    console.log(reply)
  }



  // public tableData: TableData;
  // startAnimationForLineChart(chart: any) {

  //     let seq: any, delays: any, durations: any;
  //     seq = 0;
  //     delays = 80;
  //     durations = 500;
  //     chart.on('draw', function(data: any) {

  //       if (data.type === 'line' || data.type === 'area') {
  //         data.element.animate({
  //           d: {
  //             begin: 600,
  //             dur: 700,
  //             from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
  //             to: data.path.clone().stringify(),
  //             easing: Chartist.Svg.Easing.easeOutQuint
  //           }
  //         });
  //       } else if (data.type === 'point') {
  //             seq++;
  //             data.element.animate({
  //               opacity: {
  //                 begin: seq * delays,
  //                 dur: durations,
  //                 from: 0,
  //                 to: 1,
  //                 easing: 'ease'
  //               }
  //             });
  //         }
  //     });

  //     seq = 0;
  // }
  // startAnimationForBarChart(chart: any) {
  //     let seq2: any, delays2: any, durations2: any;
  //     seq2 = 0;
  //     delays2 = 80;
  //     durations2 = 500;
  //     chart.on('draw', function(data: any) {
  //       if (data.type === 'bar') {
  //           seq2++;
  //           data.element.animate({
  //             opacity: {
  //               begin: seq2 * delays2,
  //               dur: durations2,
  //               from: 0,
  //               to: 1,
  //               easing: 'ease'
  //             }
  //           });
  //       }
  //     });

  //     seq2 = 0;
  // }
  // // constructor(private navbarTitleService: NavbarTitleService) { }
  // public ngOnInit() {
  //     this.tableData = {
  //         headerRow: ['ID', 'Name', 'Salary', 'Country', 'City'],
  //         dataRows: [
  //             ['US', 'USA', '2.920	', '53.23%'],
  //             ['DE', 'Germany', '1.300', '20.43%'],
  //             ['AU', 'Australia', '760', '10.35%'],
  //             ['GB', 'United Kingdom	', '690', '7.87%'],
  //             ['RO', 'Romania', '600', '5.94%'],
  //             ['BR', 'Brasil', '550', '4.34%']
  //         ]
  //      };
  //     /* ----------==========     Daily Sales Chart initialization    ==========---------- */

  //     const dataDailySalesChart = {
  //         labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
  //         series: [
  //             [12, 17, 7, 17, 23, 18, 38]
  //         ]
  //     };

  //    const optionsDailySalesChart = {
  //         lineSmooth: Chartist.Interpolation.cardinal({
  //             tension: 0
  //         }),
  //         low: 0,
  //         high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
  //         chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
  //     };

  //     const dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

  //     this.startAnimationForLineChart(dailySalesChart);
  //     /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

  //     const dataCompletedTasksChart = {
  //         labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
  //         series: [
  //             [230, 750, 450, 300, 280, 240, 200, 190]
  //         ]
  //     };

  //     const optionsCompletedTasksChart = {
  //         lineSmooth: Chartist.Interpolation.cardinal({
  //             tension: 0
  //         }),
  //         low: 0,
  //         high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better
  //         // look
  //         chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
  //     };

  //    const completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart,
  //     optionsCompletedTasksChart);

  //    this.startAnimationForLineChart(completedTasksChart);

  //     /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

  //     const dataWebsiteViewsChart = {
  //       labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  //       series: [
  //         [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

  //       ]
  //     };
  //     const optionsWebsiteViewsChart = {
  //         axisX: {
  //             showGrid: false
  //         },
  //         low: 0,
  //         high: 1000,
  //         chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
  //     };
  //     const responsiveOptions: any = [
  //       ['screen and (max-width: 640px)', {
  //         seriesBarDistance: 5,
  //         axisX: {
  //           labelInterpolationFnc: function (value) {
  //             return value[0];
  //           }
  //         }
  //       }]
  //     ];
  //     const websiteViewsChart = new Chartist.Bar('#websiteViewsChart', dataWebsiteViewsChart, optionsWebsiteViewsChart, responsiveOptions);

  //     this.startAnimationForBarChart(websiteViewsChart);

  //     $('#worldMap').vectorMap({
  //       map: 'world_en',
  //       backgroundColor: 'transparent',
  //        borderColor: '#818181',
  //        borderOpacity: 0.25,
  //        borderWidth: 1,
  //        color: '#b3b3b3',
  //        enableZoom: true,
  //        hoverColor: '#eee',
  //        hoverOpacity: null,
  //        normalizeFunction: 'linear',
  //        scaleColors: ['#b6d6ff', '#005ace'],
  //        selectedColor: '#c9dfaf',
  //        selectedRegions: null,
  //        showTooltip: true,
  //        onRegionClick: function(element, code, region)
  //        {
  //            var message = 'You clicked "'
  //                + region
  //                + '" which has the code: '
  //                + code.toUpperCase();

  //            alert(message);
  //        }
  //     });
  //  }
  //  ngAfterViewInit() {
  //      const breakCards = true;
  //      if (breakCards === true) {
  //          // We break the cards headers if there is too much stress on them :-)
  //          $('[data-header-animation="true"]').each(function(){
  //              const $fix_button = $(this);
  //              const $card = $(this).parent('.card');
  //              $card.find('.fix-broken-card').click(function(){
  //                  const $header = $(this).parent().parent().siblings('.card-header, .card-image');
  //                  $header.removeClass('hinge').addClass('fadeInDown');

  //                  $card.attr('data-count', 0);

  //                  setTimeout(function(){
  //                      $header.removeClass('fadeInDown animate');
  //                  }, 480);
  //              });

  //              $card.mouseenter(function(){
  //                  const $this = $(this);
  //                  const hover_count = parseInt($this.attr('data-count'), 10) + 1 || 0;
  //                  $this.attr('data-count', hover_count);
  //                  if (hover_count >= 20) {
  //                      $(this).children('.card-header, .card-image').addClass('hinge animated');
  //                  }
  //              });
  //          });
  //      }
  //  }
}
