import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewcomersComponent } from './admin-newcomers.component';

describe('AdminNewcomersComponent', () => {
  let component: AdminNewcomersComponent;
  let fixture: ComponentFixture<AdminNewcomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNewcomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewcomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
