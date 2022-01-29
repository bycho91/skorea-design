import React from "react";
import { Navbar, Header, Featured, About, Gallery, Footer } from "./components";
import CustomCursor from "./cursor";

const App = () => {
  return (
    <>
      <CustomCursor />
      <div className="app">
        <Navbar />
        <Header />
        {/* <Featured />
      <About />
      <Gallery />
      <Footer /> */}
      </div>
    </>
  );
};

export default App;
