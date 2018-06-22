import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const expenses = [
    { id: 11, shop: 'Świat Ksiązki' },
    { id: 12, shop: 'MMM' },
    { id: 13, shop: 'Automat biletowy' },
    { id: 14, shop: 'Owocowy domek'},
    { id: 15, shop: 'Rossmann' },
    { id: 16, shop: 'Biedronka' }
    ];
    return {expenses};
  }
}
