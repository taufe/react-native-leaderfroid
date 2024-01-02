import { useState } from "react"
import { SCREEN } from "../../../../constants";

const useProfileInformation = (navigation) => {
    const [activeTab, setActiveTab] = useState(0)
    const [modalVisible, setModalVisible] = useState(false);

    const toggle = () => {
        setModalVisible(!modalVisible);
    };
    const onPressTab = (index) => {
        setActiveTab(index)
    }
    const onPressSubmit = () => {
        navigation.navigate(SCREEN.profile)
    }
    const onPressCancel = () => {
        navigation.goBack()
    }

    return { onPressTab, activeTab, modalVisible, setModalVisible, toggle, onPressSubmit, onPressCancel }
}

export default useProfileInformation