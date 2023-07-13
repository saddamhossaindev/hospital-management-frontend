import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NurseListComponent } from './nurse-list/nurse-list.component';
import { NurseCreateComponent } from './nurse-create/nurse-create.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: NurseListComponent
  },
  {
    path: 'create',
    component: NurseCreateComponent
  }
];

@NgModule({
  declarations: [
    NurseListComponent,
    NurseCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ]
})
export class NursesModule { }
