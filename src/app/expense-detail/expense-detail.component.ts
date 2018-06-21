import { Component, OnInit, Input } from '@angular/core';
import { Expense } from '../expense';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.component.html',
  styleUrls: ['./expense-detail.component.css']
})
export class ExpenseDetailComponent implements OnInit {

  @Input() expense: Expense;

  constructor(
    private route: ActivatedRoute,
    private expenseService: ExpenseService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getExpense();
  }

  getExpense(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.expenseService.getExpense(id)
      .subscribe(expense => this.expense = expense);
  }

  goBack(): void {
    this.location.back();
  }

}
