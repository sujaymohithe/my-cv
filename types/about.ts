export interface About {
  sections: AboutSection[];
}

export interface AboutSection {
  title: string;
  content?: string;
  items?: string[];
}
