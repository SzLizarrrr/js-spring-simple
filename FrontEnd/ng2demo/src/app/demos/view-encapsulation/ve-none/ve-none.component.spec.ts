import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeNoneComponent } from './ve-none.component';

describe('VeNoneComponent', () => {
  let component: VeNoneComponent;
  let fixture: ComponentFixture<VeNoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeNoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeNoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
