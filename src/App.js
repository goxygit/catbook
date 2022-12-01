import Header from "./front/header/header";
import SideBar from "./front/sideBar/sideBar";
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Content from "./front/profile/profile";
import Dialogs from "./front/dialogs/dialogs";
const App =(props) => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <SideBar />
      <div>
      <Routes>
        <Route path="/profile"  element={<Content img={props.img}/>  }/>
        <Route path="/dialogs" element={<Dialogs />}/>
      </Routes>
      </div>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
