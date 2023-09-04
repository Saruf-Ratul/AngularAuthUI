import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AsyncService } from 'src/app/services/async.service';
import { ConfirmationDialog } from '../model/confirmation-dialog.model';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'confirmation-dialog',
  template: `
    <h1 mat-dialog-title>{{ data.title }}</h1>

    <mat-dialog-content [innerHTML]="data.content"></mat-dialog-content>

    <mat-dialog-actions *ngIf="!data?.disableActionButtons" fxLayoutAlign="end">
      <button
        mat-raised-button
        [mat-dialog-close]="true"
        color="accent"
        class="white-text"
        [disabled]="asyncService.isLoading | async"
      >
        {{ data.confirmButtonText || 'YES' }}
      </button>
      <button mat-raised-button [mat-dialog-close]="false" color="warn">
        {{ data.cancelButtonText || 'NO' }}
      </button>
    </mat-dialog-actions>
  `
})
export class ConfirmDialogComponent {
  constructor(
    public asyncService: AsyncService,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationDialog
  ) {
  }

  isTemplateRef(content: any): boolean {
    if (typeof content !== 'string') {
      return true;
    }
    return false;
  }
}
