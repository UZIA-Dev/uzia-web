"use client";
import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ContainerTitle from './common/ContainerTitle';
import NewsList from './news/NewsList';
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';

const UziaStory = () => {
  return (
    <Box className="uzui-content-container">
      <ContainerTitle titleText="What's New" />
      <NewsList />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant="outlined" color="inherit" endIcon={<KeyboardDoubleArrowRightRoundedIcon />}>More</Button>
      </Box>
    </Box>
  );
}

export default UziaStory;
