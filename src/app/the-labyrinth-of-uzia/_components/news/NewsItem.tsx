import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

type NewsItemProps = {
  children: React.ReactNode;
}

const NewsItem = (props: NewsItemProps) => {
  return (
    <Paper elevation={3}>
      <Box sx={{ p: 2 }}>
        {props.children}
      </Box>
    </Paper>
  );
}

export default NewsItem;
