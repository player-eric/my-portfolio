import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProjectListComponent } from './projectList/project-list/project-list.component';
import { ProjectListItemComponent } from './projectList/project-list-item/project-list-item.component';
import { ProjectDetailComponent } from './projectList/project-detail/project-detail.component';
import { ProjectDetailStartComponent } from './projectList/project-detail-start/project-detail-start.component';
import { ProjectDetailDirective } from './projectList/project-detail/project-detail.directive';
import { BrownbytesComponent } from './projectDetails/brownbytes/brownbytes.component';
import { CoveryournoseComponent } from './projectDetails/coveryournose/coveryournose.component';
import { NmtvisComponent } from './projectDetails/nmtvis/nmtvis.component';
import { AnimizeComponent } from './projectDetails/animize/animize.component';
import { MtqeComponent } from './projectDetails/mtqe/mtqe.component';
import { NeuosComponent } from './projectDetails/neuos/neuos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    HomepageComponent,
    ProjectListComponent,
    ProjectListItemComponent,
    ProjectDetailComponent,
    ProjectDetailStartComponent,
    ProjectDetailDirective,
    BrownbytesComponent,
    CoveryournoseComponent,
    NmtvisComponent,
    AnimizeComponent,
    MtqeComponent,
    NeuosComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
