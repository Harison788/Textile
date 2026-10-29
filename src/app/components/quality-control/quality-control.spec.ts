import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QualityControl } from './quality-control';

describe('QualityControl', () => {
  let component: QualityControl;
  let fixture: ComponentFixture<QualityControl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualityControl],
    }).compileComponents();

    fixture = TestBed.createComponent(QualityControl);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
