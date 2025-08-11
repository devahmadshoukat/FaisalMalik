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
          "Business Developer Manager",
          "Strategic Growth Leader",
          "Partnership Growth Specialist",
          "Revenue Growth Architect",
          "Market Expansion Expert",
          "Business Growth Strategist",
          "Opportunity Development Manager",
          "Client Growth Partner",
          "Strategic Deal Maker",
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
    <div className="container-hero-main pt-[60px] sm:mt-0">
      {/* Left side: intro */}
      <div className={`head1 ${styles.paddingX}  flex flex-row items-start gap-5`}>
        {/* Vertical line */}
        <div className="flex flex-col justify-center items-center mt-5 sm:mt-0">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Name + Typed text */}
        <div className="head2">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi there, I'm{" "}
            <p className="name text-[#915EFF]">Muhammad Faisal</p>
          </h1>
          <h3>
            <span
              ref={textRef}
              className={`${styles.heroSubText} mt-2 green-text-gradient`}
            ></span>
          </h3>

          {/* Social links */}
          <div className="link1">
            <a
              href="https://www.linkedin.com/in/muhammad-faisal-8b905a310/"
              target="_blank"
              rel="noreferrer"
            >
              <ImLinkedin />
            </a>
            <a
              href="https://www.instagram.com/iamfaisalofficial01/"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Right side: image */}
      <div className="flex justify-start w-[100%] py-20 sm:py-0 sm:w-auto flex justify-center items-center">
        <div className="imgcontainer1 relative violet-gradient">
          <img src={Faisal} alt="Muhammad Faisal" className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
