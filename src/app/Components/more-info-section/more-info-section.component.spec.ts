import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreInfoSectionComponent } from './more-info-section.component';

describe('MoreInfoSectionComponent', () => {
  let component: MoreInfoSectionComponent;
  let fixture: ComponentFixture<MoreInfoSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoreInfoSectionComponent]
    });
    fixture = TestBed.createComponent(MoreInfoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
