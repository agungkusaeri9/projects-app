import { Component, inject, Input } from '@angular/core';
import { Project } from '../../../core/interface/project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
})
export class ProjectCard {
  @Input() project: Project = {} as Project;
  private readonly router = inject(Router);

  onDetail(slug: string) {
    this.router.navigate(['project', slug]);
  }
}
