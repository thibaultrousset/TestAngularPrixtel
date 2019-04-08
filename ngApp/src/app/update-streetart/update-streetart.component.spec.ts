import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStreetartComponent } from './update-streetart.component';

describe('UpdateStreetartComponent', () => {
  let component: UpdateStreetartComponent;
  let fixture: ComponentFixture<UpdateStreetartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateStreetartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStreetartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
