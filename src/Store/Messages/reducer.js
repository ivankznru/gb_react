import { ADD_MESSAGE, REMOVE_MESSAGES_BY_CHAT_ID } from "./constants";

export const initialState = {
    // chat1: [
    //     { id: 'message1', text: 'Привет', author: AUTHORS.ME },
    //     { id: 'message2', text: 'Привет!', author: AUTHORS.BOT },
    // ],
}

export default function messagesReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                [action.payload.chatId]: [
                    ...(state[action.payload.chatId] || []),
                    action.payload.message,
                ],
            }
        }
        case REMOVE_MESSAGES_BY_CHAT_ID: {

            if (!state.messages.hasOwnProperty(action.payload)) {
              return state
            }
      
            const newMessages = {...state.messages};
            delete newMessages[action.payload];
      
            return {
              messages: newMessages
            }
          }
        default:
            return state
    }
}
