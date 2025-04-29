import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TrackerComponent } from './pages/tracker/tracker.component';
import { DailyFitnessLogComponent } from './pages/daily-fitness-log/daily-fitness-log.component';
import { WeeklyRoutineComponent } from './pages/weekly-routine/weekly-routine.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path:'tracker', component: TrackerComponent},
    {path: "daily-fitness-log", component: DailyFitnessLogComponent},
    {path:'weekly-plan', component:WeeklyRoutineComponent}
];
