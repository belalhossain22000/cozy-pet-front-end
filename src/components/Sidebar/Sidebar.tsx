// components/Sidebar.tsx
"use client";

import React from "react";
import { Box, FormControl, InputLabel, MenuItem, Select, Typography, SelectChangeEvent } from "@mui/material";

const Sidebar = ({ filters, setFilters }: any) => {
  const handleFilterChange = (e: SelectChangeEvent<any>) => {
    const { name, value } = e.target;
    setFilters((prev: any) => ({
      ...prev,
      [name as string]: value,
    }));
  };

  return (
    <Box sx={{ width: 250, padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Filter Options
      </Typography>
      <FormControl fullWidth margin="normal">
        <InputLabel id="size-label">Size</InputLabel>
        <Select
          labelId="size-label"
          id="size"
          name="size"
          value={filters.size}
          onChange={handleFilterChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="small">Small</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="large">Large</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel id="gender-label">Gender</InputLabel>
        <Select
          labelId="gender-label"
          id="gender"
          name="gender"
          value={filters.gender}
          onChange={handleFilterChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel id="special-needs-label">Special Needs</InputLabel>
        <Select
          labelId="special-needs-label"
          id="special-needs"
          name="specialNeeds"
          value={filters.specialNeeds}
          onChange={handleFilterChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="yes">Yes</MenuItem>
          <MenuItem value="no">No</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Sidebar;
