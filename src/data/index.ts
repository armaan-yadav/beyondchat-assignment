import { MenuItem } from "primereact/menuitem";

export const scrapedPages = [
  { url: "/home", status: "completed", chunks: 15 },
  { url: "/about", status: "completed", chunks: 8 },
  { url: "/pricing", status: "pending", chunks: 10 },
  { url: "/blogs", status: "in-progress", chunks: 3 },
  { url: "/contact-us", status: "in-progress", chunks: 5 },
  { url: "/products", status: "in-progress", chunks: 7 },
];

export const setupItems: MenuItem[] = [
  {
    label: "Organization Details",
  },
  {
    label: "Getting Data",
  },
  {
    label: "Integration and Testing",
  },
];
