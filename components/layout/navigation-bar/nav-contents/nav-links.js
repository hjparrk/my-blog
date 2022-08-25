import Link from "next/link";
import { motion } from "framer-motion";
import { DiReact } from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";

function NavLinks(props) {
  const { links, activePathTitle } = props;

  return (
    <>
      <div className="flex flex-row">
        <div className="mx-1">
          <a href="https://reactjs.org/">
            <DiReact size={30} />
          </a>
        </div>
        <div className="mx-1">
          <a href="https://nextjs.org/">
            <SiNextdotjs size={26} />
          </a>
        </div>
      </div>
      {links.map((link) => (
        <motion.li
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          key={link.title}
          className={styles.link}
        >
          {
            <Link href={link.href}>
              <a
                className={`${
                  activePathTitle === link.title
                    ? "text-bermuda underline underline-offset-8 decoration-2"
                    : ""
                }`}
              >
                {link.title}
              </a>
            </Link>
          }
        </motion.li>
      ))}
    </>
  );
}

const styles = {
  link: "pl-5",
};

export default NavLinks;
