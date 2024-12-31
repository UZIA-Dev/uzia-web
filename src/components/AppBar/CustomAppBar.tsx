"use client"

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import LogoIcon from './parts/LogoIcon';
import Slide from '@mui/material/Slide';
import MobileAppBarMenuBox from './parts/MobileAppBarMenuBox';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { PageRoute } from '@/utils/pagePathMasterData';

const pages = ['NEWS', 'ABOUT', 'PRODUCTS', 'BLOG', 'CONTACT'];

interface HideOnScrollProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children?: React.ReactElement<unknown>;
}

function HideOnScroll(props: HideOnScrollProps) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

function CustomAppBar(props: React.Attributes) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <HideOnScroll {...props}>
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
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "flex-end" }}>
              {pages.map((page) => {
                // @ts-expect-error ignore
                const pagePath = PageRoute[page]
                return (
                  <Button
                    href={pagePath}
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                );
              })}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}
export default CustomAppBar;
