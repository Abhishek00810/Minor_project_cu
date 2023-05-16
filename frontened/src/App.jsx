import { useState } from "react";

import "./App.css";

import AuthPage from "./Authpage";
import ChatsPage from "./ChatsPage";
import { BrowserRouter } from "react-router-dom";

function App(props) {
  const [user, setUser] = useState(undefined);
  if (!user) {
    return <AuthPage hasEnter={props.hasEnter} onAuth={(user) => setUser(user)}/>;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;