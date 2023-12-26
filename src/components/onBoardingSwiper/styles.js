import { StyleSheet } from 'react-native';
import { height, width, totalSize } from 'react-native-dimension';
import { colors } from '../../constants';
export default StyleSheet.create({
    onBoardingImages: {
        marginTop: -height(3),
        width: '100%',
        height: height(60),
    },
    welcomeText: {
        color: colors.textColor2,
        marginTop: 10
    },
    contentWrapper: {
        alignItems: 'center'
    },
    lastIndex: {
        color: colors.textColor5
    },
    title: {
        color: colors.textColor5,
    },
    description: {
        color: colors.appTextColor4,
        alignSelf: 'center',
        textAlign: 'center',
        marginHorizontal: width(5),
        lineHeight: 18,
        position: 'absolute',
        bottom: height(19)
    },
    skipText: {
        position: 'absolute',
        right: width(5),
        top: height(5),
        color: colors.appTextColor2,
    },
    rowWrapper: {
        position: 'absolute',
        bottom: height(5),
        right: width(5),
        height: totalSize(5),
        width: totalSize(5),
        borderRadius: totalSize(2.5),
        backgroundColor: colors.bgColor2,
        justifyContent: 'center'
    },
    backButton: {
        height: totalSize(5),
        width: totalSize(5),
        borderRadius: totalSize(2.5),
        backgroundColor: colors.bgColor2
    },
    dots: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: height(10),
        marginHorizontal: 40
    },
    nextIcon: {
        // backgroundColor: '#E0F1FD',
        borderRadius: totalSize(1.2),
        padding: totalSize(.5)

    },
    iconWrapper: {
        backgroundColor: colors.appBgColor1,
        padding: totalSize(1.2),
        position: 'absolute',
        bottom: height(3.5),
        alignSelf: 'center',
        right: width(5),
        borderRadius: totalSize(1.2),
    }
})