import { Component } from '@angular/core';
import { ApoinmentService } from '../apoinment.service';
import { IApiResponse } from 'src/app/shared/container/api-response.model';
import { NgToastService } from 'ng-angular-popup';

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

  constructor(
    public apoinmentService: ApoinmentService,
    private toast: NgToastService,
  ) { }

  ngOnInit(): void {
    this.GetAppApprovedData();
  }

  GetAppApprovedData() {
    this.apoinmentService.getAllData().subscribe((res: IApiResponse) => {
      if (res.isExecuted) {
        this.tbAppApprovedData = res.data;
        console.log(this.tbAppApprovedData);
        this.tbAppFilterData = this.tbAppApprovedData.filter((item: any) => item.apP_Confirm == null );
        console.log(this.tbAppFilterData);
      } else {
        this.toast.error({
          detail: 'ERROR',
          summary: 'Type Not Executed',
          duration: 5000,
        });
      }
    });
  }

  // approved(){
  //   alert("Approved");
  // }


  approved(itemId: number) {
    this.apoinmentService.confirmData(itemId).subscribe(
      (response) => {
        console.log("Item approved:", response);
        alert("Item approved successfully!");
      },
      (error) => {
        console.error("Error approving item:", error);
        alert("Failed to approve item. Please try again.");
      }
    );
  }


}
