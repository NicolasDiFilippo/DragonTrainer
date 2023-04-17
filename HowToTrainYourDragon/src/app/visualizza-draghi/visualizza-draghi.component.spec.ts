import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizzaDraghiComponent } from './visualizza-draghi.component';

describe('VisualizzaDraghiComponent', () => {
  let component: VisualizzaDraghiComponent;
  let fixture: ComponentFixture<VisualizzaDraghiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizzaDraghiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizzaDraghiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
