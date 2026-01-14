export interface Project {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  stack: string[];
  featured?: boolean;
}
