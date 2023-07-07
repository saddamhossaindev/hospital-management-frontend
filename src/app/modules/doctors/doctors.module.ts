import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '',
    component: DoctorListComponent
  }
];

@NgModule({
  declarations: [
    DoctorListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class DoctorsModule { }
