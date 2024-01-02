import { SCREEN } from "../../../../constants"


const useDeliverySheet = (navigation) => {
    const onpressChatCard = (item) => {
        navigation.navigate(SCREEN.conversation, { item: item })
    }
    const onPressMap = () => {
        navigation.navigate(SCREEN.map)
    }
    return { onpressChatCard, onPressMap }
}

export default useDeliverySheet