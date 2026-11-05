export type ProjectCategoryType = 
  | 'all'
  | 'fullstack'
  | 'backend'
  | 'ai'
  | 'cybersecurity'
  | 'iot';

export type ProjectStatus = 
  | 'Functional MVP'
  | 'In Development'
  | 'Active Prototype'
  | 'Completed'
  | 'Upcoming Concept';

export interface Project {
  id: string;
  name: string;
  category: string;
  categoryType: ProjectCategoryType;
  shortDescription: string;
  fullDescription: string;
  problem: string;
  solution: string;
  technologies: string[];
  engineeringDecisions: string[];
  keyFeatures: string[];
  plannedFeatures?: string[];
  status: ProjectStatus;
  githubUrl?: string;
  liveDemoUrl?: string;
  architectureHighlights: string;
}

export interface SkillItem {
  name: string;
  category: string;
  experienceLevel?: 'Working Knowledge' | 'Proficient' | 'Fundamental';
  context: string;
  icon?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  description: string;
  skillsCovered: string[];
  credentialUrl?: string;
  credentialId?: string;
  statusBadge: string;
}

export interface JourneyMilestone {
  period: string;
  title: string;
  subtitle: string;
  description: string;
  skillsAcquired: string[];
  keyAchievements: string[];
  type: 'academic' | 'engineering' | 'security' | 'ai';
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics?: string[];
}
