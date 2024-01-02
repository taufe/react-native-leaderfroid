import { ComponentWrapper, Hrline, LargeText, MainHeader, MainWrapper, Spacer } from '../../../components'
import { colors } from '../../../constants'
import { totalSize } from 'react-native-dimension';
import { PersonalManagementList } from '../../../components/listComponents';
import usePersonalManagement from './hook';

const PersonalManagement = ({ navigation }) => {
    const { onPressViewReport } = usePersonalManagement(navigation)
    return (
        <MainWrapper>
            <MainHeader title={'Personal \nManagement'} goBack />
            <Hrline />
            <Spacer isSmall />
            <ComponentWrapper>
                <LargeText style={{ fontSize: totalSize(1.75), color: colors.appTextColor4 }}>List of all employees</LargeText>
            </ComponentWrapper>
            <Spacer />
            <PersonalManagementList onPressViewReport={onPressViewReport} />
        </MainWrapper>
    )
}

export default PersonalManagement