import { CHANGE_NAME, CHANGE_IS_ONLINE } from "./constants";

export const changeName = (name) => ({
    type: CHANGE_NAME,
    payload: {
        name,
    },
})

export const changeIsOnline = (isOnline) => ({
    type: CHANGE_IS_ONLINE,
    payload: {
        isOnline,
    },
})
