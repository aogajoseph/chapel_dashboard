import React, { useEffect } from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const FeedbackItem = ({ feedback }) => {
  useEffect(() => {
    console.log("Feedback item received:", feedback); // Debugging
  }, [feedback]);

  return (
    <Card
      sx={{
        mb: 1,
        p: 1,
        bgcolor: "#CCCCCC",
        display: "flex",
        alignItems: "center",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          width: "100%",
          padding: "2px",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            flexGrow: 1,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {feedback.message || "No message"}
        </Typography>
        <Typography variant="caption" color="textSecondary" sx={{ whiteSpace: "nowrap" }}>
          {feedback.timestamp || "No timestamp"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FeedbackItem;
