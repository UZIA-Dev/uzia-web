import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Link from "@mui/material/Link";
import getBasePath from "@/utils/getBasePath";

const CommonFooter = () => {
  return (
    <footer>
      <Container maxWidth="md" className="footer-container">
        <Grid size={12}>
          <Link href="/" underline="none" color="inherit" style={{ display: "flex", alignItems: "center" }}>
            <img src={`${getBasePath()}/img/uzia_logo.svg`} alt="uzia_logo" style={{ marginRight: "1rem" }} />
            <Typography variant="body1">OFFICIAL WEBSITE</Typography>
          </Link>
          <Typography variant="body1">Indies Game Development Circle.</Typography>
        </Grid>
        <Typography variant="caption">2017 UZIA. All rights reserved.</Typography>
      </Container>
    </footer>
  );
}

export default CommonFooter;
