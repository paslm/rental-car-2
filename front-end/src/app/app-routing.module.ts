
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from 'src/app/pages/home/home.component';
import { AppComponent } from './app.component';
// import { ExternalApiComponent } from 'src/app/pages/external-api/external-api.component';

import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HomeComponent,
  //   pathMatch: 'full',
  // },
  {
    path: '',
    component: AppComponent,
    canActivate: [AuthGuard],
  }
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