import React from "react";

type UziaLayoutProps = {
  children: React.ReactNode;
}

const UziaLayout = (props: Readonly<UziaLayoutProps>) => {
  const { children } = props;
  return (
    <div className="uzui-root">
      {children}
    </div>
  );
}

export default UziaLayout;
