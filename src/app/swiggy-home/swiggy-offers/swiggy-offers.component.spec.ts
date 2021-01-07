import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiggyOffersComponent } from './swiggy-offers.component';

describe('SwiggyOffersComponent', () => {
  let component: SwiggyOffersComponent;
  let fixture: ComponentFixture<SwiggyOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwiggyOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiggyOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
