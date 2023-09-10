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

@Component({
  selector: 'app-add-apoinment',
  templateUrl: './add-apoinment.component.html',
  styleUrls: ['./add-apoinment.component.scss']
})
export class AddApoinmentComponent implements OnInit {

  formId = 'apoinment-add-form';
  form: FormGroup | any;
  paramId: string | any;
  yesNoList: any = [
    { code: 'Y', desc: 'Yes' },
    { code: 'N', desc: 'No' }
  ];

  public progress: number;
  public formObserver: Subscription | any;

  constructor(
    private toast: NgToastService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private apoinmentService: ApoinmentService,
  ) {
    this.progress = 0;
  }

  ngOnInit(): void {
    this.paramId = this.route.snapshot.params['id'];
    this.formInfo();
  }


  formInfo() {
    this.form = this.fb.group({
      //id: ['0'],
      CompanyCode: ['200'],
      CarName: [null, Validators.required],
      description: [null, Validators.required],
      ModelYear: [null, Validators.required],
      RuningMilage: [null, Validators.required],
      Problem: [null, Validators.required],
      Note: [null, Validators.required],
      PhoneNumber: [null, Validators.required],
      Email: [null, Validators.required],
      Address: [null, Validators.required],
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

  error(){
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
    else{
      this.error();
    }
  };



  onFormChanged(form: FormGroup): void {
    this.progress = this.calculateFormProgress(form);
  }

  calculateFormProgress(form: FormGroup): number {

    const controlCount = Object.keys(form.controls).length;
    let validCount = 0;

    for( const [key, value] of Object.entries(form.controls)) {
      if (value.valid) validCount++;
    }

    return validCount / controlCount * 100;
  }


  ngOnDestroy() {
    this.formObserver.unsubscribe();
  }

}
