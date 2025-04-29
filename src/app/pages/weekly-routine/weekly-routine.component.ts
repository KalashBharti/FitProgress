import { NgClass, NgFor } from '@angular/common';
import { Component, ElementRef, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-weekly-routine',
  imports: [NgFor, NgClass,FormsModule,MatIconModule, MatButtonModule, MatFormFieldModule, MatSelectModule, MatInputModule],
  templateUrl: './weekly-routine.component.html',
  styleUrl: './weekly-routine.component.scss'
})
export class WeeklyRoutineComponent {
  exercises = [
    "Chest",
    "Back",
    "Triceps",
    "Biceps",
    "Shoulders",
    "Legs",
    "Core",
    "Forearms",
    "Rest Day",
     "Abs"
  ];
  days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"]

  weekRoutine: string[][] = Array.from({ length: 7 }, () => []);

  currentInputDay = 0;
  selectedExercise: string = '';
 
  @ViewChildren('exerciseList') exerciseLists!: QueryList<ElementRef>;
  constructor(private renderer: Renderer2) {}

  isExersiseExist(day: string[], ex: string):boolean{
    for(let e of day)
    {
      if(e === ex)
        return true;
    }
    return false;
  }
  addExercise(){
    if (this.selectedExercise) {

      //if the exersise already exist
      if(this.isExersiseExist(this.weekRoutine[this.currentInputDay], this.selectedExercise))
        return;

      this.weekRoutine[this.currentInputDay].push(this.selectedExercise);
      console.log(this.weekRoutine);
    }
  }

  selectDay(i:number){
    this.currentInputDay = i;
  }

  deleteWorkout(index:number, workout:string){
   this.weekRoutine[this.currentInputDay]= this.weekRoutine[this.currentInputDay].filter(e=>e!==workout);
  }


  //on submit
  onSubmit(){
    // weekRoutine should be send to the backend
    
  }
}
