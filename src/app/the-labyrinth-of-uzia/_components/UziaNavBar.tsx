"use client"

import React from 'react';
import Grid from '@mui/material/Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import _upperCase from 'lodash/upperCase';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import _map from 'lodash/map';
import { MuiLinkForNextJs as Link } from "../../../components/MuiLinkForNextJs";
import { usePathname } from "next/navigation";

const MENU_NAME = ["news", "story", "world", "character", "gallery", "movie", "download", "system"];

const UziaNavItems = () => {
  const pathname = usePathname();

  return _map(MENU_NAME, (menuName, index) => {
    return (
      <Grid className="uzui-nav-bar-item-grid" key={`${menuName}-${index}`} size={{ xs: 6, sm: 3 }} textAlign="center" borderBottom="1px solid">
        <Link href={`${pathname}/${menuName}`}>
          <Button className="uzui-nav-bar-item-button" startIcon={<KeyboardDoubleArrowRightIcon />} color='inherit' sx={{ width: "100%" }}>
            <Typography variant='h4' component="span" fontWeight={300} fontSize={20}>{_upperCase(menuName)}</Typography>
          </Button>
        </Link>
      </Grid>
    );
  });
}

const UziaNavBar = () => {
  return (
    <Container maxWidth="md" className="uzui-nav-bar-container" sx={{ mt: 2, mb: 5 }}>
      <Grid justifyContent="flex-start" container rowSpacing={1} columnSpacing={6} size={12}>
        {UziaNavItems()}
      </Grid>
    </Container>
  );
}

export default UziaNavBar;
