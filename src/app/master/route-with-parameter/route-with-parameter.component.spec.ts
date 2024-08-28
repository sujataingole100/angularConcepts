import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteWithParameterComponent } from './route-with-parameter.component';

describe('RouteWithParameterComponent', () => {
  let component: RouteWithParameterComponent;
  let fixture: ComponentFixture<RouteWithParameterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouteWithParameterComponent]
    });
    fixture = TestBed.createComponent(RouteWithParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
