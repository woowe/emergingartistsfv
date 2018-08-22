import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatioImgComponent } from './ratio-img.component';

describe('RatioImgComponent', () => {
  let component: RatioImgComponent;
  let fixture: ComponentFixture<RatioImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatioImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatioImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
