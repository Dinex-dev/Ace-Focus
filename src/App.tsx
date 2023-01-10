import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Index from './pages/Home/index';

function App() {
  return (
    <>
    <Profile />
    <Index/>
    </>
  )
}

export default App;
