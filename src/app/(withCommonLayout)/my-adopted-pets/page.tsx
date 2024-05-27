"use client"
// components/AdoptedPets.tsx
import React, { useEffect, useState } from "react";

import { Avatar, Box, Button, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper } from "@mui/material";
import { fetchAdoptedPets } from "@/utils/fetchPets";

interface Pet {
  id: number;
  name: string;
  photo: string;
  adoptionDate: string;
  detailsPage: string;
}

const AdoptedPets: React.FC = () => {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    const getPets = async () => {
      const adoptedPets = await fetchAdoptedPets();
      setPets(adoptedPets);
    };

    getPets();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
        My Adopted Pets
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Photo</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Adoption Date</TableCell>
              <TableCell>Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pets.map((pet) => (
              <TableRow key={pet.id}>
                <TableCell>
                  <Avatar src={pet.photo} alt={pet.name} />
                </TableCell>
                <TableCell>{pet.name}</TableCell>
                <TableCell>{pet.adoptionDate}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" href={pet.detailsPage}>
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default AdoptedPets;
