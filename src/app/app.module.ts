import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopComponent } from './clase1/top/top.component';
import { LeftMenuComponent } from './clase1/left-menu/left-menu.component';
import { MainComponent } from './clase1/main/main.component';
import { MidirectivaDirective } from './clase1/left-menu/midirectiva.directive';
import { FormsComponent } from './forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modulos/material/material.module';
import { ModalComponent } from './clase1/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    LeftMenuComponent,
    MainComponent,
    MidirectivaDirective,
    FormsComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
