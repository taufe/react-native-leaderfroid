import { SCREEN } from "../../../../constants"


const useDeliveryManagement = (navigation, route) => {

    // Params
    const item = route?.params?.item

    const onPressDeliverySheet = () => {
        navigation.navigate(SCREEN.deliverySheet, { item: item })
    }
    return { onPressDeliverySheet }
}

export default useDeliveryManagement