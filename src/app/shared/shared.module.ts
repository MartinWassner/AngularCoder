import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftMenuComponent } from '../clase1/left-menu/left-menu.component';
import { TopComponent } from '../clase1/top/top.component';
import { MainComponent } from '../pages/main/main.component';
import { ModalComponent } from '../clase1/modal/modal.component';
import { FormsComponent } from '../forms/forms.component';
import { MaterialModule } from '../modulos/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LeftMenuComponent,
    TopComponent,
    MainComponent,
    ModalComponent,
    FormsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    
  ],
  exports: [
    LeftMenuComponent,
    TopComponent,
    MainComponent,
    ModalComponent,
    FormsComponent,
  ]

})
export class SharedModule { }
