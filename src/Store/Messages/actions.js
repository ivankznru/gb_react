import { AUTHORS } from '../../components/App/constants'
import firebase from 'firebase'
import { v4 as uuidv4 } from "uuid";
import { ADD_MESSAGE,REMOVE_MESSAGES_BY_CHAT_ID } from "./constants";



export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId,
        message,
    },
})


export const removeMessagesByChatID = (chatId) => ({
    type: REMOVE_MESSAGES_BY_CHAT_ID,
    payload: chatId
  })

export const removeMessagesFromDatabase = (chatId) => {
    return async (dispatch) => {
        try {
            await firebase.database().ref('messages').child(chatId).remove()

            dispatch(removeMessagesByChatID(chatId))
        } catch (error) {
            console.error(error.message)
        }
    }
}


export const sendMessageToBot = (chatId, message) => {
    return () => {
        firebase.database().ref('messages').child(chatId).push(message)

        let timer = setTimeout(() => {
            firebase
                .database()
                .ref('messages')
                .child(chatId)
                .push({
                    id: `message${Date.now()}`,
                    author: AUTHORS.BOT,
                    text: 'Привет, я - бот!',
                })

            clearTimeout(timer)
        }, 1500)
    }
}

export const subscribeOnMessagesChangings = (chatId) => {
    return (dispatch, getState) => {
        firebase
            .database()
            .ref('messages')
            .child(chatId)
            .on('child_added', (snapshot) => {
                console.log('child_added', snapshot.val())

                dispatch(addMessage(chatId, snapshot.val()))
            })

        firebase
            .database()
            .ref('messages')
            .child(chatId)
            .on('child_changed', (snapshot) => {
                console.log('child_changed', snapshot.val())

                dispatch(addMessage(chatId, snapshot.val()))
            })
    }
}
