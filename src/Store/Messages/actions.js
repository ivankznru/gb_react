import { ADD_MESSAGE } from "./constants";

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId,
        message,
    },
})
