// components/PetCard.js
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
import dog1 from "@/assets/dogs/dog1.jpg";
import Link from "next/link";

const StyledCard = styled(Card)(({ theme }) => ({
  position: "relative",
  "&:hover .hoverOverlay": {
    opacity: 1,
  },
}));

const HoverOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "50%",
  backgroundColor: "rgba(255, 0, 0, 0.6)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0,
  transition: "opacity 0.3s ease",
}));

const PetCard = ({ pet }: { pet: IPet }) => {
  const { name } = pet || {};

  return (
    <StyledCard>
      <CardMedia component="img" height="200" image={dog1.src} alt={pet.name} />
      <HoverOverlay className="hoverOverlay">
        <Typography variant="h6" color="white">
          Adoption
        </Typography>
      </HoverOverlay>
      <CardContent>
        <Typography variant="h5">{pet?.name}</Typography>
        <Typography variant="body2" color="textSecondary">
          Breed: {pet?.breed}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Age: {pet?.age}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Location: {pet?.location}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Description: {pet?.description.slice(0, 50)} ... see more
        </Typography>
        <Link href={`/details/${pet?.id}`}  passHref>
          <Button component="a">
            Details
          </Button>
        </Link>
      </CardContent>
    </StyledCard>
  );
};

export default PetCard;
