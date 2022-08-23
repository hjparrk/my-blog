import Link from "next/link";

function Button(props) {
  if (props.href) {
    return <Link href={props.href}>{props.children}</Link>;
  }

  return <button onClick={props.onClick}>{props.children}</button>;
}

export default Button;
