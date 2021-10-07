import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() amount: number = 0;
}
