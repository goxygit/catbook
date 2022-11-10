import { NavLink } from "react-router-dom"
import n from './sideBar.module.css'
const SideBar = (props) =>{
    return(
        <div className={n.nav}>
            <div><NavLink to='/profile'>Profile</NavLink></div>
            <div><NavLink to='/dialogs'>Message</NavLink></div>
            <div><NavLink to='#'>Friends</NavLink></div>
            <div><NavLink to='#'>News</NavLink></div> <br /> <br />
            <div><NavLink to='#'>Setting</NavLink></div>
        </div>
    )
}
export default SideBar