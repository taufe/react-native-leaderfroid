import { CardWrapper, ComponentWrapper, Hrline, LargeText, MainHeader, MainWrapper, PrimaryImage, RegularText, ScrollView, SignatureModal, Spacer, TextInputColored, Wrapper } from '../../../components'
import { AttachFiles, ImagesComponent } from '../../../components/commonComponent'
import { ChatList, NotesList } from '../../../components/listComponents'
import { styles } from './styles'
import { width, height } from 'react-native-dimension';
import { AddSignatureButton, CompleteDetails, HourlyReport, SignatureComponent } from './component'
import useDeliverySheet from './hook';
import { colors } from '../../../constants';
import { AppImages } from '../../../assets';
import { NotesData } from '../../../utilities/dummyaData';
import { TouchableOpacity } from 'react-native';

const DeliverySheet = ({ navigation, route }) => {
    const item = route?.params?.item
    const { onpressChatCard, onPressMap, onPressSignature, modalVisible } = useDeliverySheet(navigation)
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
                    <Spacer isSmall />
                    {item ? (<SignatureComponent />) :
                        (<Wrapper>
                            <AddSignatureButton onPressSignature={onPressSignature} />
                            <SignatureModal toggleModal={onPressSignature} isVisible={modalVisible} />
                        </Wrapper>)}
                    <Spacer isDoubleBase />
                </CardWrapper>
                <Spacer />
            </ScrollView>
        </MainWrapper>
    )
}
export default DeliverySheet


