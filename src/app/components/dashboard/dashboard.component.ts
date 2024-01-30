import { UserService } from './../../services/user.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserStoreService } from 'src/app/services/user-store.service';
import { forkJoin } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { ActivatedRoute, Router } from "@angular/router";
import { ApoinmentService } from '../all-from/apoinment.service';
import { IApiResponse } from 'src/app/shared/container/api-response.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  fullName!: string;
  users!: User[];
  appointmentData: any = [];
  userData: any;
  username: string | any;
  admin : string | any;
  active : string | any;


  constructor(
    public userStore: UserStoreService,
    public auth: AuthService,
    private userService: UserService,
    public router: Router,
    public apoinmentService: ApoinmentService,
  ) { }

  ngOnInit() {
    this.userStore.getFullName()
      .subscribe(res => {
        let value = this.auth.getFullNameFromToken();
        this.fullName = res || value;
      })
    this.getUsers(),
      this.getAllData();
  }

  logOut() {
    this.auth.signOut();
  };

  getUsers() {
    let authValue = this.auth.decodedToken();
    this.username = authValue.name;
    this.apoinmentService.userData(this.username).subscribe((res: IApiResponse) => {
      if (res.isExecuted === true) {
        this.userData = res.data;
        this.admin = this.userData.admin;
        console.log(this.admin);
        this.active = this.userData.active;
      } else {
        this.userData = null;
      }
    });
  };



  getAllData() {
    this.apoinmentService.getAllData()
      .subscribe({
        next: (res => {
          this.appointmentData = res.data
        })
      })
  };



  //Appointment
  appointment() {
    this.router.navigate(['apoinment']);
  };

  //Patient
  confirmScreen() {
    this.router.navigate(['confirmApoinment']);
  }

  reconfirmScreen(){
    this.router.navigate(['reconfirmApoinment']);
  }
  viewConfirmApoinment(){
    this.router.navigate(['viewConfirmApoinment']);
  }

  canteenScreen() {
    this.router.navigate(['canteen']);
  }


}
