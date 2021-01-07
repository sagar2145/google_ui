import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiggyHomeComponent } from './swiggy-home.component';

describe('SwiggyHomeComponent', () => {
  let component: SwiggyHomeComponent;
  let fixture: ComponentFixture<SwiggyHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwiggyHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiggyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
