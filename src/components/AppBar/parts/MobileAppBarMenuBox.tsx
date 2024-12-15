import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import { TransitionProps } from '@mui/material/transitions';

import _map from 'lodash/map';

type MobileAppBarMenuBoxProps = {
  menuItems: string[];
  onOpen: (e: React.MouseEvent<HTMLElement>) => void;
  onClose: () => void;
  isMenuOpen: boolean;
}

type MobileAppBarMenuProps = {
  menuItems: string[];
  onClose: () => void;
  isMenuOpen: boolean;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MobileAppBarMenu = (props: MobileAppBarMenuProps) => {
  const { menuItems, onClose } = props;

  return (
    <List>
      {_map(menuItems, (item, index) => {
        return (
          <ListItem key={`${item}-${index}`} alignItems="center">
            <ListItemButton>
              <ListItemText sx={{ textAlign: "center" }}>{item}</ListItemText>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}


const MobileAppBarMenuBox = (props: MobileAppBarMenuBoxProps) => {
  const { onOpen, onClose, isMenuOpen } = props;
  return (
    <Container sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: "flex-end" }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={onOpen}
        color="inherit"
      >
        <MenuIcon fontSize="large" />
      </IconButton>
      <Dialog
        open={isMenuOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby="mobile-menu-slide"
        fullScreen
      >
        <DialogActions>
          <Button onClick={onClose}>Close</Button>
        </DialogActions>
        <DialogContent id="mobile-menu-slide">
          <MobileAppBarMenu {...props} />
        </DialogContent>
      </Dialog>
    </Container>
  );
}

export default MobileAppBarMenuBox;
