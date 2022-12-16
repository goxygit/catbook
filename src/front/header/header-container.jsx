import React from "react";
import { connect } from "react-redux";
import { updateHeaderInputText } from "../../redux/headerReducer";
import Header from "./header";


let mapStateToProps =(state)=>{
  return{
    textValue: state.headerBar.textValue
  }
}
let mapDispatchToProps =(dispatch)=>{
  return{
    updateNewText:(text)=>{
      let action = updateHeaderInputText(text)
      dispatch(action)
    }
  }
}
const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)
export default HeaderContainer;
