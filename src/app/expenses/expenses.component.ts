import { Component, OnInit } from '@angular/core';

import { Expense } from '../expense';
import { ExpenseService } from '../expense.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})

export class ExpensesComponent implements OnInit {

  expenses: Expense[];

  expenseForm: FormGroup;



  constructor(private expenseService: ExpenseService, private formBuilder: FormBuilder) {
    this.expenseForm = this.createFormGroup();
  }
  createFormGroup() {
    return this.formBuilder.group({
    // form
      id: ['', [Validators.required, Validators.pattern('[0-9]')]],
      shop: '',
      price: '',
      date: '',
      time: '',
      paymentMethod: '',
      document: ''
    });
  }

  get id() { return this.expenseForm.get('id'); }

  sendData() {
    console.warn(this.expenseForm.value);
    this.expenseService.addExpense(this.expenseForm.value as Expense)
      .subscribe(expense => {
        this.expenses.push(expense);
      });
  }

  getExpenses(): void {
    this.expenseService.getExpenses()
      .subscribe(expenses => this.expenses = expenses);
  }
  // add(shop: string): void {
  //   shop = shop.trim();
  //   if (!shop) { return; }
  //   this.expenseService.addExpense({ shop } as Expense)
  //     .subscribe(expense => {
  //       this.expenses.push(expense);
  //     });
  // }
  delete(expense: Expense): void {
    this.expenses = this.expenses.filter(h => h !== expense);
    this.expenseService.deleteExpense(expense).subscribe();
  }

  ngOnInit() {
    this.getExpenses();
  }

  // sendData() {
  //   console.log(this.form.value);
  // }

}
