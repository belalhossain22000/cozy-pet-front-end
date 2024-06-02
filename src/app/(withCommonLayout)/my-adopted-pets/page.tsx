"use client";
// components/AdoptedPets.tsx
import React, { useEffect, useState } from "react";
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
import { fetchAdoptedPets } from "@/utils/fetchPets";
import { useGetPetAdoptionRequestQuery } from "@/redux/api/petApi";
import Link from "next/link";

interface Pet {
  id: number;
  name: string;
  photo: string;
  adoptionDate: string;
  detailsPage: string;
}

const AdoptedPets: React.FC = () => {
  const { data, isLoading } = useGetPetAdoptionRequestQuery(undefined);

  if (isLoading) {
    return <h1>loading...</h1>;
  }
  console.log(data?.data);
  const pets = data?.data;

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
            {pets?.map((pet: any) => (
              <TableRow key={pet.id}>
                <TableCell>
                  <Avatar src={pet?.photo} alt={pet?.name} />
                </TableCell>
                <TableCell>{pet?.name}</TableCell>
                <TableCell>
                  {pet?.createdAt
                    ? format(new Date(pet.createdAt), "PPpp")
                    : "N/A"}
                </TableCell>
                <TableCell>
                  <Link href={`/details/${pet?.id}`} passHref>
                    <Button component="a">View Details</Button>
                  </Link>
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
