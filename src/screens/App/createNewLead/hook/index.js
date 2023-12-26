import { useState } from "react"
import { StatusData } from "../../../../utilities/dummyaData"

const useCreateNewLead = () => {
    // UseState 
    const [selectStatus, setselectStatus] = useState('')

    return { selectStatus, setselectStatus, StatusData }
}

export default useCreateNewLead