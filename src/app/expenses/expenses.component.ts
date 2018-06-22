import { Component, OnInit } from '@angular/core';

import { Expense } from '../expense';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})

export class ExpensesComponent implements OnInit {

  expenses: Expense[];

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

}
