import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { PaymentService } from '@shared/services';
import { map } from 'rxjs/operators';
import { PaymentInput } from './results/models/PaymentInput';
import { SubmitTotal } from './states/installment.actions';
import { InstallmentState } from './states/installment.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private store: Store, private paymentService: PaymentService) {}

  payments$ = this.store.select(InstallmentState.payments).pipe(
    map(payments => {
      return payments.map(payment => {
        // TODO: LocaleProvider to detect user's region and return date formatting options.
        return <PaymentInput>{
          title: payment.date.toLocaleString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
          }),
          subtitle: `${this.paymentService.getPhonicName(
            payment.paymentNumber
          )} payment`,
          amount: payment.amount,
        };
      });
    })
  );

  totalSubmitted(total: number) {
    this.store.dispatch(new SubmitTotal(total));
  }
}
