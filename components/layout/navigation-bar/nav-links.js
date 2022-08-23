import Link from "next/link";

function NavLinks(props) {
  const { links } = props;

  return (
    <ul className={styles.linkContainer}>
      {links.map((link) => (
        <li key={link.title} className="px-5">
          {<Link href={link.href}>{link.title}</Link>}
        </li>
      ))}
    </ul>
  );
}

const styles = { linkContainer: "flex flex-row" };

export default NavLinks;
