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
    }
})