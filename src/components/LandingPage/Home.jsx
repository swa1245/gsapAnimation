import React, { useRef } from "react";
import NavBar from "../navbar/NavBar";
import Centertext from "../Center/Centertext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Black from "../Loading/Black";

const Home = () => {
  
  const pageREf = useRef(null);

 
  useGSAP(() => {
    gsap.from(pageREf.current, {
      opacity: 0,
      duration: 0.5,
      delay: 2,
      y:50,
      scale: 1.03,

      // ease:'expo.out',
    });
  });
  return (
    <div >
      <Black />
      <div
        ref={pageREf}
        className=" h-screen w-screen bg-cover bg-[url(https://overlaysnow.com/cdn/shop/files/Banner-web-_1.jpg?v=1738047655&width=2600)]"
      >
        <NavBar />
        <Centertext />
      </div>
    </div>
  );
};

export default Home;
