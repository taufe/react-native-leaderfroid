import { View, Text } from 'react-native'
import React from 'react'
import { ComponentWrapper, Hrline, LogoutModal, MainHeader, MainWrapper, Spacer } from '../../../components'
import { LogOutButton, MyInformation, Setttings } from '../../App/profile/component'
import { HeaderComponent } from '../../../components/commonComponent'
import useSetting from './hook'
import { height, totalSize, width } from 'react-native-dimension';

const Setting = ({ navigation }) => {
    const { notificationSwitch, setNotificationSwitch, onPressLogOut, onPressInformation,
        toggle, modalVisible, onPressCancel, soundSwitch, setSoundSwitch } = useSetting(navigation)
    return (
        <MainWrapper>
            <MainHeader title={'My \nAccount'} goBack />
            <Hrline />
            <Spacer />
            <MyInformation onPressInformation={onPressInformation} />
            <Spacer height={height(1.5)} />
            <ComponentWrapper>
                <HeaderComponent heading={'Settings'} fonSize={totalSize(2)} />
            </ComponentWrapper>
            <Setttings notificationSwitch={notificationSwitch}
                setNotificationSwitch={setNotificationSwitch}
                soundSwitch={soundSwitch}
                setSoundSwitch={setSoundSwitch}
            />
            <LogOutButton onPressLogOut={toggle} />
            <LogoutModal isVisible={modalVisible} toggleModal={toggle} onPressLogout={onPressLogOut} onPressCancel={onPressCancel} />
            <Spacer isDoubleBase />
        </MainWrapper>
    )
}

export default Setting