import React from "react";
import { Box, Typography } from "@mui/material";

const StudentWellnessTips = () => {
  const themeColor = "#4fc3f7";
  const themeFont = "'Spicy Rice', serif";

  const tips = [
    {
      id: 1,
      title: "Practice Mindfulness",
      description:
        "Take a few minutes each day to focus on your breathing and be present in the moment. Mindfulness can help reduce stress and improve focus.",
    },
    {
      id: 2,
      title: "Stay Active",
      description:
        "Engage in physical activities you enjoy, like walking, yoga, or dancing. Exercise releases endorphins and boosts your mood.",
    },
    {
      id: 3,
      title: "Connect with Others",
      description:
        "Maintain meaningful connections with friends, family, and peers. Social support is crucial for mental well-being.",
    },
    {
      id: 4,
      title: "Set Realistic Goals",
      description:
        "Break tasks into smaller steps and celebrate your achievements. Setting achievable goals boosts confidence and motivation.",
    },
  ];

  return (
    <Box sx={{ m: 4, backgroundColor: "#f0f0f0", padding: 4, borderRadius: 2 }}>
      <Typography variant="h4" sx={{ color: themeColor, textAlign: "center", fontFamily: themeFont }}>
        Student Wellness Tips
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 3 }}>
        {tips.map((tip) => (
          <Box key={tip.id} sx={{ maxWidth: 600, marginBottom: 3, textAlign: "left" }}>
            <Typography variant="h6" sx={{ color: themeColor, fontFamily: themeFont }}>
              {tip.title}
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: themeFont }}>
              {tip.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default StudentWellnessTips;
