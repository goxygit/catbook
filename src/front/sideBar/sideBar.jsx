import classNames from "classnames";
import { NavLink } from "react-router-dom";
import logo from "../img/Profile.png";
import n from "./sideBar.module.css";
const SideBar = (props) => {
  return (
    <div className={n.nav}>
      <div>
        <div className={n.firstBar}>
          <div className={classNames(n.navLink_1, n.background_hover)}>
            <div className={n.spanNav}>
              <NavLink to="/profile" className={classNames(n.a, n.label)}>
                <i className={n.i_1}></i>
                <p
                  className={classNames(n.pInNavLink, n.divBeforeP, n.elemet_2)}
                >
                  Головна
                </p>
              </NavLink>
            </div>
          </div>
          <div
            className={classNames(n.navLink_2, n.navLinks, n.background_hover)}
          >
            <div>
              <div className={n.spanNav}>
                <NavLink to="" className={classNames(n.label, n.a)}>
                  <img
                    className={classNames(n.Profile, n.elemet_1, n.divInA)}
                    src={logo}
                    alt="Profile"
                  />
                  <p
                    className={classNames(
                      n.pInNavLink,
                      n.divBeforeP,
                      n.elemet_2
                    )}
                  >
                    Name
                  </p>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div style={{ padding: "8px 0" }} >
          <div>
            <div className={classNames(n.navLink_3, n.background_hover)}>
              <div
                style={{ padding: "4px 14px", margin: "2px 0" }}
                className={n.spanNav}
              >
                <NavLink
                  className={n.a}
                  style={{
                    height: "32px",
                    display: "grid",
                    gridTemplateAreas: "element_1 element_2",
                    gridTemplateColumns: "32px 240px",
                    gridTemplateRows: "32px",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "rgb(212, 211, 211)",
                      borderEndEndRadius: "50%",
                      borderTopLeftRadius: "50%",
                      borderTopRightRadius: "50%",
                      borderEndStartRadius: "50%",
                      height: "32x",
                      width: "32px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <i
                      style={{
                        backgroundImage:
                          'url("https://icons.veryicon.com/png/o/miscellaneous/offerino-icons/app-menu.png")',
                        backgroundPosition: "0 0",
                        backgroundSize: "100% 100%",
                        width: "18px",
                        height: "18px",
                        backgroundRepeat: "no-repeat",
                        display: " inline-block",
                      }}
                    ></i>
                  </div>
                  <p
                    style={{ fontSize: "18px" }}
                    className={classNames(
                      n.pInNavLink,
                      n.divBeforeP,
                      n.elemet_2
                    )}
                  >
                    Меню
                  </p>
                </NavLink>
              </div>
            </div>
          </div>
          <div>
            <div className={classNames(n.navLink_4, n.background_hover)}>
              <div className={n.spanNav}>
                <NavLink className={classNames(n.a, n.label)}>
                  <i
                    style={{
                      backgroundImage:
                        'url("https://cdn.iconscout.com/icon/free/png-256/facebook-watch-4941644-4109044.png")',
                      backgroundPosition: "0 0",
                      backgroundSize: "100% 100%",
                      width: "24px",
                      height: "24px",
                      backgroundRepeat: "no-repeat",
                      display: " inline-block",
                    }}
                  ></i>
                  <p
                    className={classNames(
                      n.pInNavLink,
                      n.divBeforeP,
                      n.elemet_2
                    )}
                  >
                    Watch
                  </p>
                </NavLink>
              </div>
            </div>
          </div>
          <div>
            <div className={classNames(n.navLink_5, n.background_hover)}>
              <div className={n.spanNav}>
                <NavLink to="message" className={classNames(n.a, n.label)}>
                  <i
                    style={{
                      backgroundImage:
                        'url("https://cdn-icons-png.flaticon.com/512/1189/1189170.png")',
                      backgroundPosition: "0 0",
                      backgroundSize: "100% 100%",
                      width: "24px",
                      height: "24px",
                      backgroundRepeat: "no-repeat",
                      display: " inline-block",
                    }}
                  ></i>
                  <p
                    className={classNames(
                      n.pInNavLink,
                      n.divBeforeP,
                      n.elemet_2
                    )}
                  >
                    Друзі
                  </p>
                </NavLink>
              </div>
            </div>
          </div>
          <div>
            <div className={classNames(n.navLink_6, n.background_hover)}>
              <div className={n.spanNav}>
                <NavLink className={classNames(n.a, n.label)}>
                  <i
                    style={{
                      backgroundImage:
                        'url("https://cdn-icons-png.flaticon.com/512/20/20697.png")',
                      backgroundPosition: "0 0",
                      backgroundSize: "100% 100%",
                      width: "24px",
                      height: "24px",
                      backgroundRepeat: "no-repeat",
                      display: " inline-block",
                    }}
                  ></i>
                  <p
                    className={classNames(
                      n.pInNavLink,
                      n.divBeforeP,
                      n.elemet_2
                    )}
                  >
                    Групи
                  </p>
                </NavLink>
              </div>
            </div>
            <div className={classNames(n.navLink_7, n.background_hover)}>
              <div className={n.spanNav}>
                <NavLink className={classNames(n.a, n.label)}>
                  <i
                    style={{
                      backgroundImage:
                        'url("https://cdn-icons-png.flaticon.com/512/13/13973.png")',
                      backgroundPosition: "0 0",
                      backgroundSize: "100% 100%",
                      width: "24px",
                      height: "24px",
                      backgroundRepeat: "no-repeat",
                      display: " inline-block",
                    }}
                  ></i>
                  <p
                    className={classNames(
                      n.pInNavLink,
                      n.divBeforeP,
                      n.elemet_2
                    )}
                  >
                    Ігри
                  </p>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            style={{ padding: "4px 14px", margin: "2px 0" }}
            className={n.spanNav}
          >
            <NavLink
              className={n.a}
              style={{
                height: "32px",
                display: "grid",
                gridTemplateAreas: "element_1 element_2",
                gridTemplateColumns: "32px 240px",
                gridTemplateRows: "32px",
              }}
            >
              <div
                style={{
                  backgroundColor: "rgb(212, 211, 211)",
                  borderEndEndRadius: "50%",
                  borderTopLeftRadius: "50%",
                  borderTopRightRadius: "50%",
                  borderEndStartRadius: "50%",
                  height: "32x",
                  width: "32px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <i
                  style={{
                    backgroundImage:
                      'url("https://cdn-icons-png.flaticon.com/512/45/45315.png")',
                    backgroundPosition: "0 0",
                    backgroundSize: "100% 100%",
                    width: "18px",
                    height: "18px",
                    backgroundRepeat: "no-repeat",
                    display: " inline-block",
                  }}
                ></i>
              </div>
              <p
                style={{ fontSize: "17px" }}
                className={classNames(n.pInNavLink, n.divBeforeP, n.elemet_2)}
              >
                Швидкі посилання
              </p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
