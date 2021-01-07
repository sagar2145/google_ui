import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiggyHelpComponent } from './swiggy-help.component';

describe('SwiggyHelpComponent', () => {
  let component: SwiggyHelpComponent;
  let fixture: ComponentFixture<SwiggyHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwiggyHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiggyHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
