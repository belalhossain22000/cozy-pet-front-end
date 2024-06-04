"use client";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";

import Link from "next/link";
import { FieldValues } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CPForm from "@/components/Froms/CPFrom";
import CPInput from "@/components/Froms/CPInput";
import { useRegisterMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";

 const validationSchema = z.object({
  name: z.string().min(1, "Please enter your name!"),
  email: z.string().email("Please enter a valid email address!"),
  password: z.string().min(6, "Must be at least 6 characters"),
});

 const defaultValues = {
  name: "",
  email: "",
  password: "",
};

const RegisterPage = () => {
  const [register, { isLoading }] = useRegisterMutation();
  const router = useRouter();
  // handle register
  const handleRegister = async (values: FieldValues) => {
    try {
      const res = await register(values).unwrap();
      if (res.data.id) {
        alert("Registration successfully");
        router.push("/login");
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
              <Typography variant="h6" fontWeight={600}>
                Cozy Pets
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Please Register here
              </Typography>
            </Box>
          </Stack>

          <Box>
            <CPForm
              onSubmit={handleRegister}
              resolver={zodResolver(validationSchema)}
              defaultValues={defaultValues}
            >
              <Grid container spacing={2} my={1}>
                <Grid item md={12}>
                  <CPInput label="Name" fullWidth={true} name="name" />
                </Grid>
                <Grid item md={6}>
                  <CPInput
                    label="Email"
                    type="email"
                    fullWidth={true}
                    name="email"
                  />
                </Grid>
                <Grid item md={6}>
                  <CPInput
                    label="Password"
                    type="password"
                    fullWidth={true}
                    name="password"
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
                {isLoading ? "Registering" : "Register"}
              </Button>
              <Typography component="p" fontWeight={300}>
                Do you already have an account?{" "}
                <Link
                  href="/login"
                  className="hover:text-blue-500 hover:underline"
                >
                  Login here
                </Link>
              </Typography>
            </CPForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
