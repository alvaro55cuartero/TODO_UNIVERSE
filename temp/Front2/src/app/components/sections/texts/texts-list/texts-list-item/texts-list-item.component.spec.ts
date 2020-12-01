import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextsListItemComponent } from './texts-list-item.component';

describe('TextsListItemComponent', () => {
  let component: TextsListItemComponent;
  let fixture: ComponentFixture<TextsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextsListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
