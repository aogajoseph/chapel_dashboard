import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const FilterControls = ({ onFilter }) => {
  const [searchText, setSearchText] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleFilter = () => {
    onFilter({ searchText, startDate, endDate });
  };

  return (
    <Box 
      display="flex" 
      flexDirection={{ xs: "column", sm: "row" }} 
      gap={2} 
      alignItems="center" 
      justifyContent="space-between" 
      sx={{ mb: 3 }}
    >
      <TextField
        label="Enter Content..."
        variant="outlined"
        size="small"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        InputLabelProps={{
          sx: { fontSize: "0.8rem", fontStyle: "italic" }
        }}
      />
      <TextField
        label="Start Date"
        type="date"
        variant="outlined"
        size="small"
        InputLabelProps={{ shrink: true }}
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <TextField
        label="End Date"
        type="date"
        variant="outlined"
        size="small"
        InputLabelProps={{ shrink: true }}
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <Button variant="contained" color="secondary" onClick={handleFilter}>
        Apply Filters
      </Button>
    </Box>
  );
};

export default FilterControls;
