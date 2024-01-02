import { CardWrapper, ComponentWrapper, Hrline, LargeText, MainHeader, MainWrapper, PrimaryImage, ScrollView, Spacer, TextInputColored } from '../../../components'
import { AttachFiles, ImagesComponent } from '../../../components/commonComponent'
import { ChatList, NotesList } from '../../../components/listComponents'
import { styles } from './styles'
import { width, height } from 'react-native-dimension';
import { CompleteDetails, HourlyReport } from './component'
import useDeliverySheet from './hook';
import { colors } from '../../../constants';
import { AppImages } from '../../../assets';
import { NotesData } from '../../../utilities/dummyaData';
import { TouchableOpacity } from 'react-native';

const DeliverySheet = ({ navigation }) => {
    const { onpressChatCard, onPressMap } = useDeliverySheet(navigation)
    return (
        <MainWrapper>
            <MainHeader goBack title={'Delivery \nSheet'} />
            <Hrline />
            <Spacer />
            <ScrollView>
                <CardWrapper style={styles.card}>
                    <CompleteDetails />
                    <Spacer isTiny />
                    <Hrline Width={width(80)} />
                    <Spacer />
                    <AttachFiles bgColor={colors.appBgColor13} bgWidth={width(80)} />
                    <Spacer />
                    <ImagesComponent />
                    <Spacer isSmall />
                    <Hrline Width={width(80)} />
                    <Spacer isSmall />
                    <ComponentWrapper style={styles.notes}>
                        <LargeText style={styles.attachFile}>Notes</LargeText>
                        <Spacer isTiny />
                        <NotesList data={NotesData} />
                        <Spacer />
                        <Hrline Width={width(80)} />
                        <Spacer isSmall />
                    </ComponentWrapper>
                    <ChatList onpressChatCard={onpressChatCard} />
                    <HourlyReport />
                    <Spacer isSmall />
                    <Hrline Width={width(80)} />
                    <Spacer isSmall />
                    <ComponentWrapper>
                        <LargeText style={styles.attachFile}>Adress</LargeText>
                        <Spacer isTiny />
                        <TextInputColored containerStyle={{ backgroundColor: colors.appTextColor13 }}
                            placeholder={'Street 2, sector H, Lamza road, Jerah'} isButton
                        />
                        <Spacer />
                        <TouchableOpacity onPress={onPressMap}>
                            <PrimaryImage styles={{ width: width(80), height: height(15) }} source={AppImages.map} />
                        </TouchableOpacity>
                    </ComponentWrapper>
                    <Spacer isDoubleBase />
                </CardWrapper>
                <Spacer />
            </ScrollView>
        </MainWrapper>
    )
}

export default DeliverySheet