import NavigationBar from "./navigation-bar";

function Layout(props) {
  return (
    <>
      <NavigationBar />
      <main>{props.children}</main>
    </>
  );
}

export default Layout;
