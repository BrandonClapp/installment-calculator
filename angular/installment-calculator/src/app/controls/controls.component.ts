import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
})
export class ControlsComponent {
  @Output() onSubmit = new EventEmitter();

  submitTotal(total: number) {
    this.onSubmit.emit(total);
  }
}
