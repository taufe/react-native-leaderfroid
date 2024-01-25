import { SCREEN } from "../../../../constants"


const useTechnicianChat = (navigation) => {

    const onPressChatCard = (item) => {
        navigation.navigate(SCREEN.conversation, { item: item })
    }

    return { onPressChatCard }
}

export default useTechnicianChat