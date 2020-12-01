import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDatabaseCharactersComponent } from './admin-database-characters.component';

describe('AdminDatabaseCharactersComponent', () => {
  let component: AdminDatabaseCharactersComponent;
  let fixture: ComponentFixture<AdminDatabaseCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDatabaseCharactersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDatabaseCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
