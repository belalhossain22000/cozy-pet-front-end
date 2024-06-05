"use client";

import ProfileMenu from "@/components/ProfileMenu/ProfileMenu";
import { logoutUser } from "@/service/actions/logoutUser";
import { decodedToken } from "@/utils/jwt";
import {
  getFromLocalStorage,
  removeUserFromLocalStorage,
} from "@/utils/localStorage";
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import { useGetMyProfileQuery } from "@/redux/api/authApi";

const Navbar = () => {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { data, isLoading } = useGetMyProfileQuery(undefined);
  const userInfo = data?.data || {};
  

  const handleLogOut = () => {
    removeUserFromLocalStorage();
    logoutUser(router);
    router.push("/login");
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="default">
      <Container>
        <Toolbar>
          <Typography variant="h4" component={Link} href="/" fontWeight={600} sx={{ flexGrow: 1 }}>
            <Box component="span" color="primary.main">
              Cozy
            </Box>{" "}
            Pets
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem component={Link} href="/" onClick={handleMenuClose}>Home</MenuItem>
                <MenuItem component={Link} href="/about-us" onClick={handleMenuClose}>About Us</MenuItem>
                {userInfo?.role === "ADMIN" && (
                  <MenuItem component={Link} href="/dashboard/users" onClick={handleMenuClose}>Dashboard</MenuItem>
                )}
                {userInfo ? (
                  <ProfileMenu userInfo={userInfo} handleLogOut={handleLogOut} />
                ) : (
                  <MenuItem component={Link} href="/login" onClick={handleMenuClose}>Login</MenuItem>
                )}
              </Menu>
            </>
          ) : (
            <Stack direction="row" alignItems="center" spacing={4}>
              <Typography component={Link} href="/" fontWeight={700}>
                Home
              </Typography>

              <Typography component={Link} href="/about-us" fontWeight={700}>
                About Us
              </Typography>

              {userInfo?.role === "ADMIN" && (
                <Typography component={Link} href="/dashboard" fontWeight={700}>
                  Dashboard
                </Typography>
              )}

              {userInfo ? (
                <ProfileMenu userInfo={userInfo} handleLogOut={handleLogOut} />
              ) : (
                <Button component={Link} href="/login">
                  Login
                </Button>
              )}
            </Stack>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
