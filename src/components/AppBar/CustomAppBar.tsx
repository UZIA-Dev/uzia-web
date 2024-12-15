"use client"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import getBasePath from '../../utils/getBasePath';
import LogoIcon from './parts/LogoIcon';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

type MobileAppBarMenuBoxProps = {
  onOpen: (e: React.MouseEvent<HTMLElement>) => void;
  onClose: () => void;
  isMenuOpen: boolean;
}

/**
 * モバイル用メニュー
 */
const MobileAppBarMenuBox = (props: MobileAppBarMenuBoxProps) => {
  const { onOpen, onClose, isMenuOpen } = props;
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={onOpen}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={true}
        onClose={onClose}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        {pages.map((page) => (
          <MenuItem key={page} onClick={onClose}>
            <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

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
          <MobileAppBarMenuBox onOpen={handleOpenNavMenu} onClose={handleCloseNavMenu} isMenuOpen={Boolean(anchorElNav)} />
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
