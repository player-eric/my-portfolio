import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from "./homepage/homepage.component";
import { ProjectDetailComponent } from './projectList/project-detail/project-detail.component';
import { ProjectDetailStartComponent } from './projectList/project-detail-start/project-detail-start.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  {
    path: 'about', component: HomepageComponent, children: [
      {
      path: '', component: ProjectDetailStartComponent 
      },
      {
      path: ':projectname', component: ProjectDetailComponent
      }
    ]
  },
  {
    path: "not-found", component: PageNotFoundComponent
  },
  {
    path: "**", redirectTo: "not-found"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
