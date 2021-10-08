import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  public calculatePaymentDates(payments: number): Date[] {
    const paymentDays = Array.from(Array(payments).keys());
    const paymentDates = paymentDays.map(day => this.addDays(new Date(), day));

    return paymentDates;
  }

  private addDays(date: Date, days: number) {
    return new Date(date.setDate(date.getDate() + days));
  }
}
