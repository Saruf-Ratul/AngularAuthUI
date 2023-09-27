import { Component } from '@angular/core';
import { ApoinmentService } from '../apoinment.service';
import { IApiResponse } from 'src/app/shared/container/api-response.model';
import { NgToastService } from 'ng-angular-popup';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { duration } from 'moment';

@Component({
  selector: 'app-confirm-apoinment',
  templateUrl: './confirm-apoinment.component.html',
  styleUrls: ['./confirm-apoinment.component.scss']
})
export class ConfirmApoinmentComponent {

  itemId: number | any;
  tbAppApprovedData: any = [];
  tbAppFilterData: any = [];

  approvedData: any = [];
  deleteData: any = [];
  confirmModal?: NzModalRef;

  constructor(
    public apoinmentService: ApoinmentService,
    private toast: NgToastService,
    private modal: NzModalService
  ) { }

  ngOnInit(): void {
    this.GetAppApprovedData();
  }

  GetAppApprovedData() {
    this.apoinmentService.getAllData().subscribe((res: IApiResponse) => {
      if (res.isExecuted) {
        this.tbAppApprovedData = res.data;
        this.tbAppFilterData = this.tbAppApprovedData.filter((item: any) => item.apP_Confirm == null);
      } else {
        this.toast.error({
          detail: 'ERROR',
          summary: 'Type Not Executed',
          duration: 5000,
        });
      }
    });
  }

  buttonAction(itemId: any, Value: any) {
    this.itemId = itemId;
    if (Value == "A") {
      this.confirmModal = this.modal.confirm({
        nzTitle: 'Do you want to approved these items?',
        nzContent: 'When clicked the OK button, this dialog will be closed after 1 second',
        nzOnOk: () =>
          new Promise<void>((resolve, reject) => {
            setTimeout(() => {
              this.approved(this.itemId);
              resolve();
            }, 1000);
          }).catch(() => {
            this.toast.error({
              detail: 'ERROR',
              summary: 'Call Approved Function Not Working',
              duration: 5000,
            });

          })
      });
    }
    else if (Value == "E") {
      // this.showConfirm();
    }
    else if (Value == "D") {
      this.confirmModal = this.modal.confirm({
        nzTitle: 'Do you want to delete these items?',
        nzContent: 'When clicked the OK button, this dialog will be closed after 1 second',
        nzOnOk: () =>
          new Promise<void>((resolve, reject) => {
            setTimeout(() => {
              this.delete(this.itemId);
              resolve();
            }, 1000);
          }).catch(() => {
            this.toast.error({
              detail: 'ERROR',
              summary: 'Call Delete Function Not Working',
              duration: 5000,
            });

          })
      });
    }
  };

  approved(itemId: any) {
    const requestBody = {
      app_ID: itemId,
    };
    this.apoinmentService.confirmData(itemId, requestBody).subscribe((res: IApiResponse) => {

      if (res.isExecuted === true) {
        this.approvedData = res.data;
        this.toast.success({
          detail: 'Approved',
          summary: 'Data Approved',
          duration: 1000,
        });
        setTimeout(() => {
          location.reload();
        }, 2000);

      } else {
        this.toast.error({
          detail: 'ERROR',
          summary: 'Data Not Approved',
          duration: 5000,
        });
      }
    });
  };

  delete(itemId: any) {
    const requestBody = {
      app_ID: itemId,
    };
    this.apoinmentService.deleteData(itemId, requestBody).subscribe((res: IApiResponse) => {

      if (res.isExecuted === true) {
        this.deleteData = res.data;
        this.toast.warning({
          detail: 'Deleted',
          summary: 'Data Deleted Successfully',
          duration: 1000,
        });
        setTimeout(() => {
          location.reload();
        }, 2000);

      } else {
        this.toast.error({
          detail: 'ERROR',
          summary: 'Data Deleted Unsuccessfully',
          duration: 5000,
        });
      }
    });
  }






}
