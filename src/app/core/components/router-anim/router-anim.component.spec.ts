import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterAnimComponent } from './router-anim.component';

describe('RouterAnimComponent', () => {
  let component: RouterAnimComponent;
  let fixture: ComponentFixture<RouterAnimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterAnimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterAnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
