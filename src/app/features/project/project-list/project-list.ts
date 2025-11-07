import { Component, inject } from '@angular/core';
import { ProjectService } from '../project-service';
import { AsyncPipe, NgFor, NgForOf } from '@angular/common';
import { ProjectCard } from '../../../shared/components/project-card/project-card';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [AsyncPipe, ProjectCard, NgFor],
  templateUrl: './project-list.html',
})
export class ProjectList {
  private readonly projectService = inject(ProjectService);
  meta: any = null;
  projects$ = this.projectService.getAll().pipe(
    tap((res) => (this.meta = res.meta)),
    map((res) => res.data)
  );

  ngOnInit() {
    this.projects$.subscribe((res) => console.log('Project List:', res));
  }
}
