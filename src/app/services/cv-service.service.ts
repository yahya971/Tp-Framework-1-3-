import { Injectable } from '@angular/core';
import { Person } from '../_models/personne';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CvServiceService {
    
    personsList = [
  new Person(1, 'Yahya', 'Derbeli', 21, 156516, 'developer', ''),
  new Person(2, 'Aymen', 'Sellaouti', 31, 8449849, 'Teacher', 'rotating_card_profile3.png'),
  new Person(3,'John','Wick',42,1007,'Assassin','john.jpeg')
];
  

  constructor(private router: Router) {
}


  getCvs() {
    return of(this.personsList);
  }
  viewDetail(person) {
    this.router.navigate(['Profile',person.id]);

  }
  getCvByIndex(id) {
    for (let person of this.personsList) {
      if (person.id == id)
        return of(person);
    }
  }
  updateCv(id, formValue) {
    for (let person of this.personsList) {
      if (person.id == id) {
        person.id = formValue.id;
        person.firstName = formValue.firstName;
        person.lastName = formValue.lastName;
        person.cin = formValue.cin;
        person.age = formValue.age;
        person.job = formValue.job;


      }
    }

  }
  deleteCv(id) {
    for (let person of this.personsList)
      if (person.id == id)
        this.personsList = this.personsList.filter(obj => obj !== person);
    this.router.navigate(['cvs'])
  }
  
}
