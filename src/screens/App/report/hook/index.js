import { useState } from "react"
const useReport = () => {
    const [SelectedDay, setSelectedDay] = useState(Date.parse(new Date()))
    return { setSelectedDay }
}

export default useReport