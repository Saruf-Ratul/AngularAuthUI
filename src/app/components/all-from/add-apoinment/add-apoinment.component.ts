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
import { NzI18nService} from 'ng-zorro-antd/i18n';
import { FormControl, NonNullableFormBuilder } from '@angular/forms';

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

  selectedValue = null;
  date = null;
  isEnglish = true;


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
  }


  formInfo() {
    this.form = this.fb.group({
      //id: ['0'],
      tbAppType: [null],
      Schedule_Date: [null],
      Schedule_Time: [null],
      End_Time: [null],
      Cust_Name: [null],
      vReg_No: [null],
      Model: [null],
      Model_Year: [null],
      KM: [null],
      Reminder1_Date: [null],
      Reminder2_Date: [null],
      Reminder3_Date: [null],
      CustomerRequest: [null],
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
      UserName: [null],
      Computer_Name: [null],
      Computer_UserName: [null],
      SysDate: [null]
    });

    this.formObserver = this.form.valueChanges
      .pipe(debounceTime(500))
      .subscribe(() => this.onFormChanged(this.form));
  }

  //TODO

  //TODO

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

  // onSaveConfirmation = (): void => {
  //   if (this.form.valid) {
  //     this.commonService.showDialog(
  //       {
  //         title: this.paramId
  //           ? 'Confirmation - Update Record'
  //           : 'Confirmation - Save Record',
  //         content: this.paramId
  //           ? 'Are you sure to update record?'
  //           : 'Are you sure to save record?',
  //       },
  //       () => {
  //         if (this.paramId) {
  //           this.addData();
  //         } else {
  //           this.error();
  //         }
  //       }
  //     );
  //   } else {
  //     this.commonService.showErrorMsg('Please fill the required fields!');
  //   }
  // };



  onFormChanged(form: FormGroup): void {
    this.progress = this.calculateFormProgress(form);
    //console.log('###########', this.progress)
  }

  calculateFormProgress(form: FormGroup): number {
    const controlCount = Object.keys(form.controls).length;
    let validCount = 0;
    for (const [key, value] of Object.entries(form.controls)) {
      if (value.valid) validCount++;
    }
    return validCount / controlCount * 100;
  }


  ngOnDestroy() {
    this.formObserver.unsubscribe();
  }

}


