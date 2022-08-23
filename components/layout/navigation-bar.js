import Link from "next/link";
import { HomeIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";

function NavigationBar() {
  return (
    <motion.div
      className={styles.navbar}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.logo}>
        <Link href="/">
          <HomeIcon className="w-10 h-10" />
        </Link>
        <Link href="/">
          <h2 className="pl-3">Hyojoon Park</h2>
        </Link>
      </div>
      <div className={styles.link}>
        <div className="px-5">
          <Link href="/about">ABout</Link>
        </div>
        <div className="px-5">
          <Link href="/biography">Biography</Link>
        </div>
        <div className="pl-5">
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </motion.div>
  );
}

const styles = {
  navbar:
    "flex px-80 h-24 items-center justify-between bg-white border-b-2 border-gray-300 mb-10",
  logo: "text-2xl flex items-center justify-start",
  link: "flex items-center",
};

export default NavigationBar;
