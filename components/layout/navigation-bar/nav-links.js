import Link from "next/link";
import { Switch } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";

function NavLinks(props) {
  const { theme, setTheme } = useTheme();
  const { links, activePathTitle } = props;

  return (
    <>
      <ul className={styles.linkContainer}>
        {links.map((link) => (
          <motion.li
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            key={link.title}
            className={styles.link}
          >
            {
              <Link href={link.href}>
                <a
                  className={`${
                    activePathTitle === link.title
                      ? "text-cyan-500 underline underline-offset-8 decoration-2"
                      : ""
                  }`}
                >
                  {link.title}
                </a>
              </Link>
            }
          </motion.li>
        ))}
        <Switch
          className={styles.switch}
          checked={theme === "dark" ? true : false}
          onChange={(e) =>
            e.target.checked ? setTheme("dark") : setTheme("light")
          }
          color="default"
          iconOn={<SunIcon fill="true" className="w-3 h-3" />}
          iconOff={<MoonIcon fill="true" className="w-3 h-3" />}
        />
      </ul>
    </>
  );
}

const styles = {
  linkContainer: "flex flex-row",
  link: "pl-5",
  switch: "ml-5",
};

export default NavLinks;
