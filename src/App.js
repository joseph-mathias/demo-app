import React, { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import "./App.css";
import { css } from "@emotion/react";
import { PropagateLoader } from "react-spinners";
import Header from "./Components/Header";
import Products from "./Components/Products";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  const [loading, setLoader] = useState(false);
  const override = css`
    display: block;
    border-color: red;
    margin-top: 20%;
  `;

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 5000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <PropagateLoader
          color={"#3d2514"}
          loading={loading}
          css={override}
          size={40}
        />
      ) : (
        <>
          <NavBar />
          <Header />
          <Products />
          <About />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
