import { Routes } from '@angular/router';
import { Login } from './components/pages/login/login';
import { RegisterSelection } from './components/pages/register-selection/register-selection';
import { RegisterStudent } from './components/pages/register-student/register-student';

export const routes: Routes = [
  {path : '', redirectTo: '/login', pathMatch: 'full' },
  {path:'login' , component: Login},
  {path:'register' , component: RegisterSelection},
  {path: 'register-student', component: RegisterStudent}
];
