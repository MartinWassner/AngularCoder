import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { TopComponent } from '../clase1/top/top.component';
import { LeftMenuComponent } from '../clase1/left-menu/left-menu.component';
import { MainComponent } from '../pages/main/main.component';
import { MaterialModule } from '../modulos/material/material.module';
import { PagesModule } from '../pages/pages.module';



@NgModule({
    declarations: [
        DashboardLayoutComponent,
        TopComponent,
        MainComponent,
        LeftMenuComponent,
    ],
    exports: [
        DashboardLayoutComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        PagesModule
    ]
})
export class LayoutsModule { }
