import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { width, height } from 'react-native-dimension'
import { colors } from '../../constants'

export const Hrline = ({ Width, height, color, style }) => {
    return (
        <View style={[{ height: height ?? 1, width: Width ?? width(90), backgroundColor: color ?? '#B9B9B9', alignSelf: 'center', marginVertical: 5 }, style]} />
    )
}
export const Vrline = ({ Width, Height, color, style }) => {
    return (
        <View style={[{ height: Height ?? height(2.3), width: Width ?? 1, backgroundColor: color ?? colors.appBorderColor5, alignSelf: 'center', marginVertical: 0 }, style]} />
    )
}
export const Vrlines = ({ Width, Height, color, style }) => {
    return (
        <View style={[{ height: Height ?? height(2.3), width: Width ?? 1, backgroundColor: color ?? colors.appBorderColor5, alignSelf: 'center', marginVertical: 0 }, style]} />
    )
}


const styles = StyleSheet.create({

})