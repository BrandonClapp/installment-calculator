import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // todo: make type for this
  payments2 = [
    { title: 'Jan 24, 2020', subtitle: 'First payment', amount: 23.5 },
    { title: 'Feb 07, 2020', subtitle: 'Second payment', amount: 23.5 },
    { title: 'Feb 21, 2020', subtitle: 'Third payment', amount: 23.54 },
    { title: 'Mar 06, 2020', subtitle: 'Fourth payment', amount: 23.5 },
  ];

  payments: { title: string; subtitle: string; amount: number }[] = [];

  submitTotal(total: number) {
    // todo: dispatch TotalSubmitted action
    console.log('event', total);
    if (total) this.payments = this.payments2;
    else this.payments = [];
  }
}
