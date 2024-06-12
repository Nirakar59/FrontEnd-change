import Community from "./Community/Community";
import "./App.css";
import Banner from "./Banner/Banner";
import Footer from "./Footer/AppFooter";
import Home from "./Home/Home";
import DoctorProfile from "./Profile/DoctorProfile";

function App() {
  return (
    <>
      <Home />
      <Banner />

      <DoctorProfile />
      <Community />
      <Footer />
    </>
  );
}

export default App;
