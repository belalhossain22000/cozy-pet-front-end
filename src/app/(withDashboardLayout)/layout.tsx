"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Container } from "@mui/material";
import { useGetMyProfileQuery } from "@/redux/api/authApi";

const drawerWidth = 240;

interface Props {
  children: React.ReactNode;
  // window?: Window;
}

const DashboardLayout = (props: Props) => {
  // const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const { data, isLoading } = useGetMyProfileQuery(undefined);
  const userInfo = data?.data || {};
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar>
        <Typography
          variant="h4"
          component={Link}
          href="/"
          fontWeight={600}
          sx={{ flexGrow: 1 }}
        >
          <Box component="span" color="primary.main">
            Cozy
          </Box>{" "}
          Pets
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {[
          { text: "Dashboard", href: "/dashboard" },
          { text: "Users", href: "/dashboard/users" },
          { text: "Add Pet", href: "/dashboard/add-pet" },
          { text: "Pets", href: "/dashboard/pets" },
          { text: "Home", href: "/" },
        ].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} href={item.href}>
              <ListItemIcon>
                {index === 0 ? (
                  <InboxIcon />
                ) : index === 1 ? (
                  <MailIcon />
                ) : (
                  <MailIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  // const container =
  //   window !== undefined ? () => window().document.body : undefined;

  return (
    <Container>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component={Link} href="/" fontWeight={600} sx={{ flexGrow: 1 }}>
            <Box component="span" color="secondary.mian">
             {userInfo?.name}
            </Box>{" "}
            Wellcome to Cozy pet
          </Typography>

          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            // container={container}
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Box>{props.children}</Box>
        </Box>
      </Box>
    </Container>
  );
};
export default DashboardLayout;
