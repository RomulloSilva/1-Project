import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAComponent } from './formulario-a.component';

describe('FormularioAComponent', () => {
  let component: FormularioAComponent;
  let fixture: ComponentFixture<FormularioAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
