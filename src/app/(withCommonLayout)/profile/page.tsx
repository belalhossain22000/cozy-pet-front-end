"use client";

import { decodedToken } from "@/utils/jwt";
import { getFromLocalStorage } from "@/utils/localStorage";
import {
  Avatar,
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import profile from "@/assets/images/profile.jpg";
import React from "react";
import { UserInfo } from "@/type/type";
import Link from "next/link";
import { useGetMyProfileQuery } from "@/redux/api/authApi";

const ProfilePage = () => {
  const { data, isLoading } = useGetMyProfileQuery(undefined);
  const userInfo = data?.data || {};

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
        My Profile
      </Typography>

      <Stack direction="column" gap={5} alignItems="center" mb={4}>
        <Avatar
          alt={userInfo?.name}
          src={profile.src}
          sx={{ width: 80, height: 80, marginRight: 2 }}
        />
        <Box>
          <Typography variant="h6">{userInfo?.name}</Typography>
          <Typography variant="body1">{userInfo?.email}</Typography>
        </Box>
        <Link href="/edit-profile">
          <Button>Edit profile</Button>
        </Link>
        <Link href="/change-password">
          <Button>Change Password</Button>
        </Link>
      </Stack>
    </Container>
  );
};

export default ProfilePage;
