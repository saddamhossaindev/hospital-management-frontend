import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth/auth.guard';

const routes: Routes = [
  {
    path:'', redirectTo:'dashboard',pathMatch:'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [authGuard],
  },
  {
    path: 'doctors',
    loadChildren: () => import('./modules/doctors/doctors.module').then(m => m.DoctorsModule),
    canActivate: [authGuard],
  },
  {
    path: 'nurses',
    loadChildren: () => import('./modules/nurses/nurses.module').then(m => m.NursesModule),
    canActivate: [authGuard],
  },
  {
    path: 'patients',
    loadChildren: () => import('./modules/patients/patients.module').then(m => m.PatientsModule),
    canActivate: [authGuard],
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
