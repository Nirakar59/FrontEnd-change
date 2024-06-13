import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  IconButton,
  Drawer,
  List,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  ListItem,
  ListItemText,
  TextField,
  Menu,
  MenuItem,
  useMediaQuery,
  createTheme, // Import createTheme
} from "@mui/material";
import HeaderPublic from "../header/header_public";
import Banner from "../Banner/Banner";
import GeolocationComponent from "../charts/geoLocation";
import LandingPage from "../LandingPage/LadingPage";
import TipsCards from "../TipsCards/TipsCards";
import StudentWellnessTips from "../StudentsWellBeing/StudentsWellBeing"; // Import StudentWellnessTips
import AppFooter from "../footer/footer";
import Widget from "../Widget/Widget";
import Emergency from "../Emergency/Emergency";


function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      navigate("/feed");
    }
  }, [navigate]);

  return (
    <>
      <HeaderPublic />
      <Banner />
      <Widget/>
      <GeolocationComponent />
      <LandingPage />
      <StudentWellnessTips /> {/* Integrate StudentWellnessTips component */}
      <Emergency/>
      <TipsCards />
      <AppFooter />
    </>
  );
}

export default Home;
