import cp from "./createPost.module.css";
import logo from "../../img/Profile.png";
import Post from "./post";

const createPost = (props) => {
  let i = 0
  let posts =[
    {id: i, message: 'o kurwa', likes: 15, img: <img className={cp.img} src={logo} alt="" /> },
    {id: i, message: 'ja pierdole', likes: 12, img: <img className={cp.img} src={logo} alt="" />},
    {id: i, message: 'jakie bydło', likes: 121, img: <img className={cp.img} src={logo} alt="" />},
    {id: i, message: 'jiebane', likes: 14, img: <img className={cp.img} src={logo} alt="" />}
  ]
  i++
  let PostsElement = posts.map(p => <Post message={p.message} likes={p.likes} img = {p.img}/>)

  return (
    <div>
      <div></div>
      <div>
        
        {PostsElement}
      </div>
    </div>
  );
};
export default createPost;
