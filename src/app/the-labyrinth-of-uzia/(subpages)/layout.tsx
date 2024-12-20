import React from "react";
import getImageSrcPath from "@/utils/getImageSrcPath";
import SubPageHeader from "./_components/SubPageHeader";

type UziaSubPageLayoutProps = {
  children?: React.ReactNode;
}

const UziaSubPageLayout = (props: Readonly<UziaSubPageLayoutProps>) => {

  return (
    <React.Fragment>
      <div className="uzia-subpage-layout-container">
        <SubPageHeader backgroundImageSource={getImageSrcPath("/img/town.png")} />
        {props.children}
      </div>
    </React.Fragment>
  );
}

export default UziaSubPageLayout;
