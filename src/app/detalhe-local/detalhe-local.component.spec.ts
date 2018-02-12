import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheLocalComponent } from './detalhe-local.component';

describe('DetalheLocalComponent', () => {
  let component: DetalheLocalComponent;
  let fixture: ComponentFixture<DetalheLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
