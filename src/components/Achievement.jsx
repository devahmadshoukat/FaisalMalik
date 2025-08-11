import { motion } from "framer-motion";
import React from "react";

import { achievements } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import "./Achievement.scss";

const Achievement = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding}`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Some Glimpses on...</p>
          <h2 className={styles.sectionHeadText}>Achievements.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 justify-center p-6 ${styles.paddingX} gap-7`}>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {achievements.map((achievement) => (
          <li key={achievement.title} className='text-white-100 text-[15px] pl-1'>{achievement.title}</li>
        ))}
        </ul>
      </div>
    </div>
  );
};

export default SectionWrapper(Achievement, "");