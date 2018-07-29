import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormObservableComponent } from './form-observable.component';

describe('FormObservableComponent', () => {
  let component: FormObservableComponent;
  let fixture: ComponentFixture<FormObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
