import React from 'react';
import Paper from '@mui/material/Paper';

type MastHeadImageProps = {
  src: string;
  className?: string;
}

const MastHeadImage = (props: MastHeadImageProps) => {
  const { src, className } = props;
  console.log({ src })
  return (
    <Paper className={`masthead-container ${className}`}>
      <img src={src} />
    </Paper>
  );
}

export default MastHeadImage;
