export const citationCatalog = {
  name: "OpenAlex",
  asOf: "2026-11-06",
  period: "2023–2026",
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
