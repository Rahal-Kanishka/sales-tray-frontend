import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from "chart.js";

const DATA_COUNT = 7;
const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

@Component({
  selector: 'app-sales-dashboard',
  templateUrl: './sales-dashboard.component.html',
  styleUrls: ['./sales-dashboard.component.scss']
})
export class SalesDashboardComponent implements OnInit, AfterViewInit {

  @ViewChild('line_chart') chartRef: any;
  canvas: any;
  cts: any;

  @ViewChild('pie_chart') pieChartRef: any;
  pieCanvas: any;
  pieCts: any;

  public data: any;
  public config: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    this.setUpLineChart();
    this.setUpPieChart();

  }

  getRandomArray(arrayLength: number, min?: number, max?: number): Array<number> {
    let array: Array<number> = new Array<number>(arrayLength);
    let i = 0;
    while (arrayLength > 0) {
      if (min && max) {
        array[i] = (this.randomInteger(min, max));
      } else {

        array[i] = (this.randomInteger(0, 100));
      }
      i++;
      arrayLength--;
    }
    return array;

  }

  randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private setUpLineChart() {
    this.canvas = this.chartRef.nativeElement;
    this.cts = this.canvas.getContext('2d');

    this.data = {
      labels: [...Array(30).keys()],
      datasets: [
        {
          label: 'Highland',
          data: this.getRandomArray(30, 60,90),
          borderColor: 'blue',
        },
        {
          label: 'Suwaposha',
          data: this.getRandomArray(30, 40, 60),
          borderColor: 'Orange',
        },
        {
          label: 'Pharmaceutical',
          data: this.getRandomArray(30 , 20, 40),
          borderColor: 'palevioletred',
        },
        {
          label: 'Neel Beedi',
          data: this.getRandomArray(30, 30, 40),
          borderColor: 'Green',
        }
      ]
    };

    this.config = {
      type: 'line',
      data: this.data,
      options: {
        interaction: {
          intersect: false
        },
        plugins: {
          legend: {
            position: 'bottom'
          }
        },
        scales: {
          x: {
            type: 'linear'
          }
        }
      }
    };

    var myChart = new Chart(this.cts, this.config);
  }

  private setUpPieChart() {
    this.pieCanvas = this.pieChartRef.nativeElement;
    this.pieCts = this.pieCanvas.getContext('2d');
    const data = {
      labels: ['Highland', 'Suwaposha', 'Pharmaceutical', 'Neel Beedi'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [450, 300, 100, 120],
          backgroundColor: ['Blue', 'Orange', 'palevioletred', 'Green', 'Blue'],
        }
      ]
    };

    var pieChart = new Chart(this.pieCts, {
      type: 'pie',
      data: data,
      options: {
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });

  }
}
