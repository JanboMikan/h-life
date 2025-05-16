import { readFileSync } from "fs";

function extractLink(line: string) {
  let m = /\[(.*?)\]\((.*?)\)/.exec(line)!;
  let link: undefined | string = m[2];
  if (link && !link.startsWith("/")) {
    link = "/" + link;
  }
  return {
    text: m[1],
    link: m[2] || undefined,
  };
}
let summaryContent = readFileSync("src/SUMMARY.md", { encoding: "utf-8" });
let sections: any[] = [];
let currentSection: any = null;
let currentSubsection: any = null;
for (let line of summaryContent.replaceAll("\r", "").split("\n")) {
  if (line.startsWith("# ")) {
    let title = line.replace("# ", "");
    if (currentSubsection) {
      currentSection.items.push(currentSubsection);
      currentSubsection = null;
    }
    if (currentSection) {
      sections.push(currentSection);
    }
    currentSection = { text: title, items: [] };
    continue;
  }
  if (line.startsWith("- [")) {
    let { text, link } = extractLink(line);
    if (currentSubsection) {
      currentSection.items.push(currentSubsection);
    }
    currentSubsection = { text, link, items: [] };
    continue;
  }
  if (line.startsWith("  - [")) {
    let { text, link } = extractLink(line);
    currentSubsection.items.push({ text, link });
    continue;
  }
}
if (currentSubsection) {
  currentSection.items.push(currentSubsection);
}
if (currentSection) {
  sections.push(currentSection);
}

console.log(JSON.stringify(sections, null, "  "));

export const mainNav = [
  { text: "介绍", link: "/" },
  { text: "乳首", link: "/nipple/intro/page-90.md" },
  { text: "雌性高潮", link: "/femorg/intro/page-a4-1.md" },
  { text: "干性高潮", link: "/dryorg/intro/page-24.md" },
];
export const defaultSidebar = [
  ...mainNav,
  { text: "催眠（计划中）" },
  { text: "前列腺（计划中）" },
  { text: "湿潮技巧（计划中）" },
];

export let sidebar = {
  "/": defaultSidebar,
  "/nipple/": sections.find((x) => x.text === "乳首"),
  "/femorg/": sections.find((x) => x.text === "雌性高潮"),
  "/dryorg/": sections.find((x) => x.text === "干性高潮"),
};
