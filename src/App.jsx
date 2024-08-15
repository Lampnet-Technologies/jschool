import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import SingleNewsPage from "./pages/SingleNewsPage";
import Teacher from "./pages/login/Teacher";
import TeachersPage from "./pages/TeachersPage";
import Admission from "./pages/Admission";
import ErrorPage from "./pages/ErrorPage";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Support from "./pages/support/Support";
import Pupil from "./pages/pupil/Pupil";
import AdmissionOverview from "./pages/overview/AdmissionOverview";
import Loader from "./assets/images/loader.svg";

function AppContent() {
  const [loader, setLoader] = useState(true);
  const location = useLocation();
  const loginPaths = ["/login"];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loader ? (
        <div className="loader">
          <img src={Loader} alt="Loading..." />
        </div>
      ) : (
        <>
          {!loginPaths.includes(location.pathname) && <Header />}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/news/:slug" element={<SingleNewsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/login" element={<Teacher />} />
            <Route path="/teachers" element={<TeachersPage />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/support" element={<Support />} />
            <Route path="/pupil" element={<Pupil />} />
            <Route path="/overview" element={<AdmissionOverview />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
