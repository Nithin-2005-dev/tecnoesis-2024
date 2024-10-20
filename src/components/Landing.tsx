"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import { gsap } from "gsap";
import EnterButton from "./enterButton";
import Link from "next/link";

const Landing: React.FC = () => {
  const tablet = useMediaQuery("(min-width: 500px)");
  const desktop = useMediaQuery("(min-width: 800px)");

  const tl = gsap.timeline({ ease: "slow", duration: 1 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (typeof window !== 'undefined') {
        gsap.utils
          .toArray<HTMLElement>(".movable")
          .forEach((layer: HTMLElement) => {
            const depth: number = layer.dataset.depth
              ? parseFloat(layer.dataset.depth)
              : 1;
            const moveX = e.pageX - window.innerWidth / 2;
            const moveY = e.pageY - window.innerHeight / 2;
            tl.to(
              layer,
              {
                x: -moveX / depth,
                y: -moveY / (depth * 4),
              },
              0,
            );
          });
      }
    };
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };

  }, [tl]);

  return (
    <div className="relative flex h-[100vh] flex-col items-center justify-around overflow-hidden text-[#ffffff]">
      <div className="3xl:ml-[20rem] absolute z-10 ml-[10rem] scale-[0.5] sm:ml-[12rem] sm:mt-[4rem] sm:scale-[0.8] lg:ml-[16rem]">
        <Link href={"/home"}>
          <EnterButton />
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center pb-[4rem] pt-[4rem] lg:p-0">
        <Image
          src="/assets/Landing/tecnoesisLogo.webp"
          alt="Tecnoesis Logo"
          className="movable z-1 4xl:scale-[2] h-[10rem] w-[20rem] object-cover md:h-[15rem] md:w-[30rem] lg:h-[25rem] lg:w-[45rem]"
          width={1000}
          height={1000}
          data-depth={80}
        />
      </div>
      <div className="flex h-[100vh] w-[100vw] items-end justify-center">
        <Image
          src="/assets/Landing/buildings.svg"
          className="movable z-2 absolute left-0 top-[20%] h-[60%] object-cover md:h-[80%] md:w-[100%]"
          width={1000}
          height={1000}
          alt="cover"
          data-depth={75}
          priority={true}
        />
        <div className="scale-1 relative bottom-[40px] left-0 flex w-[100%] items-center justify-center tv1:scale-[1.5] tv2:scale-[1.6]">
          <Image
            width={500}
            height={500}
            src="/assets/Landing/newWorld.svg"
            alt="new world"
            className="movable absolute bottom-0 left-1/2 ml-[2rem] -translate-x-1/2 scale-[1.5] 2xl:bottom-[5rem] 2xl:scale-[2]"
            data-depth={50}
            priority={true}
          />
          <Image
            width={500}
            height={500}
            src="/assets/Landing/glowingBall.gif"
            alt="glowing ball"
            className="movable z-4 absolute bottom-[-5.5rem] mobile1:bottom-[-6.5rem] mobile2:bottom-[-9rem] left-1/2 -translate-x-1/2 scale-[2] transform opacity-50 2xl:bottom-[-8rem] 2xl:scale-[2.5]"
            data-depth={50}
            priority={true}
          />
          <img
            src="/assets/Landing/player2.svg"
            alt="rock"
            className="movable z-5 absolute scale-[2] md:scale-[1.5] bottom-[30px] mobile2:bottom-[45px] mobile4:bottom-[60px] tablet1:bottom-[100px] md:bottom-[60px] tablet4:bottom-0 tablet4:scale-[1.2]"
            data-depth={20}
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;