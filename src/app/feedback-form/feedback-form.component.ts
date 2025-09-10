// src/app/feedback-form/feedback-form.component.ts
import { Component } from '@angular/core';
import { FacilitatorQuestion } from './facilitator-rating/facilitator-rating.component';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent {

  // Data for Mr. Venkatesh Vatsa's questions
  facilitator1Questions: FacilitatorQuestion[] = [
    { text: 'Facilitator delivered the session with ease', name: 'facilitator1Ease' },
    { text: 'Punctual and adhered to time schedules', name: 'facilitator1Punctual' },
    { text: 'General delivery & communication', name: 'facilitator1Delivery' },
    { text: 'Command on the subject & ability to share the knowledge', name: 'facilitator1Command' }
  ];

  // Data for Mr. Akash Gupta's questions
  facilitator2Questions: FacilitatorQuestion[] = [
    { text: 'Facilitator delivered the session with ease', name: 'facilitator2Ease' },
    { text: 'Punctual and adhered to time schedules', name: 'facilitator2Punctual' },
    { text: 'General delivery & communication', name: 'facilitator2Delivery' },
    { text: 'Command on the subject & ability to share the knowledge', name: 'facilitator2Command' }
  ];

  // Event handlers for the form actions (optional, for future logic)
  onSubmitForm() {
    console.log('Submit button clicked!');
    // Here you would typically gather all form data and send it to a backend service
  }

  onClearForm() {
    console.log('Clear form button clicked!');
    // Here you would typically reset all form fields
  }
}