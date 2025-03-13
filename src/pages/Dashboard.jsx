import React, { useEffect, useState } from "react";
import { Container, Typography, Paper, Button, Box, CircularProgress } from "@mui/material";
import { supabase } from "../supabaseClient";
import FeedbackList from "../components/FeedbackList";
import FilterControls from "../components/FilterControls";

const Dashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [filteredFeedbacks, setFilteredFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("Updated feedbacks:", feedbacks);
  }, [feedbacks]);    

  const fetchFeedback = async () => {
    try {
      const { data, error } = await supabase
        .from("chapel-feedback")
        .select("*")
        .order("created_at", { ascending: false }); 
  
      console.log("Fetched data:", data); // Debugging  
  
      if (error) {
        console.error("Error fetching feedback:", error.message);
        return;
      }
  
      if (!data || data.length === 0) {
        console.warn("No feedback found!"); // Check if data is empty
        return;
      }
  
      const formattedFeedbacks = data.map((feedback) => {
        const dateObj = new Date(feedback.created_at);
        return {
          ...feedback,
          formattedDate: dateObj.toISOString().split("T")[0],
          formattedTime: dateObj.toLocaleTimeString(),
        };
      });
  
      setFeedbacks(formattedFeedbacks);
      setFilteredFeedbacks(formattedFeedbacks);
    } catch (err) {
      console.error("Unexpected error fetching feedback:", err);
    }
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
    // Add Supabase auth sign-out logic if needed
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

        {loading ? (
          <Box display="flex" justifyContent="center" mt={2}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : (
          <FeedbackList feedbacks={filteredFeedbacks} />
        )}
      </Paper>
    </Container>
  );
};

export default Dashboard;
