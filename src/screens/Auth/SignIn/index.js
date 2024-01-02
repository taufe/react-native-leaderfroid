import { ComponentWrapper, MainWrapper } from '../../../components/wrappers'
import { LargeTitle, MainHeader, PrimaryImage, Spacer } from '../../../components'
import { LoginCard } from './component'
import usesignIn from './hook'
import { colors } from '../../../constants'
import { totalSize, height } from 'react-native-dimension';
import { AppImages } from './../../../assets/images';
import { styles } from './styles'
const SignIn = ({ navigation }) => {

    const { showPassword, toggleShowPassword, onpressLogin } = usesignIn(navigation)

    return (
        <MainWrapper >
            <PrimaryImage size={totalSize(8)} styles={styles.ellepsi1} source={AppImages.ellipse1} />
            <Spacer height={height(3)} />
            <MainHeader title={'Access Your \n Account'} />
            <ComponentWrapper>
                <LargeTitle style={{ color: colors.appTextColor3, fontSize: totalSize(1.8) }}>Login</LargeTitle>
            </ComponentWrapper>
            <Spacer />
            <LoginCard showPassword={showPassword}
                toggleShowPassword={toggleShowPassword}
                onpressLogin={onpressLogin} />
            <PrimaryImage size={totalSize(8)} styles={styles.ellepsi2} source={AppImages.ellipse2} />
        </MainWrapper>
    )
}

export default SignIn