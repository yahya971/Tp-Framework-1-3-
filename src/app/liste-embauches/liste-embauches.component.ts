import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../_models/personne';
import { EmbauchesService } from '../services/embauches.service';


@Component({
  selector: 'app-liste-embauches',
  templateUrl: './liste-embauches.component.html',
  styleUrls: ['./liste-embauches.component.css']
})
export class ListeEmbauchesComponent implements OnInit {
  listeEmbauchesObservable: Observable<Person>;
  listeEmbauches: Person[];
  constructor(private embauchesService: EmbauchesService) {
}


  ngOnInit() {
    this.embauchesService.getEmbauchesObservable().subscribe(value => this.listeEmbauches=value)
  }

}
