import { StyleSheet } from "react-native"
import { CardWrapper, Custom, LargeText, RowWrapper, RowWrapperBasic } from "../../../../components"
import { height, width, totalSize } from 'react-native-dimension';
import { colors } from "../../../../constants";

export const Notificaiton = ({ icon, description, time, size }) => {
    return (
        <CardWrapper style={styles.card}>
            <RowWrapper>
                <RowWrapperBasic>
                    <Custom styles={styles.iconBg} size={size} icon={icon} />
                    <LargeText style={styles.description}>{description}</LargeText>
                </RowWrapperBasic>
                <LargeText style={styles.time}>{time}</LargeText>
            </RowWrapper>
        </CardWrapper>
    )
}

const styles = StyleSheet.create({
    card: {
        paddingVertical: height(2.1),
        marginHorizontal: width(5)
    },
    iconBg: {
        backgroundColor: colors.appBgColor13,
        padding: totalSize(1.2),
        borderRadius: totalSize(5)
    },
    description: {
        fontSize: totalSize(1.5),
        paddingLeft: width(3)
    },
    time: {
        fontSize: totalSize(1.2),
        color: colors.appTextColor3,
        alignSelf: 'flex-end'
    },
})