import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { PaymentService } from '@shared/services';
import { SubmitTotal } from './installment.actions';
import { Payment } from './models/Payment';

export class InstallmentModel {
  payments: Payment[] = [];
}

@State<InstallmentModel>({
  name: 'installments',
  defaults: new InstallmentModel(),
})
@Injectable()
export class InstallmentState {
  constructor(private paymentService: PaymentService) {}

  @Selector()
  static payments(state: InstallmentModel): Payment[] {
    return state.payments;
  }

  @Action(SubmitTotal)
  submitAction(context: StateContext<InstallmentModel>, action: SubmitTotal) {
    const numPayments = 4;
    const payment = action.total / numPayments;
    const paymentDates = this.paymentService.calculatePaymentDates(numPayments);

    const payments = paymentDates.map((date, index) => {
      return <Payment>{
        date,
        paymentNumber: index + 1,
        amount: payment,
      };
    });

    context.setState(state => {
      return {
        ...state,
        payments,
      };
    });
  }
}
