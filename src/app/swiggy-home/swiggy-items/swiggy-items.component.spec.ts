import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiggyItemsComponent } from './swiggy-items.component';

describe('SwiggyItemsComponent', () => {
  let component: SwiggyItemsComponent;
  let fixture: ComponentFixture<SwiggyItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwiggyItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiggyItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
