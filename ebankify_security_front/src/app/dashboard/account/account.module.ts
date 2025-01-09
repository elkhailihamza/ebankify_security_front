import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountIndexComponent } from './account-index/account-index.component';
import { AccountRouterModule } from './account-router.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountService } from './account.service';
import { AccountDetailsComponent } from './account-details/account-details.component';

@NgModule({
  declarations: [
    AccountIndexComponent,
    AccountDetailsComponent
  ],
  imports: [
    CommonModule,
    AccountRouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    AccountService,
  ]
})
export class AccountModule { }
