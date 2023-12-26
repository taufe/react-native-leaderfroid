import { useState } from "react"
import { SCREEN } from "../../../../constants"

const useSalesManagement = (navigation) => {
    const [activeTab, setActiveTab] = useState(0)

    const onPressTab = (index) => {
        setActiveTab(index)
    }

    const onPressPlus = () => {
        navigation.navigate(SCREEN.createNewLead)
    }

    return { activeTab, onPressTab, onPressPlus }
}

export default useSalesManagement