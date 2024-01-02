import { StyleSheet } from "react-native";
import { height, width, totalSize } from 'react-native-dimension';
import { colors } from "../../../constants";

export const styles = StyleSheet.create({
    card: {
        paddingVertical: height(1),
        marginHorizontal: width(5),
        paddingTop: height(2.5)
    },
    attachFile: {
        fontSize: totalSize(1.6),
    },
    notes: {
        marginLeft: width(5),
        marginHorizontal: width(0),

    },
    dateInputStyle: {
        backgroundColor: colors.appBgColor13,
        borderRadius: totalSize(1.2),
        paddingBottom: 5
    }
})