export const citationCatalog = {
  name: "OpenAlex",
  asOf: "2026-11-06",
  period: "2023–2026",
  sourceNote:
    "依据用户提供的《USTC 王皓论文：2023–2026 引用降序版》整理，共 94 条：67 条有 OpenAlex 引用数据，27 条未获取。引用数来自文档所匹配的单条 OpenAlex 记录，不是 Google Scholar 数值，也不是多个版本引用数之和；0 仅表示匹配记录当时为 0。未获取项排在已知数值项之后，不能保证其引用数更低。文档未提供作者列表；新增条目留空，未另行独立核验。P047/P078 的版本关系待确认，保留为两条，不计算作者总引用数。",
} as const;

type CitationSortablePublication = {
  data: {
    citations?: number;
    year: number;
    catalogId?: string;
  };
};

/** Known citation counts first, then count, year, and numeric catalog ID. */
export function comparePublicationsByCitations(
  a: CitationSortablePublication,
  b: CitationSortablePublication,
): number {
  const aKnown = typeof a.data.citations === "number";
  const bKnown = typeof b.data.citations === "number";
  if (aKnown !== bKnown) return aKnown ? -1 : 1;
  if (aKnown && bKnown && a.data.citations !== b.data.citations) {
    return b.data.citations! - a.data.citations!;
  }
  if (a.data.year !== b.data.year) return b.data.year - a.data.year;
  const aId = Number(a.data.catalogId?.slice(1) ?? Infinity);
  const bId = Number(b.data.catalogId?.slice(1) ?? Infinity);
  return aId === bId ? 0 : aId - bId;
}
