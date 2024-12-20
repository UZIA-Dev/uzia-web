import getBasePath from "./getBasePath";
import _first from "lodash/first";

/**
 * 画像のパスをBase Pathをつけて返します。
 * @param src BasePath以降のソースパスを渡します。先頭に/をつけて渡してください。
 * @returns 
 */
const getImageSrcPath = (src: string) => {
  if (_first(src) !== '/') {
    src = '/' + src;
  }
  return `${getBasePath()}${src}`;
}

export default getImageSrcPath;
