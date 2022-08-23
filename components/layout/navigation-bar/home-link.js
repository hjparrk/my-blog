import Link from "next/link";
import { HomeIcon } from "@heroicons/react/solid";

function HomeLink() {
  return (
    <div className={styles.logo}>
      <Link href="/">
        <HomeIcon className="w-10 h-10" />
      </Link>
      <Link href="/">
        <h2 className="pl-3">Hyojoon Park</h2>
      </Link>
    </div>
  );
}

const styles = {
  logo: "text-2xl flex items-center justify-start",
};

export default HomeLink;
