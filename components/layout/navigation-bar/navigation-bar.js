import HomeLink from "./home-link";
import NavLinks from "./nav-links";

const routes = [
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
    title: "Conatact",
  },
];

function NavigationBar() {
  return (
    <div className={styles.navbar}>
      <HomeLink />
      <NavLinks links={routes} />
    </div>
  );
}

const styles = {
  navbar:
    "flex flex-row px-80 h-24 items-center justify-between bg-white border-b-2 border-gray-300 mb-10",
};

export default NavigationBar;
