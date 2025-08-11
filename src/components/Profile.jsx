import React from "react";

import { motion } from "framer-motion";
import { profiles } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import "./Profile.scss";

const Profile = () => {
  return (
    <>
      <motion.div id="tech" variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Profile Section
        </h2>
      </motion.div>
      <div className='my-skills'>
        {profiles.map((profile) => (
          <div key={profile.link} className="skill" data-aos="fade-up" data-aos-delay="200">
            <div className="icon-container">
              <a href={profile.link} target="_blank" rel="noopener noreferrer">
                <span dangerouslySetInnerHTML={{ __html: profile.icon }} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Profile, "");