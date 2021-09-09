import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, Point, registerables } from "chart.js";
Chart.register(...registerables);

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit, AfterViewInit {

  @ViewChild('chart') chartRef: any;
  @ViewChild('profit_chart') profitChartRef: any;
  private chart: Chart | undefined;
  private data: Point[] = [];
  canvas: any;
  cts: any;
  profilt_canvas: any;
  profit_cts: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

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

    this.profilt_canvas = this.profitChartRef.nativeElement;
    this.profit_cts = this.profilt_canvas.getContext('2d');

    // ----------------------
    const labels = [ 'jan', 'February', 'March', 'April','May', 'June', 'July'];
    const data = {
      labels: labels,
      datasets: [{
        label: 'Profit Earned',
        data: [65, 59, 80, 81, 56, 60, 74],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };

    let profitChat = new Chart(this.profit_cts, {
      type: 'line',
      data: data,
    })
  }

}
