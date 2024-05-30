import { useState } from "react"
import { SCREEN } from "../../../../constants"


const useSchedule = (navigation) => {

    // UseState
    const [modalVisible, setModalVisible] = useState(false)
    const [projectModalVisible, setProjectModalVisible] = useState(false);
    const [SelectedDay, setSelectedDay] = useState(Date.parse(new Date()))

    const onPressAssignProject = () => {
        toggleModal();
        setProjectModalVisible(true);
    }

    const toggleModal = () => {
        setModalVisible(!modalVisible)
        setProjectModalVisible(false)
    }
    return {
        toggleModal, modalVisible, onPressAssignProject,
        projectModalVisible, setSelectedDay
    }
}

export default useSchedule