import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoMoreWaitComponent } from './no-more-wait.component';

describe('NoMoreWaitComponent', () => {
  let component: NoMoreWaitComponent;
  let fixture: ComponentFixture<NoMoreWaitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoMoreWaitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoMoreWaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
