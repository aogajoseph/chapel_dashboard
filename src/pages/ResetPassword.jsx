import React, { useState } from "react";
import { Container, TextField, Button, Typography, Paper, Box } from "@mui/material";
import { supabase } from "../supabaseClient"; // Import Supabase client

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError(null);

    const { data, error } = await supabase.auth.resetPasswordForEmail(email);

    if (error) {
      setError(error.message);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 10 }}>
      <Paper elevation={3} sx={{ p: 4, textAlign: "center" }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Reset Password
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Enter your email address to receive a password reset link.
        </Typography>

        {!submitted ? (
          <Box component="form" onSubmit={handleResetPassword} sx={{ mt: 2 }}>
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

            {error && (
              <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                {error}
              </Typography>
            )}

            <Button type="submit" variant="contained" color="secondary" fullWidth sx={{ mt: 2 }}>
              Send Reset Link
            </Button>
          </Box>
        ) : (
          <Typography variant="body2" color="success.main" sx={{ mt: 2 }}>
            A password reset link has been sent to your email.
          </Typography>
        )}
      </Paper>
    </Container>
  );
};

export default ResetPassword;
