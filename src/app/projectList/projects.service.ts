import { Injectable } from '@angular/core';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [
    new Project("BrownBytes", "React, Redux, Node.js", "./assets/images/project-logos/brownbytes.png"),
    new Project("NMT-Visualizer", "Fairseq, D3.js, Three.js", "./assets/images/project-logos/nmtvis.png"),
    new Project("CoverYourNose", "PyTorch, OpenCV, Flask", "./assets/images/project-logos/coveryournose.png"),
    new Project("MTQE", "PyTorch, OpenKiwi", "./assets/images/project-logos/mtqe.png"),
    new Project("Animize", "TensorFlow, NetworkX", "./assets/images/project-logos/animize.png"),
    new Project("NEUOS", "C++, STL, Qt", "./assets/images/project-logos/neuos.png"),
  ]

  constructor() { }

  getProjects() {
    return this.projects.slice();
  }

}
