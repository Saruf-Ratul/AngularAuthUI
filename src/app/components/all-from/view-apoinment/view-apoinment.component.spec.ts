import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewApoinmentComponent } from './view-apoinment.component';

describe('ViewApoinmentComponent', () => {
  let component: ViewApoinmentComponent;
  let fixture: ComponentFixture<ViewApoinmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewApoinmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewApoinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
