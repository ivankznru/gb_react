import React from 'react'
import { Redirect, useParams } from 'react-router'
import Message from '../Message/Message'
import MessageForm from '../MessageForm/MessageForm'
import { AUTHORS } from '../App/constants'
import { v4 as uuidv4 } from "uuid";

const Chat = (props) => {
    const { getIsChatExists } = props
    const { chatId } = useParams()

    const [messageList, setMessageList] = React.useState([])

    const timer = React.useRef(null)

    React.useEffect(() => {
        if (
            messageList[messageList.length - 1].author !== AUTHORS.BOT
        ) {
            timer.current = setTimeout(
                () =>
                    setMessageList((currentMessageList) => [
                        ...currentMessageList,
                        { author: AUTHORS.BOT, text: 'Привет' },
                    ]),
                1500
            );
            return () => {
                clearTimeout(timer.current);
              };
        }
    }, [messageList])

    React.useEffect(() => {
        return () => {
            clearTimeout(timer.current)
        }
    }, [])

    const handleMessageSubmit = (newMessageText) => {
        setMessageList((currentMessageList) => [
            ...currentMessageList,
            {id: uuidv4(), author: AUTHORS.ME, text: newMessageText },
        ])
    }

    const isChatExists = React.useMemo(
        () => getIsChatExists(chatId),
        [getIsChatExists, chatId]
    )

    if (!isChatExists) {
        return <Redirect to="/chats" />
    }

    return (
        <div className="chat">
            {messageList.length ? (
                <div className="bordered">
                    {messageList.map((message) => (
                        <Message
                            key={message.id}
                            text={message.text}
                            author={message.author}
                        />
                    ))}
                </div>
            ) : null}

            <MessageForm onSubmit={handleMessageSubmit} />
        </div>
    )
}

export default Chat
