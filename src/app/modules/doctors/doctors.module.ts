import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { RouterModule, Routes } from '@angular/router';
import { DoctorCreateComponent } from './doctor-create/doctor-create.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: DoctorListComponent
  },
  {
    path: 'create',
    component: DoctorCreateComponent
  }
];

@NgModule({
  declarations: [
    DoctorListComponent,
    DoctorCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ]
})
export class DoctorsModule { }
