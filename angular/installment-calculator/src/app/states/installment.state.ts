import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
// TODO: This shouldn't be at this level
import { PaymentService } from '../payment.service';
import { SubmitTotal } from './installment.actions';

export class InstallmentModel {
  loading = false;
  payments: { date: Date; paymentNumber: number; amount: number }[] = [];
}

@State<InstallmentModel>({
  name: 'installments',
  defaults: new InstallmentModel(),
})
@Injectable()
export class InstallmentState {
  constructor(private paymentService: PaymentService) {}

  @Selector()
  static payments(
    state: InstallmentModel
  ): { date: Date; paymentNumber: number; amount: number }[] {
    return state.payments;
  }

  @Action(SubmitTotal)
  submitAction(context: StateContext<InstallmentModel>, action: SubmitTotal) {
    context.setState(state => {
      // todo: floating point math...
      const payment = action.total / 4;
      const paymentDates = this.paymentService.calculatePaymentDates(4);

      const payments = paymentDates.map((date, index) => {
        return {
          date: date,
          paymentNumber: index + 1,
          amount: payment,
        };
      });
      // toggle loading, do calculation, add delay, set state payments, toggle loading
      return {
        ...state,
        payments,
      };
    });
    console.log('Sumbit Total Fired', action.total);
  }
}
