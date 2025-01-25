"use client";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="bg-gradient-to-br from-zinc-50 to-red-200">
        <Header />
        <Card />
        <Footer />
      </div>
    </div>
  );
}
