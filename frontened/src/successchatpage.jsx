import { PrettyChatWindow } from "react-chat-engine-pretty";

const successchatpage = (props) => {
    console.log(props)
  return (
    <div className="background">
      <PrettyChatWindow
        projectId={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID}
        username={props.user.user.username}
        secret={props.user.user.secret}
      />
    </div>
  );
};

export default successchatpage;