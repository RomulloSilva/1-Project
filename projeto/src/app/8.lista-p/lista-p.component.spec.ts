import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPComponent } from './lista-p.component';

describe('ListaPComponent', () => {
  let component: ListaPComponent;
  let fixture: ComponentFixture<ListaPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
