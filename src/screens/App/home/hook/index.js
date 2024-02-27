import { SCREEN } from "../../../../constants"


const useHome = (navigation) => {
    const onPressManagement = (item) => {
        navigation.navigate(item?.screen)
    }
    const onPressNotification = () => {
        navigation.navigate(SCREEN.notifitcation)
    }
    const onPressChat = () => {
        navigation.navigate(SCREEN.chat)
    }
    return { onPressManagement, onPressNotification, onPressChat }
}

export default useHome