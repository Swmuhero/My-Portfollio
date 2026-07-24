export const FRAME_COUNT = 169;

export const framePath = (n: number) =>
  `/frames/frame_${String(n).padStart(4, "0")}.jpg`;

export type Dialogue = {
  id: string;
  show: number;
  hide: number;
  quote: string;
  speaker: string;
  film: string;
};

export const DIALOGUES: Dialogue[] = [
  {
    id: "d1",
    show: 0.1,
    hide: 0.3,
    quote: "Users remember beautiful interfaces. Systems remember reliable backends. I build what never breaks when the world depends on it.",
    speaker: "Precision & Reliability",
  },
  {
    id: "d2",
    show: 0.35,
    hide: 0.55,
    quote: "The strongest code is rarely seen. Every API, database, and server is a promise that every request will be answered with precision.",
    speaker: "Invisible Strength",
  },
  {
    id: "d3",
    show: 0.6,
    hide: 0.8,
    quote: "Backend development isn't about writing code—it's about designing trust, where every request, every byte, and every millisecond has a purpose.",
    speaker: "Engineering Mindset",
  },
];

export const HERO_TEXT_FADE_END = 0.08;
