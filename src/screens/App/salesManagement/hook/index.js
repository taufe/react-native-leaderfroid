import { useState } from "react"
import { SCREEN } from "../../../../constants"

const useSalesManagement = (navigation) => {
    const [activeTab, setActiveTab] = useState(0)
    const [modalVisible, setModalVisible] = useState(false)
    const [isShown, setIsShown] = useState(null);
    const [moveSectionVisible, setMoveSectionVisible] = useState(false)


    const toggle = () => {
        setModalVisible(!modalVisible)
    };

    const onpressMoveSetion = () => {
        setModalVisible(false)
        setMoveSectionVisible(!moveSectionVisible);
    };

    const onPressTab = (index) => {
        setActiveTab(index)
    }

    const onPressThreeDot = () => {
        setIsShown(!isShown)
    }

    const onPressPlus = () => {
        navigation.navigate(SCREEN.createNewLead)
    }

    return {
        activeTab, onPressTab, onPressPlus, modalVisible, toggle,
        onPressThreeDot, isShown,
        onpressMoveSetion, moveSectionVisible,

    }
}

export default useSalesManagement