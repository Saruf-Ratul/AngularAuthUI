import { Component, OnInit} from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { ApoinmentService } from '../../all-from/apoinment.service';
 @Component({
  selector: 'app-chartbord',
  templateUrl: './chartbord.component.html',
  styleUrls: ['./chartbord.component.scss']
})
export class ChartbordComponent {
  appointmentData : any = [];
  appointmentDataCount : number = 0;
  appointmentConfData : number = 0;
  appointmentNeedConfData : number = 0;
  doneData : number = 0;

  constructor(
    public   apoinmentService: ApoinmentService,
  ) {
  }

  ngOnInit() {
    this.getAllData();
  }

  public chart: {
    title: string;
    type: ChartType;
    data: Array<any>;
    columnNames: Array<string>;
    options: object;
  } = {
    title: 'Appointments Chart',
    type: ChartType.LineChart,
    data: [
      [1, 50, 60],
      [2, 70, 80],
      [3, 40, 30],
    ],
    columnNames: ['X', 'Appointment', 'Confirm'],
    options: {
      titleTextStyle: {
        fontSize: 18,
        bold: true
      },
      legend: {
        position: 'bottom'
      },
      hAxis: {
      },
      vAxis: {
        minValue: 0
      },
      animation: {
        startup: true,
        duration: 1000,
        easing: 'out'
      }
    }
  };


  getAllData(){
    this.apoinmentService.getAllData()
    .subscribe({
      next:(res=>{
        this.appointmentData = res.data
        this.appointmentDataCount = res.data.length
        console.log(res.data);
        this.appointmentConfData = res.data.filter((data:any)=>data.apP_Confirm != true).length
        this.appointmentNeedConfData = res.data.filter((data:any)=>data.apP_Confirm == true).length
        this.doneData = res.data.filter((data:any)=>data.apP_Re_Confirm == true).length
      })
    })
  }

}



