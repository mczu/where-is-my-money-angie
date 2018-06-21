import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Expense } from './expense';
import { EXPENSES } from './mock-expenses';
import { MessageService } from './message.service';

@Injectable()
export class ExpenseService {

  getExpenses(): Observable<Expense> {
    this.messageService.add('ExpenseService: fetched expenses');
    return of(EXPENSES);
  }

  constructor(private messageService: MessageService) { }

}
