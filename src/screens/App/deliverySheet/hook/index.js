import { useState } from "react"
import { SCREEN } from "../../../../constants"


const useDeliverySheet = (navigation) => {

    // UseState
    const [modalVisible, setModalVisible] = useState(false)

    const onPressSignature = () => {
        setModalVisible(!modalVisible)
    }

    const onpressChatCard = (item) => {
        navigation.navigate(SCREEN.conversation, { item: item })
    }
    const onPressMap = () => {
        navigation.navigate(SCREEN.map)
    }
    return { onpressChatCard, onPressMap, modalVisible, onPressSignature }
}

export default useDeliverySheet