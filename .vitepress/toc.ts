import { link, readFileSync } from "fs";

function extractLink(line: string) {
  let m = /\[(.*?)\]\((.*?)\)/.exec(line)!;
  let link: undefined | string = m[2];
  if (link && !link.startsWith("/")) {
    link = "/" + link;
  }
  return {
    text: m[1],
    link,
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

//console.log(JSON.stringify(sections, null, "  "));

export const mainNav = [
  { text: "介绍", link: "/" },
  { text: "目录", link: "/SUMMARY.md" },
  { text: "乳首", link: "/nipple/intro/page-90.md" },
  { text: "雌潮", link: "/femorg/intro/page-a4-1.md" },
  { text: "干潮", link: "/dryorg/intro/page-24.md" },
  { text: "催眠", link: "/hypnosis/page-116.md" },
  { text: "前列腺", link: "/buttocks/page-62.md" },
  {
    text: "13周乳高日志",
    link: "/n6551fs/intro.md",
  },
  {
    text: "自慰分析家",
    link: "/onanie-a/intro.md",
  },
  {
    text: "乳首雌潮(另)",
    link: "/ay200/intro.md",
  },
];
export const defaultSidebar = [
  { text: "介绍", link: "/" },
  { text: "目录", link: "/SUMMARY.md" },
  { text: "乳首", link: "/nipple/intro/page-90.md" },
  { text: "雌性高潮", link: "/femorg/intro/page-a4-1.md" },
  { text: "干性高潮", link: "/dryorg/intro/page-24.md" },
  { text: "催眠", link: "/hypnosis/page-116.md" },
  { text: "前列腺", link: "/buttocks/page-62.md" },
  {
    text: "纯手工开发13周达到深度乳首高潮的开发记录",
    link: "/n6551fs/intro.md",
  },
  {
    text: "「自慰分析家」站点",
    link: "/onanie-a/intro.md",
  },
  {
    text: "幸福到爆炸的「乳首雌性高潮」教程",
    link: "/ay200/intro.md",
  },
  { text: "湿潮技巧（计划中）" },
];

export let sidebar = {
  "/": defaultSidebar,
  "/nipple/": sections.find((x) => x.text === "乳首"),
  "/femorg/": sections.find((x) => x.text === "雌性高潮"),
  "/dryorg/": sections.find((x) => x.text === "干性高潮"),
  "/hypnosis/": sections.find((x) => x.text === "催眠"),
  "/buttocks/": sections.find((x) => x.text === "前列腺"),
  "/n6551fs/": sections.find(
    (x) => x.text === "纯手工开发13周达到深度乳首高潮的开发记录"
  ),
  "/onanie-a/": sections.find((x) => x.text === "「自慰分析家」站点"),
  "/ay200/": sections.find(
    (x) => x.text === "幸福到爆炸的「乳首雌性高潮」教程"
  ),
};
