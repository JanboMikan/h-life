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
  description: "主要是H-Life和桃ナビ的翻译整理",
  srcDir: "./src", // Assuming your markdown files are inside a 'src' directory
  head: [["link", { rel: "icon", href: "/heartmini.ico" }]],
  sitemap: {
    hostname: "https://h-life.littlera.in",
  },
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
