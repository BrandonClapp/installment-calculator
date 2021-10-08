import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';
import { ResultsComponent } from './results/results.component';
import { InstallmentState } from './states/installment.state';

@NgModule({
  declarations: [AppComponent, PaymentComponent, ResultsComponent],
  imports: [NgxsModule.forRoot([InstallmentState]), BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
