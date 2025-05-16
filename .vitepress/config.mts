import { defineConfig } from "vitepress";

// Helper function to create a sidebar group
function createSidebarGroup(
  text: string,
  link: string | undefined | null,
  items: any[] | undefined | null
) {
  items = items || [];
  // for (let item of items) {
  //   if (!item.link) {
  //     item.link = "#";
  //   }
  // }
  return {
    text,
    link: link || undefined,
    items, // Ensure items is always an array
  };
}

// Define the sidebar structure for each main section
const nippleSidebar = [
  createSidebarGroup("绪论", null, [
    { text: "关于乳首（乳首与性感的说明）", link: "/nipple/intro/page-90.md" },
    { text: "关于乳首开发", link: "/nipple/intro/page-9.md" },
    { text: "什么是乳首自慰", link: "/nipple/intro/page-146.md" },
    { text: "【新手向】乳首开发入门讲座", link: "/nipple/intro/page-41.md" },
  ]),
  createSidebarGroup("乳首开发与乳首高潮的说明", null, [
    { text: "关于乳首开发的风险", link: "/nipple/kaihatsu+iki/page-10.md" },
    { text: "关于乳首的敏感度等级", link: "/nipple/kaihatsu+iki/page-1.md" },
    {
      text: "关于高效乳首开发方法（使用磁针贴进行性开发）",
      link: "/nipple/kaihatsu+iki/page-2.md",
    },
    {
      text: "关于用手进行乳首开发的方法",
      link: "/nipple/kaihatsu+iki/page-11.md",
    },
    {
      text: "乳首性感带通过刺激开发的方法总结",
      link: "/nipple/kaihatsu+iki/page-149.md",
    },
    {
      text: "关于快速培养乳首性感的技巧",
      link: "/nipple/kaihatsu+iki/page-43.md",
    },
    {
      text: "感受到色情快感时的状态",
      link: "/nipple/kaihatsu+iki/page-7.md",
    },
    {
      text: "关于高潮的深度和感觉的说明",
      link: "/nipple/kaihatsu+iki/page-8.md",
    },
    {
      text: "通过乳首自慰达到高潮的基准",
      link: "/nipple/kaihatsu+iki/page-38.md",
    },
    {
      text: "通过乳首自慰获得的愉悦快感的说明",
      link: "/nipple/kaihatsu+iki/page-81.md",
    },
    {
      text: "乳首开发的冷知识和小贴士",
      link: "/nipple/kaihatsu+iki/page-44.md",
    },
    {
      text: "关于乳首开发的Q&A～！",
      link: "/nipple/kaihatsu+iki/page-40.md",
    },
    { text: "高速乳首开发方法", link: "/nipple/kaihatsu+iki/page-6.md" },
    {
      text: "乳首开发可能使用的商品说明与评价",
      link: "/nipple/kaihatsu+iki/page-3.md",
    },
    {
      text: "用木制夹子夹乳首的方法总结",
      link: "/nipple/kaihatsu+iki/page-118.md",
    },
    {
      text: "【男性向】用胸罩等保护乳首敏感度的方法总结",
      link: "/nipple/kaihatsu+iki/page-123.md",
    },
    {
      text: "关于通过乳首性爱引发“愉悦的乳首高潮”的方法",
      link: "/nipple/kaihatsu+iki/page-141.md",
    },
    {
      text: "达到乳首高潮所需的性开发时间",
      link: "/nipple/kaihatsu+iki/page-150.md",
    },
  ]),
  createSidebarGroup("NLS的专题链接", null, [
    { text: "乳首折磨商品「U.F.O. SA」的说明！" },
  ]),
  createSidebarGroup("乳首自慰的说明", null, [
    { text: "舒服的乳首自慰方法总结", link: "/nipple/chikuni/page-5.md" },
    { text: "理想的乳首自慰流程", link: "/nipple/chikuni/page-14.md" },
    { text: "矿泉水瓶+乳首自慰的手法", link: "/nipple/chikuni/page-18.md" },
    {
      text: "在乳首开发中戴着磁针贴进行乳首自慰的方法",
      link: "/nipple/chikuni/page-29.md",
    },
    {
      text: "使用润滑液进行乳首自慰的玩法",
      link: "/nipple/chikuni/page-32.md",
    },
    {
      text: "让乳首和乳晕感到愉悦的爱抚方法总结",
      link: "/nipple/chikuni/page-84.md",
    },
    {
      text: "用跳蛋进行愉悦的乳首自慰的方法总结",
      link: "/nipple/chikuni/page-96.md",
    },
    { text: "用乳首折磨商品「UFO」进行舒服的乳首自慰的方法" },
  ]),
  createSidebarGroup("关于利用乳房进行自慰", null, [
    {
      text: "给予乳房愉悦快感的揉捏方法总结",
      link: "/nipple/chibusa/page-85.md",
    },
    {
      text: "B点（斯宾塞腋窝尾部）的开发和爱抚方法总结",
      link: "/nipple/chibusa/page-95.md",
    },
    {
      text: "对乳房进行电击（通电垫责罚）的方法总结",
      link: "/nipple/chibusa/page-100.md",
    },
  ]),
  createSidebarGroup("解决乳首开发的烦恼", null, [
    {
      text: "分离乳首性感和射精感的方法总结",
      link: "/nipple/nayami/page-42.md",
    },
    { text: "给乳首高潮难以达到者的建议", link: "/nipple/nayami/page-39.md" },
  ]),
  createSidebarGroup("实用信息", "/nipple/jyouhou/jyouhou.md", [
    { text: "强化性感的方法总结", link: "/nipple/jyouhou/page-19.md" },
  ]),
];

