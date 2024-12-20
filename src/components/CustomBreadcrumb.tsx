"use client"
import React from "react";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { MuiLinkForNextJs as Link } from "./MuiLinkForNextJs";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { usePathname } from "next/navigation";
import _split from "lodash/split";
import _map from "lodash/map";
import { pageNameMap } from "../utils/breadcrumbMasterData";

const getPathNameMapping = (path: string) => {
  // 動的ルートと静的ルートの区別を行う
  const key = path;

  return {
    path: path,
    // @ts-expect-error ignore
    label: pageNameMap[key] || path,
  };
}

const getBreadcrumbs = (pathname: string) => {
  const splitedPaths = _split(pathname, "/");

  // リンク先アドレスの取得
  const roots = [""];
  for (let i = 0; i < splitedPaths.length; i++) {
    if (i === 0) {
      roots.push("/")
    } else if (i === 1) {
      roots.push(roots[i] + splitedPaths[i]);
    } else {
      roots.push(roots[i] + "/" + splitedPaths[i]);
    }
  }

  return (
    _map(splitedPaths, (item, index) => {
      if (index === 0) {
        const mapping = getPathNameMapping('/');
        return (
          <Link href={mapping.path} underline="none" key={`${item}-${index}`}>
            {mapping.label}
          </Link>
        );
      } else {
        const mapping = getPathNameMapping(roots[index + 1]);
        return (
          <Link href={roots[index + 1]} underline="none" key={`${item}-${index}`}>
            {mapping.label}
          </Link>
        );
      }
    })
  );
}

const CustomBreadcrumb = () => {
  const pathname = usePathname();

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" color="inherit" />}
      aria-label="breadcrumb"
      className="breadcrumb"
    >
      {getBreadcrumbs(pathname)}
    </Breadcrumbs>
  );
}

export default CustomBreadcrumb;
