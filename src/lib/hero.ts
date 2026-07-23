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
    quote: "The best way to predict the future is to invent it.",
    speaker: "Alan Kay",
    film: "1971",
  },
  {
    id: "d2",
    show: 0.35,
    hide: 0.55,
    quote: "Programs must be written for people to read, and only incidentally for machines to execute.",
    speaker: "Harold Abelson",
    film: "1984",
  },
  {
    id: "d3",
    show: 0.6,
    hide: 0.8,
    quote: "Innovation distinguishes between a leader and a follower.",
    speaker: "Steve Jobs",
    film: "2001",
  },
];

export const HERO_TEXT_FADE_END = 0.08;
