import { USER } from "../types"

export const setUserRedux = payload => {
    return {
        type: USER,
        payload: payload
    }
}


