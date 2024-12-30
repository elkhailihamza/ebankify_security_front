import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    DashboardRoutingModule,
    CommonModule,
  ],
})
export class DashboardModule { }
