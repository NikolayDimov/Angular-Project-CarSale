import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCarCardComponent } from './single-car-card.component';

describe('SingleCarCardComponent', () => {
  let component: SingleCarCardComponent;
  let fixture: ComponentFixture<SingleCarCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleCarCardComponent]
    });
    fixture = TestBed.createComponent(SingleCarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
