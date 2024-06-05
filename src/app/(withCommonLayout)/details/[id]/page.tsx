"use client";

import { Button, Container, Grid, Typography, Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import dog from "@/assets/dogs/dog1.jpg";
import Link from "next/link";
import { styled } from "@mui/material/styles"; // Ensure you're importing from @mui/material/styles
import { useGetSinglePetQuery } from "@/redux/api/petApi";

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4),
}));

const StyledImage = styled(Image)({
  width: "100%",
  borderRadius: "8px",
  objectFit: "cover",
});

const DetailItem = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  textTransform: "none",
}));

const PetDetails = ({ params }: any) => {
  const { data, isLoading } = useGetSinglePetQuery(params?.id);
  const pet = data?.data || {};
  if (isLoading) {
    return (
      <Container>
        <h1>Loading...</h1>
      </Container>
    );
  }
  return (
    <StyledContainer>
      <Grid container spacing={3}>
        {/* Left side - Image */}
        <Grid item xs={12} md={4}>
          <StyledImage
            src={pet?.photo}
            alt={pet.name}
            layout="responsive"
            width={400}
            height={300}
          />
        </Grid>
        {/* Right side - Details */}
        <Grid item xs={12} md={8}>
          <Typography variant="h2" gutterBottom>
            {pet.name}
          </Typography>
          <DetailItem variant="subtitle1">
            <strong>Species:</strong> {pet.species}
          </DetailItem>
          <DetailItem variant="subtitle1">
            <strong>Breed:</strong> {pet.breed}
          </DetailItem>
          <DetailItem variant="subtitle1">
            <strong>Age:</strong> {pet.age}
          </DetailItem>
          <DetailItem variant="subtitle1">
            <strong>Size:</strong> {pet.size}
          </DetailItem>
          <DetailItem variant="subtitle1">
            <strong>Location:</strong> {pet.location}
          </DetailItem>
          <DetailItem variant="subtitle1">
            <strong>Description:</strong> {pet.description}
          </DetailItem>
          <DetailItem variant="subtitle1">
            <strong>Temperament:</strong> {pet.temperament}
          </DetailItem>
          <DetailItem variant="subtitle1">
            <strong>Medical History:</strong> {pet.medicalHistory}
          </DetailItem>
          <DetailItem variant="subtitle1">
            <strong>Adoption Requirements:</strong> {pet.adoptionRequirements}
          </DetailItem>

          <Link href={`/adoption-request/${pet?.id}`} passHref>
            <StyledButton variant="contained" color="primary">
              Adoption Request
            </StyledButton>
          </Link>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default PetDetails;
