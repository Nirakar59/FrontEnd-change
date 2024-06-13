// Projects.jsx

import React from "react";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import CricketGame from "../Games/Cricket/Cricket"; // Import CricketGame component

const projects = [
  {
    id: 1,
    title: "CricketGame",
    description: "Play and score runs",
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    title: "Rock Paper Scissors",
    description: "Relax and unwind with this calming activity.",
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Find peace and tranquility in this project.",
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    id: 4,
    title: "Project 4",
    description: "Recharge and rejuvenate with this experience.",
    imageUrl: "https://via.placeholder.com/300",
  },
];

const Projects = () => {
  const themeColor = "#4fc3f7";

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <Box sx={{ color: themeColor }}>
        <ul>{dots}</ul>
      </Box>
    ),
  };

  return (
    <Box sx={{ m: 4, p: 4, borderRadius: 2 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          color: themeColor,
          textAlign: "center",
          fontFamily: "'Spicy Rice', serif",
        }}
      >
        Refreshing Projects
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
        sx={{
          color: themeColor,
          textAlign: "center",
          mb: 4,
          fontFamily: "'Spicy Rice', serif",
        }}
      >
        Take a break and rejuvenate with our curated projects.
      </Typography>
      <Slider {...sliderSettings}>
        {projects.map((project) => (
          <Box key={project.id} sx={{ p: 2 }}>
            <Link
              to={`/project/${project.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Card
                sx={{
                  height: "320px",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: 3,
                  borderColor: themeColor,
                  borderWidth: "1px",
                  borderStyle: "solid",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={project.imageUrl}
                  alt={project.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      color: themeColor,
                      fontFamily: "'Spicy Rice', serif",
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography sx={{ fontFamily: "'Spicy Rice', serif" }}>
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Projects;
