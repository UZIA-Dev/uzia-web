import { pageNameMap } from "./pagePathMasterData";

/**
 * ページパスからページ名を取得
 */
export const getRoutePath2PathName = (pathName: string) => {


  return {
    path: pathName,
    // @ts-expect-error ignore
    label: pageNameMap[pathName] || pathName,
  };
}
