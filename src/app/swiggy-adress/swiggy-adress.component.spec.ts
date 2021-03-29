import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiggyAdressComponent } from './swiggy-adress.component';

describe('SwiggyAdressComponent', () => {
  let component: SwiggyAdressComponent;
  let fixture: ComponentFixture<SwiggyAdressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiggyAdressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiggyAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
