import React from 'react';
import MastHeadImage from '@/components/MastHeadImage';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import getImageSrcPath from '../../utils/getImageSrcPath';
import UziaNews from './_components/UziaNews';
import UziaAbout from './_components/UziaAbout';

const UziaPage = () => {
  return (
    <Paper>
      <MastHeadImage src={getImageSrcPath('/img/town.png')}>
        <Container className="uzui-masthead-contents">
          <Typography variant='h2'>YYYY/MM/DD 正式版リリース決定！</Typography>
        </Container>
      </MastHeadImage>
      <Container>
        <UziaNews />
        <UziaAbout />
      </Container>
    </Paper>
  );
}

export default UziaPage;
