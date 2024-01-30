import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanteenAddComponent } from './canteen-add.component';

describe('CanteenAddComponent', () => {
  let component: CanteenAddComponent;
  let fixture: ComponentFixture<CanteenAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanteenAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanteenAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
