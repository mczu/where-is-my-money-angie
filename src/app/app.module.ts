import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ExpenseDetailComponent } from './expense-detail/expense-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ExpensesComponent,
    ExpenseDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
