import React from 'react'
import { Redirect, useParams } from 'react-router'
import Message from '../Message/Message'
import MessageForm from '../MessageForm/MessageForm'
import { AUTHORS } from '../App/constants'
import { useDispatch, useSelector } from 'react-redux'
import {
    sendMessageToBot,
    subscribeOnMessagesChangings,
} from '../../Store/Messages/actions'
import { useIsChatExists } from '../../hooks/useIsChatExists'
import { v4 as uuidv4 } from "uuid";

const Chat = (props) => {
    const { chatId } = useParams()

    const messageList = useSelector((state) => state.messages[chatId] || [])
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(subscribeOnMessagesChangings(chatId))
    }, [])

    const handleMessageSubmit = (newMessageText) => {
        dispatch(
            sendMessageToBot(chatId, {
                id: uuidv4(),
                author: AUTHORS.ME,
                text: newMessageText,
            })
        )
    }

    const isChatExists = useIsChatExists({ chatId })

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
