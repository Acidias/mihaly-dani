import projectsData from "./projects.json";
import profileData from "./profile.json";

export interface Project {
  slug: string;
  title: string;
  oneLiner: string;
  role: string;
  stack: string[];
  outcome: string;
  startDate: string;
  endDate?: string;
  endNote?: string;
  links: { label: string; href: string }[];
  description: string;
}

export interface OtherProject {
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  endNote?: string;
  link?: string;
}

export const featuredProjects: Project[] = projectsData.featured;
export const otherProjects: OtherProject[] = projectsData.other;
export const toolbelt = profileData.toolbelt;
export const researchContent = profileData.research;
