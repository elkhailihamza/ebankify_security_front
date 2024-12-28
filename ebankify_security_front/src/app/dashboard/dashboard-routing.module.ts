import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { roleGuard } from '../auth/role.guard';

const routes: Routes = [
  {
    path: 'client',
    loadChildren: () => import('./client/client.module').then(m => m.ClientModule)
  },
  {
    path: 'accounts',
    children: [
      {path: '', component: AccountComponent}
    ],
    canActivate: [roleGuard],
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class DashboardRoutingModule { }
