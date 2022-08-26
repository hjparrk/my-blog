import Link from "next/link";
import { motion } from "framer-motion";
import { Avatar } from "@nextui-org/react";

function HomeLogo() {
  return (
    <div className={styles.logo}>
      <motion.div>
        <Link href="/">
          <Avatar squared src="/selfie.jpg" size="md" />
        </Link>
      </motion.div>
      <Link href="/">
        <h2 className="pl-3">Hyojoon Park - Dev</h2>
      </Link>
    </div>
  );
}

const styles = {
  logo: "text-2xl flex items-center justify-start ml-20",
};

export default HomeLogo;
