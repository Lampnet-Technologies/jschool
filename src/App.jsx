import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import SingleNewsPage from "./pages/SingleNewsPage";
import Student from "./pages/login/Student";
import Parent from "./pages/login/Parent";
import Teacher from "./pages/login/Teacher";
import TeachersPage from "./pages/TeachersPage";
import Admission from "./pages/Admission";
import ErrorPage from "./pages/ErrorPage";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news/:slug" element={<SingleNewsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/student" element={<Student />} />
        <Route path="/parent" element={<Parent />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
