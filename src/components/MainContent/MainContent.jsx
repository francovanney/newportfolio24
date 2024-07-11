import React from "react";
import "./MainContent.scss";
import { Separator } from "../ui/separator";

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="separator">
        <Separator />
      </div>
      <section className="section animateIn" id="section-1">
        <h2>Our Products</h2>
        <p>Explore our range of products designed to meet your needs.</p>
      </section>
      <section className="section">
        <h2>About Us</h2>
        <p>Learn more about our journey and values.</p>
      </section>
      <section className="section">
        <h2>Contact</h2>
        <p>Get in touch with us for more information.</p>
      </section>
    </div>
  );
};

export default MainContent;
