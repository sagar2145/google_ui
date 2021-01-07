import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiggyHeaderComponent } from './swiggy-header.component';

describe('SwiggyHeaderComponent', () => {
  let component: SwiggyHeaderComponent;
  let fixture: ComponentFixture<SwiggyHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwiggyHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiggyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
