import { motion } from "framer-motion";
import CustomCard from "../ui/card";

function Main() {
  const aboutText = (
    <span>
      I&apos;m a student developer at the University of Sydney.
      <br />
      However, I&apos;m now living in Seoul, South Korea due to the mandatory
      military service.
    </span>
  );

  const skillText = (
    <span>
      Have learnt and written programs and/or algorithms using C and 2
      Object-Oriented Languages(OOP): Java and Python throughout course at the
      university.
    </span>
  );

  const webDevText = (
    <span>
      Have learnt and written programs and/or algorithms using C and 2
      Object-Oriented Languages(OOP): Java and Python throughout course at the
      university.
    </span>
  );

  const myInterestText = (
    <span>
      Have learnt and written programs and/or algorithms using C and 2
      Object-Oriented Languages(OOP): Java and Python throughout course at the
      university.
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
