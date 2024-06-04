"use client";

import CPForm from "@/components/Froms/CPFrom";
import CPInput from "@/components/Froms/CPInput";
import { useUpdateProfileMutation } from "@/redux/api/authApi";
import { getUser } from "@/utils/user";
import { Toaster, toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
// zod validation schema
const validationSchema = z.object({
  email: z.string().email("Please enter a valid email address!"),
  name: z.string(),
});

// start login page

const EditProfile = () => {
  const [error, setError] = useState("");
  const user = getUser() as any;
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();

  // handle login button
  const router = useRouter();
  const handleProfileUpdate = async (values: FieldValues) => {
    try {
      const res = await updateProfile(values).unwrap();
      if (res?.data?.id) {
        alert("Profile updated successfully");
      }
      console.log(res);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography variant="h6" fontWeight={700}>
                Cozy Pets
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                UPdate your profile
              </Typography>
            </Box>
          </Stack>

          {error && (
            <Box>
              <Typography
                sx={{
                  backgroundColor: "red",
                  padding: "1px",
                  borderRadius: "2px",
                  color: "white",
                  marginTop: "5px",
                }}
              >
                {error}
              </Typography>
            </Box>
          )}

          <Box>
            <CPForm
              onSubmit={handleProfileUpdate}
              resolver={zodResolver(validationSchema)}
              defaultValues={{
                email: user?.email,
                name: user?.name,
              }}
            >
              <Grid container spacing={2} my={1}>
                <Grid item md={6}>
                  <CPInput
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <CPInput
                    name="name"
                    label="Name"
                    type="text"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
              <Toaster />
              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={true}
                type="submit"
              >
                Update
              </Button>
            </CPForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default EditProfile;
