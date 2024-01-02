import { SCREEN } from "../../../../constants"


const useHome = (navigation) => {
    const onPressManagement = (item) => {
        navigation.navigate(item?.screen)
    }
    const onPressNotification = () => {
        navigation.navigate(SCREEN.notifitcation)
    }
    return { onPressManagement, onPressNotification }
}

export default useHome