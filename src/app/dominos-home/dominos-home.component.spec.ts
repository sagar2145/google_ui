import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DominosHomeComponent } from './dominos-home.component';

describe('DominosHomeComponent', () => {
  let component: DominosHomeComponent;
  let fixture: ComponentFixture<DominosHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DominosHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DominosHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
