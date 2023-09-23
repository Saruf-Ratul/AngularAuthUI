import { UserService } from './../../services/user.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserStoreService } from 'src/app/services/user-store.service';
import { forkJoin } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { ActivatedRoute, Router } from "@angular/router";
import { ApoinmentService } from '../all-from/apoinment.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  fullName!: string;
  users!: User[];
  appointmentData : any = [];

  constructor(
    public userStore: UserStoreService,
    public auth: AuthService,
    private userService: UserService,
    public router: Router,
    public   apoinmentService: ApoinmentService,
    ) { }

  ngOnInit() {
    this.userStore.getFullName()
      .subscribe(res => {
        let value = this.auth.getFullNameFromToken();
        this.fullName = res || value;
      })
    // this.getUsers();
    this.getAllData();
  }

  logOut() {
    this.auth.signOut();
  };

  loadFullName() {

  }

  // getUsers(){
  //   this.userService.getAllUsers()
  //   .subscribe({
  //     next:(res=>{
  //       console.log(res);
  //       this.users = res
  //       console.log(this.users);
  //     })
  //   })
  // }

  getAllData(){
    this.apoinmentService.getAllData()
    .subscribe({
      next:(res=>{
        this.appointmentData = res.data
      })
    })
  };

  addForm() {
    this.router.navigate(['apoinment']);
  };

  //Appointment
  appointment() {
    this.router.navigate(['apoinment']);
  };

}
