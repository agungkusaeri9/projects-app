import { Component, inject } from '@angular/core';
import { ProjectService } from '../project-service';
import { map, tap, catchError, of } from 'rxjs';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf, AsyncPipe, NgFor, CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, AsyncPipe, RouterLink],
  templateUrl: './project-detail.html',
})
export class ProjectDetail {
  private route = inject(ActivatedRoute);
  private projectService = inject(ProjectService);

  isLoading = true;
  error = false;

  slug = this.route.snapshot.paramMap.get('slug')!;

  project$ = this.projectService.getBySlug(this.slug).pipe(
    map((res) => res.data),
    tap(() => (this.isLoading = false)),
    catchError((err) => {
      this.isLoading = false;
      this.error = true;
      return of(null);
    })
  );
}
