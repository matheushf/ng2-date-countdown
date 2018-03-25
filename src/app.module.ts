import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CountDownComponent } from './components';



@NgModule({
  declarations: [
    CountDownComponent
  ],
  exports: [
    CountDownComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CountDownModule {
}
