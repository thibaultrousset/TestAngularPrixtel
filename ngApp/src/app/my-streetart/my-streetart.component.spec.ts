import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStreetartsComponent } from './my-streetart.component';

describe('MyStreetartsComponent', () => {
  let component: MyStreetartsComponent;
  let fixture: ComponentFixture<MyStreetartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyStreetartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyStreetartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
