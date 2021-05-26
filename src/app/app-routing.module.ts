import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from "./homepage/homepage.component";
import { ProjectDetailComponent } from './projectList/project-detail/project-detail.component';
import { ProjectDetailStartComponent } from './projectList/project-detail-start/project-detail-start.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  {
    path: 'homepage', component: HomepageComponent, children: [
      {
      path: '', component: ProjectDetailStartComponent 
      },
      {
      path: ':projectname', component: ProjectDetailComponent
      }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
