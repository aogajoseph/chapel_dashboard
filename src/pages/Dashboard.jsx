import React, { useEffect, useState } from "react";
import { Container, Typography, Paper, Button, Box } from "@mui/material";
import FeedbackList from "../components/FeedbackList";
import FilterControls from "../components/FilterControls";

const Dashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [filteredFeedbacks, setFilteredFeedbacks] = useState([]);

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = () => {
    // Fetch feedback from AWS (replace with actual API call)
    const rawFeedbacks = [
      { id: 1, message: "Great service!", timestamp: "02/22/2025 14:30:45" },
      { id: 2, message: "Could improve the seating arrangement.", timestamp: "02/22/2025 09:15:30" },
    ];

    const formattedFeedbacks = rawFeedbacks.map((feedback) => {
      const dateObj = new Date(feedback.timestamp);
      return {
        ...feedback,
        formattedDate: dateObj.toISOString().split("T")[0], // Extract YYYY-MM-DD
        formattedTime: dateObj.toLocaleTimeString(),
      };
    });

    setFeedbacks(formattedFeedbacks);
    setFilteredFeedbacks(formattedFeedbacks);
  };

  // Function to handle filtering
  const handleFilter = ({ searchText, startDate, endDate }) => {
    let filtered = feedbacks;

    if (searchText) {
      filtered = filtered.filter((feedback) =>
        feedback.message.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (startDate) {
      filtered = filtered.filter((feedback) => feedback.formattedDate >= startDate);
    }

    if (endDate) {
      filtered = filtered.filter((feedback) => feedback.formattedDate <= endDate);
    }

    setFilteredFeedbacks(filtered);
  };

  // Handle logout (replace with actual logout logic)
  const handleLogout = () => {
    console.log("Logging out...");
    // Add actual logout logic here (e.g., Firebase sign out, redirect)
  };

  return (
    <Container maxWidth="md" sx={{ mt: 1, textAlign: "left" }}>
      {/* Top Section: Title + Logout Button */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h5" fontWeight="bold">
          Admin Dashboard
        </Typography>
        <Button
          variant="contained"
          color="error"
          size="small"
          onClick={handleLogout}
          sx={{
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#b71c1c",
            },
          }}
        >
          Logout
        </Button>
      </Box>

      {/* Filter Controls */}
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        Filter by feedback content or period
      </Typography>
      <FilterControls onFilter={handleFilter} />

      {/* Feedback List */}
      <Paper elevation={10} sx={{ p: 3, mt: 0 }}>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          Feedback from Users
        </Typography>

        {/* Refresh Button */}
        <Box display="flex" justifyContent="flex-end" mt={1} mb={1}>
          <Button
            variant="outlined"
            size="small"
            onClick={fetchFeedback}
            sx={{
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#e0e0e0",
              },
            }}
          >
            Refresh
          </Button>
        </Box>

        <FeedbackList feedbacks={filteredFeedbacks} />
      </Paper>
    </Container>
  );
};

export default Dashboard;
