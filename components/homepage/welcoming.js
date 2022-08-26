import { motion } from "framer-motion";

function Welcoming(props) {
  return (
    <>
      <h1 className="mt-40 mb-12 font-bold">
        Wanna &nbsp;explore &nbsp;my &nbsp;blog?
      </h1>
      <div className="flex flex-row mb-30 pb-40">
        <h2 className="font-light">highfive&nbsp; me&emsp;</h2>
        <motion.h2
          className="font-light"
          onClick={props.onShowWelcoming}
          initial={{ rotate: 30 }}
          animate={{
            rotate: [30, -10, 0, 70, 30],
          }}
          whileHover={{ scale: 2 }}
        >
          👋
        </motion.h2>
      </div>
    </>
  );
}

export default Welcoming;
