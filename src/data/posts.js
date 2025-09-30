export const posts = [
  {
    slug: "week-1-start-bij-deskdrive",
    title: "Week 1 — Start bij DeskDrive",
    date: "2025-09-29",
    tags: ["wins","lessons learned","code"],
    excerpt: "Eerste week indrukken, tooling opgezet, eerste tickets.",
    content: `## Highlights
- Dev-omgeving opgezet (Node, Docker, Postman).
- Eerste kleine bugfix in API.
## Reflectie
CLI-workflow gaat vlot; volgende week OAuth flow beter begrijpen.`
  },
  {
    slug: "teambuilding-ochtend",
    title: "Teambuilding — Ochtendwandeling",
    date: "2025-10-02",
    tags: ["teambuilding","reflectie"],
    excerpt: "Leuke informele kennismaking met het team.",
    content: `Foto's toegevoegd in de blog. Teamdynamiek zat meteen goed.`
  },
  {
    slug: "bug-die-maar-niet-weg-wou",
    title: "Bug die maar niet weg wou",
    date: "2025-10-10",
    tags: ["fails","lessons learned","code"],
    excerpt: "Async race condition opgelost met duidelijke lifecycle.",
    content: `## Probleem
Race condition tussen twee API-calls.
## Oplossing
State machine + expliciete loading flags.`
  }
];

export const allTags = Array.from(new Set(posts.flatMap(p => p.tags))).sort();
