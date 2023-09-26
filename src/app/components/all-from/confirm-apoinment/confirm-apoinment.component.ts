import { Component } from '@angular/core';
import { ApoinmentService } from '../apoinment.service';
import { IApiResponse } from 'src/app/shared/container/api-response.model';
import { NgToastService } from 'ng-angular-popup';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-confirm-apoinment',
  templateUrl: './confirm-apoinment.component.html',
  styleUrls: ['./confirm-apoinment.component.scss']
})
export class ConfirmApoinmentComponent {

  itemId: number | any;
  tbAppApprovedData: any = [];
  tbAppFilterData: any = [];

  approvedData : any = [];
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
        this.tbAppFilterData = this.tbAppApprovedData.filter((item: any) => item.apP_Confirm == null );
      } else {
        this.toast.error({
          detail: 'ERROR',
          summary: 'Type Not Executed',
          duration: 5000,
        });
      }
    });
  }

  buttonAction(itemId : any, Value: any) {
    this.itemId = itemId;
    if (Value == "A") {
      this.confirmModal = this.modal.confirm({
        nzTitle: 'Do you Want to Approved these items?',
        nzContent: 'When clicked the OK button, this dialog will be closed after 1 second',
        nzOnOk: () =>
        new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() =>
        this.approved(this.itemId)
        )
      });
    }
    else if (Value == "E") {
      // this.showConfirm();
    }
    else if (Value == "D") {
      // this.showConfirm();
    }
  }

  approved(itemId : any ) {
    console.log("itemId",itemId);
    this.apoinmentService.confirmData(itemId).subscribe((res: IApiResponse) => {
      if (res.isExecuted) {
        console.log("@@@@@@@@@@@@@@@@@",res.data);
        this.approvedData = res.data;
        console.log("#############",this.approvedData);
        this.GetAppApprovedData();
        this.toast.success({
          detail: 'Approved',
          summary: 'Type Executed',
          duration: 5000,
        });
      } else {
        this.toast.error({
          detail: 'ERROR',
          summary: 'Type Not Executed',
          duration: 5000,
        });
      }
    });
  }






}
