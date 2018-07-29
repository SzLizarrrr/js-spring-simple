import * as Immutable from 'immutable';
const PersonRecord = Immutable.Record({
  name: '',
  age: 0
});

export class ImPerson extends PersonRecord {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    super({
      name,
      age
    });
  }
}
