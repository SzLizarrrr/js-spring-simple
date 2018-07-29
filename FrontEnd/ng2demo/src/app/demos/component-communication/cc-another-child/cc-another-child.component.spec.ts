import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcAnotherChildComponent } from './cc-another-child.component';

describe('CcAnotherChildComponent', () => {
  let component: CcAnotherChildComponent;
  let fixture: ComponentFixture<CcAnotherChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcAnotherChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcAnotherChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
