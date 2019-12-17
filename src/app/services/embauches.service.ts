import { Injectable } from '@angular/core';
import { Person } from '../_models/personne';
import { Observable, from, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmbauchesService {
  personsEmbauchesList: Person[];

  constructor() {
    this.personsEmbauchesList = [];
  }

  addEmbauche(person: Person) {
    if (this.personsEmbauchesList.indexOf(person)==-1)
      this.personsEmbauchesList.push(person);
    console.log(this.personsEmbauchesList);
  }

  getEmbauchesObservable() {
    return of(this.personsEmbauchesList);
  }
}
