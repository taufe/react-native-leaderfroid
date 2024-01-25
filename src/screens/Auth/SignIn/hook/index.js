import { useState } from "react"
import { SCREEN } from "../../../../constants"

const usesignIn = (navigation) => {
    // useState
    const [showPassword, setShowPassword] = useState(false)

    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const onpressLogin = () => {
        navigation.navigate(SCREEN.technicianStack)
    }

    return { showPassword, setShowPassword, toggleShowPassword, onpressLogin }
}

export default usesignIn