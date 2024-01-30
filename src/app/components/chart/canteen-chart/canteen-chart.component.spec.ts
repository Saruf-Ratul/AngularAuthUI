import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanteenChartComponent } from './canteen-chart.component';

describe('CanteenChartComponent', () => {
  let component: CanteenChartComponent;
  let fixture: ComponentFixture<CanteenChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanteenChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanteenChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
