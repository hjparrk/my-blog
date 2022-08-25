import { useRouter } from "next/router";
import { motion } from "framer-motion";
import NavigationBar from "./navigation-bar/navigation-bar";

function Layout(props) {
  const router = useRouter();
  const path = router.asPath;

  return (
    <>
      <div className="sticky top-0 z-50">
        <NavigationBar path={path} />
      </div>
      <motion.div
        key={path}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 30,
          damping: 10,
          staggerChildren: "true",
          // repeat : true or false
          // bounce
          // mass
        }}
        exit={{ opacity: 0 }}
      >
        <main>{props.children}</main>
      </motion.div>
    </>
  );
}

export default Layout;
