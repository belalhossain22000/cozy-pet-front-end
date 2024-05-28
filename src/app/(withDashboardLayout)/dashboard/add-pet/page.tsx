"use client";


import CPForm from "@/components/Froms/CPFrom";
import CPInput from "@/components/Froms/CPInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { z } from "zod";

// zod validation schema
export const validationSchema = z.object({
  name: z.string().nonempty("Please enter the pet's name"),
  photos: z.string().nonempty("Please enter the pet's image link"),
  description: z.string().nonempty("Please enter a detailed description"),
  age: z.string().nonempty("Please enter a positive number"),
  breed: z.string().nonempty("Please enter the breed"),
  gender: z.enum(["Male", "Female"]),
  healthStatus: z.string().nonempty("Please enter the health status"),
  location: z.string().nonempty("Please enter the current location"),
});

// start Add New Pets page

const AddPet = () => {
  const [error, setError] = useState("");

  // handle add pet button
  const router = useRouter();
  const handleAddPet = async (values: FieldValues) => {
    try {
      // Simulate API call to add pet
      console.log(values);
      alert("Pet added successfully!");
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
                    name="photos"
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
                  <CPInput
                    name="age"
                    label="Age"
                    type="number"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <CPInput
                    name="breed"
                    label="Breed"
                    type="text"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <CPInput
                    name="gender"
                    label="Gender"
                    type="text"
                
                    fullWidth
                    
                  />
                </Grid>
                <Grid item xs={6}>
                  <CPInput
                    name="healthStatus"
                    label="Health Status"
                    type="text"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <CPInput
                    name="location"
                    label="Current Location"
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
                Add Pet
              </Button>
            </CPForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default AddPet;
