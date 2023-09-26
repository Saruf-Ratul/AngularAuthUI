import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApoinmentService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  //tbAppointment
  public addData(formData: any ) {
    return this.http.post(`https://localhost:7066/api/tbAppointment/add`, formData);
  }

  getAllData(){
    return this.http.get<any>(`https://localhost:7066/api/tbAppointment/view`);
  }

 //tbAppointment Confirmation
  confirmData(app_ID: any , requestBody: any) {
    console.log("itemId%%%%%%%%%%",app_ID);
    // return this.http.put(`https://localhost:7066/api/tbAppointment/find`, app_ID);
    return this.http.put(`https://localhost:7066/api/tbAppointment/approve/${app_ID}`, requestBody);

    // return this.http.put(`https://localhost:7066/api/tbAppointment/find/${app_ID}`);
  }



  //tbAppType
  public GetAlltbAppType() {
    return this.http.get(`https://localhost:7066/api/tbAppointment/view_tbAppType`);
  }

}
