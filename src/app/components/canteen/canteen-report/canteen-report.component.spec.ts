import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanteenReportComponent } from './canteen-report.component';

describe('CanteenReportComponent', () => {
  let component: CanteenReportComponent;
  let fixture: ComponentFixture<CanteenReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanteenReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanteenReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
