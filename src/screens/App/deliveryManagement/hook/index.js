import { SCREEN } from "../../../../constants"


const useDeliveryManagement = (navigation) => {
    const onPressDeliverySheet = () => {
        navigation.navigate(SCREEN.deliverySheet)
    }
    return { onPressDeliverySheet }
}

export default useDeliveryManagement