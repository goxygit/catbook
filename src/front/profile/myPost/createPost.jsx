import cp from './createPost.module.css'
import logo from "../../img/Profile.png"
const createPost = (props) =>{
    return(
        <div>
            <img className={cp.img} src={logo} alt="" />
            <span>kurwa</span>
        </div>
    )
}
export default createPost