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

  //tbAppType
  public GetAlltbAppType() {
    return this.http.get(`https://localhost:7066/api/tbAppointment/view_tbAppType`);
  }

}
