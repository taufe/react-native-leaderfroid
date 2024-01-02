import { ComponentWrapper, MainWrapper } from './../../../components/wrappers/index';
import { MainHeader } from './../../../components/headers/index';
import { Hrline, LogoutModal, Spacer } from '../../../components';
import { LogOutButton, MyInformation, Setttings } from './component';
import { HeaderComponent } from '../../../components/commonComponent';
import { height, totalSize } from 'react-native-dimension';
import useProfile from './hook';

const Profile = ({ navigation }) => {
    const { notificationSwitch, setNotificationSwitch,
        onPressLogOut, onPressInformation, modalVisible,
        toggle, onPressCancel, soundSwitch, setSoundSwitch } = useProfile(navigation)
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

export default Profile