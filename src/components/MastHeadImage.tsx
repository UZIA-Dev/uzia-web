import React from 'react';
import Paper from '@mui/material/Paper';

const MastHeadImage = () => {
  return (
    <Paper className="masthead-container">
      <img
        src={`${process.env.BASE_PATH}/img/image_1.jpg`}
      />
    </Paper>
  );
}

export default MastHeadImage;