import h from './header.module.css'
const Header = (props) =>{
    return(
        <div className={h.header}>
        <img className={h.img} src="https://upgradeyourcat.com/wp-content/uploads/2022/08/Upgrade-Your-Cat-Logo.png" alt="logo" />
        </div>
    )
}
export default Header