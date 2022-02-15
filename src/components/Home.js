import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import plant from "../assets/pics/plant.jpg";
import handshake from "../assets/pics/handshake.jpg";
import FadeIn from "react-fade-in";
import "./style.css";
import FadeInSection from "./FadeInSection";
import YoutubeVideo from "./YoutubeVideo";
import useScroll from "../hooks/useScroll";
import HomeSection from "./HomeSection";

const Home = () => {
  const [scrollUp, executeScroll] = useScroll();

  return (
    <>
      <div ref={scrollUp} className="wrapper h-screen overflow-y-hidden overflow-x-hidden ">
        <header className="relative flex flex-col items-center justify-center homeHeader h-full bg-fixed bg-no-repeat bg-center bg-cover parallax">
          <FadeIn
            childClassName="text-4xl text-white foreground"
            delay="1000"
            className="absolute left-0 top-40"
            childTag="h1"
          >
            <div> Welcome to my React Project </div>
          </FadeIn>
          <FadeIn
            childClassName="text-4xl text-white foreground"
            delay="3000"
            className="absolute left-0 top-60 w-96"
            childTag="h1"
          >
            <div> hi again </div>
          </FadeIn>
        </header>
      </div>

      <section className="flex flex-col justify-center items-center">
        <HomeSection title="0" para1="0" pic={handshake} />
        <HomeSection title="1" para1="1" para2="2" isFlipped={true} hasList={true} />
        <HomeSection title="2" para1="3" para2="4" pic={plant} />

        <div className="pt-32 lg:pt-0 homeGradient1 w-screen">
          <FadeInSection>
            <section className=" flex flex-col items-center justify-center h-screen bg-fixed bg-center bg-cover parallax ">
              <FadeInSection className="w-screen h-screen ">
                <YoutubeVideo />
              </FadeInSection>
              <button
                onClick={executeScroll}
                className="btn  text-2xl  text-white bg-opacity-70 hover:bg-palBrown border-white rounded-xl mt-16"
              >
                Return to Top
              </button>
            </section>
          </FadeInSection>
        </div>
      </section>
    </>
  );
};

export default Home;
