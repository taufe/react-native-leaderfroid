import { Icon } from 'react-native-elements';
import { Hrline, MainHeader, MainWrapper, Spacer, Wrapper } from '../../../components'
import { DeliveryManagementList, SalesManagementList, SalesTabsList } from '../../../components/listComponents'
import useSalesManagement from './hook'
import { width } from 'react-native-dimension';
import { styles } from './styles';
import { colors } from '../../../constants';

const SalesManagement = ({ navigation }) => {
    const { onPressTab, activeTab, onPressPlus } = useSalesManagement(navigation)
    return (
        <MainWrapper>
            <MainHeader title={'Sales \nManagement'} goBack />
            <Hrline />
            <Spacer />
            <Wrapper style={{ marginLeft: width(5) }}>
                <SalesTabsList onPress={onPressTab} activeTab={activeTab} />
            </Wrapper>
            <Spacer />
            <SalesManagementList />
            <Wrapper style={styles.plusWrapper}>
                <Icon onPress={onPressPlus} style={styles.plus} name='plus' type='antdesign' color={colors.appTextColor2} />
            </Wrapper>
        </MainWrapper>
    )
}

export default SalesManagement