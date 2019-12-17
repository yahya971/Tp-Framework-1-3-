import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Person } from '../_models/personne';
import { CvServiceService } from '../services/cv-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  person: Person;
  updateClicked: boolean = false;
  personForm: FormGroup;
  constructor(private router: ActivatedRoute, private cvService: CvServiceService, private fb: FormBuilder) { }

  ngOnInit() {

    this.router.params.subscribe(
      params => this.cvService.getCvByIndex(params['id']).subscribe(p => { this.person = p; console.log(this.person)})

    );
    this.personForm = this.fb.group({
      'id': this.person.id,
      'firstName': this.person.firstName,
      'lastName': this.person.lastName,
      'job': this.person.job,
      'age': this.person.age,
      'cin': this.person.cin
    });

      
  }
  showForm() {
    this.updateClicked = true;
  }

  submitForm() {
    this.cvService.updateCv(this.person.id,this.personForm.value);
    
  }
  deleteForm(id) {
    this.cvService.deleteCv(id);
  }

}
