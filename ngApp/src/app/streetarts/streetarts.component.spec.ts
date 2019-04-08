import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetartsComponent } from './streetarts.component';

describe('StreetartsComponent', () => {
  let component: StreetartsComponent;
  let fixture: ComponentFixture<StreetartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreetartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreetartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
