"use client";
import CPCheckbox from "@/components/Froms/CPCheck";
import CPForm from "@/components/Froms/CPFrom";
import CPInput from "@/components/Froms/CPInput";
import { usePetAdoptionRequestMutation } from "@/redux/api/petApi";
import { decodedToken } from "@/utils/jwt";
import { getFromLocalStorage } from "@/utils/localStorage";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { JwtPayload } from "jwt-decode";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
// zod validation schema
export const validationSchema = z.object({
  email: z.string().email("Please enter a valid email address!"),
  additionalInfo: z.string().min(6, "Must be at least 6 characters"),
  termsAndConditions: z.boolean().refine((value) => value === true, {
    message: "Please agree to the terms and conditions.",
  }),
});

// start login page

const AdoptionRequest = ({ params }: any) => {
  console.log(params.id);
  const [error, setError] = useState("");
  const [petAdoptionRequest, { isLoading }] = usePetAdoptionRequestMutation();

  const token = getFromLocalStorage("accessToken");

  const user = decodedToken(token);
  console.log(user);
  // handle submit adoption request button
  const router = useRouter();
  const handleSubmit = async (values: FieldValues) => {
    const adoptionData = {
      petId: params.id,
      petOwnershipExperience: values.additionalInfo,
    };

    try {
      const res = await petAdoptionRequest(adoptionData).unwrap();
      if (res?.data?.id) {
        alert("Adoption Request is success");
      }
    } catch (err: any) {
      console.error(err.message);
      setError(err.message);
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
                Adoption Request Form
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Adoption Request Form
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
              onSubmit={handleSubmit}
              resolver={zodResolver(validationSchema)}
              defaultValues={{
                email: user?.email,
                additionalInfo: "",
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
                    name="additionalInfo"
                    label="Additional Information"
                    type="text"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <CPCheckbox
                    name="termsAndConditions"
                    label="Agree to Terms and Conditions"
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
                Submit
              </Button>
            </CPForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default AdoptionRequest;
