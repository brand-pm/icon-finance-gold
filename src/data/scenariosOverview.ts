export interface ScenariosOverviewCard {
  id: string;
  tagKey: string;
  titleKey: string;
  descriptionKey: string;
  href: string;
}

export const scenariosOverviewCards: ScenariosOverviewCard[] = [
  {
    id: "wm",
    tagKey: "scenariosOverview.wm.tag",
    titleKey: "scenariosOverview.wm.title",
    descriptionKey: "scenariosOverview.wm.description",
    href: "/services/wealth-management",
  },
  {
    id: "fo",
    tagKey: "scenariosOverview.fo.tag",
    titleKey: "scenariosOverview.fo.title",
    descriptionKey: "scenariosOverview.fo.description",
    href: "/services/family-office",
  },
  {
    id: "st",
    tagKey: "scenariosOverview.st.tag",
    titleKey: "scenariosOverview.st.title",
    descriptionKey: "scenariosOverview.st.description",
    href: "/services/structuring-tax",
  },
  {
    id: "ma",
    tagKey: "scenariosOverview.ma.tag",
    titleKey: "scenariosOverview.ma.title",
    descriptionKey: "scenariosOverview.ma.description",
    href: "/services/ma-consulting",
  },
  {
    id: "ss",
    tagKey: "scenariosOverview.ss.tag",
    titleKey: "scenariosOverview.ss.title",
    descriptionKey: "scenariosOverview.ss.description",
    href: "/services/special-solutions",
  },
];
