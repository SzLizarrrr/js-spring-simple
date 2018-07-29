import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeNativeComponent } from './ve-native.component';

describe('VeNativeComponent', () => {
  let component: VeNativeComponent;
  let fixture: ComponentFixture<VeNativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeNativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeNativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
