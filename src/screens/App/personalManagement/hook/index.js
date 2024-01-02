import { SCREEN } from "../../../../constants"


const usePersonalManagement = (navigation) => {

    const onPressViewReport = (item) => {
        navigation.navigate(SCREEN.report, { item: item })
    }

    return { onPressViewReport }
}

export default usePersonalManagement