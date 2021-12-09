import { ADD_CHAT, REMOVE_CHAT } from "./constants";

export const addChat = (chatId, name) => ({
  type: ADD_CHAT,
  payload: {
    id: chatId,
    name,
  },
});

export const removeChat = (chatId) => ({
  type: REMOVE_CHAT,
  payload: {
    chatId,
  },
});
