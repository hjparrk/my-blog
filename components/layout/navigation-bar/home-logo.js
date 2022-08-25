import Link from "next/link";
import { motion, useTime, useTransform } from "framer-motion";
import { HomeIcon } from "@heroicons/react/solid";

function HomeLogo() {
  // const time = useTime();
  // const rotate = useTransform(
  //   time,
  //   [0, 8000], // For every 4 seconds...
  //   [0, 360], // ...rotate 360deg
  //   { clamp: false }
  // );

  return (
    <div className={styles.logo}>
      <motion.div
      // style={{ rotate }}
      // animate={{ x: [0, -20, 0] }}
      // transition={{ type: "spring", stiffness: 3 }}
      >
        <Link href="/">
          <HomeIcon className="w-6 h-6" />
        </Link>
      </motion.div>
      <Link href="/">
        <h2 className="pl-3">Hyojoon Park</h2>
      </Link>
    </div>
  );
}

const styles = {
  logo: "text-2xl flex items-center justify-start",
};

export default HomeLogo;
