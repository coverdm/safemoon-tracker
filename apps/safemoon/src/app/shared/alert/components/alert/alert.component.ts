import { Component, Input } from '@angular/core';
import { AlertType } from '../../types/alert.type';

@Component({
  selector: 'app-alert',
  templateUrl: 'alert.component.html',
  styleUrls: ['alert.component.scss']
})
export class AlertComponent {
  @Input() type: AlertType = 'primary';
}
