import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";

function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <Switch
      className={styles.switch}
      checked={theme === "dark" ? true : false}
      defaultValue="light"
      onChange={(e) =>
        e.target.checked ? setTheme("dark") : setTheme("light")
      }
      color="default"
      iconOn={<SunIcon fill="true" className="w-3 h-3" />}
      iconOff={<MoonIcon fill="true" className="w-3 h-3" />}
    />
  );
}

const styles = { switch: "ml-5" };

export default ThemeSwitch;
