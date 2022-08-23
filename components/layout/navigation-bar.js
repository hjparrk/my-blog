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
          <h2 className="pl-3">박효준의 블로그</h2>
        </Link>
      </div>
      <div className="flex items-center">
        <div className="px-5">
          <Link href="/about">ABout</Link>
        </div>
        <div className=" px-5">
          <Link href="/biography">Biography</Link>
        </div>
        <div className=" pl-5">
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </motion.div>
  );
}

const styles = {
  navbar:
    "flex px-80 h-24 items-center justify-between bg-white border-gray-500 border-b-2 mb-10",
  logo: "text-2xl flex items-center justify-start",
};

export default NavigationBar;
