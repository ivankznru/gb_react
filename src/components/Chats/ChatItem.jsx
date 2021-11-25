import React from "react";
import Message from "../Message/Message";
import Input from "../Input/Input";
import { AUTHORS } from "../App/constants";
import usePrevious from "../../hooks/usePrevious";
import { v4 as uuidv4 } from "uuid";

const Chat = (props) => {
  const [messageList, setMessageList] = React.useState([]);

  const timer = React.useRef(null);

  const prevMessageList = usePrevious(messageList);

  React.useEffect(() => {
    if (
      prevMessageList?.length < messageList.length &&
      messageList[messageList.length - 1].author !== AUTHORS.BOT
    ) {
      timer.current = setTimeout(
        () =>
          setMessageList((currentMessageList) => [
            ...currentMessageList,
            { author: AUTHORS.BOT, text: "Привет" },
          ]),
        1500
      );
      return () => {
        clearTimeout(timer.current);
      };
    }
  }, [messageList, prevMessageList]);

  const handleMessageSubmit = (newMessageText) => {
    setMessageList((currentMessageList) => [
      ...currentMessageList,
      { id: uuidv4(), author: AUTHORS.ME, text: newMessageText },
    ]);
  };

  return (
    <div className="chat">
      {messageList.length ? (
        <div className="bordered">
          {messageList.map((message) => (
            <Message
              key={message.id}
              text={message.text}
              author={message.author}
              render={({ className }) => (
                <span className={className}>
                  {/*{Date.now().toLocaleString()}*/}
                </span>
              )}
            />
          ))}
        </div>
      ) : null}

      <Input onSubmit={handleMessageSubmit} />
    </div>
  );
};

export default Chat;
