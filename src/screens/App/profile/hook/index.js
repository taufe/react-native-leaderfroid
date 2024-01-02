import { useState } from "react"
import { SCREEN } from "../../../../constants"


const useProfile = (navigation) => {
    // States
    const [notificationSwitch, setNotificationSwitch] = useState(true)
    const [modalVisible, setModalVisible] = useState(false)
    const [soundSwitch, setSoundSwitch] = useState(false)

    const toggle = () => {
        setModalVisible(!modalVisible)
    }

    const onPressLogOut = () => {
        navigation.navigate(SCREEN.authStack)
    }

    const onPressInformation = () => {
        navigation.navigate(SCREEN.profileInformation)
    }
    const onPressCancel = () => {
        navigation.goBack()
    }

    return {
        notificationSwitch, setNotificationSwitch, onPressLogOut, onPressInformation,
        toggle, modalVisible, onPressCancel, soundSwitch, setSoundSwitch
    }
}

export default useProfile
