import HomeLogo from "./home-logo";
import NavContent from "./nav-contents/nav-content";
import { useTheme } from "next-themes";

const routes = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/blog",
    title: "Blog",
  },
  {
    href: "/contact",
    title: "Contact",
  },
];

function NavigationBar(props) {
  const { theme } = useTheme();
  const { path } = props;

  const activePath = routes.find((route) => route.href === path);
  let activePathTitle;
  if (activePath) {
    activePathTitle = activePath.title;
  }

  const data = { routes, activePathTitle };

  return (
    <div
      className={theme === "dark" ? styles.navbar_dark : styles.navbar_light}
    >
      <HomeLogo />
      <NavContent data={data} />
    </div>
  );
}

const styles = {
  navbar_light:
    "bg-white flex flex-row pl-40 pr-24 h-24 items-center justify-between border-b-2 border-gray mb-10",
  navbar_dark:
    "bg-black flex flex-row pl-40 pr-24 h-24 items-center justify-between border-b-2 border-gray mb-10",
};

export default NavigationBar;
