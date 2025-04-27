import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TrackerComponent } from './pages/tracker/tracker.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path:'tracker', component: TrackerComponent}
];
