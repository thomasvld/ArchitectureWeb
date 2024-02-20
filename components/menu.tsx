'use client'

import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Dragonball from '@/app/dragonball/page';
import Link from 'next/link';

export default function MenuPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Choisissez votre manga
          </Button>
          <Menu {...bindMenu(popupState)}>
            <Link href="/bleach">Bleach</Link> 
            <Link href="/dragonball">Dragon Ball</Link>
            <Link href="/naruto">Naruto</Link>
            <Link href="/onepiece">One Piece</Link>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}