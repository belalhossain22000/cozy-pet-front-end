"use client";

import CPForm from "@/components/Froms/CPFrom";
import CPInput from "@/components/Froms/CPInput";
import PetCard from "@/components/PetCard/PetCard";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { useGetAllPetsQuery } from "@/redux/api/petApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Container, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { FieldValues } from "react-hook-form";
import { z } from "zod";

export const validationSchema = z.object({
  search: z.string(),
});

const HomePage = () => {
  const { data, isLoading } = useGetAllPetsQuery(undefined);
  const pets = data?.data?.data;
  console.log(pets);

  // pet search handler
  const handleSearch = (values: FieldValues) => {
    try {
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  return (
    <Container>
      <Box>
        <CPForm
          onSubmit={handleSearch}
          resolver={zodResolver(validationSchema)}
        >
          <Grid container spacing={2} my={1}>
            <Grid item md={6}>
              <CPInput
                name="searchValue"
                label="Search YOur pet"
                type="text"
                fullWidth={true}
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
            Search
          </Button>
        </CPForm>
      </Box>

      <Box>
        <SectionTitle
          subtitle="Meet the animals"
          title="Puppies Waiting for Adoption"
          description="The best overall dog DNA test is Embark Breed & Health Kit (view at Chewy), which provides you with a breed brwn and information Most dogs"
        />
      </Box>

      <Box>
        <Grid container spacing={3}>
          {pets?.map((pet: any) => (
            <Grid item xs={12} sm={6} md={4} key={pet.id}>
              <PetCard pet={pet} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default HomePage;