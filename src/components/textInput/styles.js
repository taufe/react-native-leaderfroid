import { StyleSheet } from "react-native";
import { height, width, totalSize } from 'react-native-dimension'
import { colors, sizes } from "../../constants";
export const styles = StyleSheet.create({
    textInputBorderedContainer: {
        height: height(6.5),
        borderRadius: totalSize(1.8),
        backgroundColor: colors.appBgColor1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1.5,
        },
        shadowOpacity: 0.005,
        shadowRadius: 3.84,
        // elevation: 1,
    },
    textInputSearch: {

        borderRadius: 0,
        borderWidth: 0,
        backgroundColor: colors.bgColor1,
        borderRadius: 8,
        height: height(5),

    }

})