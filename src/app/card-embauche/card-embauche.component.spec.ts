import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEmbaucheComponent } from './card-embauche.component';

describe('CardEmbaucheComponent', () => {
  let component: CardEmbaucheComponent;
  let fixture: ComponentFixture<CardEmbaucheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardEmbaucheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEmbaucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
