import { highlight1, highlight2, highlight4, a18 } from "../utils/index.js";

export const navItems = [
  { name: "Store", path: "/" },
  { name: "Mac", path: "/mac" },
  { name: "iPad", path: "/ipad" },
  { name: "iPhone", path: "/iphone" },
  { name: "Watch", path: "/watch" },
  { name: "Vision", path: "/vision" },
  { name: "AirPods", path: "/airpods" },
  { name: "TV & Home", path: "/tv-home" },
  { name: "Entertainment", path: "/entertainment" },
  { name: "Accessories", path: "/accessories" },
  { name: "Support", path: "/support" },
];

export const highlightsSlides = [
  {
    id: 1,
    textLists: [
      "The first iPhone built for",
      "Apple intelligence. Personal, private,",
      "powerful.",
    ],
    video: highlight1,
    videoDuration: 5,
  },
  {
    id: 2,
    textLists: [
      "Camera Control. Get the perfect photo.",
      "While barely lifting a finger.",
    ],
    video: highlight2,
    videoDuration: 3.63,
  },
  {
    id: 3,
    textLists: [
      "The all-new chip that empowers",
      "Apple Intelligence. And you.",
    ],
    video: a18,
    videoDuration: 3,
  },
  {
    id: 4,
    textLists: [
      "A big boost in battery life? Yes, please.",
      "What will yours do?.",
    ],
    video: highlight4,
    videoDuration: 3.4,
  },
];

export const models = [
  {
    id: 1,
    title: "iPhone 16 in Ultramarine",
    color: ["#5c6ab4", "#4053a6", "#232b7e", "#4268c3"],
  },
  {
    id: 2,
    title: "iPhone 16 in Teal",
    color: ["#b7d9d9", "#78adb2", "#457e8c", "#78adb2"],
  },
  {
    id: 3,
    title: "iPhone 16 in Pink",
    color: ["#F2ADDA", "pink", "#cd70b0", "#dd82bc"],
  },
  {
    id: 4,
    title: "iPhone 16 in White",
    color: ["#f7f7f5", "white", "white", "#e7e7e7"],
  },
  {
    id: 5,
    title: "iPhone 16 in Black",
    color: ["#3C4042", "#000000", "#000000", "#2c2c2c"],
  },
];
export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];
