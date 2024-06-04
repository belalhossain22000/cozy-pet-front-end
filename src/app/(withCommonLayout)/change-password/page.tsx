"use client";

import CPForm from "@/components/Froms/CPFrom";
import CPInput from "@/components/Froms/CPInput";
import { useChangePasswordMutation } from "@/redux/api/authApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { z } from "zod";

// zod validation schema
 const validationSchema = z
  .object({
    oldPassword: z
      .string()
      .min(6, "Old password must be at least 6 characters"),
    newPassword: z
      .string()
      .min(6, "New password must be at least 6 characters"),
    confirmNewPassword: z
      .string()
      .min(6, "Confirm new password must be at least 6 characters"),
  })
  .superRefine((data, ctx) => {
    if (data.newPassword !== data.confirmNewPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords must match",
        path: ["confirmNewPassword"],
      });
    }
  });

const ChangePassword = () => {
  const [error, setError] = useState("");

  const [changePassword, { isLoading }] = useChangePasswordMutation();
  // handle change password button
  const router = useRouter();
  const handleChangePassword = async (values: FieldValues) => {
    try {
      const data = {
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
      };
      const res = await changePassword(data).unwrap();
      if (res?.data?.id) {
        alert(res?.message);
      }
      console.log(res);
    } catch (err: any) {
      console.error(err.message);
      alert(err.message);
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
                Update your Password
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
              onSubmit={handleChangePassword}
              resolver={zodResolver(validationSchema)}
              defaultValues={{
                oldPassword: "",
                newPassword: "",
                confirmNewPassword: "",
              }}
            >
              <Grid container spacing={2} my={1}>
                <Grid item md={6}>
                  <CPInput
                    name="oldPassword"
                    label="Old Password"
                    type="password"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <CPInput
                    name="newPassword"
                    label="New Password"
                    type="password"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <CPInput
                    name="confirmNewPassword"
                    label="Confirm New Password"
                    type="password"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>

              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={true}
                type="submit"
              >
                Change Password
              </Button>
            </CPForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default ChangePassword;
