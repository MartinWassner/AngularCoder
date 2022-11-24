import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopComponent } from './clase1/top/top.component';
import { LeftMenuComponent } from './clase1/left-menu/left-menu.component';
import { MainComponent } from './clase1/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    LeftMenuComponent,
    MainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
