import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextsReaderComponent } from './texts-reader.component';

describe('TextsReaderComponent', () => {
  let component: TextsReaderComponent;
  let fixture: ComponentFixture<TextsReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextsReaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextsReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
