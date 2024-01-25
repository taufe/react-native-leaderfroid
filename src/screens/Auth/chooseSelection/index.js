
import { ButtonColored, ComponentWrapper, LargeTitle, MainHeader, MainWrapper, PrimaryImage, Spacer, Wrapper } from '../../../components'
import { height, totalSize } from 'react-native-dimension';
import { colors } from '../../../constants';
import { styles } from './styles';
import { AppImages } from '../../../assets';
import { ChooseSelectionList } from '../../../components/listComponents';
import useChooseSelection from './hook';

const ChooseSelection = ({ navigation }) => {
    const { activeCard, onPressCard, onPressNext } = useChooseSelection(navigation)
    return (
        <MainWrapper >
            <PrimaryImage size={totalSize(8)} styles={styles.ellepsi1} source={AppImages.ellipse1} />
            <Spacer height={height(3)} />
            <MainHeader title={'Choose, \nWho I am?'} goBack />
            <ComponentWrapper>
                <LargeTitle style={{ color: colors.appTextColor3, fontSize: totalSize(1.8) }}>To Continue</LargeTitle>
            </ComponentWrapper>
            <Spacer height={height(6)} />
            <Wrapper>
                <ChooseSelectionList activeCard={activeCard} onPress={onPressCard} />
            </Wrapper>
            <Spacer isDoubleBase />
            <ComponentWrapper>
                <ButtonColored text='Next' onPress={onPressNext} />
            </ComponentWrapper>
            <PrimaryImage size={totalSize(8)} styles={styles.ellepsi2} source={AppImages.ellipse2} />
        </MainWrapper>
    )
}

export default ChooseSelection