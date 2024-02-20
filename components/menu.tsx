"use client";

import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import Dragonball from "@/app/dragonball/page";
import Link from "next/link";

export default function MenuPopupState() {
  //function handleMangaChange(event) {
  //const url = "/" + event.target.value
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Choisissez votre manga
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem>
              <Link href="/bleach">Bleach</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/dragonball">Dragon Ball</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/naruto">Naruto</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/onepiece">One Piece</Link>
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
