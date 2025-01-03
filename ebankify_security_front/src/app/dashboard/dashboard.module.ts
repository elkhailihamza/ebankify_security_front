import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { SidebarComponent } from "./layout/sidebar/sidebar.component";

@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    DashboardRoutingModule,
    CommonModule
],
})
export class DashboardModule { }
