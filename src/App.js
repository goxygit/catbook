import Header from "./front/header/header";
import SideBar from "./front/sideBar/sideBar";
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Content from "./front/profile/profile";
const App =() => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <SideBar />
      <div>
      <Routes>
        <Route path="/profile/profile"  element={<Content />  }/>
      </Routes>
      </div>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
