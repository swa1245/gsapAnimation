import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Black = () => {
    const blackRef = useRef(null);

    useGSAP(() => {
        gsap.to(blackRef.current, {
          y: "-100%",
          duration: 0.5,
          delay: 2,
          // ease:'expo.out',
        });
      });
  return (
    <div>
      <div
        ref={blackRef}
        className=" h-screen bg-gray-900 z-10 w-full fixed"
      ></div>
    </div>
  )
}

export default Black
