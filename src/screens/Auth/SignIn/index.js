import React from 'react'
import { ComponentWrapper, MainWrapper } from '../../../components/wrappers'
import { LargeTitle, MainHeader, Spacer } from '../../../components'
import { LoginCard } from './component'
import usesignIn from './hook'
import { colors } from '../../../constants'
import { totalSize, height } from 'react-native-dimension';
const SignIn = ({ navigation }) => {

    const { showPassword, toggleShowPassword, onpressLogin } = usesignIn(navigation)
    return (
        <MainWrapper >
            <Spacer height={height(3)} />
            <MainHeader title={'Access Your \n Account'} />
            <ComponentWrapper>
                <LargeTitle style={{ color: colors.appTextColor3, fontSize: totalSize(1.8) }}>Login</LargeTitle>
            </ComponentWrapper>
            <Spacer />
            <LoginCard showPassword={showPassword}
                toggleShowPassword={toggleShowPassword}
                onpressLogin={onpressLogin} />
        </MainWrapper>
    )
}

export default SignIn