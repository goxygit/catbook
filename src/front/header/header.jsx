import { NavLink } from "react-router-dom";
import h from "./header.module.css";
import classNames from "classnames";
import logo from "../img/Profile.png";
const Header = (props) => {
  return (
    <div className={h.header}>
      <div className={h.headerLogo}>
        <NavLink
          to="/profile"
          style={{ textDecoration: "none", color: "black" }}
        >
          <p className={h.logo}>
            <b>catbook</b>
          </p>
        </NavLink>
      </div>
      <div className={h.headerInput}>
        <label className={h.label}>
          <svg
            height="70px"
            id="Icons"
            version="1.1"
            viewBox="0 0 70 70"
            width="30px"
            className={h.svgGlass}
          >
            <path d="M51.957,49.129l-8.713-8.713c1.75-2.337,2.799-5.229,2.799-8.373c0-7.732-6.268-14-14-14s-14,6.268-14,14s6.268,14,14,14  c3.144,0,6.036-1.049,8.373-2.799l8.713,8.713L51.957,49.129z M22.043,32.043c0-5.514,4.486-10,10-10c5.514,0,10,4.486,10,10  c0,5.514-4.486,10-10,10C26.529,42.043,22.043,37.557,22.043,32.043z" />
          </svg>
          <input placeholder="Свої забаганки сюди будь-ласка" />
        </label>
      </div>
      <div className={h.headerInfo}>
        <div className={h.headerNav}>
          <div className={classNames(h.messageInfo, h.messageNav1)}>
            <div className={h.spanMessageInfo}>
              <div className={h.spanNav}>
                <div className={h.navLinks}>
                  <NavLink to="#">
                    <div className={h.divInA}>
                      <svg
                        className={h.svgNav}
                        height="20px"
                        width="20px"
                        viewBox="0 0 32 32"
                      >
                        <g>
                          <path d="M26,30a1,1,0,0,1-.62-.22L18.15,24H4a3,3,0,0,1-3-3V5A3,3,0,0,1,4,2H28a3,3,0,0,1,3,3V21a3,3,0,0,1-3,3H27v5a1,1,0,0,1-.57.9A.91.91,0,0,1,26,30ZM4,4A1,1,0,0,0,3,5V21a1,1,0,0,0,1,1H18.5a1,1,0,0,1,.63.22L25,26.92V23a1,1,0,0,1,1-1h2a1,1,0,0,0,1-1V5a1,1,0,0,0-1-1Z" />
                        </g>
                      </svg>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className={classNames(h.messageInfo, h.messageNav2)}>
            <div className={h.spanMessageInfo}>
              <div className={h.spanNav}>
                <div className={h.navLinks}>
                  <NavLink to="#">
                    <div className={h.divInA}>
                      <svg
                        className={h.svgNav}
                        height="20px"
                        width="20px"
                        viewBox="0 0 448 512"
                      >
                        <g>
                          <path d="M256 32V51.2C329 66.03 384 130.6 384 208V226.8C384 273.9 401.3 319.2 432.5 354.4L439.9 362.7C448.3 372.2 450.4 385.6 445.2 397.1C440 408.6 428.6 416 416 416H32C19.4 416 7.971 408.6 2.809 397.1C-2.353 385.6-.2883 372.2 8.084 362.7L15.5 354.4C46.74 319.2 64 273.9 64 226.8V208C64 130.6 118.1 66.03 192 51.2V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32H256zM224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512z" />
                        </g>
                      </svg>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className={classNames(h.messageNav3, h.profileMessage)}>
            <div className={h.spanMessageInfo}>
              <div className={h.spanNav}>
                <div className={h.navLinks}>
                  <NavLink to="#">
                    <div width='40px' height='40px'>
                    <div className={h.divInA}>
                      <img
                        src={logo}
                        className={h.svgProfile}
                        height="40px"
                        width="40px"
                        
                      />
                      <div>
                        <div className={h.arrowInImg}>
                        <svg height="12px" viewBox="0 0 512 512" width="12px"><polygon height="5px" width="8px" points="396.6,160 416,180.7 256,352 96,180.7 115.3,160 256,310.5 "/></svg>
                        </div>
                      </div>
                    </div>
                    </div>
                    
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;