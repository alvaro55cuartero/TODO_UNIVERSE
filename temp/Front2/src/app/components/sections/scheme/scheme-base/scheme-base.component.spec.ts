import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemeBaseComponent } from './scheme-base.component';

describe('SchemeBaseComponent', () => {
  let component: SchemeBaseComponent;
  let fixture: ComponentFixture<SchemeBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemeBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemeBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
