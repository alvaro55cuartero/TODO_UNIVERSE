import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDatabaseUsersComponent } from './admin-database-users.component';

describe('AdminDatabaseUsersComponent', () => {
  let component: AdminDatabaseUsersComponent;
  let fixture: ComponentFixture<AdminDatabaseUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDatabaseUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDatabaseUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
