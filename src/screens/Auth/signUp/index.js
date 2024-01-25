import { ComponentWrapper, MainWrapper } from '../../../components/wrappers'
import { LargeTitle, MainHeader, PrimaryImage, Spacer } from '../../../components'
import { RegistrationCard } from './component'
import { colors } from '../../../constants'
import { totalSize, height } from 'react-native-dimension';
import { AppImages } from './../../../assets/images';
import { styles } from './styles'
import usesignUp from './hook'
const SignUp = ({ navigation }) => {
    const { showPassword, toggleShowPassword, onPressSignUp, onPressLogin } = usesignUp(navigation)
    return (
        <MainWrapper >
            <PrimaryImage size={totalSize(8)} styles={styles.ellepsi1} source={AppImages.ellipse1} />
            <Spacer height={height(3)} />
            <MainHeader title={'Access Your \n Account'} goBack />
            <ComponentWrapper>
                <LargeTitle style={{ color: colors.appTextColor3, fontSize: totalSize(1.8) }}>Sign Up</LargeTitle>
            </ComponentWrapper>
            <Spacer />
            <RegistrationCard showPassword={showPassword}
                toggleShowPassword={toggleShowPassword}
                onPressSignUp={onPressSignUp} onPressLogin={onPressLogin} />
            <PrimaryImage size={totalSize(8)} styles={styles.ellepsi2} source={AppImages.ellipse2} />
        </MainWrapper>
    )
}

export default SignUp