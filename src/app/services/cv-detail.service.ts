import { Injectable } from '@angular/core';
import { Person } from '../_models/personne';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvDetailService {
  person: Person = null;

  constructor() { }
  getPersonObservable() {
    return of(this.person);
  }
  getPerson() {
    return this.person;
  }
  setPerson(p: Person) {
    this.person = p;
  }
}
