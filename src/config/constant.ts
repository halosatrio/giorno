// import { BookOpenIcon } from '@heroicons/react/24/solid';

export type ITEM_COLORS =
  | "red"
  | "orange"
  | "yellow"
  | "lime"
  | "emerald"
  | "cyan"
  | "sky"
  | "indigo"
  | "purple"
  | "rose";

type colorsObject = {
  [key in ITEM_COLORS]: string;
};

export const BG_COLORS: colorsObject = {
  red: "bg-red-600",
  orange: "bg-orange-500",
  yellow: "bg-yellow-500",
  lime: "bg-lime-500",
  emerald: "bg-emerald-600",
  cyan: "bg-cyan-500",
  sky: "bg-sky-500",
  indigo: "bg-indigo-600",
  purple: "bg-purple-500",
  rose: "bg-rose-500",
};

export const TEXT_COLORS: colorsObject = {
  red: "text-red-600",
  orange: "text-orange-500",
  yellow: "text-yellow-500",
  lime: "text-lime-500",
  emerald: "text-emerald-600",
  cyan: "text-cyan-500",
  sky: "text-sky-500",
  indigo: "text-indigo-600",
  purple: "text-purple-500",
  rose: "text-rose-500",
};

export const COLORS: ITEM_COLORS[] = [
  "red",
  "orange",
  "yellow",
  "lime",
  "emerald",
  "cyan",
  "sky",
  "indigo",
  "purple",
  "rose",
];

export const SELECTED_ICON_COLORS: colorsObject = {
  red: "bg-red-900",
  orange: "bg-orange-800",
  yellow: "bg-yellow-800",
  lime: "bg-lime-800",
  emerald: "bg-emerald-900",
  cyan: "bg-cyan-800",
  sky: "bg-sky-800",
  indigo: "bg-indigo-900",
  purple: "bg-purple-800",
  rose: "bg-rose-800",
};

// export const ICON = {
//   book: <BookOpenIcon />,
// };
