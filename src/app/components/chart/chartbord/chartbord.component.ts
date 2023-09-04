import { Component, OnInit} from '@angular/core';
import { ChartType } from 'angular-google-charts';
 @Component({
  selector: 'app-chartbord',
  templateUrl: './chartbord.component.html',
  styleUrls: ['./chartbord.component.scss']
})
export class ChartbordComponent {

  public chart: {
    title: string;
    type: ChartType;
    data: Array<any>;
    columnNames: Array<string>;
    options: object;
  } = {
    title: 'Year Wise Rate',
    type: ChartType.LineChart,
    data: [
      [1, 50, 60],
      [2, 70, 80],
      [3, 40, 30],
    ],
    columnNames: ['X', 'Sell', 'Stock'],
    options: {
      titleTextStyle: {
        fontSize: 18,
        bold: true
      },
      legend: {
        position: 'bottom'
      },
      hAxis: {
        //title: 'X-Axis Label'
      },
      vAxis: {
        //title: 'Y-Axis Label',
        minValue: 0
      },
      animation: {
        startup: true,
        duration: 1000,
        easing: 'out'
      }
    }
  };

}



