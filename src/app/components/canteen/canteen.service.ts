import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanteenService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

    //ServiceType
    public getAppType() {
      return this.http.get(`https://localhost:7066/api/ServiceType/view`);
    }

    //EmployeeMaster

    // public addData(formData: any ) {
    //   return this.http.post(`https://localhost:7066/api/tbAppointment/add`, formData);
    // }

    getAllData(){
      return this.http.get<any>(`https://localhost:7066/api/EmployeeMaster/view`);
    }

    //FoodMaster,DailyFood,Account And Tickets Add Data

    public addData(formData: any ) {
      return this.http.post(`https://localhost:7066/api/FoodMaster/add`, formData);
    }



}
