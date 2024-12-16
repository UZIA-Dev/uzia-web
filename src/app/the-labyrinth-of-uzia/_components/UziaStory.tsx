"use client";
import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Introduction from './about/introduction.json';
import ContainerTitle from './common/ContainerTitle';

const UziaStory = () => {
  return (
    <Box className="uzui-content-container" sx={{ flexGrow: 1 }}>
      <ContainerTitle titleText="ストーリー" />
      <Typography variant="body1" sx={{ whiteSpace: "pre-wrap", textAlign: "center" }}>{Introduction.introduction}</Typography>
    </Box>
  );
}

export default UziaStory;
