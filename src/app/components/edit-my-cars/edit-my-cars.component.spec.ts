import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMyCarsComponent } from './edit-my-cars.component';

describe('EditMyCarsComponent', () => {
  let component: EditMyCarsComponent;
  let fixture: ComponentFixture<EditMyCarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditMyCarsComponent]
    });
    fixture = TestBed.createComponent(EditMyCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
