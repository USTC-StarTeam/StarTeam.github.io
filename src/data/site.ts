// Site-wide singletons (identity, contact, social, navigation).
// Kept here rather than in a content collection so layout components can
// import them directly.
//
// ⚙️  EDIT THIS FIRST: replace every placeholder below with your lab's details.
//    (Tip: ask Claude to "fill in src/data/site.ts for my lab" and paste your
//    name, institution, and a one-line mission.)

export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  pi: string;
  institution: string;
  university: string;
  url: string;
  description: string;
  email: string;
  phone?: string;
  address: string[];
  mapQuery: string;
  social: {
    scholar?: string;
    twitter?: string;
    github?: string;
  };
  nav: NavItem[];
}

export const site: SiteConfig = {
  name: "StarTeam",
  shortName: "StarTeam",
  pi: "王皓（Hao Wang）",
  institution: "计算机科学与技术学院",
  university: "中国科学技术大学",
  url: "https://ustc-starteam.github.io",
  description:
    "StarTeam 关注以数据为中心的人工智能，研究数据、模型与运行系统如何协同演进，并将方法应用于推荐系统、大语言模型与 AI for Science。",
  email: "wanghao3@ustc.edu.cn",
  address: [
    "中国科学技术大学高新校区",
    "新知楼 B709",
    "安徽省合肥市 230027",
  ],
  mapQuery: "B709, Xinzhi Building, USTC High-tech Campus, Hefei, Anhui, China 230027",
  social: {
    scholar: "https://scholar.google.com/citations?user=ou4Miu4AAAAJ&hl=zh-CN",
    github: "https://github.com/USTC-StarTeam",
  },
  nav: [
    { label: "团队", href: "/people" },
    { label: "研究", href: "/research" },
    { label: "论文", href: "/publications" },
    { label: "联系", href: "/contact" },
  ],
};
