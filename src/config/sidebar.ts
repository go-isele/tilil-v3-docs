export type SidebarItem = {
  title: string;
  slug?: string;
  children: Array<{
    title: string;
    slug: string;
    status?: string;
  }>;
};

export const SIDEBAR: Array<SidebarItem> = [
  {
    title: 'Getting Started',
    children: [
      {
        title: 'Overview',
        slug: '/docs',
      },
      {
        title: 'Introduction',
        slug: '/docs/intro',
      },
      {
        title: 'Getting Started Tutorial',
        slug: '/docs/getting-started',
      },
    ],
  },
  {
    title: 'API Intergration',
    children: [
      
    ],
  },
];
