import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { list, webProject } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import "./Project.scss";
import ProjectList from "./ProjectList";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
}) => {
  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="project-box bg-tertiary p-5 rounded-2xl sm:w-[330px] w-full"
      >
        <div className="Box1 relative w-full h-[180px]">
          <img
            src={image}
            alt="project_image"
            className="image w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="content mt-5">
          <p
            className="mt-2 text-secondary text-[14px]"
            style={{ textAlign: "justify" }}
          >
            {description}
          </p>
        </div>

        <div className="content mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};
const Project = () => {
  const [selected, setSelected] = useState("java");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "web":
        setData(webProject);
        break;
      default:
        setData(webProject);
    }
  }, [selected]);

  return (
    <>
      <motion.div
        whileInView={{ opacity: 1 }}
        variants={textVariant()}
      >
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="project w-full flex">
        <motion.div
          whileInView={{ opacity: 1 }}
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] leading-[30px]"
        >
          <ul>
            {list.map((item) => (
              <ProjectList
                key={item.id}
                title={item.title}
                active={selected === item.id}
                setSelected={setSelected}
                id={item.id}
              />
            ))}
          </ul>

          <div className="box mt-20 flex flex-wrap justify-center">
            {data.map((project, index) => (
              <div key={`project-${index}`}>
                <ProjectCard
                  key={`project-${index}`}
                  index={index}
                  {...project}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Project, "project");
