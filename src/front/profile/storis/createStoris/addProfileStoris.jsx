import { NavLink } from "react-router-dom"
import c from './createStoris.module.css'
import plus from '../../../img/plus.png'
import logo from '../../../img/Profile.png'
const addProfileStoris = (props) =>{
    return(
        <div
            
              style={{
                gridArea: "bar1",
                borderRadius: "8px",
                height:'100%',
                maxWidth:'136px',
                width:'130px',
                display:'flex',
                justifyContent:'center'
              }}
            >
              <div
                style={{
                  columnGap:'5px',
                  height:'100%',
                  width:'130px',
                  borderRadius:'8px',
                  display: "grid",
                  gridTemplate: "auto 65px/ 100%",
                  gridTemplateAreas: '"topStorisBar" "bottomStorisBar"',
                }}
                className={c.storisBar}
              >
                <NavLink
                  to="#"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div
                    className={c.topStorisBar}
                    style={{
                      backgroundImage: `url(${logo})`,
                      backgroundSize: "100% 100%",
                      height: "100%",
                      width: "100%",
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                    }}
                  ></div>
                  <div className={c.bottomStorisBar}>
                    <div
                      style={{
                        position: "relative",
                        top: "-20px",
                        right: "-45px",
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        backgroundColor: "white",
                        borderRadius: "50%",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          width: "32px",
                          height: "32px",
                          backgroundColor: "hsl(214, 89%, 52%)",
                          borderRadius: "50%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            backgroundImage: `url(${plus})`,
                            width: "24px",
                            height: "24px",
                            backgroundSize: "24px 24px",
                            backgroundPosition: "center",
                          }}
                        ></div>
                      </div>
                    </div>
                    <div
                      style={{
                        height: "25px",
                        width: "90px",
                        top: "-20px",
                        right: "-20px",
                        position: "relative",
                        textAlign: "center",
                        fontSize: ".8125rem",
                        fontFamily: "sans-serif",
                      }}
                    >
                      <b>Створити історію</b>
                    </div>
                  </div>
                  <div className={c.divIn}></div>
                </NavLink>
              </div>
            </div>
    )
}
export default addProfileStoris