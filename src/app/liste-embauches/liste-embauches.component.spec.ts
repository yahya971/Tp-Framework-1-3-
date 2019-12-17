import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEmbauchesComponent } from './liste-embauches.component';

describe('ListeEmbauchesComponent', () => {
  let component: ListeEmbauchesComponent;
  let fixture: ComponentFixture<ListeEmbauchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeEmbauchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeEmbauchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
