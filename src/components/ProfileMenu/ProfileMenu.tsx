"use client";
import { AccountCircle } from "@mui/icons-material";
import { IconButton, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import React from "react";

const ProfileMenu = ({userInfo,handleLogOut}:{userInfo:any,handleLogOut:any}) => {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><Link href="/profile">Profile</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href="/my-adopted-pets"> My Adopted Pets</Link></MenuItem>
        <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
      </Menu>
    </div>
  );
};

export default ProfileMenu;
