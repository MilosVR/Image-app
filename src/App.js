import React from "react";
import ImageApp from "./components/ImageApp";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./components/responsive.scss";

function App() {
  return (
    <div>
      <Header />
      <ImageApp />
      <Footer />
    </div>
  );
}

export default App;
