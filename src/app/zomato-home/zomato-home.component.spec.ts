import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZomatoHomeComponent } from './zomato-home.component';

describe('ZomatoHomeComponent', () => {
  let component: ZomatoHomeComponent;
  let fixture: ComponentFixture<ZomatoHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZomatoHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZomatoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
