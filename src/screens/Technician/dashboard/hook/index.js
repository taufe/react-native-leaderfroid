import { useState } from "react"
import { SCREEN } from "../../../../constants"

const useDashboard = (navigation) => {
    const [activeTab, setActiveTab] = useState(0)
    const [modalVisible, setModalVisible] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [isShown, setIsShown] = useState(null);


    const onPressTab = (index) => {
        setActiveTab(index)
    }

    const toggle = () => {
        setModalVisible(!modalVisible)
    }
    const toggleModal = () => {
        setShowModal(!showModal)
    }

    const onPress = () => {
        navigation.navigate(SCREEN.assigningDetails)
    }

    const onPressCancel = () => {
        setModalVisible(false)
    }

    const onPressThreeDot = () => {
        setIsShown(!isShown)
    }

    const onPressNotification = () => {
        navigation.navigate(SCREEN.notifitcation)
    }

    const onPressManagement = (item) => {
        navigation.navigate(item?.screen, { item: 'item' })
    }

    return {
        activeTab, onPressTab, onPress, toggle, modalVisible,
        onPressCancel, toggleModal, showModal, onPressThreeDot, onPressManagement, isShown, onPressNotification
    }
}

export default useDashboard