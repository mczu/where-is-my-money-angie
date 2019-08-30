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
    console.log(this.expenseForm.value);
    // tslint:disable-next-line:max-line-length
    if (this.expenseForm.value.id !== '' && this.expenseForm.value.shop !== '' && this.expenseForm.value.price !== '' && this.expenseForm.value.date !== '') {
      this.expenseService.addExpense(this.expenseForm.value as Expense)
      .subscribe(expense => {
        this.expenses.push(expense);
      });
    } else {
      alert('Form not filled completely');
    }
  }

  getExpenses(): void {
    this.expenseService.getExpenses()
      .subscribe(expenses => this.expenses = expenses);
  }

  delete(expense: Expense): void {
    this.expenses = this.expenses.filter(h => h !== expense);
    this.expenseService.deleteExpense(expense).subscribe();
  }

  ngOnInit() {
    this.getExpenses();
  }

}
