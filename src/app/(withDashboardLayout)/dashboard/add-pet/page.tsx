"use client";

import CPForm from "@/components/Froms/CPFrom";
import CPInput from "@/components/Froms/CPInput";
import { useAddPetMutation } from "@/redux/api/petApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { z } from "zod";

// zod validation schema
 const validationSchema = z.object({
  name: z.string().nonempty("Please enter the pet's name"),
  photo: z.string().nonempty("Please enter the pet's image link"),
  description: z.string().nonempty("Please enter a detailed description"),
  age: z.string().nonempty("Please enter a positive number"),
  breed: z.string().nonempty("Please enter the breed"),
  temperament: z.string().nonempty("Please enter the temperament"),
  size: z.string().nonempty("Please enter the size"),
  gender: z.enum(["Male", "Female"]),
  medicalHistory: z.string().nonempty("Please enter the health status"),
  location: z.string().nonempty("Please enter the current location"),
  species: z.string().nonempty("Please enter the species"),
  adoptionRequirements: z
    .string()
    .nonempty("Please enter the adoption Requirements"),
});

// start Add New Pets page

const AddPet = () => {
  const [error, setError] = useState("");
  const [AddPet, { isLoading }] = useAddPetMutation();
  // handle add pet button
  const router = useRouter();
  const handleAddPet = async (values: FieldValues) => {
    const age = Number(values.age);
    values.age = age;
    console.log(values);

    try {
      const res = await AddPet(values).unwrap();
      if (res?.data?.id) {
        alert("Pet added successfully!");
      }
      console.log(values);
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
                Cozy Pets
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Add New Pet
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
              onSubmit={handleAddPet}
              resolver={zodResolver(validationSchema)}
              defaultValues={{
                name: "",
                photos: null,
                description: "",
                age: "",
                breed: "",
                gender: "Male",
                healthStatus: "",
                location: "",
              }}
            >
              <Grid container spacing={2} my={1}>
                <Grid item xs={12}>
                  <CPInput
                    name="name"
                    label="Pet's Name"
                    type="text"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <CPInput
                    name="photo"
                    label="Photos Link"
                    type="text"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <CPInput
                    name="description"
                    label="Detailed Description"
                    type="text"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <CPInput name="age" label="Age" type="number" fullWidth />
                </Grid>
                <Grid item xs={6}>
                  <CPInput name="breed" label="Breed" type="text" fullWidth />
                </Grid>
                <Grid item xs={6}>
                  <CPInput name="gender" label="Gender" type="text" fullWidth />
                </Grid>
                <Grid item xs={6}>
                  <CPInput
                    name="medicalHistory"
                    label="Health Status"
                    type="text"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <CPInput
                    name="location"
                    label="Current Location"
                    type="text"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <CPInput
                    name="species"
                    label="Species"
                    type="text"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <CPInput name="size" label="Size" type="text" fullWidth />
                </Grid>
                <Grid item xs={6}>
                  <CPInput
                    name="temperament"
                    label="Temperament"
                    type="text"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <CPInput
                    name="adoptionRequirements"
                    label="Adoption Requirements"
                    type="text"
                    fullWidth
                  />
                </Grid>
              </Grid>

              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth
                type="submit"
              >
                {isLoading ? "Adding pet" : "Add Pet"}
              </Button>
            </CPForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default AddPet;
