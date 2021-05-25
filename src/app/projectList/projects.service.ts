import { Injectable } from '@angular/core';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [
    new Project("BrownBytes", "JS, React, Redux", "./assets/selfie.jpeg"),
    new Project("CoverYourNose", "Python, d3, three.js", "./assets/selfie.jpeg"),
    new Project("NMT-Visualizer", "Python, d3, three.js", "./assets/selfie.jpeg"),
    new Project("Animize", "Python, d3, three.js", "./assets/selfie.jpeg"),
    new Project("MTQE", "Python, d3, three.js", "./assets/selfie.jpeg"),
    new Project("NEUOS", "Python, d3, three.js", "./assets/selfie.jpeg"),
  ]

  constructor() { }

  getProjects() {
    return this.projects.slice();
  }

}
