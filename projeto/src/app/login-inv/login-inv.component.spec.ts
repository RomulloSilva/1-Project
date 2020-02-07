import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInvComponent } from './login-inv.component';

describe('LoginInvComponent', () => {
  let component: LoginInvComponent;
  let fixture: ComponentFixture<LoginInvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginInvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
