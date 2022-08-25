import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import CustomCard from "../ui/card";

function Main() {
  const ref = useRef();
  const isInView = useInView(ref, { once: false });

  const aboutText = (
    <span>
      Hello I'm Hyojoon Park.
      <br />
      I'm a student developer attending the University of Sydney.
      <br />
      However I'm now living in Seoul, South Korea due to the mandatory military
      service.
    </span>
  );

  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  return (
    <div className="flex-col items-start">
      <motion.div whileHover={{ scale: 1.1 }}>
        <CustomCard title={"About"}>{aboutText}</CustomCard>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }}>
        <CustomCard title={"Blog"}>Blog ...</CustomCard>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }}>
        <CustomCard title={"Contact"}>Contact Me ...</CustomCard>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }}>
        <CustomCard title={"Dummy Card"}>Dummy Text Here ...</CustomCard>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }}>
        <CustomCard title={"Dummy Card"}>Dummy Text Here ...</CustomCard>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }}>
        <CustomCard title={"Dummy Card"}>Dummy Text Here ...</CustomCard>
      </motion.div>
    </div>
  );
}

export default Main;