const femorgSidebar = [
  createSidebarGroup("关于雌性高潮", null, [
    {
      text: "什么是雌性高潮（雌性高潮的说明）",
      link: "/femorg/intro/page-a4-1.md",
    },
    { text: "什么是雌性高潮自慰", link: "/femorg/intro/page-a4-9.md" },
    { text: "メスイキに関係する言葉の説明まとめ" },
  ]),
  createSidebarGroup("关于雌性高潮的风险说明", null, [
    { text: "关于雌性高潮的风险和问题", link: "/femorg/risuku/page-a4-3.md" },
    {
      text: "男性女性化（关于女性荷尔蒙影响的说明）",
      link: "/femorg/risuku/page-a4-14.md",
    },
    {
      text: "关于雌性高潮和干性高潮的安全性",
      link: "/femorg/risuku/page-a4-27.md",
    },
    {
      text: "持续享受高潮迭起的雌性高潮快感时产生的问题总结",
      link: "/femorg/risuku/page-a4-23.md",
    },
    {
      text: "不可尝试的危险雌性高潮自慰",
      link: "/femorg/risuku/page-a4-43.md",
    },
  ]),
  createSidebarGroup("初学者的雌性高潮入门方法", null, [
    {
      text: "体验如女性般的快感并达到高潮的方法总结",
      link: "/femorg/nyuumon/page-a4-29.md",
    },
    {
      text: "如果想体验雌性高潮应该从什么开始",
      link: "/femorg/nyuumon/page-a4-17.md",
    },
  ]),
  createSidebarGroup("关于干性性感的开发方法", null, [
    {
      text: "推荐的雌性高潮性开发方法总结",
      link: "/femorg/dry-seikan/page-a4-4.md",
    },
    {
      text: "雌性高潮可能的性感带种类与开发方法总结",
      link: "/femorg/dry-seikan/page-a4-5.md",
    },
    {
      text: "雌性高潮性感带的成长方法总结",
      link: "/femorg/dry-seikan/page-a4-13.md",
    },
    {
      text: "快速“实现干性高潮”的实用性开发方法",
      link: "/femorg/dry-seikan/page-a4-46.md",
    },
  ]),
  createSidebarGroup("雌性高潮性感的说明", null, [
    {
      text: "雌性高潮时发生的现象和感觉的说明",
      link: "/femorg/femorg-seikan/page-a4-6.md",
    },
    {
      text: "雌性高潮自慰中快感体验总结",
      link: "/femorg/femorg-seikan/page-a4-16.md",
    },
  ]),
  createSidebarGroup("关于舒服的雌性高潮自慰的方法", null, [
    {
      text: "乳首自慰以获得愉悦的雌性高潮的方法总结",
      link: "/femorg/femorg-onani/page-a4-25.md",
    },
    {
      text: "如何通过斯彭斯乳腺自慰获得快感并达到雌性高潮的方法总结",
      link: "/femorg/femorg-onani/page-a4-26.md",
    },
    {
      text: "令人愉悦的雌性高潮爆发自慰方法总结",
      link: "/femorg/femorg-onani/page-a4-39.md",
    },
  ]),
  createSidebarGroup("关于雌性高潮自慰的技巧", null, [
    {
      text: "用色情的想象来增强雌性高潮自慰快感的方法总结",
      link: "/femorg/onani-tekunikku/page-a4-7.md",
    },
    {
      text: "给无法顺利“雌性高潮”的人的建议",
      link: "/femorg/onani-tekunikku/page-a4-8.md",
    },
    {
      text: "妨碍雌性高潮的射精感的问题和对策方法总结",
      link: "/femorg/onani-tekunikku/page-a4-12.md",
    },
    {
      text: "防止雌性高潮初体验前产生的恐惧感的方法总结",
      link: "/femorg/onani-tekunikku/page-a4-15.md",
    },
  ]),
  createSidebarGroup("关于雌性高潮性感觉醒的身体的说明", null, [
    {
      text: "关于开发雌性高潮性感后身体变化的说明",
      link: "/femorg/kakusei/page-a4-28.md",
    },
    {
      text: "关于雌性高潮系“性欲的特征与影响”的说明",
      link: "/femorg/kakusei/page-a4-45.md",
    },
    {
      text: "擅自发生的「雌性高潮爆发」的原因与对策总结",
      link: "/femorg/kakusei/page-a4-38.md",
    },
    {
      text: "关于雌性高潮性感的觉醒与“男性身体和心理的变化”",
      link: "/femorg/kakusei/page-a4-47.md",
    },
  ]),
  createSidebarGroup("达到舒服的雌性高潮的方法", null, [
    {
      text: "增强雌性高潮性感，享受愉悦自慰的方法总结",
      link: "/femorg/houhou/page-a4-24.md",
    },
    { text: "舒服的多重高潮方法总结", link: "/femorg/houhou/page-a4-40.md" },
    {
      text: "关于通过雌性高潮和雄性高潮实现“愉悦的同步高潮”的方法",
      link: "/femorg/houhou/page-a4-35.md",
    },
  ]),
  createSidebarGroup("雌性高潮性爱相关信息总结", null, [
    { text: "增加雌性高潮敏感带的益处", link: "/femorg/info/page-a4-10.md" },
    {
      text: "关于雌性高潮自慰成功率和失败原因",
      link: "/femorg/info/page-a4-20.md",
    },
    {
      text: "关于雌性高潮性感的发展与“快感持续时间”的关系",
      link: "/femorg/info/page-a4-19.md",
    },
    {
      text: "关于雌性高潮自慰的优点与缺点",
      link: "/femorg/info/page-a4-21.md",
    },
    {
      text: "雌性高潮自慰前增强雌性高潮性感的好处",
      link: "/femorg/info/page-a4-22.md",
    },
    {
      text: "通过干性高潮获得极致快感的方法说明",
      link: "/femorg/info/page-a4-33.md",
    },
    {
      text: "通过眼罩和耳塞进行感觉剥夺对雌性高潮的影响",
      link: "/femorg/info/page-a4-36.md",
    },
    {
      text: "提升愉悦雌性高潮性爱体验的“成人玩具”等说明",
      link: "/femorg/info/page-a4-37.md",
    },
    {
      text: "影响男性雌性高潮性感的“SM用品”说明总结",
      link: "/femorg/info/page-a4-41.md",
    },
    {
      text: "強化男性雌性高潮快感的色情图片特征",
      link: "/femorg/info/page-a4-42.md",
    },
    {
      text: "雌性高潮后享受舒适睡眠的方法总结",
      link: "/femorg/info/page-a4-48.md",
    },
  ]),
  createSidebarGroup("关于特殊的干性自慰的实验等", null, [
    {
      text: "雌性高潮自慰中进行寸止play时的感觉",
      link: "/femorg/jikken/page-a4-18.md",
    },
    {
      text: "男性一天内进行40次以上雌性高潮会怎么样",
      link: "/femorg/jikken/page-a4-44.md",
    },
  ]),
  createSidebarGroup("关于雌性高潮的杂学和冷知识等", null, [
    {
      text: "男性干性高潮和女性干性高潮的区别是什么",
      link: "/femorg/zatsugaku/page-a4-31.md",
    },
    {
      text: "因人而异的干性高潮说明总结",
      link: "/femorg/zatsugaku/page-a4-32.md",
    },
  ]),
  createSidebarGroup("关于雌性高潮的闲聊", null, [
    {
      text: "关于雌性高潮和干性高潮的区别",
      link: "/femorg/zatsudan/page-a4-2.md",
    },
    {
      text: "关于通过雌化调教来制造雌性男子的方法",
      link: "/femorg/zatsudan/page-a4-30.md",
    },
    {
      text: "男娘系AV的演出与实际雌性高潮快感等的区别",
      link: "/femorg/zatsudan/page-a4-34.md",
    },
  ]),
];

