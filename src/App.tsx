import "./App.css";
import Whatsapp from './assets/img/WhatsApp.png';
import Github from './assets/img/github.png';
import Gmail from './assets/img/gmail.png';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Data from './assets/data'

const App = (props:Object) => {
  return (
    <div className="pushkar-container">
      <h2 className="heading">Team Name</h2>
      <div className="users-desktop">
        {Data.map((user,index)=>{
          return <div key={index} className="card user shadow-sm">
          <div className="my-image-container">
            <img src={user.profilePic} height="150px" alt="..."/>
          </div>
            <h5 className="card-title m-3">{user.name}</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item fw-bold">{user.primaryTask}</li>
            <li className="list-group-item">{user.secondaryTask}</li>
          </ul>
          <div className="card-body">
            <a href={user.whatsapp} className="card-link"><img src={Whatsapp} height="20px" /></a>
            <a href={user.gmail} className="card-link"><img src={Gmail} height="20px" /></a>
            <a href={user.github} className="card-link"><img src={Github} height="20px" /></a>
          </div>
        </div>
        })}
      </div>

      <div className="display-mobile">
        
      </div>
    </div>
  )
}

export default App;
