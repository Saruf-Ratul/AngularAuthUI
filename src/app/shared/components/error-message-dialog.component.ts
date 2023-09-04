import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AsyncService } from 'src/app/services/async.service';
import { MessageDialog } from '../model/message-dialog.model';



@Component({
  selector: 'message-dialog',
  template: `
    <h1
      mat-dialog-title
      fxLayoutAlign="center"
      style="color: red">
    {{ data.title }}
    </h1>

    <mat-dialog-content fxLayoutAlign="center center" [innerHTML]="data.content"></mat-dialog-content>

    <mat-dialog-actions *ngIf="!data?.disableActionButtons" fxLayoutAlign="center">
      <button
        mat-raised-button
        [mat-dialog-close]="true"
        color="accent"
        [disabled]="asyncService.isLoading | async"
      >
        {{ data.confirmButtonText || 'OK' }}
      </button>
    </mat-dialog-actions>
  `
})
export class ErrorMessageDialogComponent {
  constructor(
    public asyncService: AsyncService,
    @Inject(MAT_DIALOG_DATA) public data: MessageDialog
  ) {
  }

  isTemplateRef(content: any): boolean {
    if (typeof content !== 'string') {
      return true;
    }
    return false;
  }
}
