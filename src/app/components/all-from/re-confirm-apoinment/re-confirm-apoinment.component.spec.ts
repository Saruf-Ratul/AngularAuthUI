import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReConfirmApoinmentComponent } from './re-confirm-apoinment.component';

describe('ReConfirmApoinmentComponent', () => {
  let component: ReConfirmApoinmentComponent;
  let fixture: ComponentFixture<ReConfirmApoinmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReConfirmApoinmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReConfirmApoinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
