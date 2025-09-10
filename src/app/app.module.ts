import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';

// *** NEW LINE: Import SharedModule ***
import { SharedModule } from './shared/shared.module';
import { TrainersInfoComponent } from './feedback-form/trainers-info/trainers-info.component';
import { FeedbackHeaderComponent } from './feedback-form/feedback-header/feedback-header.component';
import { OverallProgramRatingComponent } from './feedback-form/overall-program-rating/overall-program-rating.component';
import { RecommendationRatingComponent } from './feedback-form/recommendation-rating/recommendation-rating.component';
import { FacilitatorRatingComponent } from './feedback-form/facilitator-rating/facilitator-rating.component';
import { QuestionTextAreaComponent } from './feedback-form/question-text-area/question-text-area.component';
import { FormActionsComponent } from './feedback-form/form-actions/form-actions.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackFormComponent,
    TrainersInfoComponent,
    FeedbackHeaderComponent,
    OverallProgramRatingComponent,
    RecommendationRatingComponent,
    FacilitatorRatingComponent,
    QuestionTextAreaComponent,
    FormActionsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    // *** NEW LINE: Add SharedModule to imports array ***
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }