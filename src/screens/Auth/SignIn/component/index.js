import { ButtonColored, ComponentWrapper, Spacer, TextInputColored } from "../../../../components"
import { height } from 'react-native-dimension';

export const LoginCard = ({ showPassword, toggleShowPassword, onpressLogin }) => {
    return (
        <ComponentWrapper>
            <TextInputColored placeholder={'Email'} lefticonName={'email'} lefticonType={'materialicon'} />
            <Spacer height={15} />
            <TextInputColored placeholder={'Password'} lefticonName={'locked'} lefticonType={'fontisto'}
                iconName={showPassword ? 'eye' : 'eye-off'} iconType={'ionicon'}
                secureTextEntry={!showPassword} onPressIcon={toggleShowPassword}
            />
            <Spacer height={height(4)} />
            <ButtonColored text="Login" onPress={onpressLogin} />
        </ComponentWrapper>
    )
}