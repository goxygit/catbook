import Header from "./front//header/header-container";
import SideBar from "./front/sideBar/sideBar";
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Content from "./front/contentBar/profile";
import Dialogs from "./front/contentBar/message/message";
const App =(props) => {
  
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header store={props.store} />
      <SideBar />
      <div>
      <Routes>
        <Route path="/profile"  element={<Content store={props.store}/>  }/>
        <Route path="/message" element={<Dialogs />}/>
      </Routes>
      </div>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
