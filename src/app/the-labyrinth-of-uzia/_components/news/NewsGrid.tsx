import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';

const NewsGrid = () => {
  return (
    <Box className="uzui-news-grid-container">
      <Grid
        className="uzui-news-grid-parent"
        container
        sx={{
          '--Grid-borderWidth': '1px',
          borderTop: 'var(--Grid-borderWidth) solid',
          borderLeft: 'var(--Grid-borderWidth) solid',
          borderColor: 'divider',
          '& > div': {
            borderRight: 'var(--Grid-borderWidth) solid',
            borderBottom: 'var(--Grid-borderWidth) solid',
            borderColor: 'divider',
          },
        }}
      >
        {[...Array(6)].map((_, index) => (
          <Grid
            key={index}
            minHeight={160}
            size={{
              xs: 6,
              sm: 6,
              md: 4,
              lg: 3,
            }}
          />
        ))}
      </Grid>
    </Box>
  );
}

export default NewsGrid;
