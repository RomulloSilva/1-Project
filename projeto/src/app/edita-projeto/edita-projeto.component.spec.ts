import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaProjetoComponent } from './edita-projeto.component';

describe('EditaProjetoComponent', () => {
  let component: EditaProjetoComponent;
  let fixture: ComponentFixture<EditaProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaProjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
