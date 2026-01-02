import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menubar from "./components/Menubar"
import { Toaster } from "react-hot-toast";
import UserSyncHandler from "./components/UserSyncHandler";

const App = () => {
  return(
    <div>
      <UserSyncHandler/>
      <Toaster/>
      <Menubar/>
      <Routes>
        <Route path="/" element= {
          <Home/>
        }/>
      </Routes>
    </div>
  )
}

export default App;