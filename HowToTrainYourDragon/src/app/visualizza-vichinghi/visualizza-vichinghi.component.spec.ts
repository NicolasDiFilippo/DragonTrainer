import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizzaVichinghiComponent } from './visualizza-vichinghi.component';

describe('VisualizzaVichinghiComponent', () => {
  let component: VisualizzaVichinghiComponent;
  let fixture: ComponentFixture<VisualizzaVichinghiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizzaVichinghiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizzaVichinghiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
