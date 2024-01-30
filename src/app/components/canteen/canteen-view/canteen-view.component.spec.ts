import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanteenViewComponent } from './canteen-view.component';

describe('CanteenViewComponent', () => {
  let component: CanteenViewComponent;
  let fixture: ComponentFixture<CanteenViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanteenViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanteenViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
