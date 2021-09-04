import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AnalysisComponent } from "./analysis/analysis.component";
import { WrapperComponent } from "./wrapper/wrapper.component";
import { SalesComponent } from "./sales/sales.component";
import { SalesRepsComponent } from "./sales-reps/sales-reps.component";

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: '',
        redirectTo: 'sales',
        pathMatch: 'full'
      },
      {
        path: 'sales',
        component: SalesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'analysis',
        component: AnalysisComponent
      },
      {
        path: 'sales-reps',
        component: SalesRepsComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/sales',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
