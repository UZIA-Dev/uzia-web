import React from "react";
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import story from '../../../../../public/data/story.json';


const UziaNewsStory = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="body1" sx={{ whiteSpace: "pre-wrap", textAlign: "left" }}>{story.introduction}</Typography>
    </Container>
  );
}

export default UziaNewsStory;
