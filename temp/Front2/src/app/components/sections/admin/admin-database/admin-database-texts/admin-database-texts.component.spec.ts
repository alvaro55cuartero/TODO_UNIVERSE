import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDatabaseTextsComponent } from './admin-database-texts.component';

describe('AdminDatabaseTextsComponent', () => {
  let component: AdminDatabaseTextsComponent;
  let fixture: ComponentFixture<AdminDatabaseTextsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDatabaseTextsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDatabaseTextsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
