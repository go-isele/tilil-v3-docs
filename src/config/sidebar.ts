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
    title: "Getting Started",
    children: [
      {
        title: "Overview",
        slug: "/docs",
      },
      {
        title: "Introduction",
        slug: "/docs/intro",
      },
      {
        title: "Getting Started Tutorial",
        slug: "/docs/getting-started",
      },
    ],
  },
  {
    title: "Bulk SMS Intergration",
    children: [
      {
        title: "Introduction",
        slug: "/docs/bulk-sms-api",
      },
      {
        title: "Delivery Codes",
        slug: "/docs/delivery-codes-and-descriptions",
      },
      {
        title: "Messaging API Guide",
        slug: "/docs/messaging-api-guide",
      },
    ],
  },
  // {
  //   title: "Short Code Intergration",
  //   children: [
  //     {
  //       title: "ShortCodes API",
  //       slug: "/docs/short-code-api",
  //     },
  //     {
  //       title: "Purchase and Pricing",
  //       slug: "/docs/user-guide",
  //     },
  //     {
  //       title: "Subscription API",
  //       slug: "/docs/subscription-api",
  //     },
  //   ],
  // },
  {
    title: "User Guide Manual",
    children: [
      {
        title: "Bulk SMS Manual",
        slug: "/docs/user-guide",
      },
    ],
  },
];
