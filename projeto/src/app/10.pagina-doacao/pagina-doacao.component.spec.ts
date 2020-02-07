import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDoacaoComponent } from './pagina-doacao.component';

describe('PaginaDoacaoComponent', () => {
  let component: PaginaDoacaoComponent;
  let fixture: ComponentFixture<PaginaDoacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaDoacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaDoacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
