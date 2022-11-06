import p from './profile.module.css'
import Content from './content'
import CreatePost from './myPost/createPost'
const Profile = (props) =>{
    return(
        <div className={p.Profile}>
            <Content />
            <CreatePost />
        </div>
    )
}
export default Profile