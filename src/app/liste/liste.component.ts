import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Person} from '../_models/personne';
import { CvServiceService } from '../services/cv-service.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {


  personsList: Person[];
  selectedPerson: Person;
  @Output() personSelected = new EventEmitter<Person>();

  constructor(private cvService: CvServiceService) {
  }

  ngOnInit() {
    this.cvService.getCvs().subscribe(value => this.personsList=value);

  
  }

  onSelectedPerson(data) {
    this.selectedPerson = data;
    this.personSelected.emit(data);
  }

}
