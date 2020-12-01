import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NabvarComponent } from './nabvar.component';

describe('NabvarComponent', () => {
  let component: NabvarComponent;
  let fixture: ComponentFixture<NabvarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NabvarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NabvarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
