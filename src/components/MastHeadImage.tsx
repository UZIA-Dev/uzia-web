import React from 'react';
import Paper from '@mui/material/Paper';
import getBasePath from '../utils/getBasePath';

const MastHeadImage = () => {
  return (
    <Paper className="masthead-container">
      <img
        src={`${getBasePath()}/img/image_1.jpg`}
      />
    </Paper>
  );
}

export default MastHeadImage;
