import { USER } from "../types"

export const set_user = payload => {
    return {
        type: USER,
        payload: payload
    }
}


