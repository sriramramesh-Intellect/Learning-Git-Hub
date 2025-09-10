// src/app/feedback-form/question-text-area/question-text-area.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-question-text-area',
  templateUrl: './question-text-area.component.html',
  styleUrls: ['./question-text-area.component.css']
})
export class QuestionTextAreaComponent {
  @Input() question: string = '';
  @Input() placeholder: string = '';
  // You might add an @Output() here if you need to emit the textarea content back to the parent
}