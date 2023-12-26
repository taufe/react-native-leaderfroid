import { StyleSheet } from 'react-native'
import React from 'react'
import { MainWrapper, PrimaryImage } from '../../../components'
import { AppImages } from '../../../assets'
import { width, height } from 'react-native-dimension';

const Splash = () => {
    return (
        <MainWrapper style={styles.container}>
            <PrimaryImage styles={{ width: width(70), height: height(20) }} source={AppImages.splash} />
        </MainWrapper>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Splash