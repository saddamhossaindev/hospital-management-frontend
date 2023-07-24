import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientListComponent } from './patient-list/patient-list.component';
import { RouterModule, Routes } from '@angular/router';
import { PatientCreateComponent } from './patient-create/patient-create.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: PatientListComponent
  },
  {
    path: 'create',
    component: PatientCreateComponent
  },
];

@NgModule({
  declarations: [
    PatientListComponent,
    PatientCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ]
})
export class PatientsModule { }
