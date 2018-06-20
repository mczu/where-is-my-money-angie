import { Component, OnInit, Input } from '@angular/core';
import { Expense } from '../expense';

@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.component.html',
  styleUrls: ['./expense-detail.component.css']
})
export class ExpenseDetailComponent implements OnInit {

  @Input() expense: Expense;

  constructor() { }

  ngOnInit() {
  }

}
