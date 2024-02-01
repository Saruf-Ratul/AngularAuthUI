import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { ApoinmentService } from '../../all-from/apoinment.service';
import { Router } from '@angular/router';
import { IApiResponse } from 'src/app/models/api-response.model';
import { CanteenService } from '../canteen.service';

@Component({
  selector: 'app-canteen-view',
  templateUrl: './canteen-view.component.html',
  styleUrls: ['./canteen-view.component.scss']
})
export class CanteenViewComponent {


  itemId: number | any;
  canteenFullData: any = [];

  tbAppFilterData: any = [];
  approvedData: any = [];
  deleteData: any = [];
  confirmModal?: NzModalRef;

  constructor(
    // public apoinmentService: ApoinmentService,
    public canteenService:CanteenService,
    private toast: NgToastService,
    private modal: NzModalService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.GetCanteenFullData();
    this.applyFilter(event);
  }

  GetCanteenFullData() {
    this.canteenService.getAllData().subscribe((res: IApiResponse) => {
      if (res.isExecuted) {
        this.canteenFullData = res.data;
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
    // this.itemId = itemId;
    // if (Value == "A") {
    //   this.confirmModal = this.modal.confirm({
    //     nzTitle: 'Do you want to approved these items?',
    //     nzContent: 'When clicked the OK button, this dialog will be closed after 1 second',
    //     nzOnOk: () =>
    //       new Promise<void>((resolve, reject) => {
    //         setTimeout(() => {
    //           this.approved(this.itemId);
    //           resolve();
    //         }, 1000);
    //       }).catch(() => {
    //         this.toast.error({
    //           detail: 'ERROR',
    //           summary: 'Call Approved Function Not Working',
    //           duration: 5000,
    //         });

    //       })
    //   });
    // }
    // else if (Value == "E") {
    //   this.confirmModal = this.modal.confirm({
    //     nzTitle: 'Do you want to edit these items?',
    //     nzContent: 'When clicked the OK button, this dialog will be closed after 1 second',
    //     nzOnOk: () =>
    //       new Promise<void>((resolve, reject) => {
    //         setTimeout(() => {
    //           this.edit(this.itemId);
    //           resolve();
    //         }, 1000);
    //       }).catch(() => {
    //         this.toast.error({
    //           detail: 'ERROR',
    //           summary: 'Call Edit Function Not Working',
    //           duration: 5000,
    //         });

    //       })
    //   });
    // }
    // else if (Value == "D") {
    //   this.confirmModal = this.modal.confirm({
    //     nzTitle: 'Do you want to delete these items?',
    //     nzContent: 'When clicked the OK button, this dialog will be closed after 1 second',
    //     nzOnOk: () =>
    //       new Promise<void>((resolve, reject) => {
    //         setTimeout(() => {
    //           this.delete(this.itemId);
    //           resolve();
    //         }, 1000);
    //       }).catch(() => {
    //         this.toast.error({
    //           detail: 'ERROR',
    //           summary: 'Call Delete Function Not Working',
    //           duration: 5000,
    //         });

    //       })
    //   });
    // }
  };

  approved(itemId: any) {
    // const requestBody = {
    //   app_ID: itemId,
    // };
    // this.apoinmentService.confirmData(itemId, requestBody).subscribe((res: IApiResponse) => {
    //   if (res.isExecuted === true) {
    //     this.approvedData = res.data;
    //     this.toast.success({
    //       detail: 'Approved',
    //       summary: 'Data Approved',
    //       duration: 1000,
    //     });
    //     setTimeout(() => {
    //       location.reload();
    //     }, 2000);

    //   } else {
    //     this.toast.error({
    //       detail: 'ERROR',
    //       summary: 'Data Not Approved',
    //       duration: 5000,
    //     });
    //   }
    // });
  };

  delete(itemId: any) {
    // const requestBody = {
    //   app_ID: itemId,
    // };
    // this.apoinmentService.deleteData(itemId, requestBody).subscribe((res: IApiResponse) => {

    //   if (res.isExecuted === true) {
    //     this.deleteData = res.data;
    //     this.toast.warning({
    //       detail: 'Deleted',
    //       summary: 'Data Deleted Successfully',
    //       duration: 1000,
    //     });
    //     setTimeout(() => {
    //       location.reload();
    //     }, 2000);

    //   } else {
    //     this.toast.error({
    //       detail: 'ERROR',
    //       summary: 'Data Deleted Unsuccessfully',
    //       duration: 5000,
    //     });
    //   }
    // });
  }

  edit(itemId: any) {
    this.router.navigate(['/apoinment', { id: itemId }]);
  };

  applyFilter(event: any) {
    const searchText = event.target.value.toLowerCase();
    this.tbAppFilterData = this.canteenFullData.filter((item: any) =>
      item.model.toLowerCase().includes(searchText) ||
      item.model_Year.toLowerCase().includes(searchText) ||
      item.km.toLowerCase().includes(searchText) ||
      item.remarks.toLowerCase().includes(searchText) ||
      item.address.toLowerCase().includes(searchText) ||
      item.vPhone.toLowerCase().includes(searchText) ||
      item.email.toLowerCase().includes(searchText)
    );
  }



  back() {
    window.history.back();
  }

  home() {
    window.location.href = '/dashboard';
  }

}
