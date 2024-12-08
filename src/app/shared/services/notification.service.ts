import { HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { tokens } from '../../core/constants/tokens.const';
import { Severity } from '../models';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private readonly messageService = inject(MessageService);
  private readonly notificationDisplayTime = inject(tokens.appConfig).notificationDisplayTime;

  showError(message: string, error: HttpErrorResponse): void {
    this.messageService.add({
      severity: Severity.error,
      summary: message,
      detail: `${error.status}: ${error.error?.message || 'no message'}`,
      life: this.notificationDisplayTime
    });
  }

}
