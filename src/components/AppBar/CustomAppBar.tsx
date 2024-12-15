"use client"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import LogoIcon from './parts/LogoIcon';
import MobileAppBarMenuBox from './parts/MobileAppBarMenuBox';

const pages = ['Products', 'Pricing', 'Blog'];

function CustomAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar className="app-bar-contener" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{}}>
          <LogoIcon href="/" />
          <MobileAppBarMenuBox
            menuItems={pages}
            onOpen={handleOpenNavMenu}
            onClose={handleCloseNavMenu}
            isMenuOpen={Boolean(anchorElNav)}
          />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default CustomAppBar;
