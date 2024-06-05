
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  styled,
  Button,
} from "@mui/material";
import { IPet } from "@/type/type";
import Link from "next/link";

const StyledCard = styled(Card)(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: theme.shadows[10],
  },
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(2),
  "& .MuiTypography-h5": {
    fontWeight: theme.typography.fontWeightBold,
  },
  "& .MuiTypography-body2": {
    marginTop: theme.spacing(1),
  },
}));

const PetCard = ({ pet }: { pet: IPet }) => {
  return (
    <StyledCard>
      <CardMedia
        component="img"
        height="200"
        image={pet?.photo}
        alt={pet?.name}
      />
      <StyledCardContent>
        <Typography variant="h5">{pet?.name}</Typography>
        <Typography variant="body2" color="textSecondary">
          <strong>Breed:</strong> {pet?.breed}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          <strong>Age:</strong> {pet?.age}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          <strong>Location:</strong> {pet?.location}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          <strong>Description:</strong> {pet?.description.slice(0, 50)}... see more
        </Typography>
        <Box mt={2}>
          <Link href={`/details/${pet?.id}`} passHref>
            <Button variant="contained" color="primary" component="a">
              Details
            </Button>
          </Link>
        </Box>
      </StyledCardContent>
    </StyledCard>
  );
};

export default PetCard;
