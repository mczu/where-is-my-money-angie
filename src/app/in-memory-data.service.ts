import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const expenses = [
    { id: 11, shop: 'Świat Ksiązki', price: '29', date: '2018-06-11', time: '18:56', paymentMethod: 'gotówka', document: 'linkdodropboxa' },
    // tslint:disable-next-line:max-line-length
    { id: 12, shop: 'Manufaktura Mojej Mamy', price: '11,13', date: '2018-06-12', time: '17:08', paymentMethod: 'gotówka', document: 'linkdodropboxa' },
    // tslint:disable-next-line:max-line-length
    { id: 12, shop: 'Automat biletowy', price: '47', date: '2018-06-11', time: '20:17', paymentMethod: 'karta', document: 'linkdodropboxa' },
    // tslint:disable-next-line:max-line-length
    { id: 13, shop: 'Owocowy domek', price: '13,04', date: '2018-06-12', time: '17:25', paymentMethod: 'gotówka', document: 'linkdodropboxa' },
    { id: 14, shop: 'Rossmann', price: '15,97', date: '2018-06-11', time: '16:42', paymentMethod: 'gotówka', document: 'linkdodropboxa' },
    { id: 15, shop: 'Biedronka', price: '23,34', date: '2018-06-08', time: '19:58', paymentMethod: 'gotówka', document: 'linkdodropboxa' }
    ];
    return {expenses};
  }
}
