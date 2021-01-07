import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiggyMenuComponent } from './swiggy-menu.component';

describe('SwiggyMenuComponent', () => {
  let component: SwiggyMenuComponent;
  let fixture: ComponentFixture<SwiggyMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwiggyMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiggyMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
