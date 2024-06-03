"use client";
// components/AdoptedPets.tsx
import React from "react";
import { format } from "date-fns";
import {
  Avatar,
  Box,
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";
import Link from "next/link";
import { useDeletePetMutation, useGetAllPetsQuery } from "@/redux/api/petApi";

interface Pet {
  id: string;
  name: string;
  photo: string;
  species: string;
  breed: string;
  age: number;
  size: string;
  location: string;
  description: string;
  temperament: string;
  medicalHistory: string;
  adoptionRequirements: string;
  createdAt: string;
  updatedAt: string;
}

const Pets: React.FC = () => {
  const { data, isLoading } = useGetAllPetsQuery(undefined);
  const [deletePet] = useDeletePetMutation();
  // handle delete pet
  const handleDeletePet = async (id: string) => {
    const isConfirm = confirm("Are you want sure delete this pet");
    try {
      const res = await deletePet(id).unwrap();
      if (isConfirm) {
        if (res.data.id) {
          alert("Pet deleted successfully");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const pets: Pet[] = data?.data.data;

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
              <TableCell>Species</TableCell>
              <TableCell>Breed</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Size</TableCell>
              <TableCell>Location</TableCell>

              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pets?.map((pet: Pet) => (
              <TableRow key={pet.id}>
                <TableCell>
                  <Avatar src={pet.photo} alt={pet.name} />
                </TableCell>
                <TableCell>{pet.name}</TableCell>
                <TableCell>{pet.species}</TableCell>
                <TableCell>{pet.breed}</TableCell>
                <TableCell>{pet.age}</TableCell>
                <TableCell>{pet.size}</TableCell>
                <TableCell>{pet.location}</TableCell>
                <TableCell>
                  <Link href={`/dashboard/edit-pet/${pet.id}`} passHref>
                    <Button component="a">Edit</Button>
                  </Link>
                  <Button onClick={() => handleDeletePet(pet.id)} color="error">
                    Remove
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

export default Pets;
