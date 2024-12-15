import React from "react";

type UziaLayoutProps = {
  children: React.ReactNode;
}

const UziaLayout = (props: Readonly<UziaLayoutProps>) => {
  const { children } = props;
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
}

export default UziaLayout;
