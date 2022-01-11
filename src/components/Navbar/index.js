import { Link, NavLink } from "react-router-dom";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const menus = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "About",
      subMenus: [
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
      ],
    },
    {
      text: "Redux Testing",
      subMenus: [
        { text: "Cake And Icecream", link: "/redux-test" },
        { text: "Articles", link: "/posts" },
      ],
    },
  ];

  return (
    <div className={styles.navbar}>
      {menus.map((menu) => {
        if (!menu.subMenus || !menu.subMenus.length) {
          return <NavLink to={menu.link}>{menu.text}</NavLink>;
        } else {
          return (
            <div className={styles.dropdown}>
              <button className={styles.dropbtn}>{menu.text}</button>
              <div className={styles["dropdown-content"]}>
                {menu.subMenus.map((sm) => {
                  return <Link to={sm.link}>{sm.text}</Link>;
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
