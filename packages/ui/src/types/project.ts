export interface ProjectResource {
  label: string;
  url: string;
  type: 'image' | 'pdf' | 'html' | 'link';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  link?: string;
  status: 'live' | 'beta' | 'development' | 'deployed';
  type: 'company' | 'team' | 'personal';
  category: ('fullstack' | 'backend' | 'frontend' | 'ai')[];
  company?: string;
  period: string;
  role: string;
  longDescription?: string;
  details: string[];
  roleDetails?: { role: string; items: string[] }[];
  achievements: string[];
  resources?: ProjectResource[];
  hidden?: boolean;
}
