import { CHANGE_NAME, CHANGE_IS_ONLINE , CHANGE_IS_AUTHED} from "./constants";

export const changeName = (name) => ({
    type: CHANGE_NAME,
    payload: {
        name,
    },
})

export const changeIsAuthed = (isAuthed) => ({
    type: CHANGE_IS_AUTHED,
    payload: {
        isAuthed,
    },
})

export const changeNameWithThunk = (name) => {
    return (dispatch, getState) => {
        console.log(name)

        setTimeout(() => {
            dispatch(changeName(name))
        }, 1000)
    }
}

export const changeIsOnline = (isOnline) => ({
    type: CHANGE_IS_ONLINE,
    payload: {
        isOnline,
    },
})

export const changeIsOnlineWithThunk = (isOnline) => {
    return (dispatch, getState) => {
        console.log(getState())

        setTimeout(() => {
            dispatch(changeIsOnline(isOnline))
        }, 1000)
    }
}
