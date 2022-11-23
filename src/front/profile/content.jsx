import p from "./profile.module.css";
import classNames from "classnames";
import logo from "../img/Profile.png";
import { NavLink } from "react-router-dom";
const Content = (props) => {
  return (
    <div
      style={{ maxWidth: "100%", display: "flex", justifyContent: "center",padding:'0 32px'}}
    >
      <div className={p.Profile}>
        <div className={classNames(p.firstBar, p.gap)}>
          <div
            className={classNames(p.contentBar, p.box_shadow, p.bar_1)}
            style={{ padding: "8px 0" }}
          ></div>
        </div>
        <div className={classNames(p.twoBar, p.gap)}>
          <div
            className={classNames(p.contentBar, p.box_shadow, p.bar_2)}
            style={{ padding: "12px 16px 10px" }}
          >
            <div className={p.topBar}>
              <div style={{ gridArea: "imgBar" }}>
                <div className={p.navLinks}>
                  <NavLink to="#">
                    <div width="40px" height="40px">
                      <div className={p.divInA}>
                        <img
                          src={logo}
                          className={p.svgProfile}
                          height="40px"
                          width="40px"
                        />
                        <div></div>
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>
              <div
                style={{
                  gridArea: "inputBar",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <input
                  className={p.input}
                  placeholder="Свої забаганки сюди будь-ласка"
                />
              </div>
            </div>
            <div className={p.bottomBar}>
              <div className={p.background_hover}
                style={{
                  gridArea: "firstColumn",
                  borderRadius:'10px',
                  padding: "8px",
                  height: "24px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <NavLink to="#" style={{textDecoration:'none'}}>
                  <div className={p.bottomBarEl}>
                    <div style={{ gridArea: "img" }}>
                      <i
                        style={{
                          backgroundImage:
                            'url("https://iconarchive.com/download/i75813/martz90/circle/camera.ico")',
                          backgroundPosition: "0 0",
                          backgroundSize: "100% 100%",
                          width: "24px",
                          height: "24px",
                          backgroundRepeat: "no-repeat",
                          display: " inline-block",
                        }}
                      ></i>
                    </div>
                    <div style={{ gridArea: "text", display:'flex', alignSelf:'center' }}>
                        <p style={{fontSize:'15px', width:'100%', height:'16px', margin:'0', color:'gray', fontFamily:'sans-serif',}}>
                            Прямий Ефір
                        </p>
                    </div>
                    
                    
                  </div>
                </NavLink>
              </div>
              <div className={p.background_hover}
                style={{
                  gridArea: "twoColumn",
                  borderRadius:'10px',
                  padding: "8px",
                  height: "24px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <NavLink to="#" style={{textDecoration:'none'}}>
                  <div className={p.bottomBarEl}>
                    <div style={{ gridArea: "img" }}>
                      <i
                        style={{
                          backgroundImage:
                            'url("https://cdn0.iconfinder.com/data/icons/thin-line-color-2/21/23_1-512.png")',
                          backgroundPosition: "0 0",
                          backgroundSize: "100% 100%",
                          width: "24px",
                          height: "24px",
                          backgroundRepeat: "no-repeat",
                          display: " inline-block",
                        }}
                      ></i>
                    </div>
                    <div style={{ gridArea: "text", display:'flex', alignSelf:'center' }}>
                        <p style={{fontSize:'15px', width:'100%', height:'16px', margin:'0', color:'gray', fontFamily:'sans-serif',}}>
                            Фото/Відео
                        </p>
                    </div>
                    
                    
                  </div>
                </NavLink>
              </div>
              <div className={p.background_hover}
                style={{
                  gridArea: "threeColumn",
                  borderRadius:'10px',
                  padding: "8px",
                  height: "24px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <NavLink to="#" style={{textDecoration:'none'}}>
                  <div className={p.bottomBarEl}>
                    <div style={{ gridArea: "img" }}>
                      <i
                        style={{
                          backgroundImage:
                            'url("https://icones.pro/wp-content/uploads/2021/04/icone-sourire-orange.png")',
                          backgroundPosition: "0 0",
                          backgroundSize: "100% 100%",
                          width: "24px",
                          height: "24px",
                          backgroundRepeat: "no-repeat",
                          display: " inline-block",
                        }}
                      ></i>
                    </div>
                    <div style={{ gridArea: "text", display:'flex', alignSelf:'center' }}>
                        <p style={{fontSize:'15px', width:'100%', height:'16px', margin:'0', color:'gray', fontFamily:'sans-serif',}}>
                            Feeling/activity
                        </p>
                    </div>
                    
                    
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className={classNames(p.threeBar, p.gap)}>
          <div
            className={classNames(p.contentBar, p.box_shadow, p.bar_3)}
            style={{ padding: "8px 0" }}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default Content;
