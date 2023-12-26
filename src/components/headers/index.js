import React from 'react'
import { StyleSheet, TouchableOpacity, } from 'react-native';
import { LargeTitle } from '../text';
import { Wrapper } from '../wrappers';
import { height, width, totalSize } from 'react-native-dimension'
import { colors, fontFamily } from '../../constants';
import { Icon } from 'react-native-elements';
import { Spacer } from '..';
import { useNavigation } from '@react-navigation/native';


export const MainHeader = ({ title, goBack }) => {
    const navigation = useNavigation()
    return (
        <Wrapper style={styles.main_view}>
            {goBack ?
                <Wrapper>
                    <TouchableOpacity style={styles.iconWrapper} onPress={() => navigation.goBack()} >
                        <Icon style={styles.icon} name='arrowleft' type='antdesign' size={22} color={colors.appIconColor2} />
                    </TouchableOpacity>
                    <Spacer height={height(3)} />
                </Wrapper> : null
            }
            {title ?
                <LargeTitle style={styles.pageName}>{title}</LargeTitle>
                : ''}
        </Wrapper>
    );
};



export const styles = StyleSheet.create({

    title: {
        color: colors.appTextColor5,
        fontFamily: fontFamily.appTextMedium,
        fontSize: totalSize(2.1)
    },
    main_view: {

        marginVertical: height(2.3),
        marginHorizontal: width(4),

    },
    pageName: {
        color: colors.appTextColor2,

    },
    icon: {
        backgroundColor: colors.appBgColor1,
        padding: totalSize(.65),
        borderRadius: totalSize(5)
    },
    iconWrapper: {
        flexDirection: 'row'
    }

})