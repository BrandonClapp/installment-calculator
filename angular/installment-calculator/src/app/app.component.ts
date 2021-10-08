import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { PaymentInput } from './results/models/PaymentInput';
import { SubmitTotal } from './states/installment.actions';
import { InstallmentState } from './states/installment.state';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  payments$ = this.store.select(InstallmentState.payments).pipe(
    tap((payments) => {
      console.log('new emission', payments);
    }),
    map((payments) => {
      return payments.map((payment) => {
        // todo: LocaleProvider to detect user's region and return date formatting options.
        return <PaymentInput>{
          title: payment.date.toLocaleString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
          }),
          subtitle: payment.paymentNumber.toString(),
          amount: payment.amount,
        };
      });
    })
  );

  constructor(private store: Store) {}

  submitTotal(total: number) {
    this.store.dispatch(new SubmitTotal(total));
  }
}
