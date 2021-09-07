import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BigNumberPipe } from './pipes/big-numbers.pipe';

const COMPONENTS = [BigNumberPipe]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class BigNumberModule { }
