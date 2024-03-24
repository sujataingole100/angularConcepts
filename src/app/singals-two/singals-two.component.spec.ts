import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingalsTwoComponent } from './singals-two.component';

describe('SingalsTwoComponent', () => {
  let component: SingalsTwoComponent;
  let fixture: ComponentFixture<SingalsTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingalsTwoComponent]
    });
    fixture = TestBed.createComponent(SingalsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
