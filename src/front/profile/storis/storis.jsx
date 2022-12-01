import CreateStoris from "./createStoris/createStoris";
import c from "./createStoris/createStoris.module.css";
import AddProfileStoris from "./createStoris/addProfileStoris";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
const Storis = (props) => {
  let stor1 = props.img
    .slice(0, 1)
    .map((s) => <CreateStoris profileImg={s.profileImg} back={s.back} />);
  let stor2 = props.img
    .slice(1, 2)
    .map((s) => <CreateStoris profileImg={s.profileImg} back={s.back} />);
  let stor3 = props.img
    .slice(2, 3)
    .map((s) => <CreateStoris profileImg={s.profileImg} back={s.back} />);
  let stor4 = props.img
    .slice(3, 4)
    .map((s) => <CreateStoris profileImg={s.profileImg} back={s.back} />);
  return (
    <div className={classNames(c.bar_1)}>
      <AddProfileStoris />
      <div
        style={{
          gridArea: "bar2",
          borderRadius: "10px",
          backgroundColor: "#E4E6EB",
          maxWidth: "130px",
          maxHeight: "230px",
          boxShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
        }}
      >
        <NavLink to="#" style={{ textDecoration: "none" }}>
          <div
            style={{
              padding: "12px",
              position: "relative",
              width: "40px",
              height: "40px",
              position:'absolute'
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                backgroundColor: "rgba(0, 0, 0, 0.05)",
                border: "#fff",
              }}
            ></div>
          </div>
          {stor1}
        </NavLink>
      </div>
      <div
        style={{
          gridArea: "bar3",
          borderRadius: "10px",
          backgroundColor: "#E4E6EB",
          maxWidth: "130px",
          maxHeight: "230px",
          boxShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
        }}
      >
        <NavLink to="#" style={{ textDecoration: "none" }}>
        <div
            style={{
              padding: "12px",
              position: "relative",
              width: "40px",
              height: "40px",
              position:'absolute'
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                backgroundColor: "rgba(0, 0, 0, 0.05)",
                border: "#fff",
              }}
            ></div>
          </div>
          {stor2}
        </NavLink>
      </div>
      <div
        style={{
          gridArea: "bar4",
          borderRadius: "10px",
          backgroundColor: "#E4E6EB",
          maxWidth: "130px",
          maxHeight: "230px",
          boxShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
        }}
      >
        <NavLink to="#" style={{ textDecoration: "none" }}>
        <div
            style={{
              padding: "12px",
              position: "relative",
              width: "40px",
              height: "40px",
              position:'absolute'
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                backgroundColor: "rgba(0, 0, 0, 0.05)",
                border: "#fff",
              }}
            ></div>
          </div>
          {stor3}
        </NavLink>
      </div>
      <div
        style={{
          gridArea: "bar5",
          borderRadius: "10px",
          backgroundColor: "#E4E6EB",
          maxWidth: "130px",
          maxHeight: "230px",
          boxShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
        }}
      >
        <NavLink to="#" style={{ textDecoration: "none" }}>
        <div
            style={{
              padding: "12px",
              position: "relative",
              width: "40px",
              height: "40px",
              position:'absolute'
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                backgroundColor: "rgba(0, 0, 0, 0.05)",
                border: "#fff",
              }}
            ></div>
          </div>
          {stor4}
        </NavLink>
      </div>
    </div>
  );
};
export default Storis;
