import { StyleSheet, TouchableOpacity } from "react-native";
import { ButtonColored, ComponentWrapper, LargeTitle, MediumText, Spacer, TextInputColored, Wrapper } from "../../../../components"
import { height, totalSize, width } from 'react-native-dimension';
import { colors } from "../../../../constants";

export const RegistrationCard = ({ showPassword, toggleShowPassword, onPressSignUp, onPressLogin }) => {
    return (
        <ComponentWrapper>
            <TextInputColored placeholder={'Full Name'} lefticonName={'user'} lefticonType={'font-awesome'} />
            <Spacer height={15} />
            <TextInputColored placeholder={'Email'} lefticonName={'email'} lefticonType={'materialicon'} />
            <Spacer height={15} />
            <TextInputColored placeholder={'Password'} lefticonName={'locked'} lefticonType={'fontisto'}
                iconName={showPassword ? 'eye' : 'eye-off'} iconType={'ionicon'}
                secureTextEntry={!showPassword} onPressIcon={toggleShowPassword}
            />
            <Spacer height={height(4)} />
            <ButtonColored text="Login" onPress={onPressSignUp} />
            <Spacer isSmall />
            <TouchableOpacity onPress={onPressLogin} style={{ alignSelf: 'center' }}>
                <MediumText style={styles.text}>I already Registered?<LargeTitle style={styles.login}> Login</LargeTitle></MediumText>
            </TouchableOpacity>
        </ComponentWrapper>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: totalSize(1.6),
        color: colors.appTextColor2
    },
    login: {
        fontSize: totalSize(1.8),
    }
})