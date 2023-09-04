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

  public addData(formData: any ) {
    return this.http.post(`https://localhost:7066/api/Dashboard/add`, formData);
  }

}
