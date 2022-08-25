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

  const dummyTitle = ["Blog", "Contact", "Github", "LinkedIn", "Instagram"];

  const dummyText = (
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </span>
  );

  return (
    <div className="flex-col items-start">
      <motion.div whileHover={{ scale: 1.1 }}>
        <CustomCard title={"About"} subtitle={"Hello I'm Hyojoon Park"}>
          {aboutText}
        </CustomCard>
      </motion.div>
      {dummyTitle.map((item) => (
        <motion.div key={item} whileHover={{ scale: 1.1 }}>
          <CustomCard title={item}>{dummyText}</CustomCard>
        </motion.div>
      ))}
    </div>
  );
}

export default Main;
