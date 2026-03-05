import { Routes } from '@angular/router';


import { authGuard } from './guards/auth-guard';
import { HomeComponent } from './components/home-component/home-component';
import { LoginComponent } from './components/login-component/login-component';
import { RegisterComponent } from './components/register-component/register-component';
import { NewFeedComponent } from './components/new-feed-component/new-feed-component';



// export const routes: Routes = [
//     {path: '', redirectTo: '/home', pathMatch: 'full'},
//     {path: 'home', component:HomeComponent, canActivate: [authGuard]},
//     {path: 'login', loadComponent: () => import('./components/login-component/login-component').then(m => m.LoginComponent)},
//     {path: 'register', loadComponent: () => import('./components/register-component/register-component').then(m => m.RegisterComponent)},
//     {path: 'new', loadComponent: () => import('./components/new-feed-component/new-feed-component').then(m => m.NewFeedComponent), canActivate: [authGuard]},
//     {path: '**', redirectTo: '/home', pathMatch: 'full'}
// ];
export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component:HomeComponent, canActivate: [authGuard]},
    {path: 'login', component:LoginComponent},
    {path: 'register', component:RegisterComponent},
    {path: 'new', component:NewFeedComponent, canActivate: [authGuard]},
    {path: '**', redirectTo: '/home', pathMatch: 'full'}
];
