import { useState } from "react"
import { SCREEN } from "../../../../constants"


const useSchedule = (navigation) => {

    // UseState
    const [modalVisible, setModalVisible] = useState(false)
    const [projectModalVisible, setProjectModalVisible] = useState(false);

    const onPressAssignProject = () => {
        toggleModal();
        setProjectModalVisible(true);
    }

    const toggleModal = () => {
        setModalVisible(!modalVisible)
        setProjectModalVisible(false)
    }



    return { toggleModal, modalVisible, onPressAssignProject, projectModalVisible }
}

export default useSchedule