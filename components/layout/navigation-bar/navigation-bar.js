import HomeLogo from "./home-logo";
import NavLinks from "./nav-links";
import { useTheme } from "next-themes";

const routes = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/about",
    title: "About",
  },
  {
    href: "/biography",
    title: "Biography",
  },
  {
    href: "/contact",
    title: "Contact",
  },
];

function NavigationBar(props) {
  const { theme, setTheme } = useTheme();
  const { path } = props;

  const activePath = routes.find((route) => route.href === path);
  const activePathTitle = activePath.title;

  return (
    <div className={styles.navbar}>
      <HomeLogo />
      <NavLinks links={routes} activePathTitle={activePathTitle} />
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button>
    </div>
  );
}

const styles = {
  navbar:
    "flex flex-row pl-80 pr-60 h-24 items-center justify-between border-b-2 border-gray-300 mb-10",
};

export default NavigationBar;
