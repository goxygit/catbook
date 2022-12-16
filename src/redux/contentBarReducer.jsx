import profileImg from '../front/img/Profile.png'
import back1 from '../front/img/back1.jpg'
import back2 from '../front/img/back2.png'
let initialState = {
    img: [
        {
            profileImg:`${profileImg}`, back:`${back1}`
        },
        {
            profileImg:`${profileImg}`, back:`${back2}`
        },
        {
            profileImg:`${profileImg}`, back:`${back2}`
        }, 
        {
            profileImg:`${profileImg}`, back:`${back1}`
        },
        {
            profileImg:`${profileImg}`, back:`${back1}`
        },
        {
            profileImg:`${profileImg}`, back:`${back1}`
        }
]
}

const contentReducer = (state = initialState, action) => {

        return state;
    }

export default contentReducer