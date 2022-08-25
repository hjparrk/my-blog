import { motion } from "framer-motion";
import CustomCard from "../ui/card";

function Main() {
  const aboutText = (
    <span>
      I&apos;m a student developer at the University of Sydney, now living in
      Seoul, South Korea because of the COVID-19 outbreaks
      <br />
      <br />
      Due to my current status, replacing my military service as a social
      service personnel, I have a lot of spare time to discover and dive into
      new cool stuffs (Frontend & Backend stacks) !
    </span>
  );

  const skillText = (
    <span>
      Have learnt and written programs and/or algorithms using C and 2
      Object-Oriented Languages(OOP): Java and Python throughout courses at the
      university
    </span>
  );

  const webDevText = (
    <span>
      Trying to write and build web applications using React and Next JS (A
      framework for React). This blog is the first React application that I
      build on my own, styling using Tailwind css for easy & fast modern design
    </span>
  );

  const myInterestText = (
    <span>
      You will be fascinated by animations implemented by "Framer Motion"
      libaray. This library makes React components look user-friendly and move
      dynamically !
    </span>
  );

  return (
    <div className="flex-col items-start">
      <motion.div whileHover={{ scale: 1.1 }}>
        <CustomCard title={"About"} subtitle={"Hello I'm Hyojoon Park"}>
          {aboutText}
        </CustomCard>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }}>
        <CustomCard title={"Programming Skills"} subtitle={"Python, Java & C"}>
          {skillText}
        </CustomCard>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }}>
        <CustomCard title={"Web Dev"} subtitle={"React & Next JS"}>
          {webDevText}
        </CustomCard>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }}>
        <CustomCard title={"Interests"} subtitle={"Framer Motion !"}>
          {myInterestText}
        </CustomCard>
      </motion.div>
    </div>
  );
}

export default Main;
