import { USER } from "../types"

const intialState = {
    getUserRedux: ''
}
const reducer = (state = intialState, action) => {
    switch (action.type) {

        case USER: {
            return {
                ...state,
                getUserRedux: action.payload,
            }
        }
        default:
            return state
    }
}
export default reducer;