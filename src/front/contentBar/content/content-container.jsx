import Content from './content'
import { connect } from "react-redux"
let mapStateToProps =(state)=>{

    return{
     contentBar: state.contentBar
    }
  }


const ProfileContainer = connect(mapStateToProps)(Content)
  
export default ProfileContainer