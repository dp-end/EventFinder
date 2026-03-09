import { Routes } from '@angular/router';

// Component'leri içeri aktarıyoruz (Import yollarını kendi klasör yapına göre kontrol et)
import { Login } from './components/pages/login/login';
import { RegisterSelection } from './components/pages/register-selection/register-selection';
import { RegisterStudent } from './components/pages/register-student/register-student';
import { RegisterClub } from './components/pages/register-club/register-club';
import { Home } from './components/pages/home/home';
import { EventDetail } from './components/pages/event-detail/event-detail';

export const routes: Routes = [
  // 1. UYGULAMA İLK AÇILDIĞINDA (Boş URL) -> Login'e yönlendir
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // 2. SAYFALARIMIZIN ROTALARI
  { path: 'login', component: Login },
  { path: 'register', component: RegisterSelection },
  { path: 'register-student', component: RegisterStudent },
  { path: 'register-club', component: RegisterClub },
  { path: 'home', component: Home },
  { path: 'event/:id', component: EventDetail},

  // 3. YANLIŞ URL GİRİLİRSE (Catch-all) -> Güvenlik için Login'e veya 404 sayfasına atılır
  { path: '**', redirectTo: 'login' }
];
