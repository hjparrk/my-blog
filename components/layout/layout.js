import { useRouter } from "next/router";
import { motion } from "framer-motion";
import NavigationBar from "./navigation-bar/navigation-bar";

function Layout(props) {
  const router = useRouter();
  const path = router.asPath;

  return (
    <>
      <motion.div
        key={router.route}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <NavigationBar path={path} />
        <main>{props.children}</main>
      </motion.div>
    </>
  );
}

export default Layout;
