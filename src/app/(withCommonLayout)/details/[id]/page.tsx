"ues client";

import { Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import dog from "@/assets/dogs/dog1.jpg";
import Link from "next/link";

const PetDetails = async ({ params }: any) => {
  const res = await fetch(`http://localhost:3000/api/pets/${params?.id}`);
  const { data: pet } = await res.json();
  console.log(params, pet);

  return (
    <Container>
      <Grid container spacing={3}>
        {/* Left side - Image */}
        <Grid item xs={12} md={4}>
          <Image
            src={dog}
            alt={pet.name}
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </Grid>
        {/* Right side - Details */}
        <Grid item xs={12} md={8}>
          <Typography variant="h2">{pet.name}</Typography>
          <Typography variant="subtitle1">Species: {pet.species}</Typography>
          <Typography variant="subtitle1">Breed: {pet.breed}</Typography>
          <Typography variant="subtitle1">Age: {pet.age}</Typography>
          <Typography variant="subtitle1">Size: {pet.size}</Typography>
          <Typography variant="subtitle1">Location: {pet.location}</Typography>
          <Typography variant="subtitle1">
            Description: {pet.description}
          </Typography>
          <Typography variant="subtitle1">
            Temperament: {pet.temperament}
          </Typography>
          <Typography variant="subtitle1">
            Medical History: {pet.medicalHistory}
          </Typography>
          <Typography variant="subtitle1">
            Adoption Requirements: {pet.adoptionRequirements}
          </Typography>

          <Link href={`/adoption-request/${pet?.id}`} passHref>
            <Button variant="contained" color="primary">
              Adoption Request
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PetDetails;
