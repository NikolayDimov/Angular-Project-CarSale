import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreAdsUserComponent } from './more-ads-user.component';

describe('MoreAdsUserComponent', () => {
  let component: MoreAdsUserComponent;
  let fixture: ComponentFixture<MoreAdsUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoreAdsUserComponent]
    });
    fixture = TestBed.createComponent(MoreAdsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
