import { Component, OnInit, ViewChild, ComponentFactoryResolver, Type } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProjectDetailDirective } from './project-detail.directive';

import { BrownbytesComponent } from 'src/app/projectDetails/brownbytes/brownbytes.component';
import { CoveryournoseComponent } from 'src/app/projectDetails/coveryournose/coveryournose.component';
import { AnimizeComponent } from 'src/app/projectDetails/animize/animize.component';
import { MtqeComponent } from 'src/app/projectDetails/mtqe/mtqe.component';
import { NeuosComponent } from 'src/app/projectDetails/neuos/neuos.component';
import { NmtvisComponent } from 'src/app/projectDetails/nmtvis/nmtvis.component';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  @ViewChild(ProjectDetailDirective, { static: true }) projectDetailHost !: ProjectDetailDirective;
  projectName: string;
  projectDetailDisplayed: Type<any>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.projectName = params["projectname"];
          this.loadProjectDetail();
        }
    );
  }

  loadProjectDetail() {
    switch (this.projectName) {
      case "BrownBytes":
        this.projectDetailDisplayed = BrownbytesComponent;
        break;
      case "CoverYourNose":
        this.projectDetailDisplayed = CoveryournoseComponent;
        break;
      case "NMT-Visualizer":
        this.projectDetailDisplayed = NmtvisComponent;
        break;
      case "Animize":
        this.projectDetailDisplayed = AnimizeComponent;
        break;
      case "MTQE":
        this.projectDetailDisplayed = MtqeComponent;
        break;
      case "NEUOS":
        this.projectDetailDisplayed = NeuosComponent;
        break;
    }
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.projectDetailDisplayed);
    const viewContainerRef = this.projectDetailHost.viewContainerRef;
    viewContainerRef.clear();
    viewContainerRef.createComponent(componentFactory);
  }

}
