import { defineConfig } from "vitepress";
import { mainNav, sidebar } from "./toc";

export function tokenize(text: string): Array<string> {
  // @ts-ignore: seems like Intl.Segmenter is not supported by the lang server
  const segmenter = new Intl.Segmenter("cn", { granularity: "word" });
  // @ts-ignore
  const segs = Array.from(segmenter.segment(text)).map((item) => item.segment);
  const uniqueSegs = Array.from(new Set(segs));
  return uniqueSegs.filter((w) => !/^\s+$/.test(w));
}

export default defineConfig({
  title: "H-Life翻译整理",
  description:
    "主要是H-Life和桃ナビ的翻译整理，包含乳首高潮、雌性高潮、干性高潮、前列腺高潮、催眠高潮等开发方式、技巧和相关信息。",
  srcDir: "./src", // Assuming your markdown files are inside a 'src' directory
  head: [
    ["link", { rel: "icon", href: "/heartmini.ico" }],
    [
      "script",
      {
        async: "",
        src: "https://www.googletagmanager.com/gtag/js?id=G-B0C08Q24JB",
      },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-B0C08Q24JB');`,
    ],
  ],
  sitemap: {
    hostname: "https://h-life.littlera.in",
  },
  lang: "zh-CN",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/heartmini.ico",
    nav: mainNav,
    outline: [2, 6],
    search: {
      provider: "local",
      options: {
        miniSearch: {
          options: {
            tokenize,
          },
        },
      },
    },
    sidebar: sidebar,
  },
});
