import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStreetartComponent } from './new-streetart.component';

describe('NewStreetartComponent', () => {
  let component: NewStreetartComponent;
  let fixture: ComponentFixture<NewStreetartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewStreetartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStreetartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
