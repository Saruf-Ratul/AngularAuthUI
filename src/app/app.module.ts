import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignupComponent } from './components/signup/signup.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { NgToastModule } from 'ng-angular-popup';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import {MatCardModule} from '@angular/material/card';
import { ChartbordComponent } from './components/chart/chartbord/chartbord.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleChartsModule } from 'angular-google-charts';
import {MatIconModule} from '@angular/material/icon';
import { AddApoinmentComponent } from './components/all-from/add-apoinment/add-apoinment.component';
import { ViewApoinmentComponent } from './components/all-from/view-apoinment/view-apoinment.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {ConfirmDialogComponent} from './shared/components/confirmation-dialog.component';
import { ErrorMessageDialogComponent } from './shared/components/error-message-dialog.component';
import { MessageDialogComponent } from './shared/components/message-dialog.component';
import { AsyncService } from './services/async.service';
import { CommonService } from './services/common.service';
// import { PluginManager } from '@ngxs/store/src/plugin-manager';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ResetPasswordComponent,
    DashboardComponent,
    ChartbordComponent,
    AddApoinmentComponent,
    ViewApoinmentComponent,
    ConfirmDialogComponent,
    ErrorMessageDialogComponent,
    MessageDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgToastModule,
    HttpClientModule,
    NgOptimizedImage,
    MatCardModule,
    CommonModule,
    BrowserAnimationsModule,
    GoogleChartsModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,


  ],
  providers: [
    AsyncService,
    CommonService,
    // PluginManager,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
   },],
  bootstrap: [AppComponent]
})
export class AppModule { }
