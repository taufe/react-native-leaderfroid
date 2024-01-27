import { StyleSheet } from "react-native";
import { width, height, totalSize } from 'react-native-dimension';
import { colors } from "../../../constants";

export const styles = StyleSheet.create({
    rowWrapper: {
        marginHorizontal: width(5),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: -20

    },
    currentDate: {
        fontSize: totalSize(1.4),
        color: colors.appTextColor3
    },
    hourlyReport: {
        marginHorizontal: width(5),
        color: colors.appTextColor4
    },
    inputField: {
        // flex: 1,
        backgroundColor: colors.appBgColor1,
        width: width(40),
        color: '#000',
        fontSize: 16,
        height: 40,
        borderRadius: totalSize(1.2)

    },
    icon1: {
        position: 'absolute',
        left: width(32),
        top: height(4)
    },
    icon2: {
        position: 'absolute',
        left: width(74),
        top: height(4)
    },
})