import { AUTHORS } from '../../components/App/constants'
import { ADD_MESSAGE } from "./constants";

const initialState = {
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
        default:
            return state
    }
}
