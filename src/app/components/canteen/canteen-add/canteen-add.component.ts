import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { NgToastService } from 'ng-angular-popup';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { Subscription, debounceTime } from 'rxjs';
import { AsyncService } from 'src/app/services/async.service';
import { AuthService } from 'src/app/services/auth.service';
import { CommonService } from 'src/app/services/common.service';
import { CanteenService } from '../canteen.service';
import { IApiResponse } from 'src/app/shared/container/api-response.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-canteen-add',
  templateUrl: './canteen-add.component.html',
  styleUrls: ['./canteen-add.component.scss']
})
export class CanteenAddComponent {

  formId = 'apoinment-add-form';
  form: FormGroup | any;
  paramId: string | any;
  serviceType: any = [];
  EmpData: any = [];
  yesNoList: any = [
    { code: 'Y', desc: 'Yes' },
    { code: 'N', desc: 'No' }
  ];
  MealForData: any = [
    { code: 'O', desc: 'Owen' },
    { code: 'G', desc: 'Guest' }
  ];
  tbAppData: any = [];

  selectedValue = null;
  date = null;
  isEnglish = true;
  systemDate = moment().format('YYYY-MM-DD');


  public progress: number;
  public formObserver: Subscription | any;


  constructor(
    public canteenService: CanteenService,
    private toast: NgToastService,
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private commonService: CommonService,
    private asyncService: AsyncService,
    private i18n: NzI18nService
  ) {
    this.progress = 0;
  }

  ngOnInit(): void {
    this.paramId = this.route.snapshot.params['id'];
    this.formInfo();
    this.GetAppType();
    this.GetAllData();
    this.watchEmployeeCodeChanges();
    // this.GetIdData(this.paramId);
  }


  formInfo() {
    this.form = this.fb.group({
      Id: "0",
      CompanyCode:"200",
      ComputerName:"Code Part",
      ComputerUserName: "Code Part",
      UserName : "Code Part",
      employeeCode: [],
      employeeName: [],
      typeId: [],
      mealFor: [],
      amount : [],
      insertId: "0",
    });

    this.formObserver = this.form.valueChanges
      .pipe(debounceTime(500))
      .subscribe(() => this.onFormChanged(this.form));
  }

  get f() {
    return this.form.controls;
  }

  AddData() {
    this.canteenService.addData(this.form.value).subscribe((res: IApiResponse) => {
      if (res.isExecuted === true) {
        this.form.reset();
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

  GetAppType() {
    this.canteenService.getAppType().subscribe((res: IApiResponse) => {
      if (res.isExecuted) {
        this.serviceType = res.data;
      } else {
        this.toast.error({
          detail: 'ERROR',
          summary: 'Type Not Executed',
          duration: 5000,
        });
      }
    });
  }

  GetAllData() {
    this.canteenService.getAllData().subscribe((res: IApiResponse) => {
      if (res.isExecuted) {
        this.EmpData = res.data;
      } else {
        this.toast.error({
          detail: 'ERROR',
          summary: 'Type Not Executed',
          duration: 5000,
        });
      }
    });
  }

  watchEmployeeCodeChanges(): void {
    this.form.get('employeeCode').valueChanges.subscribe((value:string) => {
      const selectedEmployee = this.EmpData.find((emp: any)  => emp.employeeCode === value);
      if (selectedEmployee) {
        this.form.patchValue({
          employeeName: selectedEmployee.employeeName
        });
      }
    });
  }

  error() {
    this.toast.error({
      detail: 'ERROR',
      summary: 'Please fill all details',
      duration: 3000,
    });
  }

  onSaveConfirmation = (): void => {
    const formValue = this.form.value;
    if (Object.values(formValue).some(value => value === null)) {
      this.error();
      return;
    }
    this.AddData();
  };

  onFormChanged(form: FormGroup): void {
    this.progress = this.calculateFormProgress(form);
  }

  calculateFormProgress(form: FormGroup): number {
    const controlCount = Object.keys(form.controls).length;
    let validCount = 0;
    for (const [key, value] of Object.entries(form.controls)) {
      if (value.value) {
        validCount++;
      }
    }
    return controlCount === 0 ? 100 : (validCount / controlCount) * 100;
  }

  ngOnDestroy() {
    this.formObserver.unsubscribe();
  }

  back() {
    window.history.back();
  }

  home() {
    window.location.href = '/dashboard';
  }

}
