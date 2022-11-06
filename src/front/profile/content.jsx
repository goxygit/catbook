import p from './profile.module.css'
import logo from '../img/Profile.png'
const Content =(props) =>{
    return(
        <div>
        <div> <img alt='ky' className={p.back} src="https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=800&h=300" /></div>
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