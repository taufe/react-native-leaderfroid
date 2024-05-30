import { ComponentWrapper, Hrline, LargeText, MainHeader, MainWrapper, Spacer } from '../../../components'
import { DeliveryManagementList } from '../../../components/listComponents'
import { totalSize } from 'react-native-dimension';
import { colors } from '../../../constants';
import useDeliveryManagement from './hook';

const DeliveryManagement = ({ navigation, route }) => {

    const { onPressDeliverySheet } = useDeliveryManagement(navigation, route)
    return (
        <MainWrapper>
            <MainHeader title={'Delivery \nManagement'} goBack />
            <Hrline />
            <Spacer isSmall />
            <ComponentWrapper>
                <LargeText style={{ fontSize: totalSize(1.75), color: colors.appTextColor4 }}>Project completed, ready for delivery</LargeText>
            </ComponentWrapper>
            <Spacer />
            <DeliveryManagementList onPressDeliverySheet={onPressDeliverySheet} />
        </MainWrapper>
    )
}

export default DeliveryManagement