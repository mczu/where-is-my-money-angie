import { Component, OnInit } from '@angular/core';
import { Expense } from '../expense';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  expense: Expense = {
    id: 1,
    shop: 'Biedronka',
    price: '50',
    date: '2018-06-06',
    time: '18:00',
    paymentMethod: 'cash',
    document: 'receipt-link-www-sth'
  };

  constructor() {
  }

  ngOnInit() {
  }

}
