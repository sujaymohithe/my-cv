export interface MainInfo {
  name: string;
  designation: string;
  description: string;
}

export interface ProfessionalSummary {
  highlights: string[];
}

export interface TechStackCategory {
  title: string;
  items: string[];
}

export interface TechStack {
  stacks: TechStackCategory[];
}

export interface HowIWork {
  principles: string[];
}

export interface Profile {
  mainInfo: MainInfo;
  professionalSummary: ProfessionalSummary;
  techStack: TechStack;
  howIWork: HowIWork;
}
