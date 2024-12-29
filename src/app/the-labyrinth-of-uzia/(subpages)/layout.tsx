"use client"
import React from "react";
import { usePathname } from "next/navigation";
import getImageSrcPath from "@/utils/getImageSrcPath";
import SubPageHeader from "./_components/SubPageHeader";
import { getRoutePath2PathName } from "../../../utils/getRoutePath2PathName";

type UziaSubPageLayoutProps = {
  children?: React.ReactNode;
}

const UziaSubPageLayout = (props: Readonly<UziaSubPageLayoutProps>) => {
  const pathName = usePathname();
  const { label } = getRoutePath2PathName(pathName);
  return (
    <React.Fragment>
      <div className="uzia-subpage-layout-container">
        <SubPageHeader backgroundImageSource={getImageSrcPath("/img/town.png")} title={label} />
        {props.children}
      </div>
    </React.Fragment>
  );
}

export default UziaSubPageLayout;
