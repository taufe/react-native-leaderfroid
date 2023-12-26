import { SCREEN } from "../../../../constants"


const useChat = (navigation) => {

    const onPressChatCard = () => {
        navigation.navigate(SCREEN.conversation)
    }

    return { onPressChatCard }
}

export default useChat