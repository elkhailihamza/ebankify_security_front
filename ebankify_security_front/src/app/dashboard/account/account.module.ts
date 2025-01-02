import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountIndexComponent } from './account-index/account-index.component';
import { AccountCreateComponent } from './account-create/account-create.component';
import { AccountRouterModule } from './account-router.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountService } from './account.service';

@NgModule({
  declarations: [
    AccountIndexComponent,
    AccountCreateComponent
  ],
  imports: [
    CommonModule,
    AccountRouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    AccountService
  ]
})
export class AccountModule { }
