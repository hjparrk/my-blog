import Link from "next/link";

function NavLinks(props) {
  const { links, activePathTitle } = props;

  return (
    <ul className={styles.linkContainer}>
      {links.map((link) => (
        <li key={link.title} className={styles.link}>
          {
            <Link href={link.href}>
              <a
                className={`${
                  activePathTitle === link.title
                    ? " underline underline-offset-8 decoration-2"
                    : ""
                }`}
              >
                {link.title}
              </a>
            </Link>
          }
        </li>
      ))}
    </ul>
  );
}

const styles = {
  linkContainer: "flex flex-row",
  link: "pl-5",
};

export default NavLinks;
