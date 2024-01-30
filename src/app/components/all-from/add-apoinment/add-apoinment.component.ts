import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncService } from 'src/app/services/async.service';
import { CommonService } from 'src/app/services/common.service';
import { ApoinmentService } from '../apoinment.service';
import { IApiResponse } from 'src/app/shared/container/api-response.model';
import { NgToastService } from 'ng-angular-popup';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { FormControl, NonNullableFormBuilder } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-add-apoinment',
  templateUrl: './add-apoinment.component.html',
  styleUrls: ['./add-apoinment.component.scss']
})
export class AddApoinmentComponent implements OnInit {

  formId = 'apoinment-add-form';
  form: FormGroup | any;
  paramId: string | any;
  tbAppType: any = [];
  yesNoList: any = [
    { code: 'Y', desc: 'Yes' },
    { code: 'N', desc: 'No' }
  ];
  tbAppData: any = [];

  selectedValue = null;
  date = null;
  isEnglish = true;
  systemDate = moment().format('YYYY-MM-DD');


  public progress: number;
  public formObserver: Subscription | any;

  constructor(
    private toast: NgToastService,
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private apoinmentService: ApoinmentService,
    private commonService: CommonService,
    private asyncService: AsyncService,
    private i18n: NzI18nService
  ) {
    this.progress = 0;
  }

  ngOnInit(): void {
    this.paramId = this.route.snapshot.params['id'];
    this.formInfo();
    this.GetAlltbAppType();
    // this.GetIdData(this.paramId);
  }


  formInfo() {
    this.form = this.fb.group({
      id: ['0'],
      CompanyCode: ['200'],
      tbAppType: [null],
      Schedule_Date: [null],
      Schedule_Time: [null],
      End_Time: [null],
      Cust_Name: [null],
      Address: [null],
      vReg_No: [null],
      Model: [null],
      Model_Year: [null],
      KM: [null],
      Reminder1_Date: [null],
      Reminder2_Date: [null],
      Reminder3_Date: [null],
      CustomerRequest: ['null'],
      App_TypeId: [null],
      App_Serial: [null],
      APP_Confirm: [null],
      Appby_Secu_EMPID: [null],
      Confirmby_Secu_EMPID: [null],
      vPhone: [null],
      email: [null],
      App_Entry_Date: [null],
      Print_count: [null],
      Level_Id: [null],
      Bay_Id: [null],
      EMPID: [null],
      Remarks: [null],
      MobleNO_SMS: [null],
      APP_Re_Confirm: [null],
      Chesis_No: [null],
      UserName: ['null'],
      Computer_Name: ['null'],
      Computer_UserName: ['null'],
      SysDate: this.systemDate,
    });

    this.formObserver = this.form.valueChanges
      .pipe(debounceTime(500))
      .subscribe(() => this.onFormChanged(this.form));
  }


  get f() {
    return this.form.controls;
  }

  addData() {
    this.apoinmentService.addData(this.form.value).subscribe((res: IApiResponse) => {
      if (res.isExecuted === true) {
        this.form.reset();
        this.router.navigate(['dashboard']);
        this.toast.success({
          detail: 'Success',
          summary: 'Data Add Success',
          duration: 5000,
        });
      } else {
        this.toast.error({
          detail: 'ERROR',
          summary: 'Please fill all details',
          duration: 5000,
        });
      }
    });
  }

  GetAlltbAppType() {
    this.apoinmentService.GetAlltbAppType().subscribe((res: IApiResponse) => {
      if (res.isExecuted) {
        this.tbAppType = res.data;
      } else {
        this.toast.error({
          detail: 'ERROR',
          summary: 'Type Not Executed',
          duration: 5000,
        });
      }
    });
  }

  // GetIdData(id : any) {
  //   this.apoinmentService.getIdData(id).subscribe((res: IApiResponse) => {
  //     if (res.isExecuted) {
  //       this.tbAppData = res.data;
  //       // this.form.patchValue(this.tbAppData);
  //       this.form.patchValue({
  //         tbAppType : this.tbAppData.tbAppType,
  //         Schedule_Date: this.tbAppData.Schedule_Date,
  //         Schedule_Time: this.tbAppData.Schedule_Time,
  //         End_Time: this.tbAppData.End_Time,
  //         Cust_Name: this.tbAppData.Cust_Name,
  //         Address: this.tbAppData.Address,
  //         vReg_No: this.tbAppData.vReg_No,
  //         Model: this.tbAppData.Model,
  //         Model_Year: this.tbAppData.Model_Year,
  //         KM: this.tbAppData.KM,
  //         Reminder1_Date: this.tbAppData.Reminder1_Date,
  //         Reminder2_Date: this.tbAppData.Reminder2_Date,
  //         Reminder3_Date: this.tbAppData.Reminder3_Date,
  //         CustomerRequest: this.tbAppData.CustomerRequest,
  //         App_TypeId: this.tbAppData.App_TypeId,
  //         App_Serial: this.tbAppData.App_Serial,
  //         APP_Confirm: this.tbAppData.APP_Confirm,
  //         Appby_Secu_EMPID: this.tbAppData.Appby_Secu_EMPID,
  //         Confirmby_Secu_EMPID: this.tbAppData.Confirmby_Secu_EMPID,
  //         vPhone: this.tbAppData.vPhone,
  //         email: this.tbAppData.email,
  //         App_Entry_Date: this.tbAppData.App_Entry_Date,
  //         Print_count: this.tbAppData.Print_count,
  //         Level_Id: this.tbAppData.Level_Id,
  //         Bay_Id: this.tbAppData.Bay_Id,
  //         EMPID: this.tbAppData.EMPID,
  //         Remarks: this.tbAppData.Remarks,
  //         MobleNO_SMS: this.tbAppData.MobleNO_SMS,
  //         APP_Re_Confirm: this.tbAppData.APP_Re_Confirm,
  //         Chesis_No: this.tbAppData.Chesis_No,
  //         UserName: this.tbAppData.UserName,
  //         Computer_Name: this.tbAppData.Computer_Name,
  //         Computer_UserName: this.tbAppData.Computer_UserName,
  //         SysDate: this.tbAppData.SysDate,
  //         create_by: this.tbAppData.create_by,
  //         create_date: this.tbAppData.create_date,
  //         update_by: this.tbAppData.update_by,
  //         update_date: this.tbAppData.update_date,
  //       });

  //     } else {
  //       this.toast.error({
  //         detail: 'ERROR',
  //         summary: 'Type Not Executed',
  //         duration: 5000,
  //       });
  //     }
  //   });
  // }

  error() {
    this.toast.error({
      detail: 'ERROR',
      summary: 'Please fill all details',
      duration: 5000,
    });
  }

  onSaveConfirmation = (): void => {
    if (this.form.valid) {
      this.addData();
    }
    else {
      this.error();
    }
  };

  onFormChanged(form: FormGroup): void {
    this.progress = this.calculateFormProgress(form);
  }

  calculateFormProgress(form: FormGroup): number {
    const controlCount = Object.keys(form.controls).length;
    let validCount = 0;
    for (const [key, value] of Object.entries(form.controls)) {
      if ( value.value ) {
        validCount++;
      }
    }
    return controlCount === 0 ? 100 : (validCount / controlCount) * 100;
  }

  onBack(){
    this.router.navigate(['dashboard']);
  }

  ngOnDestroy() {
    this.formObserver.unsubscribe();
  }

}


