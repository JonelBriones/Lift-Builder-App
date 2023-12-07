import React from "react";
import Header from "../../components/Header/Header.component";
import Programs from "../../components/Programs/Programs.component";

const Main = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <section className="main-section">About Section</section>
        <section className="main-section">Questions and Facts</section>
        <section className="main-section">
          <Programs />
        </section>
      </div>
    </div>
  );
};

export default Main;
