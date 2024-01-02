import React from 'react'
import { TouchableOpacity, TextInput, View, TextStyle, ViewStyle } from "react-native";
import { ComponentWrapper, Wrapper, RowWrapperBasic } from '../wrappers';
import { InputTitle, RegularText, SmallText, TinyText } from '../text';
import { Spacer } from "../spacers";
import { height, width, totalSize } from 'react-native-dimension';
import { styles } from './styles';
import { colors, fontFamily, sizes } from '../../constants';
import { appStyles } from '../../utilities';
import { Icon } from 'react-native-elements';


export const TextInputColored = ({ autoFocus, iconName, error, onPressRight, iconType,
    required, left, onPress, content, keyboardType, title, isButton, titleStyle,
    placeholder, editable, animation, multiline, onFocus, buttonContentStyle, onBlur,
    onChangeText, rightStyle, secureTextEntry, value, iconColor, iconSize, containerStyle,
    inputContainerStyle, onPressIcon, inputStyle, right, iconStyle, lefticonName,
    lefticonType, additionalIconName, additionalIconType, additionalIconSize,
    additionalIconStyle, additionalIconColor, onPressAdditionalIcon }) => {
    var focused = false
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={onPress}
        >
            {
                title ?
                    <Wrapper style={{ marginStart: width(.5) }}>
                        <InputTitle style={[titleStyle, { color: colors.appTextColor3, fontFamily: fontFamily.appTextSemiBold, fontSize: totalSize(1.7) }]}>
                            {title}
                            {required ?
                                <RegularText style={{ color: colors.appTextColor2 }}> *</RegularText>
                                : null
                            }
                        </InputTitle>
                    </Wrapper>
                    :
                    null
            }
            <Wrapper animation={animation} style={[styles.textInputBorderedContainer, containerStyle,]}>
                <RowWrapperBasic style={[{
                    borderRadius: sizes.inputRadius,
                    borderWidth: 0,
                    borderColor: colors.appTextColor5
                }, inputContainerStyle]}>
                    {lefticonName ? (
                        <View style={{ paddingLeft: 17, justifyContent: 'center', alignSelf: 'center' }}>
                            <Icon
                                name={lefticonName}
                                type={lefticonType}
                                size={iconSize ? iconSize : sizes.icons.medium}
                                color={iconColor ? iconColor : colors.appIconColor3}
                                iconStyle={iconStyle}
                                onPress={onPressIcon}
                            />
                        </View>
                    ) : null}
                    {
                        left ? left : null
                    }
                    <View style={{ flex: 8 }}>
                        {
                            isButton ?
                                content ?
                                    content
                                    :
                                    <ComponentWrapper style={[{ paddingVertical: sizes.baseMargin }, buttonContentStyle]}>
                                        <RegularText style={value ? null : appStyles.textGray}>{value ? value : placeholder}</RegularText>
                                    </ComponentWrapper>
                                :
                                <TextInput
                                    autoFocus={autoFocus}
                                    onChangeText={onChangeText}
                                    value={value}
                                    placeholder={placeholder}
                                    editable={editable}
                                    keyboardType={keyboardType}
                                    multiline={multiline}
                                    placeholderTextColor={colors.appTextColor3}
                                    secureTextEntry={secureTextEntry}
                                    style={[appStyles.inputField, {}, inputStyle]}
                                />
                        }
                    </View>

                    {
                        right ?
                            (
                                <>
                                    {/* Add another TouchableOpacity or View for the second icon */}
                                    <TouchableOpacity
                                        activeOpacity={.5}
                                        style={[{ height: height(4), paddingHorizontal: 12 }, additionalIconStyle]}
                                        onPress={onPressAdditionalIcon}
                                    >
                                        {additionalIcon}
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        activeOpacity={.5}
                                        style={[{ height: height(4), paddingHorizontal: 12 }, rightStyle]}
                                        onPress={onPressRight}
                                    >
                                        {right}
                                    </TouchableOpacity>


                                </>
                            ) :
                            iconName ?
                                (

                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        {/* Add another View for the second icon */}
                                        <View style={{ padding: 0, alignItems: 'center' }}>
                                            <Icon
                                                name={additionalIconName}
                                                type={additionalIconType}
                                                size={additionalIconSize ? additionalIconSize : sizes.icons.medium}
                                                color={additionalIconColor ? additionalIconColor : colors.appTextColor3}
                                                iconStyle={additionalIconStyle}
                                                onPress={onPressAdditionalIcon}
                                            />
                                        </View>
                                        <View style={{ padding: 12, alignItems: 'center' }}>
                                            <Icon
                                                name={iconName}
                                                type={iconType}
                                                size={iconSize ? iconSize : sizes.icons.medium}
                                                color={iconColor ? iconColor : colors.appTextColor3}
                                                iconStyle={iconStyle}
                                                onPress={onPressIcon}
                                            />
                                        </View>


                                    </View>
                                ) :
                                null
                    }


                </RowWrapperBasic>
            </Wrapper>
            {
                error ?
                    <ComponentWrapper style={{ marginLeft: width(0) }} animation="shake">
                        <Spacer height={sizes.TinyMargin} />
                        <SmallText>{error}</SmallText>
                    </ComponentWrapper>
                    :
                    null
            }
        </TouchableOpacity>
    );
}

export const TextInputSearch = ({ autoFocus, right, left, editable, onPress, placeholder, onChangeText, value, onPressSearch, animation, containerStyle, filterIcon, onPressFilter }) => {
    return (
        <TextInputBordered
            autoFocus={autoFocus}
            onPress={onPress}
            editable={editable}
            containerStyle={[{ borderWidth: 0, height: height(6), justifyContent: 'center', backgroundColor: colors.appBgColor5 }, containerStyle]}
            inputContainerStyle={styles.textInputSearch}
            placeholderTextColor={colors.appTextColor11}
            placeholder={placeholder ? placeholder : "Search message"}
            onChangeText={onChangeText}
            value={value}
            animation={animation}
            disabled
            rightStyle={{ height: null }}
            left={left ? left : <Icon name="search" type="feather" size={18} color={colors.appIconColor5} style={{ marginLeft: 10 }} />}
            right={filterIcon && <Icon name="options-outline" type="ionicon" size={22} color={colors.appIconColor4} style={{ marginLeft: 10 }} onPress={onPressFilter} />}
        />
    )
}



