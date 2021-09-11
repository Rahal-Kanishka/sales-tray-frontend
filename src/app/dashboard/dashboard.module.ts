import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { AnalysisComponent } from './analysis/analysis.component';
import { MatListModule } from "@angular/material/list";
import { WrapperComponent } from './wrapper/wrapper.component';
import { MatIconModule } from "@angular/material/icon";
import { SalesComponent } from './sales/sales.component';
import { SalesRepsComponent } from './sales-reps/sales-reps.component';
import { CostComponent } from './cost/cost.component';
import { MatTabsModule } from "@angular/material/tabs";
import { SalesDashboardComponent } from './sales-dashboard/sales-dashboard.component';
import { SalesWrapperComponent } from './sales-wrapper/sales-wrapper.component';


@NgModule({
  declarations: [
    AnalysisComponent,
    WrapperComponent,
    SalesComponent,
    SalesRepsComponent,
    CostComponent,
    SalesDashboardComponent,
    SalesWrapperComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatTabsModule
  ]
})
export class DashboardModule { }
