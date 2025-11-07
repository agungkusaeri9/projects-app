import { Pagination } from './pagination';

export type ApiResponse<T> = {
  meta: {
    code: number;
    statuss: string;
    message: string;
    pagination?: Pagination;
  };
  data?: T;
};
