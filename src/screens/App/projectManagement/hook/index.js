import { useState } from "react"

const useProjectManagement = (navigation) => {
    const [activeTab, setActiveTab] = useState(0)

    const onPressTab = (index) => {
        setActiveTab(index)
    }

    return { activeTab, onPressTab }
}

export default useProjectManagement