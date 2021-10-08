import { Injectable } from '@angular/core';

const PAYMENT_NAMES = new Map([
  [1, 'First'],
  [2, 'Second'],
  [3, 'Third'],
  [4, 'Fourth'],
]);

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  public calculatePaymentDates(
    payments: number,
    fromDate: Date = new Date()
  ): Date[] {
    // Find the number of days away from `fromDate` that each payment is to be made on.
    const paymentDays = Array.from(Array(payments).keys()).map(key => key * 14);
    const paymentDates = paymentDays.map(day => this.addDays(fromDate, day));

    return paymentDates;
  }

  public getPhonicName(payment: number) {
    return PAYMENT_NAMES.get(payment);
  }

  private addDays(date: Date, days: number) {
    return new Date(date.setDate(date.getDate() + days));
  }
}
