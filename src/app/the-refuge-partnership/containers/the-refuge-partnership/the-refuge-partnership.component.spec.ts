import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheRefugePartnershipComponent } from './the-refuge-partnership.component';

describe('TheRefugePartnershipComponent', () => {
  let component: TheRefugePartnershipComponent;
  let fixture: ComponentFixture<TheRefugePartnershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheRefugePartnershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheRefugePartnershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
