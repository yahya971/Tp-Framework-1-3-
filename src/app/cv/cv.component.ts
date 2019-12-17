import {Component, OnInit} from '@angular/core';
import {Person} from '../_models/personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {


  selectedPerson: Person;

  constructor() {
  }

  ngOnInit() {
  }

}
