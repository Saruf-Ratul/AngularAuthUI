import { TemplateRef } from '@angular/core';

export interface MessageDialog {
  title: string;
  content?: string | TemplateRef<any>;
  disableActionButtons?: boolean;
  confirmButtonText?: string;
  cancelButtonText?: string;
}
