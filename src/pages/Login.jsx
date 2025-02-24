import React, { useState } from "react";
import { Container, TextField, Button, Typography, Paper, Box, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });

    // Implement authentication logic here
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4, textAlign: "center" }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Admin Login
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Enter your credentials to access the admin dashboard.
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Email Address"
            type="email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button type="submit" variant="contained" color="secondary" fullWidth sx={{ mt: 2 }}>
            Login
          </Button>

          <Box sx={{ textAlign: "left", mt: 1, mb: 2 }}>
            <Link component="button" variant="body2" onClick={() => navigate("/reset-password")}>
              Forgot password?
            </Link>
          </Box> 

        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
