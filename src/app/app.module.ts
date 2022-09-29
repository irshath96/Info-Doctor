import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DepartmentComponent } from './pages/department/department.component';
import { ServiceComponent } from './pages/service/service.component';
import { DepartmentSingleComponent } from './pages/department-single/department-single.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { DoctorSingleComponent } from './pages/doctor-single/doctor-single.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    AppointmentComponent,
    HeaderComponent,
    FooterComponent,
    DepartmentComponent,
    ServiceComponent,
    DepartmentSingleComponent,
    DoctorComponent,
    DoctorSingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
