import React from "react";
import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router";

const Chat = (props) => {
  const { chatId } = useParams();
  const match = useRouteMatch("/chats/:chatId");
  const history = useHistory();
  const location = useLocation();

  console.log({ match, history, location });

  const handleGoBack = () => history.goBack();

  return (
    <div>
      <p>Certain chat page, {chatId}</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default Chat;
