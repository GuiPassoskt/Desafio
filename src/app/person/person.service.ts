import { Injectable } from '@angular/core';
import { Person } from './person';
import { PERSON_ITEMS } from './person-data';
import { findIndex } from 'lodash';

@Injectable()
export class PersonService {
  private pItems = PERSON_ITEMS;

  getPersonsFromData(): Person[] {
    console.log(this.pItems);
    return this.pItems
  }

  addPerson(person: Person) {
    this.pItems.push(person);
    console.log(this.pItems);
  }

  updatePerson(person: Person) {
    let index = findIndex(this.pItems, (p: Person) => {
      return p.id === person.id;
    });
    this.pItems[index] = person;
  }

  deletePerson(person: Person) {
    this.pItems.splice(this.pItems.indexOf(person), 1);
    console.log(this.pItems);
  }

}