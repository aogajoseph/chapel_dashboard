import React, { useState } from "react";
import { Container, TextField, Button, Typography, Paper, Box } from "@mui/material";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset request for:", email);
    setSubmitted(true);

    // Here, you would call your backend to send a password reset link.
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
