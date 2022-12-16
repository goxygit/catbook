import m from "./message.module.css";
import { NavLink } from "react-router-dom";
import arrow from "../../img/arrow.png";
import logo from "../../img/Profile.png";
import phone from "../../img/phone.png";
import close from "../../img/close.png";
import line from "../../img/line.png";
import video from "../../img/video.png";
import aP from "../../img/aP.png"
import gallery from "../../img/gallery.png"
import smile from "../../img/smile.png"
import gifka from "../../img/gifka.png"
const Messages = () => {
  return (
    <div style={{ width: "338px", height: "445px" }}>

      <div className={m.background}>
        <div className={m.headerBar}>
          <div className={m.inHeaderBar}>
            <div style={{ display: "flex" }}>
              <div style={{ display: "flex", gridArea: "profileElement" }}>
                <div className={m.profileElement}>
                  <div style={{width:'44px', height:'44px', display:'flex', justifyContent:'center',alignItems:'center', gridArea:'imgBar'}}>
                    <div>
                    <NavLink to="#">
                      <div width="40px" height="40px">
                        <div className={m.divInA}>
                          <img
                            src={logo}
                            className={m.svgProfile}
                            height="32px"
                            width="32px"
                          />
                          <div>
                            <div className={m.arrowInImg}>
                             
                            </div>
                          </div>
                        </div>
                      </div>
                    </NavLink></div>
                  </div>
                  <div className={m.statusBar}>
                    <div style={{ fontSize:'15px', fontFamily:'inherit', gridArea:'name',minWidth:'0', textAlign:'justify'}}>Олексій Алушка</div>
                    <div style={{ fontSize:'13px', fontFamily:'inherit', gridArea:'status',minWidth:'0', color:"#65676B",textAlign:'justify'}}>Зараз в мережі</div>
                  </div>
                </div>
                <div style={{ alignSelf: "center", height:'18px' }}>
                  <img src={arrow} alt="" />
                </div>
              </div>
            </div>
        <div style={{display:'flex',alignItems:'center'}}>
        <div className={m.functionElement}>
              <span className={m.functional}>
                <div className={m.wh18}><img className={m.wh18} src={phone} alt="" /></div>
              </span>
              <span className={m.functional}>
                <div className={m.wh18}><img className={m.wh18} src={video}  alt="" /></div>
              </span>
              <span className={m.functional}>
                <div className={m.wh18}><img className={m.wh18} src={line} alt="" /></div>
              </span>
              <span className={m.functional}>
                <div className={m.wh18}><img className={m.wh18} src={close}  alt="" /></div>
              </span>
            </div>
        </div>
            
          </div>
        </div>
        <div className={m.contentBar}>
          <div className={m.messageBar}>
            <div className={m.inMessageBar}>

            </div>
          </div>
          <div className={m.inputBar}>
            <div className={m.inInputBar}>
              
                <span style={{width:'36px', height:'36px', justifyContent:'center', alignItems:'center', display:'flex'}}>
                  <div style={{width:'20px', height:'20px', padding:'4px', margin:'4px'}}>
                  <img src={aP} alt="" />
                  </div>
                </span>
              
              <div className={m.inputContainer}>
                <span className={m.spanInInputBar}>
                  <div style={{width:'20px', height:'20px', padding:'4px',}}>
                    <img style={{width:'20px', height:'20px'}} src={gallery} alt="" />
                  </div>
                </span>
                <span className={m.spanInInputBar}>
                  <div style={{width:'20px', height:'20px', padding:'4px',}}>
                    <img style={{width:'20px', height:'20px'}} src={smile} alt="" />
                  </div>
                </span>
                <span className={m.spanInInputBar}>
                  <div style={{width:'20px', height:'20px', padding:'4px',}}>
                    <img style={{width:'20px', height:'20px'}} src={gifka} alt="" />
                  </div>
                </span>
                <div></div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>      
    </div>
  );
};
export default Messages;
