import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DepartmentSingleComponent } from './pages/department-single/department-single.component';
import { DepartmentComponent } from './pages/department/department.component';
import { DoctorSingleComponent } from './pages/doctor-single/doctor-single.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiceComponent } from './pages/service/service.component';

const routes: Routes = [
  {
    path : '', redirectTo : 'home', pathMatch : 'full'
  },
  {
    path : 'home', component : HomeComponent
  },
  {
    path : 'about', component : AboutComponent
  },
  {
    path : 'appointment', component : AppointmentComponent
  },
  {
    path : 'contact', component : ContactComponent
  },
  {
    path : 'department', component : DepartmentComponent
  },
  {
    path : 'department-single', component : DepartmentSingleComponent
  },
  {
    path : 'doctor', component : DoctorComponent
  },
  {
    path : 'doctor-single', component : DoctorSingleComponent
  },
  {
    path : 'service', component : ServiceComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
