import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountDown } from './countdown';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CountDown
  ],
  exports: [
    CountDown
  ]
})
export class CountdownModule {}
