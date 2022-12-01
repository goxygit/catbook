import c from "./createStoris.module.css";
import classNames from "classnames";
const CreateStoris = (props) => {
  return (
    <div style={{position:'absolute'}} className={c.storisBar}>
    <div style={{width:'100%', height:'100%'}} className={c.hover}>
      <img
        src={props.back}
        
        alt="storis"
        style={{
          boxSizing: "border-box",
          width: "auto",
          maxWidth: "130px",
          height: "100%",
          maxHeight: "230px",
          borderRadius: "10px",
          position: "absolute",
        }}
      />
      
      <div style={{ padding: "12px", position: "relative" , width:'40px', height:'40px'}}>
      <div style={{width:'100%', height:'100%', borderRadius:'50%',backgroundColor:'black', border:'#fff'}}>
        <div
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: "hsl(214, 89%, 52%)",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          
          <img
            src={props.profileImg}
            className={c.svgProfile}
            height="32px"
            width="32px"
          />
          
          
        </div>
      </div>
      </div>
      <div style={{ padding: "12px", position: "relative", color: "white", bottom: "-120px"}}>
        <div style={{  }}>
          Ваша історія
        </div>
      </div>
    </div>
    </div>
  );
};
export default CreateStoris;
