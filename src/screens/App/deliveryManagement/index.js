import { ComponentWrapper, Hrline, LargeText, MainHeader, MainWrapper, Spacer } from '../../../components'
import { DeliveryManagementList } from '../../../components/listComponents'
import { totalSize } from 'react-native-dimension';
import { colors } from '../../../constants';

const DeliveryManagement = () => {
    return (
        <MainWrapper>
            <MainHeader title={'Delivery \nManagement'} goBack />
            <Hrline />
            <Spacer isSmall />
            <ComponentWrapper>
                <LargeText style={{ fontSize: totalSize(1.75), color: colors.appTextColor4 }}>Project completed, ready for delivery</LargeText>
            </ComponentWrapper>
            <Spacer />
            <DeliveryManagementList />
        </MainWrapper>
    )
}

export default DeliveryManagement