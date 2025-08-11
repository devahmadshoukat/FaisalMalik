import { init } from "ityped";
import React, { useEffect, useRef } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { Faisal } from "../assets";
import { styles } from "../styles";
import "./Hero.scss";

const Hero = () => {
  const textRef = useRef();
  const hasInitializedTypingRef = useRef(false);
  useEffect(() => {
    if (!hasInitializedTypingRef.current && textRef.current) {
      init(textRef.current, {
        showCursor: true,
        strings: [
          "Business Developer Manger",
          "Strategic Growth Leader",
          "Partnership Growth Specialist",
          "Revenue Growth Architect",
          "Market Expansion Expert",
          "Business Growth Strategist",
          "Opportunity Development Manger",
          "Client Growth Partner",
          "Strategic Deal Marker",
          "Business Success Architect",
          "Growth & Partnerships Expert",
        ],
      });
      hasInitializedTypingRef.current = true;
    }

    return () => {
      if (textRef.current) {
        textRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className="flex">
        <div
          className={`head1 absolute  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div className="head2">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hii there, I'm{" "}
              <p className="name text-[#915EFF]">Muhammad Faisal</p>
            </h1>
            <h3>
              <span
                ref={textRef}
                className={`${styles.heroSubText} mt-2 green-text-gradient`}
              ></span>
            </h3>

            <div className="absolute link1">
              <a
                href="https://www.linkedin.com/in/muhammad-faisal-8b905a310/"
                target="_blank"
              >
                <ImLinkedin />
              </a>
              <a
                href="https://www.instagram.com/iamfaisalofficial01/"
                target="_blank"
              >
                <AiOutlineInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="imgcontainer1 absolute violet-gradient">
          <img src={Faisal} alt="" className="object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Hero;