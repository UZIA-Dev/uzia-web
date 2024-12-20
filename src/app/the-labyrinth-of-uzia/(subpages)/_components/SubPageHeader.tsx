import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type Props = {
  backgroundImageSource: string;
  title?: string;
}

const SubPageHeader = (props: Props) => {
  const { title, backgroundImageSource } = props;
  return (
    <Box className="uzui-subpage-header-container">
      <img src={backgroundImageSource} alt="subpage-bg" />
      {!title ? null : (
        <Typography className="uzui-subpage-header-title" variant="h1">{title}</Typography>
      )}
    </Box>
  );
}

export default SubPageHeader;
