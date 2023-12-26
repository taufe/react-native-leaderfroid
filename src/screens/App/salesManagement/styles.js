import { StyleSheet } from "react-native";
import { colors } from "../../../constants";
import { totalSize, height, width } from 'react-native-dimension';

export const styles = StyleSheet.create({
    plusWrapper: {
        backgroundColor: colors.appBgColor1,
        alignSelf: 'center',
        borderRadius: totalSize(5),
        position: 'absolute',
        bottom: height(4),
        right: width(6)
    },
    plus: {
        padding: totalSize(2.3),
    }
})