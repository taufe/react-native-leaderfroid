import { useNavigation } from "@react-navigation/native";
import { useRef, useState } from "react";
import { FlatList, useWindowDimensions } from "react-native";
import { OnBoardingWrapper } from "../listComponents";
import { Wrapper } from "..";
import { OnBoardingsData } from "../../utilities/dummyaData";
import styles from "./styles";
import { SCREEN } from "../../constants";
import Icon from 'react-native-vector-icons/AntDesign';
import { totalSize } from 'react-native-dimension';

const OnBoardingSwiper = () => {
    const navigation = useNavigation();
    const { width } = useWindowDimensions();
    const ref = useRef();
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [activeDotIndex, setActiveDotIndex] = useState(0);
    const [backgroundColor, setBackgroundColor] = useState('#E0F1FD');

    const updateCurrentSlideIndex = (e) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    };

    const updateDotIndex = (e) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setActiveDotIndex(currentIndex);
        setCurrentSlideIndex(currentIndex);
        const colors = ['#E0F1FD', '#E4E9FF', '#E3FFF2'];
        setBackgroundColor(colors[currentIndex]);

    };

    const HandlePressContinue = () => {
        if (currentSlideIndex <= 1) {
            setCurrentSlideIndex(currentSlideIndex + 1);
            ref.current.scrollToIndex({ animated: true, index: currentSlideIndex + 1 });
            setActiveDotIndex(currentSlideIndex);
            const colors = ['#E0F1FD', '#E4E9FF', '#E3FFF2'];
            setBackgroundColor(colors[currentSlideIndex + 1])

        } else {
            navigation.replace(SCREEN.signIn);
        }
    };

    const nextIconStyle = {
        backgroundColor: backgroundColor,
        borderRadius: totalSize(1.2),
        padding: totalSize(0.5),
    };

    return (
        <Wrapper flex={1}>
            <FlatList
                ref={ref}
                data={OnBoardingsData}
                onMomentumScrollBegin={updateCurrentSlideIndex}
                onMomentumScrollEnd={updateDotIndex}
                showsHorizontalScrollIndicator={false}
                horizontal
                pagingEnabled
                renderItem={({ item }) => {
                    return (
                        <OnBoardingWrapper
                            uri={item?.uri}
                            title={item?.title}
                            description={item?.description}
                            skip={activeDotIndex !== 2 && 'Skip'}
                            bgColor={item?.color}
                            imageHeight={item?.imageHeight}
                            bottom={item?.bottom}
                            onPressSkip={() => navigation?.replace(SCREEN.signIn)}
                        />
                    );
                }}
            />
            <Wrapper style={styles.iconWrapper}>
                <Icon name="arrowright" size={totalSize(2.8)} style={nextIconStyle} onPress={HandlePressContinue} />
            </Wrapper>
        </Wrapper>
    );
};

export default OnBoardingSwiper;
