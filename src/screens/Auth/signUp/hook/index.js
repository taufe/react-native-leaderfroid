import { useState } from "react"
import { SCREEN } from "../../../../constants"
import { useSelector } from "react-redux"

const usesignUp = (navigation) => {

    // Redux
    const userRedux = useSelector((state) => state?.getUserRedux)

    // useState
    const [showPassword, setShowPassword] = useState(false)

    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const onPressSignUp = () => {
        if (userRedux == 0) {
            navigation.replace(SCREEN.appStack)
        }
        else {
            navigation.replace(SCREEN.technicianStack)
        }
    }

    const onPressLogin = () => {
        navigation.replace(SCREEN.signIn)
    }

    return { showPassword, setShowPassword, toggleShowPassword, onPressSignUp, onPressLogin }
}

export default usesignUp