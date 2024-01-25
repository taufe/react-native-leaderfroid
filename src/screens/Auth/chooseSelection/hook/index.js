import { useState } from "react"
import { useDispatch } from "react-redux"
import { SCREEN } from "../../../../constants"
import { setUserRedux } from "../../../../redux/actions"


const useChooseSelection = (navigation) => {

    // Redux 
    const dispatch = useDispatch()

    // UseState
    const [activeCard, setActiveCard] = useState(0)

    const onPressCard = (index) => {
        setActiveCard(index)
    }

    const onPressNext = () => {
        navigation.navigate(SCREEN.signUp)
        dispatch(setUserRedux(activeCard))
    }

    return { activeCard, onPressCard, onPressNext }
}

export default useChooseSelection