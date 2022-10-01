import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCarsSectionComponent } from './all-cars-section.component';

describe('AllCarsSectionComponent', () => {
  let component: AllCarsSectionComponent;
  let fixture: ComponentFixture<AllCarsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCarsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCarsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
