import { ADD_CHAT, REMOVE_CHAT } from "./constants";

export const initialState = {
  //  chat1: {
  //    id: 'chat1',
  //     name: 'Чат 1',
  //  },
};

export default function chatsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CHAT: {
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    }
    case REMOVE_CHAT: {
      const { chatId } = action.payload;
      const { [chatId]: chatToDelete, ...restChats } = state;
      return restChats;
    }
    default: {
      return state;
    }
  }
}
