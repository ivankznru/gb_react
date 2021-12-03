import { combineReducers, createStore } from 'redux'
import profileReducer from './Profile/reducer'
import chatsReducer from './Chats/reducer'
import messagesReducer from "./Messages/reducer";

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
