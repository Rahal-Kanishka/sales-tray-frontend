import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from "chart.js";

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit, AfterViewInit {
  private canvas: any;
  private cts: any;
  @ViewChild('chart') chartRef: any;



  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log('after view init called');

    this.canvas = this.chartRef.nativeElement;
    this.cts = this.canvas.getContext('2d');

    var myChart = new Chart(this.cts, {
      type: 'bar',
      data: {
        labels: ['Highland', 'Suposha', 'Nile Beedi', 'Pharmaceutical'],
        datasets: [{
          label: '# of Sales',
          data: [12, 19, 3, 5],
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
