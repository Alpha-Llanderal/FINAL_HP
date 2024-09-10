import React, { useEffect } from "react";
import "./home.css";
import ImageOne from "/images/hpday.png";

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const BgHome = 1 + window.scrollY * 0.0005;
      document.querySelector(".home-bg").style.transform = `scale(${BgHome})`;

      const image3TrY = window.scrollY * 0.5;
      document.querySelector(
        ".img3"
      ).style.transform = `translateY(${image3TrY}px)`;

      const image4TrY = window.scrollY * 0.3;
      document.querySelector(
        ".img4"
      ).style.transform = `translateY(${image4TrY}px)`;

      const fly = document.querySelector(".owl");
      fly &&
        (fly.style.transform = `translateY(${Math.max(
          20 - window.scrollY * 0.2,
          -100
        )}px)`);

      const intro = 1 + window.scrollY * 0.001;
      document.querySelector(".title").style.transform = `scale(${intro})`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="home">
      <img className="home-bg" src={ImageOne} alt="#" />
      <img className="owl " src="/images/owl.png" alt="#" />
      <img
        className="title "
        src="/images/Welcome-To-Kodegeeks-DB-9-7-2024 (1).png"
        alt="#"
      />
    </div>
  );
};

export default Home;