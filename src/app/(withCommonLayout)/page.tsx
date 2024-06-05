// pages/index.tsx

"use client";

import CPForm from "@/components/Froms/CPFrom";
import CPInput from "@/components/Froms/CPInput";
import PetCard from "@/components/PetCard/PetCard";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useGetAllPetsQuery } from "@/redux/api/petApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Container, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { FieldValues } from "react-hook-form";
import { z } from "zod";

const validationSchema = z.object({
  searchValue: z.string(),
});

const HomePage = () => {
  const { data, isLoading } = useGetAllPetsQuery(undefined);
  const pets = data?.data?.data;
  const [filteredPets, setFilteredPets] = useState(pets || []);
  const [filters, setFilters] = useState({
    size: "",
    gender: "",
    specialNeeds: "",
  });

  useEffect(() => {
    setFilteredPets(pets);
  }, [pets]);

  // pet search handler
  const handleSearch = (values: FieldValues) => {
    try {
      const searchValue = values.searchValue.toLowerCase();
      const filtered = pets?.filter(
        (pet: any) =>
          pet?.name.toLowerCase().includes(searchValue) ||
          pet?.species.toLowerCase().includes(searchValue) ||
          pet?.breed.toLowerCase().includes(searchValue) ||
          pet?.location.toLowerCase().includes(searchValue)
      );
      setFilteredPets(filtered);
    } catch (error) {
      console.log(error);
    }
  };

  // filter pets based on filters
  useEffect(() => {
    const filtered = pets?.filter((pet: any) => {
      return (
        (filters.size === "" || pet.size === filters.size) &&
        (filters.gender === "" || pet.gender === filters.gender) &&
        (filters.specialNeeds === "" ||
          pet.specialNeeds === (filters.specialNeeds === "yes"))
      );
    });
    setFilteredPets(filtered);
  }, [filters, pets]);

  if (isLoading) {
    return (
      <Container>
        <h1>Loading...</h1>
      </Container>
    );
  }

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Box sx={{ position: "sticky", top: 0 }} my={10}>
            <Sidebar filters={filters} setFilters={setFilters} />
          </Box>
        </Grid>
        <Grid item xs={12} md={9}>
          <Box mb={4} my={10}>
            <CPForm
              onSubmit={handleSearch}
              resolver={zodResolver(validationSchema)}
            >
              <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="center"
              >
                <Grid item xs={12} sm={9} md={7}>
                  <CPInput
                    name="searchValue"
                    label="Search Your Pet"
                    type="text"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={12} sm={3} md={2}>
                  <Button
                    sx={{
                      margin: { xs: "10px 0px", sm: "0px" },
                      width: "100%",
                    }}
                    type="submit"
                    variant="contained"
                  >
                    Search
                  </Button>
                </Grid>
              </Grid>
            </CPForm>
          </Box>

          <Box my={5}>
            <Grid container spacing={3}>
              {(filteredPets?.length > 0 ? filteredPets : pets)?.map(
                (pet: any) => (
                  <Grid item xs={12} sm={6} md={4} key={pet.id}>
                    <PetCard pet={pet} />
                  </Grid>
                )
              )}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
