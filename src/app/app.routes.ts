import { Routes } from '@angular/router';
import { ProjectList } from './features/project/project-list/project-list';
import { ProjectDetail } from './features/project/project-detail/project-detail';

export const routes: Routes = [
  {
    path: '',
    component: ProjectList,
  },
  {
    path: 'project/:slug',
    component: ProjectDetail,
  },
];
