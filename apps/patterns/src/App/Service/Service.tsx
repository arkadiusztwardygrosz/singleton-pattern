export interface Item {
  id: number;
  word: string;
}

interface Datasource {
  getData(): Item[];
  syncData(items: Item[]): void;
}

type ObserverFn = (event: any) => void;

interface PubSub {
  observers: ObserverFn[];
  subscribe: (observer: ObserverFn) => void;
  unsubscribe: (observer: ObserverFn) => void;
  notify: (event: any) => void;
}

export const pubSub: PubSub = {
  observers: [],
  subscribe(observer) {
    this.observers.push(observer);
  },
  notify(event) {
    this.observers.forEach((observer) => observer(event));
  },
  unsubscribe(event) {
    this.observers = this.observers.filter(
      (subscriber) => subscriber !== event
    );
  },
};

class LocalDatasource implements Datasource {
  items: Item[] = [
    { id: 1, word: 'First' },
    { id: 2, word: 'Second' },
    { id: 3, word: 'Third' },
    { id: 4, word: 'Fourth' },
    { id: 5, word: 'Sixth' },
    { id: 6, word: 'Seventh' },
  ];

  getData() {
    return this.items;
  }

  syncData(items: Item[]) {
    this.items = items;
    pubSub.notify(items);
  }
}

export class DataService {
  private static instance: DataService | null = null;

  constructor(private datasource: Datasource) {
    if (DataService.instance) {
      throw new Error('DataService is initialized');
    }
  }

  getData() {
    return this.datasource.getData();
  }
  syncData(items: Item[]) {
    return this.datasource.syncData(items);
  }

  static getInstance(): DataService {
    if (!this.instance) {
      this.instance = new DataService(new LocalDatasource());
    }
    return this.instance;
  }
}
