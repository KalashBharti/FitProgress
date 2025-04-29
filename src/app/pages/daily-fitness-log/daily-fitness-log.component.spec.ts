import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyFitnessLogComponent } from './daily-fitness-log.component';

describe('DailyFitnessLogComponent', () => {
  let component: DailyFitnessLogComponent;
  let fixture: ComponentFixture<DailyFitnessLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyFitnessLogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyFitnessLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
