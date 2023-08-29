import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartbordComponent } from './chartbord.component';

describe('ChartbordComponent', () => {
  let component: ChartbordComponent;
  let fixture: ComponentFixture<ChartbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
