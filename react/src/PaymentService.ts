const PAYMENT_NAMES = new Map([
  [1, 'First'],
  [2, 'Second'],
  [3, 'Third'],
  [4, 'Fourth'],
]);

export interface Payment {
  date: Date;
  sequence: number;
  amount: number;
}

export enum Currency {
  USD = '$',
}

export default class PaymentService {
  public static calculatePayments(total: number, payments: number): Payment[] {
    const payment = total / payments;
    const paymentDates = PaymentService.calculatePaymentDates(payments);

    return paymentDates.map((date, index) => {
      return {
        date,
        sequence: index + 1,
        amount: payment,
      } as Payment;
    });
  }

  public static getPhonicName(payment: number) {
    const name = PAYMENT_NAMES.get(payment);
    if (!name) {
      throw new Error(`Unable to get phonic name for ${payment}`);
    }

    return name;
  }

  private static calculatePaymentDates(
    payments: number,
    fromDate: Date = new Date()
  ): Date[] {
    // Find the number of days away from `fromDate` that each payment is to be made on.
    const paymentDays = Array.from(Array(payments).keys()).map(key => key * 14);
    const paymentDates = paymentDays.map(day => this.addDays(fromDate, day));

    return paymentDates;
  }

  private static addDays(date: Date, days: number) {
    // Note: Copy the incoming date to prevent it from getting mutated.
    const copy = new Date(date.getTime());
    return new Date(copy.setDate(copy.getDate() + days));
  }
}
