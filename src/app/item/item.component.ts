import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Person} from '../_models/personne';
import { CvDetailService } from '../services/cv-detail.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() person: Person;
  @Output() personSelected = new EventEmitter<Person>();

  constructor() {
  }

  ngOnInit() {
  }

  selectPerson() {
    this.personSelected.emit(this.person);
  }

}
