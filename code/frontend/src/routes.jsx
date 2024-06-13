// Routes.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import PageNotFound from "./components/error/error";
import MasterEngagement from "./components/engagements/masterEngagement"
import Login from "./components/auth/login"
import SignUp from "./components/auth/signup";
import Community from "./components/community/Community";
import PaymentPage from "./components/payment/e-khalti";
import DoctorProfile from "./components/Profile/DoctorProfile";
import Feed from "./components/home/feed";

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/engagement" element={<MasterEngagement />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/community" element={<Community />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/profile" element={<DoctorProfile />} />
      <Route path="/feed" element={<Feed />} />

    </Routes>
  );
}

