import React from 'react';
import MastHeadImage from '@/components/MastHeadImage';
import Paper from '@mui/material/Paper';
import getImageSrcPath from '../../utils/getImageSrcPath';

const UziaPage = () => {
  return (
    <Paper>
      <MastHeadImage src={getImageSrcPath('/img/town.png')} />
    </Paper>
  );
}

export default UziaPage;
