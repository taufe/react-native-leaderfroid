import { Icon } from 'react-native-elements';
import { Hrline, LeadModal, MainHeader, MainWrapper, MoveSectionModal, Spacer, Wrapper } from '../../../components'
import { SalesManagementList, SalesTabsList } from '../../../components/listComponents'
import useSalesManagement from './hook'
import { width } from 'react-native-dimension';
import { styles } from './styles';
import { colors } from '../../../constants';
import { TouchableOpacity } from 'react-native';

const SalesManagement = ({ navigation }) => {
    const { onPressTab, activeTab, onPressPlus, modalVisible, toggle, onPressThreeDot, isShown, onpressMoveSetion, moveSectionVisible } = useSalesManagement(navigation)
    return (
        <MainWrapper>
            <MainHeader title={'Sales \nManagement'} goBack />
            <Hrline />
            <Spacer />
            <Wrapper style={{ marginLeft: width(5) }}>
                <SalesTabsList onPress={onPressTab} activeTab={activeTab} />
            </Wrapper>
            <Spacer />
            <SalesManagementList onpressLeadCard={toggle} />
            <LeadModal isVisible={modalVisible} toggleModal={toggle}
                onPressThreeDot={onPressThreeDot}
                isShown={isShown}
                onpressMoveSetion={onpressMoveSetion}
            />
            <MoveSectionModal isVisible={moveSectionVisible} toggleModal={onpressMoveSetion} />
            <TouchableOpacity style={styles.plusWrapper} onPress={onPressPlus}>
                <Icon name='plus' type='antdesign' color={colors.appTextColor2} />
            </TouchableOpacity>
        </MainWrapper>
    )
}

export default SalesManagement