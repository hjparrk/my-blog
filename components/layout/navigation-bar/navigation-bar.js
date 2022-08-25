import HomeLogo from "./home-logo";
import NavLinks from "./nav-links";

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
  const { path } = props;

  const activePath = routes.find((route) => route.href === path);
  let activePathTitle;
  if (activePath) {
    activePathTitle = activePath.title;
  }

  return (
    <div className={styles.navbar}>
      <HomeLogo />
      <NavLinks links={routes} activePathTitle={activePathTitle} />
    </div>
  );
}

const styles = {
  navbar:
    "flex flex-row pl-40 pr-24 h-24 items-center justify-between border-b-2 border-gray-300 mb-10",
};

export default NavigationBar;
