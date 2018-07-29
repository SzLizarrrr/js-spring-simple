import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFbComponent } from './reactive-fb.component';

describe('ReactiveFbComponent', () => {
  let component: ReactiveFbComponent;
  let fixture: ComponentFixture<ReactiveFbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
