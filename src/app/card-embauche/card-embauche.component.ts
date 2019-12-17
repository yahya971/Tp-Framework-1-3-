import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../_models/personne';
import { CvDetailService } from '../services/cv-detail.service';

@Component({
  selector: 'app-card-embauche',
  templateUrl: './card-embauche.component.html',
  styleUrls: ['./card-embauche.component.css']
})
export class CardEmbaucheComponent implements OnInit {
  @Input() person: Person;
  constructor(private cvDetailService: CvDetailService) {
}

  ngOnInit() {

  }

}
