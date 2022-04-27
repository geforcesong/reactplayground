import { useMemo } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const menus = useMemo(
    () => [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "About",
        subMenus: [
          { text: "About", link: "/about" },
          { text: "Contact", link: "/contact" },
          { text: "License", link: "/license" },
        ],
      },
      {
        text: "Demos",
        subMenus: [
          { text: "Countries", link: "/countries" },
          { text: "Calculator", link: "/calculator" },
        ],
      },
      {
        text: "Mixings",
        subMenus: [
          { text: "Context Hook Testing", link: "/contexthook" },
          { text: "Parent Child", link: "/parentchild" },
          { text: "Themed Component", link: "/theme" },
          { text: "Higher Order Component", link: "/higherorder" },
        ],
      },
      {
        text: "Redux Testing",
        subMenus: [
          { text: "Cake And Icecream", link: "/redux-test" },
          { text: "Articles", link: "/posts" },
        ],
      },
      {
        text: "Bootstraps",
        subMenus: [
          { text: "First Testing", link: "/bootstrap-test" },
          { text: "Budget", link: "/budget" },
        ],
      },
      {
        text: "Test Cases",
        subMenus: [
          { text: "Random Test Case", link: "/pages/random-page" },
          { text: "April Test", link: "/pages/april-test-page" },
          { text: "Control Test", link: "/pages/control-test-page" },
        ],
      },
    ],
    []
  );

  return (
    <div className={styles.navbar}>
      {menus.map((menu) => {
        if (!menu.subMenus || !menu.subMenus.length) {
          return (
            <NavLink key={menu.text} to={menu.link}>
              {menu.text}
            </NavLink>
          );
        } else {
          return (
            <div key={menu.text} className={styles.dropdown}>
              <button className={styles.dropbtn}>{menu.text}</button>
              <div className={styles["dropdown-content"]}>
                {menu.subMenus.map((sm) => {
                  return (
                    <Link key={sm.text} to={sm.link}>
                      {sm.text}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Navbar;
