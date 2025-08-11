import React, { Suspense } from "react";

import { motion } from "framer-motion";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { BallCanvas } from "./canvas";

const Tech = () => {
  return (
    <>
      <motion.div id="tech" variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Tools
        </h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div style={{ height: '5rem', width: "5rem" }} key={technology.name}>
            <Suspense fallback={<div className="w-full h-full bg-tertiary rounded-2xl" />}>
              <BallCanvas icon={technology.icon} />
            </Suspense>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");