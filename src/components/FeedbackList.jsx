import React, { useEffect } from "react";
import FeedbackItem from "./FeedbackItem";
import { Typography, Box } from "@mui/material";

const FeedbackList = ({ feedbacks }) => {
  useEffect(() => {
    console.log("Feedbacks received:", feedbacks);
  }, [feedbacks]);

  return (
    <Box sx={{ mt: 3 }}>
      {feedbacks && feedbacks.length > 0 ? (
        feedbacks.map((item) => <FeedbackItem key={item.id} feedback={item} />)
      ) : (
        <Typography variant="body2" color="textSecondary">
          No feedback available.
        </Typography>
      )}
    </Box>
  );
};

export default FeedbackList;
