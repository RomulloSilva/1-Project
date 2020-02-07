import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaUserComponent } from './edita-user.component';

describe('EditaUserComponent', () => {
  let component: EditaUserComponent;
  let fixture: ComponentFixture<EditaUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
