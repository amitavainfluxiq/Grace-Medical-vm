import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/frontend/login/login.component';


// Grace Medical routing amitava

import { AppointmentsfrontendComponent } from './components/frontend/appointmentsfrontend/appointmentsfrontend.component';
import { HomeComponentfrontend } from './components/frontend/home/home.component';
import { OurphysiciansComponent } from './components/frontend/ourphysicians/ourphysicians.component';
import { ServicesComponent } from './components/frontend/services/services.component';
import { JournalsComponent } from './components/frontend/journals/journals.component';
import { ImagegalleryComponent } from './components/frontend/imagegallery/imagegallery.component';
import { VideogalleryComponent } from './components/frontend/videogallery/videogallery.component';
import { TestimonialComponent } from './components/frontend/testimonial/testimonial.component';
import { ContactusComponent } from './components/frontend/contactus/contactus.component';

// Grace Medical routing admin
import { DashboardComponent } from './components/backend/admin-dashboard/dashboard/dashboard.component';


import { AdminDoctorsComponent } from './components/backend/admin-dashboard/admin-doctors/admin-doctors.component';
import { AdminPatientsComponent } from './components/backend/admin-dashboard/admin-patients/admin-patients.component';
import { ManageCategoryComponent } from './components/backend/admin-dashboard/manage-category/manage-category.component';
import { ManageLessonComponent } from './components/backend/admin-dashboard/manage-lesson/manage-lesson.component';
import { TrainingCenterComponent } from './components/backend/admin-dashboard/training-center/training-center.component';
import { TrainingReportComponent } from './components/backend/admin-dashboard/training-report/training-report.component';
import { AdminAppointmentsComponent } from './components/backend/admin-dashboard/admin-appointments/admin-appointments.component';
import { AdminSocialAdvoComponent } from './components/backend/admin-dashboard/admin-social-advo/admin-social-advo.component';
import { AdminArticleManagerComponent } from './components/backend/admin-dashboard/admin-article-manager/admin-article-manager.component';
import { AdminTestimonialComponent } from './components/backend/admin-dashboard/admin-testimonial/admin-testimonial.component';
import { AdminNewsletterComponent } from './components/backend/admin-dashboard/admin-newsletter/admin-newsletter.component';
import { AdminGalleryManagerComponent } from './components/backend/admin-dashboard/admin-gallery-manager/admin-gallery-manager.component';


const routes: Routes = [

  {path: 'home', component: HomeComponentfrontend},
  {path: '', component: HomeComponentfrontend},
  
  {path: 'login', component: LoginComponent},
  {path: 'ourphysicians', component: OurphysiciansComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'journals', component: JournalsComponent},
  {path: 'imagegallery', component: ImagegalleryComponent},
  {path: 'videogallery', component: VideogalleryComponent},
  {path: 'testimonial', component: TestimonialComponent},
  {path: 'contactus', component: ContactusComponent},
  {path: 'appointment', component: AppointmentsfrontendComponent},



  {path: 'admin_dashboard', component: DashboardComponent},


  {path: 'admin_doctors', component: AdminDoctorsComponent},
  {path: 'admin_patients', component: AdminPatientsComponent},
  {path: 'manage_category', component: ManageCategoryComponent},
  {path: 'manage_lesson', component: ManageLessonComponent},
  {path: 'training_center', component: TrainingCenterComponent},
  {path: 'training_report', component: TrainingReportComponent},
  {path: 'admin_appointments', component: AdminAppointmentsComponent},
  {path: 'admin_social_advo', component: AdminSocialAdvoComponent},
  {path: 'admin_article_manager', component: AdminArticleManagerComponent},
  {path: 'admin_testimonial', component: AdminTestimonialComponent},
  {path: 'admin_newsletter', component: AdminNewsletterComponent},
  {path: 'admin_gallery_manager', component: AdminGalleryManagerComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
