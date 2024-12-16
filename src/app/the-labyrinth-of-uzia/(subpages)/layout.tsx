import React from "react";

type UziaSubPageLayoutProps = {
  children?: React.ReactNode;
}

const UziaSubPageLayout = (props: Readonly<UziaSubPageLayoutProps>) => {
  return (
    <React.Fragment>
      <div className="uzia-subpage-layout-container">
        {props.children}
      </div>
    </React.Fragment>
  );
}

export default UziaSubPageLayout;
