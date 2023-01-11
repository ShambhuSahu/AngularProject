
import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js'
Chart.register(...registerables);

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {


  constructor() { 
  
  }

  title = 'chartDemo';

  chartMethod()
  {
    var myChart = new Chart("myChart", {
      type: 'line',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: 'Data1',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor:"#0196FD",
              borderColor:"pink",
              borderWidth: 1
          },
          {
            label: 'Dat21',
            data: [19, 12, 5, 3, 1, 6],
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