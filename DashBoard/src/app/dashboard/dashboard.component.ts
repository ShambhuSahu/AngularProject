import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js'
Chart.register(...registerables);


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  chartMethod()
  {
    var myChart = new Chart("myChart", {
      type: 'line',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: 'Data1',
              data: [2, 19, 3, 5, 2, 3],
              backgroundColor:"#0196FD",
              borderColor:"pink",
              borderWidth: 1
          },
          {
            label: 'Dat21',
            data: [19, 2, 5, 3, 1, 6],
            backgroundColor:"#FFAF00",
            borderColor: "blue",
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

  ngOnInit()
  {
    this.chartMethod()
}
}