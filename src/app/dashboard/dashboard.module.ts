import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { AnalysisComponent } from './analysis/analysis.component';
import { MatListModule } from "@angular/material/list";
import { WrapperComponent } from './wrapper/wrapper.component';
import { MatIconModule } from "@angular/material/icon";
import { SalesComponent } from './sales/sales.component';
import { SalesRepsComponent } from './sales-reps/sales-reps.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AnalysisComponent,
    WrapperComponent,
    SalesComponent,
    SalesRepsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule
  ]
})
export class DashboardModule { }
