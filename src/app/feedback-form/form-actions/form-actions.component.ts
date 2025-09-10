// src/app/feedback-form/form-actions/form-actions.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-actions',
  templateUrl: './form-actions.component.html',
  styleUrls: ['./form-actions.component.css']
})
export class FormActionsComponent {
  @Output() submitForm = new EventEmitter<void>(); // Emits when submit button is clicked
  @Output() clearForm = new EventEmitter<void>();  // Emits when clear button is clicked

  onSubmit() {
    this.submitForm.emit();
  }

  onClear() {
    this.clearForm.emit();
  }
}