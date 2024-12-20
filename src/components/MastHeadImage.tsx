import React from 'react';
import Paper from '@mui/material/Paper';

type MastHeadImageProps = {
  src: string;
  className?: string;
  children?: React.ReactNode;
}

const MastHeadImage = (props: MastHeadImageProps) => {
  const { src, className, children } = props;
  return (
    <Paper className={`masthead-container ${className}`}>
      <img src={src} alt="masthead-image" />
      {!children ? null : (
        <div className="masthead-content-parent">
          {children}
        </div>
      )}
    </Paper>
  );
}

export default MastHeadImage;
