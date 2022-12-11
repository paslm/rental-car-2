
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from 'src/app/pages/home/home.component';
import { AppComponent } from './app.component';
// // import { ExternalApiComponent } from 'src/app/pages/external-api/external-api.component';
// import { CarReservationComponent } from './car-reservation/car-reservation.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { HomePageComponent } from './home-page/home-page.component';

import { AboutSectionComponent } from './about-section/about-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { ClientSectionComponent } from './client-section/client-section.component';
import { GanttChartComponent } from './gantt-chart/gantt-chart.component';
import { CarReservationComponent } from './car-reservation/car-reservation.component';
import { SuccessComponent } from './success/success.component';
import { CancelledComponent } from './cancelled/cancelled.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'reservation/:id', component: CarReservationComponent, canActivate: [AuthGuard]},
  {path: 'about-section', component: AboutSectionComponent},
  {path: 'contact-section', component: ContactSectionComponent},
  {path: 'client-section', component: ClientSectionComponent,  canActivate:[AuthGuard]},
  {path: 'gantt-chart', component: GanttChartComponent, canActivate: [AuthGuard]},
  {path:"success", component: SuccessComponent},
  {path:"cancelled", component: CancelledComponent}
  // {
  //   path: 'external-api',
  //   component: ExternalApiComponent,
  //   canActivate: [AuthGuard],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true }),
    CommonModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}