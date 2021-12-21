import React from 'react'
import { useHistory } from 'react-router'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import MessageForm from '../MessageForm/MessageForm'
import './styles.css'
import { useDispatch, useSelector } from 'react-redux'
import {addChatToDatabase, removeChatFromDatabase, subscribeChatsChangings} from '../../Store/Chats/actions'
import {removeMessagesFromDatabase} from '../../Store/Messages/actions'
import { v4 as uuidv4 } from "uuid";

export default function Chats() {
    const history = useHistory()

    const chats = useSelector((state) => state.chats)
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(subscribeChatsChangings())
    }, [])

    const handleChatLinkClick = (chat) => {
        history.push(`/chats/${chat.id}`)
    }

    const handleAddChat = (name) => {
        dispatch(addChatToDatabase(uuidv4(), name))
    }

    const handleRemoveChat = (chatId) => {
        dispatch(removeChatFromDatabase(chatId)).then(() => dispatch(removeMessagesFromDatabase(chatId)))

    }

    return (
        <div className="chats">
            <List className="chats__sidebar" subheader={<p>Список чатов</p>}>
                {Object.values(chats).map((chat) => (
                    <div className="chats__sidebar__item" key={chat.id}>
                        <ListItem
                            button
                            component="a"
                            onClick={() => handleChatLinkClick(chat)}
                        >
                            {chat.name}
                        </ListItem>
                        <IconButton
                            variant="contained"
                            onClick={() => handleRemoveChat(chat.id)}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </div>
                ))}
            </List>

            <MessageForm
                label="Имя чата"
                placeholder="Введите имя чата"
                onSubmit={handleAddChat}
            />
        </div>
    )
}
