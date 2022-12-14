import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopComponent } from './clase1/top/top.component';
import { LeftMenuComponent } from './clase1/left-menu/left-menu.component';
import { MainComponent } from './pages/main/main.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modulos/material/material.module';
import { ModalComponent } from './clase1/modal/modal.component';
import { AddStudentModalComponent } from './pages/main/add-student-modal/add-student-modal.component';
import { LayoutsModule } from "./layouts/layouts.module";



@NgModule({
    declarations: [
        AppComponent,
        AddStudentModalComponent,
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MaterialModule,
        LayoutsModule
    ]
})
export class AppModule { }
