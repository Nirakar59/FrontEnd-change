// import AppFooter from '../Footer/AppFooter'
import HeaderNav from "../header/header";
import Banner from "../Banner/Banner";
import TipsCards from "../TipsCards/TipsCards";
import AppFooter from "../footer/footer";
import Notification from "../Notifications/Notifications";
import HeaderPublic from "../header/header_public";
import { useNavigate } from "react-router-dom";

import React, { useState, useEffect } from "react";

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

      <TipsCards />

      <AppFooter />
    </>
  );
}

export default Home;
