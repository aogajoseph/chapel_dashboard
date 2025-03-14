import React, { useState } from "react";
import { Container, TextField, Button, Typography, Paper, Box, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient"; // Import Supabase client

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
  
    // Restrict login to only the admin email
    if (email !== "jonyangomail@gmail.com") {
      setError("Invalid Email or Password");
      setLoading(false);
      return;
    }
  
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
  
    if (error) {
      setError("Invalid email or password.");
      setLoading(false);
    } else {
      console.log("User logged in:", data);
      navigate("/dashboard"); // Redirect to admin dashboard
    }
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

          {error && (
            <Typography color="error" variant="body2" sx={{ mt: 1 }}>
              {error}
            </Typography>
          )}

          <Button type="submit" variant="contained" color="secondary" fullWidth sx={{ mt: 2 }} disabled={loading}>
            {loading ? "Logging in..." : "Login"}
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
