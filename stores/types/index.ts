import type { DevIcon, Project, SiteMetadata } from 'types';

/* Stores */
// App
export type AppStore = {
  readonly devIcons: DevIcon;
  readonly metadata: SiteMetadata;
  readonly siteImageUrl: string;
};

// Project
export type ProjectStore = {
  readonly openSource: Project[];
  readonly commercial: Project[];
};
