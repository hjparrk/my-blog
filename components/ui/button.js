import Link from "next/link";

function Button(props) {
  if (props.href) {
    return (
      <Link href={props.href}>
        <a className={props.styles}>{props.children}</a>
      </Link>
    );
  }

  return (
    <button className={props.styles} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
