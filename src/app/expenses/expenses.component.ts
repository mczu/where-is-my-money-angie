import { Component, OnInit } from '@angular/core';

import { Expense } from '../expense';
import { ExpenseService } from '../expense.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})

export class ExpensesComponent implements OnInit {

  expenses: Expense[];

  // form
  form = new FormGroup({
    id: new FormControl(''),
    shop: new FormControl(''),
    price: new FormControl(''),
    date: new FormControl(''),
    time: new FormControl(''),
    paymentMethod: new FormControl(''),
    document: new FormControl('')
  });

  constructor(private expenseService: ExpenseService) {
  }

  getExpenses(): void {
    this.expenseService.getExpenses()
      .subscribe(expenses => this.expenses = expenses);
  }
  add(shop: string): void {
    shop = shop.trim();
    if (!shop) { return; }
    this.expenseService.addExpense({ shop } as Expense)
      .subscribe(expense => {
        this.expenses.push(expense);
      });
  }
  delete(expense: Expense): void {
    this.expenses = this.expenses.filter(h => h !== expense);
    this.expenseService.deleteExpense(expense).subscribe();
  }

  ngOnInit() {
    this.getExpenses();
  }

  sendData() {
    console.log(this.form.value);
  }

}
