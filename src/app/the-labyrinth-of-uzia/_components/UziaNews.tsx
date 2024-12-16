"use client";

import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import ContainerTitle from './common/ContainerTitle';
import NewsItem from './news/NewsItem';

const UziaNews = () => {
  return (
    <Box className="uzui-content-container">
      <ContainerTitle titleText="ニュース" />
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 6, md: 12 }} sx={{ mt: 2 }}>
        {Array.from(Array(12)).map((_, index) => (
          <Grid key={index} size={{ xl: 3, lg: 3, md: 3, sm: 2, xs: 3 }}>
            <NewsItem>
              News {index + 1}
            </NewsItem>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default UziaNews;
