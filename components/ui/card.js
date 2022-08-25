function CustomCard({ title, children }) {
  let content;

  if (title) {
    content = (
      <>
        <div className={styles.container}>
          <div className={styles.subsection}>
            <h1 className={styles.title}>{title}</h1>
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
  container: "flex flex-col p-8 rounded-3xl bg-white my-16 max-w-screen-md",
  subsection: "m-3",
  title: "text-5xl text-black",
  text: "text-2xl font-light text-black",
};

export default CustomCard;
