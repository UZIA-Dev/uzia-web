import React from "react";
import Container from "@mui/material/Container";
import NewsList from "./_component/NewsList";

const News = () => {
  return (
    <Container maxWidth="md">
      <NewsList />
    </Container>
  );
}

export default News;
