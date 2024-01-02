
import { ComponentWrapper, MainWrapper } from './../../../components/wrappers';
import { MainHeader } from './../../../components/headers';
import { Hrline, PrimaryModal, Spacer } from '../../../components';
import { InformationTabList, ProfileInformationList } from '../../../components/listComponents';
import useProfileInformation from './hook';
import { AttachLeaveButtons } from './component';

const ProfileInformation = ({ navigation }) => {
    const { onPressTab, activeTab, onPressLeaveRequest, modalVisible,
        setModalVisible, toggle, onPressSubmit, onPressCancel } = useProfileInformation(navigation)
    return (
        <MainWrapper>
            <MainHeader title={'My \nInformation'} goBack />
            <Hrline />
            <Spacer />
            <ComponentWrapper>
                <InformationTabList onPress={onPressTab} activeTab={activeTab} />
            </ComponentWrapper>
            <Spacer />
            <ProfileInformationList />
            <AttachLeaveButtons onPressLeaveRequest={toggle} />
            <PrimaryModal isVisible={modalVisible} toggleModal={toggle}
                onPressSubmit={onPressSubmit} onPressCancel={onPressCancel} />
        </MainWrapper>
    )
}

export default ProfileInformation