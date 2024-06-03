"use client";

import ProfileMenu from "@/components/ProfileMenu/ProfileMenu";
import { logoutUser } from "@/service/actions/logoutUser";
import { decodedToken } from "@/utils/jwt";
import {
  getFromLocalStorage,
  removeUserFromLocalStorage,
} from "@/utils/localStorage";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const token: string | null = getFromLocalStorage("accessToken");
  let userInfo;
  if (token !== null) {
    userInfo = decodedToken(token) as any;
  } else {
    userInfo = null;
    console.error("No access token found");
  }

  const handleLogOut = () => {
    removeUserFromLocalStorage();
    logoutUser(router);
    router.push("/login");
  };

  // console.log(userInfo)
  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h4" component={Link} href="/" fontWeight={600}>
          <Box component="span" color="primary.main">
            Cozy
          </Box>{" "}
          Pets
        </Typography>

        <Stack direction="row" justifyContent="space-between" gap={4}>
          <Typography component={Link} href="/" fontWeight={700}>
            Home
          </Typography>

          <Typography component={Link} href="/about-us" fontWeight={700}>
            About Us
          </Typography>

          {userInfo?.role === "ADMIN" ? (
            <Typography component={Link} href="/dashboard" fontWeight={700}>
              Dashboard
            </Typography>
          ) : null}
        </Stack>

        {userInfo ? (
          <Stack direction={"row"} alignItems={"center"} gap={5}>
            <ProfileMenu userInfo={userInfo} handleLogOut={handleLogOut} />
          </Stack>
        ) : (
          <Button component={Link} href="/login">
            Login
          </Button>
        )}
      </Stack>
    </Container>
  );
};

export default Navbar;
