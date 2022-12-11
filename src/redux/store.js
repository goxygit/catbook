import profileImg from '../front/img/Profile.png'
import back1 from '../front/img/back1.jpg'
import back2 from '../front/img/back2.png'
import headerReducer from './headerReducer'

let store ={
    _state:{
        headerBar:{
            inputSearch:{
              textValue:'kurwa'
            }    
          },
           contentBar:{
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
           },
    },
    _callSubscriber(){
        console.log('bccvvc')
    },
    getState(){
        return this._state
    },

     subscribe (observer){
        this._callSubscriber = observer
    },
    dispatch(action){
        this._state.headerBar = headerReducer(this._state.headerBar, action)
        this._callSubscriber(this._state)
    },
   
}


export default store