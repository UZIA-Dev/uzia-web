import React from 'react';
import { MuiLinkForNextJs as Link } from '@/components/MuiLinkForNextJs';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { getRandomImage } from "../utils/getRandomImaage";

const getImage = (images: string[]) => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

export default function NotFound() {
  const _images = getRandomImage();
  const imageSource = getImage(_images);

  return (
    <Container className="error-page-container" maxWidth="xl">
      <Box className="error-page-content-box">
        <Grid className="error-page-grid-container" size={12}>
          <Grid size={8}>
            <Typography className="error-page-primary-text" variant='h1'>ページが見つかりません。</Typography>
            <Typography className="error-page-secondary-text" variant='body1'>お探しのページはありません。</Typography>
          </Grid>
          <Grid size={4}>
            <img className="error-page-monster-image" src={imageSource} alt="Random Monster" />
          </Grid>
        </Grid>
        <Link href="/" className="error-page-back-top-button">
          <Button variant="outlined" LinkComponent={"button"} href="/">ホームに戻る</Button>
        </Link>
      </Box>
    </Container>
  )
}
