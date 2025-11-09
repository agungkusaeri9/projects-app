import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ApiResponse } from '../../core/utils/api-response';
import { Project } from '../../core/interface/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private readonly http = inject(HttpClient);

  getAll(): Observable<ApiResponse<Project[]>> {
    return this.http
      .get<ApiResponse<Project[]>>('/api/projects')
      .pipe(tap((res) => console.log(res)));
  }

  getBySlug(slug: string): Observable<ApiResponse<Project>> {
    return this.http
      .get<ApiResponse<Project>>(`/api/projects/${slug}`)
      .pipe(tap((res) => console.log(res)));
  }
}
