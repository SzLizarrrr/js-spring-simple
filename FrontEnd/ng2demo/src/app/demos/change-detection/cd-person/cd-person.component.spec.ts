import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdPersonComponent } from './cd-person.component';

describe('CdPersonComponent', () => {
  let component: CdPersonComponent;
  let fixture: ComponentFixture<CdPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
