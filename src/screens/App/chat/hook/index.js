import { SCREEN } from "../../../../constants"


const useChat = (navigation) => {

    const onPressChatCard = (item) => {
        navigation.navigate(SCREEN.conversation, { item: item })
    }

    return { onPressChatCard }
}

export default useChat