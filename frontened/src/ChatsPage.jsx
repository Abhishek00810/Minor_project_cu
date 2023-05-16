import { PrettyChatWindow } from "react-chat-engine-pretty";
import Failchatpage from "./failchatpage";
import Successchatpage from "./successchatpage";
import App from "./App";
const ChatsPage = (props) => {
     if(!props.user.username) {
      return <App  hasEnter = {true}/>;
     }
    else {
      return <Successchatpage user={props}/>;
    }
};

export default ChatsPage;