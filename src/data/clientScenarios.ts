export interface Scenario {
  id: string;
  tagKey: string;
  titleKey: string;
  situationKey: string;
  approachKey: string;
  outcomeKey: string;
}

const buildScenarios = (base: string, ids: string[]): Scenario[] =>
  ids.map((id) => ({
    id,
    tagKey: `scenarios.${base}.${id}.tag`,
    titleKey: `scenarios.${base}.${id}.title`,
    situationKey: `scenarios.${base}.${id}.situation`,
    approachKey: `scenarios.${base}.${id}.approach`,
    outcomeKey: `scenarios.${base}.${id}.outcome`,
  }));

export const wealthManagementScenarios: Scenario[] = buildScenarios("wm", ["case1", "case2", "case3"]);

export const familyOfficeScenarios: Scenario[] = buildScenarios("fo", ["case1", "case2", "case3"]);

export const structuringTaxScenarios: Scenario[] = buildScenarios("st", ["case1", "case2", "case3"]);

export const maConsultingScenarios: Scenario[] = buildScenarios("ma", ["case1", "case2", "case3"]);
