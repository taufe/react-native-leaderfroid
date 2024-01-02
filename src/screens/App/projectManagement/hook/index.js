import { useState } from "react"
import { SCREEN } from "../../../../constants"

const useProjectManagement = (navigation) => {
    const [activeTab, setActiveTab] = useState(0)

    const onPressTab = (index) => {
        setActiveTab(index)
    }

    const onPress = () => {
        navigation.navigate(SCREEN.assigningDetails)
    }

    return { activeTab, onPressTab, onPress }
}

export default useProjectManagement