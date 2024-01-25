import { useState } from "react"

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
        navigation.goBack()
    }
    const onPressCancel = () => {
        navigation.goBack()
    }

    return { onPressTab, activeTab, modalVisible, setModalVisible, toggle, onPressSubmit, onPressCancel }
}

export default useProfileInformation