import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerModule } from './spinner/spinner.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SpinnerModule
  ],
  exports:[
    SpinnerModule
  ]
})
export class IndicatorsModule { }
