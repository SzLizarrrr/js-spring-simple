import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcParentComponent } from './cc-parent.component';

describe('CcParentComponent', () => {
  let component: CcParentComponent;
  let fixture: ComponentFixture<CcParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
