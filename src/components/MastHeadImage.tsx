import React from 'react';
import Box from '@mui/material/Box';

type MastHeadImageProps = {
  src: string;
  className?: string;
  children?: React.ReactNode;
}

const MastHeadImage = (props: MastHeadImageProps) => {
  const { src, className, children } = props;
  return (
    <Box className={`masthead-container ${className}`}>
      <img src={src} alt="masthead-image" />
      {!children ? null : (
        <div className="masthead-content-parent">
          {children}
        </div>
      )}
    </Box>
  );
}

export default MastHeadImage;
