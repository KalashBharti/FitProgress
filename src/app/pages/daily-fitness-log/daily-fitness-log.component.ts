import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-daily-fitness-log',
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './daily-fitness-log.component.html',
  styleUrl: './daily-fitness-log.component.scss'
})
export class DailyFitnessLogComponent {
 submit_data : {
  date: string,
  exersises: [
    {
      id : number,
      name: string,
      sets: number,
      reps: number,
      weight: number | null,
      level : number|null
    }
  ]
 } | null = null; 

}
