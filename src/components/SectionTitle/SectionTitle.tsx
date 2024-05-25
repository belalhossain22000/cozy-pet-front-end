import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const SectionTitle = ({
  subtitle,
  title,
  description,
}: {
  subtitle: string;
  title: string;
  description: string;
}) => {
  return (
    <Box>
      <Stack direction="column" gap={2}>
        <Typography variant="h5">{subtitle}</Typography>
        <Typography variant="h3">{title}</Typography>
        <Typography variant="h6">{description}</Typography>
      </Stack>
    </Box>
  );
};

export default SectionTitle;
