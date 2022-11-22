import p from './profile.module.css'
import logo from '../img/Profile.png'
const Content =(props) =>{
    return(
        <div>
        <div className={p.logoBar}>
            <img alt='ku' className={p.prof} src={logo} />
            <div>
                <h1>Oleh k</h1>
                <p>Cate of birth: 30 december</p>
                <p>City: Dnipro</p>
                <p>Skills: React</p>
            </div>
        </div>
        </div>
    )
}
export default Content