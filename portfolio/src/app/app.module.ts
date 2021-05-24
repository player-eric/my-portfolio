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

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    HomepageComponent,
    ProjectListComponent,
    ProjectListItemComponent,
    ProjectDetailComponent,
    ProjectDetailStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
