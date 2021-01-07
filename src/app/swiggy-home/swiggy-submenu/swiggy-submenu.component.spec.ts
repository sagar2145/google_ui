import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiggySubmenuComponent } from './swiggy-submenu.component';

describe('SwiggySubmenuComponent', () => {
  let component: SwiggySubmenuComponent;
  let fixture: ComponentFixture<SwiggySubmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwiggySubmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiggySubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
