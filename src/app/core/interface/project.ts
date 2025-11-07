import { Author } from './author';
import { Category } from './category';
import { Tag } from './tag';

export interface Project {
  id: number;
  name: string;
  slug: string;
  meta_description: string;
  short_description: string;
  meta_keyword: string;
  category: Category;
  description: string;
  link: string;
  image: string;
  galleries?: [];
  tags?: Tag[];
  author: Author;
  created_at: string;
}
