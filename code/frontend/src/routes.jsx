// Routes.js

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import PageNotFound from "./components/error/error";
import MasterEngagement from "./components/engagements/masterEngagement";
import Login from "./components/auth/login";
import SignUp from "./components/auth/signup";
import Community from "./components/community/Community";
import PaymentPage from "./components/payment/e-khalti";
import DoctorProfile from "./components/Profile/DoctorProfile";
import Feed from "./components/home/feed";
import AptitudeTest from "./components/aptitudeTest/appitudeComp";
import CricketGame from "./components/Games/Cricket/Cricket"; // Import CricketGame component
import Projects from "./components/Project/Projects";
import { useParams } from "react-router-dom";

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/engagement" element={<MasterEngagement />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/community" element={<Community />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/profile/doctor" element={<DoctorProfile />} />
      <Route path="/profile/mediator-teacher/" element={<DoctorProfile />} />
      <Route path="/profile/user" element={<DoctorProfile />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/project/:project_id" element={<ProjectDetail />} />
      <Route path="/aptitude-test/" element={<AptitudeTest />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

const ProjectDetail = () => {
  // Mocked projects array for demonstration
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

  const { project_id } = useParams(); // Get the project_id from URL params

  // Find the project with the matching project_id
  const project = projects.find((project) => project.id.toString() === project_id);

  if (!project) {
    return <PageNotFound />; // Render PageNotFound if project is not found
  }

  // Render CricketGame component with the specific project details
  return <CricketGame project={project} />;
};
