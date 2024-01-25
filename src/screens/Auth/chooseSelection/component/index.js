import { Icon } from "react-native-elements"
import { CardWrapper, LargeText, RowWrapper } from "../../../../components"
import { StyleSheet, TouchableOpacity } from "react-native"
import { colors } from "../../../../constants"
import { totalSize, width, height } from 'react-native-dimension';

export const ChooseSelectionComponent = ({ title, isActive, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <CardWrapper style={{ ...styles.card, borderColor: isActive ? colors.appBorderColor2 : 'transparent' }}>
                <RowWrapper style={{ justifyContent: 'center', }}>
                    <Icon style={styles.icon} name="user" type="font-awesome" />
                    <LargeText>{title}</LargeText>
                </RowWrapper>
            </CardWrapper>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    icon: {
        backgroundColor: '#E0F1FD',
        opacity: .5,
        padding: 10,
        borderRadius: totalSize(1.2),
        marginRight: width(2),

    },
    card: {
        marginHorizontal: width(5),
        paddingVertical: height(4),
        borderRadius: totalSize(4.5),
        borderWidth: 1
    }
})