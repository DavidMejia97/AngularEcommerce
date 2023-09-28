import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlesRoutingModule } from './controles-routing.module';
import { ControlesComponent } from './controles.component';
import { ButtonsModule } from '@app/shared';


@NgModule({
  declarations: [
    ControlesComponent
  ],
  imports: [
    CommonModule,
    ControlesRoutingModule,
    ButtonsModule
  ]
})
export class ControlesModule { }
