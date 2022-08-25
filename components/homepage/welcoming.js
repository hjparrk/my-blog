import { motion } from "framer-motion";

function Welcoming(props) {
  return (
    <>
      <h1 className="mb-12  font-bold">Wanna explore more?</h1>
      <div className="flex flex-row ">
        <h2 className="font-light">Then, highfive me&emsp;</h2>
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
