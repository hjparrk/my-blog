import NavLinks from "./nav-links";
import ThemeSwitch from "./theme-switch";

function NavContent(props) {
  const { routes, activePathTitle } = props.data;

  return (
    <ul className={styles.linkContainer}>
      <NavLinks links={routes} activePathTitle={activePathTitle} />
      <ThemeSwitch />
    </ul>
  );
}

const styles = { linkContainer: "flex flex-row" };

export default NavContent;
