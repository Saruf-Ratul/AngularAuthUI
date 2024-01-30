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

@Component({
  selector: 'app-canteen-add',
  templateUrl: './canteen-add.component.html',
  styleUrls: ['./canteen-add.component.scss']
})
export class CanteenAddComponent {

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
    private commonService: CommonService,
    private asyncService: AsyncService,
    private i18n: NzI18nService
  ) {
    this.progress = 0;
  }

  ngOnInit(): void {
    this.paramId = this.route.snapshot.params['id'];
    this.formInfo();
    // this.GetAlltbAppType();
    // this.GetIdData(this.paramId);
  }


  formInfo() {
    this.form = this.fb.group({
      id: ['0'],
      CompanyCode: ['200'],
      tbAppData:[]

    });

    this.formObserver = this.form.valueChanges
      .pipe(debounceTime(500))
      .subscribe(() => this.onFormChanged(this.form));
  }


  get f() {
    return this.form.controls;
  }

  // addData() {
  //   this.apoinmentService.addData(this.form.value).subscribe((res: IApiResponse) => {
  //     if (res.isExecuted === true) {
  //       this.form.reset();
  //       this.router.navigate(['dashboard']);
  //       this.toast.success({
  //         detail: 'Success',
  //         summary: 'Data Add Success',
  //         duration: 5000,
  //       });
  //     } else {
  //       this.toast.error({
  //         detail: 'ERROR',
  //         summary: 'Please fill all details',
  //         duration: 5000,
  //       });
  //     }
  //   });
  // }

  // GetAlltbAppType() {
  //   this.apoinmentService.GetAlltbAppType().subscribe((res: IApiResponse) => {
  //     if (res.isExecuted) {
  //       this.tbAppType = res.data;
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
    // if (this.form.valid) {
    //   this.addData();
    // }
    // else {
    //   this.error();
    // }
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



  back() {
    window.history.back();
  }

  home() {
    window.location.href = '/dashboard';
  }

}
