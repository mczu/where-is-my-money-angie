import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Expense } from './expense';
// import { EXPENSES } from './mock-expenses';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ExpenseService {

  private expensesUrl = 'api/expenses';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET expenses from the server */
  getExpenses(): Observable<Expense[]> {
    // this.messageService.add('ExpenseService: fetched expenses');
    // return of(EXPENSES);
    return this.http.get<Expense[]>(this.expensesUrl)
    .pipe(
      tap(expenses => this.log(`fetched expenses`)),
      catchError(this.handleError('getExpenses', []))
    );
  }
  /** GET expense by id. Will 404 if id not found */
getExpense(id: number): Observable<Expense> {
  const url = `${this.expensesUrl}/${id}`;
  return this.http.get<Expense>(url).pipe(
    tap(_ => this.log(`fetched expense id=${id}`)),
    catchError(this.handleError<Expense>(`getExpense id=${id}`))
  );
}
/** PUT: update the expense on the server */
updateExpense (expense: Expense): Observable<any> {
  return this.http.put(this.expensesUrl, expense, httpOptions).pipe(
    tap(_ => this.log(`updated expense id=${expense.id}`)),
    catchError(this.handleError<any>('updateExpense'))
  );
}

/** POST: add a expense to the server */
addExpense (expense: Expense): Observable<Expense> {
  return this.http.post<Expense>(this.expensesUrl, expense, httpOptions).pipe(
    // tslint:disable-next-line:no-shadowed-variable
    tap((expense: Expense) => this.log(`added expense w/ id=${expense.id}`)),
    catchError(this.handleError<Expense>('addExpense'))
  );
}

/** DELETE: delete the expense from the server */
deleteExpense (expense: Expense | number): Observable<Expense> {
  const id = typeof expense === 'number' ? expense : expense.id;
  const url = `${this.expensesUrl}/${id}`;

  return this.http.delete<Expense>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted expenses id=${id}`)),
    catchError(this.handleError<Expense>('deleteExpense'))
  );
}

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  // getExpense(id: number): Observable<Expense> {
  //   // TODO: send the message _after_ fetching the expense
  //   this.messageService.add(`ExpenseService: fetched expense id=${id}`);
  //   return of(EXPENSES.find(expense => expense.id === id));
  // }

  /** Log a ExpenseService message with the MessageService */
  private log(message: string) {
      this.messageService.add('ExpenseService: ' + message);
    }

}
