import { AUTHORS } from "../../components/App/constants";
import { v4 as uuidv4 } from "uuid";
import { ADD_MESSAGE } from "./constants";

export const addMessage = (chatId, message) => ({
  type: ADD_MESSAGE,
  payload: {
    chatId,
    message,
  },
});

export const sendMessageToBot = (chatId, message) => {
  return (dispatch, getState) => {
    dispatch(addMessage(chatId, message));

    let timer = setTimeout(() => {
      dispatch(
        addMessage(chatId, {
          id: uuidv4(),
          author: AUTHORS.BOT,
          text: "Привет, я - бот!",
        })
      );

      clearTimeout(timer);
    }, 1500);
  };
};