const dryorgSidebar = [
  createSidebarGroup("前言", null, [
    { text: "关于干性高潮的说明", link: "/dryorg/intro/page-24.md" },
    { text: "关于干性高潮的技巧和知识", link: "/dryorg/intro/page-55.md" },
  ]),
  createSidebarGroup("干性高潮的方法一览", null, [
    { text: "乳首自慰方法总结", link: "/dryorg/yarikata/page-26.md" },
    { text: "尾骨性感开发方法总结", link: "/dryorg/yarikata/page-137.md" },
    { text: "能量高潮的技巧", link: "/dryorg/yarikata/page-15.md" },
    { text: "催眠自慰的方法", link: "/dryorg/yarikata/page-16.md" },
    { text: "快乐通电自慰方法总结", link: "/dryorg/yarikata/page-17.md" },
    { text: "意淫自慰方法总结", link: "/dryorg/yarikata/page-28.md" },
    {
      text: "通过意识引导下腹部实现干性高潮的方法总结",
      link: "/dryorg/yarikata/page-25.md",
    },
    { text: "磁针贴高潮方法总结", link: "/dryorg/yarikata/page-51.md" },
    { text: "肚脐自慰的快感方法总结", link: "/dryorg/yarikata/page-71.md" },
    { text: "冥想自慰方法总结", link: "/dryorg/yarikata/page-92.md" },
    { text: "核心高潮的实现方法总结", link: "/dryorg/yarikata/page-78.md" },
    {
      text: "通过抬腿腹肌运动达到核心高潮的方法总结",
      link: "/dryorg/yarikata/page-86.md",
    },
    {
      text: "媚药刺激自慰，沉浸在愉悦快感中的方法总结",
      link: "/dryorg/yarikata/page-99.md",
    },
    {
      text: "骨盆底肌（PC肌）运动实现干性高潮的方法总结",
      link: "/dryorg/yarikata/page-124.md",
    },
    {
      text: "【轻度】令人愉悦的SM自慰和SM玩法总结",
      link: "/dryorg/yarikata/page-127.md",
    },
    {
      text: "【震动棒伺候！】关于如何使用震动棒获得快感",
      link: "/dryorg/yarikata/page-136.md",
    },
  ]),
  createSidebarGroup("关于会阴自慰的信息总结", null, [
    { text: "开发会阴性感的方法总结", link: "/dryorg/ein/page-12.md" },
    { text: "会阴自慰方法总结", link: "/dryorg/ein/page-119.md" },
    {
      text: "会阴和乳首的同時刺激，享受强烈干性高潮的方法总结",
      link: "/dryorg/ein/page-120.md",
    },
    {
      text: "利用塑料瓶进行舒适的会阴自慰的方法",
      link: "/dryorg/ein/page-122.md",
    },
    {
      text: "给会阴自慰无法顺利达到干性高潮的人的建议",
      link: "/dryorg/ein/page-128.md",
    },
  ]),
  createSidebarGroup("其他，关于干性高潮的H", null, [
    { text: "女装自慰兴奋方法总结", link: "/dryorg/hoka/page-88.md" },
  ]),
  createSidebarGroup("关于干性高潮的知识", null, [
    { text: "男性的干性高潮的16种介绍！", link: "/dryorg/chishiki/page-47.md" },
    {
      text: "获得极致快感干性高潮的方法总结",
      link: "/dryorg/chishiki/page-121.md",
    },
    {
      text: "关于达成干性高潮时的感觉和快感",
      link: "/dryorg/chishiki/page-125.md",
    },
    // Note: The original SUMMARY.md has a duplicate link for '关于干性高潮的优点和缺点' and '尾骨性感开发方法总结' (page-137.md).
    // It will appear twice in the sidebar if both are kept.
    { text: "关于干性高潮的优点和缺点", link: "/dryorg/chishiki/page-137.md" }, // Duplicate link page-137.md
    {
      text: "男性通过乳首自慰达到干性高潮的方法总结",
      link: "/dryorg/chishiki/page-101.md",
    },
  ]),
  createSidebarGroup("其他，关于快感绝顶", null, [
    {
      text: "成为“全身性感带”状态的方法总结",
      link: "/dryorg/zecchou/page-142.md",
    },
  ]),
  createSidebarGroup("关于性感带的知识", null, [
    { text: "关于性感带的说明", link: "/dryorg/seikantai/page-74.md" },
  ]),
];
const mainNav = [
  { text: "介绍", link: "/" },
  { text: "乳首", link: "/nipple/intro/page-90.md" },
  { text: "雌性高潮", link: "/femorg/intro/page-a4-1.md" },
  { text: "干性高潮", link: "/dryorg/intro/page-24.md" },
];
// Define the default sidebar (e.g., for the intro page)
const defaultSidebar = [
  ...mainNav,
  // Include planned sections in the default sidebar
  { text: "催眠（计划中）" },
  { text: "前列腺（计划中）" },
  { text: "湿潮技巧（计划中）" },
];

export default defineConfig({
  title: "H-Life翻译整理",
  description: "主要是H-Life和桃ナビ的翻译整理",
  srcDir: "./src", // Assuming your markdown files are inside a 'src' directory
  sitemap: {
    hostname: 'https://h-life.pages.dev'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: mainNav,

    sidebar: {
      // Default sidebar for all other pages (like the intro page)
      "/": defaultSidebar,
      // Sidebar for pages under /nipple/
      "/nipple/": nippleSidebar,

      // Sidebar for pages under /femorg/
      "/femorg/": femorgSidebar,

      // Sidebar for pages under /dryorg/
      "/dryorg/": dryorgSidebar,
    },

    // socialLinks: [
    //   { icon: "github", link: "https://github.com/vuejs/vitepress" }, // Replace with your repo link
    // ],
  },
});
