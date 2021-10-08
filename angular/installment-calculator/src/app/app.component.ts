import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { PaymentInput } from './results/models/PaymentInput';
import { SubmitTotal } from './states/installment.actions';
import { InstallmentState } from './states/installment.state';
import { map, tap } from 'rxjs/operators';
import { PaymentService } from './payment.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private store: Store, private paymentService: PaymentService) {}

  @Select(InstallmentState.loading) isLoading$!: Observable<boolean>;

  payments$ = this.store.select(InstallmentState.payments).pipe(
    tap(payments => {
      console.log('new emission', payments);
    }),
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

  submitTotal(total: number) {
    this.store.dispatch(new SubmitTotal(total));
  }
}
