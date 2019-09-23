import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateCalculationComponent } from './modal-create-calculation.component';

describe('ModalCreateCalculationComponent', () => {
  let component: ModalCreateCalculationComponent;
  let fixture: ComponentFixture<ModalCreateCalculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCreateCalculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreateCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
