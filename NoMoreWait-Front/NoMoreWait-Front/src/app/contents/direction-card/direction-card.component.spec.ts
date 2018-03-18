import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionCardComponent } from './direction-card.component';

describe('DirectionCardComponent', () => {
  let component: DirectionCardComponent;
  let fixture: ComponentFixture<DirectionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
