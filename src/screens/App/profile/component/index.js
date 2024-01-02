import { Icon } from "react-native-elements"
import { CardWrapper, LargeText, LargeTitle, Spacer, Wrapper } from "../../../../components"
import { StyleSheet } from "react-native"
import { height, totalSize, width } from "react-native-dimension"
import { colors } from "../../../../constants"
import ToggleSwitch from 'toggle-switch-react-native'
import { TouchableOpacity } from "react-native"

export const MyInformation = ({ onPressInformation }) => {
    return (
        <TouchableOpacity onPress={onPressInformation}>
            <CardWrapper style={styles.card}>
                <LargeText>My Information</LargeText>
                <Icon name="chevron-right" type="feather" color={colors.appIconColor2} />
            </CardWrapper>
        </TouchableOpacity>
    )
}
export const Setttings = ({ notificationSwitch, setNotificationSwitch, soundSwitch, setSoundSwitch }) => {
    return (
        <Wrapper>
            <CardWrapper style={styles.card}>
                <LargeText>Notification</LargeText>
                <ToggleSwitch
                    isOn={notificationSwitch}
                    onColor={colors.appTextColor2}
                    offColor={colors.appTextColor5}
                    size="small"
                    onToggle={isOn => setNotificationSwitch(isOn)}
                />
            </CardWrapper>
            <Spacer />
            <CardWrapper style={styles.card}>
                <LargeText>Sound</LargeText>
                <ToggleSwitch
                    isOn={soundSwitch}
                    onColor={colors.appTextColor2}
                    offColor={colors.appTextColor5}
                    size="small"
                    onToggle={isOn => setSoundSwitch(isOn)}
                />
            </CardWrapper>
        </Wrapper>
    )
}
export const LogOutButton = ({ onPressLogOut }) => {
    return (
        <TouchableOpacity style={styles.buttonWrapper} onPress={onPressLogOut}>
            <Icon color={colors.appIconColor2} size={totalSize(2.5)} name="logout" type="antdesign" />
            <LargeTitle style={styles.logout}>Log Out</LargeTitle>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        marginHorizontal: width(5),
        justifyContent: 'space-between',
        paddingVertical: height(2.5),
        paddingHorizontal: width(3)
    },
    buttonWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        alignSelf: 'center',
        paddingHorizontal: width(8),
        paddingVertical: height(1.4),
        borderRadius: totalSize(1.2),
        borderColor: colors.appBorderColor2,
        position: 'absolute',
        bottom: height(5)
    },
    logout: {
        fontSize: totalSize(2),
        paddingLeft: width(3)

    }
})