"use client"
import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CustomBreadcrumb from "../../../../components/CustomBreadcrumb";

type Props = {
  backgroundImageSource: string;
  title?: string;
}

const SubPageHeader = (props: Props) => {
  const { title, backgroundImageSource } = props;
  return (
    <Box className="uzui-subpage-header-container">
      <div
        className="uzui-subpage-header-bg-image"
        style={{
          backgroundImage: `url(${backgroundImageSource})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPositionY: '-17rem'
        }}
      />
      {!title ? null : (
        <Container className="uzui-subpage-header-title-container">
          <div>
            <Typography className="uzui-subpage-header-title" variant="h1">{title}</Typography>
          </div>
          <CustomBreadcrumb />
        </Container>
      )}
    </Box>
  );
}

export default SubPageHeader;
