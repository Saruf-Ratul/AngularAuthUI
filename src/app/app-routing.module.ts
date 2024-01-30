import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AddApoinmentComponent } from './components/all-from/add-apoinment/add-apoinment.component';
import { ConfirmApoinmentComponent } from './components/all-from/confirm-apoinment/confirm-apoinment.component';
import { ReConfirmApoinmentComponent } from './components/all-from/re-confirm-apoinment/re-confirm-apoinment.component';
import { ViewApoinmentComponent } from './components/all-from/view-apoinment/view-apoinment.component';
import { CanteenComponent } from './components/canteen/canteen.component';
import { CanteenAddComponent } from './components/canteen/canteen-add/canteen-add.component';
import { CanteenViewComponent } from './components/canteen/canteen-view/canteen-view.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'reset', component:ResetPasswordComponent},
  {path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard]},
  {path:'apoinment', component:AddApoinmentComponent},
  {path:'confirmApoinment', component:ConfirmApoinmentComponent},
  {path:'reconfirmApoinment', component:ReConfirmApoinmentComponent},
  {path:'viewConfirmApoinment', component:ViewApoinmentComponent},
  {path:'canteen', component:CanteenComponent},
  {path: 'entry', component: CanteenAddComponent},
  {path:'view',  component: CanteenViewComponent}






  // { path: 'arrear-module',
  // loadChildren: () => import('./components/all-from/apoinment.module').then(m => m.ApoinmentModule),
  // canActivate: [AuthGuard]
  // },



];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
