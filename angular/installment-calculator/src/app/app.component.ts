import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  submitTotal(total: number) {
    // todo: dispatch TotalSubmitted action
    console.log('event', total);
  }
}
