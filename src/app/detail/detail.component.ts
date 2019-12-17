import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../_models/personne';
import { EmbauchesService } from '../services/embauches.service';
import { CvServiceService } from '../services/cv-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {


  @Input() person: Person;

  constructor(private embaucheService: EmbauchesService, private cvService: CvServiceService) {
  }

  ngOnInit() {
  }

  addEmbauche() {
    this.embaucheService.addEmbauche(this.person);

  }
  viewDetails(person) {
    console.log(person)
    this.cvService.viewDetail(person);

  }

}
