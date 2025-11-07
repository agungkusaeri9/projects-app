import { Component, Input } from '@angular/core';
import { Project } from '../../../core/interface/project';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
})
export class ProjectCard {
  @Input() project: Project = {} as Project;

  onDetail() {
    console.log('Link to detail page');
  }
}
