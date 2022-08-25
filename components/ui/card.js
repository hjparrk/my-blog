import { useTheme } from "next-themes";

function CustomCard({ title, subtitle, children }) {
  const { theme } = useTheme();

  let content;

  const conatiner_style =
    theme === "dark" ? styles.container_dark : styles.container_light;

  if (title) {
    content = (
      <>
        <div className={conatiner_style}>
          <div className={styles.subsection}>
            <h1 className={styles.title}>{title}</h1>
          </div>
          <div className={styles.subsection}>
            {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}
          </div>
          <div className={styles.subsection}>
            <p className={styles.text}>{children}</p>
          </div>
        </div>
      </>
    );
  } else {
    content = (
      <div className={styles.container}>
        <p className={styles.text}>{children}</p>
      </div>
    );
  }
  return <>{content}</>;
}

const styles = {
  container_light:
    "flex flex-col p-8 rounded-3xl bg-white my-16 max-w-screen-md text-black hover:bg-lightgray hover:text-black",
  container_dark:
    "flex flex-col p-8 rounded-3xl bg-black-900 my-16 max-w-screen-md text-white hover:bg-lightgray hover:text-black",
  subsection: "m-3",
  title: "text-5xlfont-extrabold",
  subtitle: "text-3xlfont-semibold",
  text: "text-2xl font-light",
};

export default CustomCard;
