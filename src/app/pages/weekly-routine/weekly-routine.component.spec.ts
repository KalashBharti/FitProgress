import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyRoutineComponent } from './weekly-routine.component';

describe('WeeklyRoutineComponent', () => {
  let component: WeeklyRoutineComponent;
  let fixture: ComponentFixture<WeeklyRoutineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeeklyRoutineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklyRoutineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
