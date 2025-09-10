import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component'; // <-- ADD THIS LINE

@NgModule({
  declarations: [
    AppHeaderComponent,
    AppFooterComponent // <-- ADD THIS LINE
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AppHeaderComponent,
    AppFooterComponent // <-- ADD THIS LINE to make it usable outside SharedModule
  ]
})
export class SharedModule { }