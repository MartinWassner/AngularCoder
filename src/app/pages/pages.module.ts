import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../pages/main/main.component';
import { MaterialModule } from '../modulos/material/material.module';



@NgModule({
  declarations: [
    //MainComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,

  ]
})
export class PagesModule { }
