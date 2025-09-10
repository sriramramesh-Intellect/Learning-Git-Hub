// src/app/feedback-form/facilitator-rating/facilitator-rating.component.ts
import { Component, Input } from '@angular/core';

// Define an interface for the question structure
export interface FacilitatorQuestion {
  text: string;
  name: string; // The name attribute for the radio button group
}

@Component({
  selector: 'app-facilitator-rating',
  templateUrl: './facilitator-rating.component.html',
  styleUrls: ['./facilitator-rating.component.css']
})
export class FacilitatorRatingComponent {
  @Input() facilitatorName: string = '';
  @Input() questions: FacilitatorQuestion[] = [];

  // Optional: If you need to handle radio button changes within this component
  // onRatingChange(questionName: string, value: string) {
  //   console.log(`Facilitator: ${this.facilitatorName}, Question: ${questionName}, Rating: ${value}`);
  //   // You might emit an event here to the parent component
  // }
}