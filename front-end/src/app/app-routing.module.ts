
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from 'src/app/pages/home/home.component';
import { AppComponent } from './app.component';
// import { ExternalApiComponent } from 'src/app/pages/external-api/external-api.component';

import { AuthGuard } from '@auth0/auth0-angular';
import { HomePageComponent } from './home-page/home-page.component';

import { AboutSectionComponent } from './about-section/about-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { ClientSectionComponent } from './client-section/client-section.component';
import { GanttChartComponent } from './gantt-chart/gantt-chart.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'about-section', component: AboutSectionComponent},
  {path: 'contact-section', component: ContactSectionComponent},
  {path: 'client-section', component: ClientSectionComponent, canActivate: [AuthGuard]},
  {path: 'gantt-chart', component: GanttChartComponent, canActivate: [AuthGuard]}
  // {
  //   path: 'external-api',
  //   component: ExternalApiComponent,
  //   canActivate: [AuthGuard],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}