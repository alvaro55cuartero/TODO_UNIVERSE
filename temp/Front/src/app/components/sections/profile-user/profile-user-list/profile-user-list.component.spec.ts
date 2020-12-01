import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUserListComponent } from './profile-user-list.component';

describe('ProfileUserListComponent', () => {
  let component: ProfileUserListComponent;
  let fixture: ComponentFixture<ProfileUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
