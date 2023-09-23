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
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { AsyncState } from './shared/state/async.state';
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import {MatFormFieldModule} from '@angular/material/form-field';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';



registerLocaleData(en);
const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

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
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    NgxsModule.forRoot([AsyncState], {  //AuthState,
      developmentMode: !environment.production
    }),
    NgxsReduxDevtoolsPluginModule.forRoot({ disabled: environment.production }),
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
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatSnackBarModule,
    MatFormFieldModule,
    NzButtonModule,
    NzGridModule,
    NzIconModule,
    NzTypographyModule,
    NzDividerModule,
    NzLayoutModule,
    NzSpaceModule,
    NzCardModule,
    NzSelectModule,
    NzEmptyModule,
    NzSkeletonModule,
    NzDatePickerModule,
    NzImageModule,
    NzInputModule,
    NzFormModule,
    NzTimePickerModule,
    NzProgressModule,
    NzBreadCrumbModule,
    ScrollingModule,
    DragDropModule,
    NzMenuModule,
    NzDropDownModule,



  ],
  providers: [
    AsyncService,
    CommonService,
    // PluginManager,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
   },
   { provide: NZ_I18N, useValue: en_US },
   { provide: NZ_ICONS, useValue: icons }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
