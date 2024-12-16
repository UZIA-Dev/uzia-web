"use client";
import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import story from './story/story.json';
import ContainerTitle from './common/ContainerTitle';

const UziaStory = () => {
  return (
    <Box className="uzui-content-container">
      <ContainerTitle titleText="Story" />
      <Typography variant="body1" sx={{ whiteSpace: "pre-wrap", textAlign: "left" }}>{story.introduction}</Typography>
    </Box>
  );
}

export default UziaStory;
