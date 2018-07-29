import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeEmulatedComponent } from './ve-emulated.component';

describe('VeEmulatedComponent', () => {
  let component: VeEmulatedComponent;
  let fixture: ComponentFixture<VeEmulatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeEmulatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeEmulatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
