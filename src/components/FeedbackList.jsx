import React from "react";
import FeedbackItem from "./FeedbackItem";
import { Typography, Box } from "@mui/material";

const FeedbackList = ({ feedbacks }) => {
  return (
    <Box sx={{ mt: 3 }}>
      {feedbacks.length > 0 ? (
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
