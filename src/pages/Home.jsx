import React from "react";
import { Container, Typography, Paper, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 5, textAlign: "center" }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Admin Portal
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        Manage and review submitted feedback efficiently.
      </Typography>

      <Paper elevation={3} sx={{ p: 4, mt: 3 }}>
        <Typography variant="h6" fontWeight="medium" gutterBottom>
            Let’s get started!
        </Typography>

        <Box display="flex" flexDirection="column" gap={2} mt={2}>
          <Button 
            variant="contained" 
            color="secondary" 
            component={Link} 
            to="/login"
          >
            Login
          </Button>
          <Button 
            variant="outlined" 
            color="secondary" 
            component={Link} 
            to="/dashboard"
          >
            Reset Password
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Home;
