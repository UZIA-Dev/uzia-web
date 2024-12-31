/**
 * ページルート
 */
export enum PageRoute {
  TOP = "/",
  NEWS = "/news",
  ABOUT = "/about",
  NEWS_DETAIL = "/news/[id]",
  PRODUCTS = "/products",
  BLOG = "/blog",
  CONTACT = "/contact"
}

export enum UziaPageRoute {
  TOP = "/the-labyrinth-of-uzia",
  NEWS = "/the-labyrinth-of-uzia/news",
  NEWS_DETAIL = "/the-labyrinth-of-uzia/news/[id]",
  STORY = "/the-labyrinth-of-uzia/story",
  WORLD = "/the-labyrinth-of-uzia/world",
  CHARACTER = "/the-labyrinth-of-uzia/character",
  GALLERY = "/the-labyrinth-of-uzia/gallery",
  MOVIE = "/the-labyrinth-of-uzia/movie",
  DOWNLOAD = "/the-labyrinth-of-uzia/download",
  SYSTEM = "/the-labyrinth-of-uzia/system",
}

/**
 * ページ名
 */
export const pageNameMap = {
  [PageRoute.TOP]: "トップ",
  [PageRoute.NEWS]: "ニュース一覧",
  [PageRoute.ABOUT]: "UZIAについて",
  [PageRoute.NEWS_DETAIL]: "ニュース",
  [PageRoute.PRODUCTS]: "プロダクト",
  [PageRoute.BLOG]: "ブログ",
  [PageRoute.CONTACT]: "コンタクト",

  [UziaPageRoute.TOP]: "ユーザイアの迷宮",
  [UziaPageRoute.NEWS]: "ニュース一覧",
  [UziaPageRoute.NEWS_DETAIL]: "ニュース",
  [UziaPageRoute.STORY]: "ストーリー",
  [UziaPageRoute.WORLD]: "世界観",
  [UziaPageRoute.CHARACTER]: "キャラクター",
  [UziaPageRoute.GALLERY]: "ギャラリー",
  [UziaPageRoute.MOVIE]: "ムービー",
  [UziaPageRoute.DOWNLOAD]: "ダウンロード",
  [UziaPageRoute.SYSTEM]: "システム",
};
