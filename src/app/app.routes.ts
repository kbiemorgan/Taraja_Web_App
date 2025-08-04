import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

export const routes: Routes = [

    { path: '', component: LandingPageComponent },
    {
        path: 'login',
        loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'register',
        loadComponent: () => import('./components/register/register.component').then(m => m.RegisterComponent)
    },
    {
        path: 'book-therapist',
        loadComponent: () => import('./components/book-therapist/book-therapist.component').then(m => m.BookTherapistComponent)
    },
    {
        path: 'register-therapist',
        loadComponent: () => import('./components/register-therapist/register-therapist.component').then(m => m.RegisterTherapistComponent)
    },
    {
        path: 'main-navbar',
        loadComponent: () => import('./components/main-navbar/main-navbar.component').then(m => m.MainNavbarComponent)
    }
   
    
];
