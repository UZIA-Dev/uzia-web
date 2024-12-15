"use client";
import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Introduction from './about/introduction.json';

const UziaAbout = () => {
  return (
    <Box className="uzui-content-container" sx={{ flexGrow: 1 }}>
      <Typography variant='h2' className="container-title">「ユーザイアの迷宮」について</Typography>
      <Typography variant="body1" sx={{ whiteSpace: "pre-wrap", textAlign: "center" }}>{Introduction.introduction}</Typography>
    </Box>
  );
}

export default UziaAbout;
