import { Component, Input } from '@angular/core';
import { PaymentInput } from './models/PaymentInput';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent {
  @Input() payments: PaymentInput[] = [];
  @Input() loading: boolean = false;
}
