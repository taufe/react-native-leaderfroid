import moment from "moment"
import { ButtonColored, CardWrapper, LargeText, LargeTitle, MediumText, PrimaryImage, RowWrapper, Spacer, Wrapper } from "../../../../components"
import { width, height, totalSize } from 'react-native-dimension';
import { StyleSheet } from "react-native";
import { colors, fontFamily } from "../../../../constants";
import { ScrollView } from "react-native";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";

export const ScheduleHeading = () => {
    return (
        <RowWrapper>
            <LargeText>{moment().format('MMMM D, YYYY')}</LargeText>
            <ButtonColored height={height(4.8)} style={{ paddingHorizontal: width(7), }} text="weekly" />
        </RowWrapper>

    )
}


export const ScheduleComponent = ({ profileName, profileImages, onPress }) => {
    const cardData = [
        { usageTime: '09:00 AM - 06:00 PM' },
        { usageTime: '09:00 AM - 06:00 PM' },
    ];

    const colors = ['#367FFA', '#FFC33C', '#1F8235', '#F3F3F3',];

    return (
        <Wrapper style={{ flexDirection: 'row', marginLeft: width(12) }}>
            <PrimaryImage size={totalSize(4.5)} source={profileImages} />
            <LargeTitle style={styles.profileName}>{profileName}</LargeTitle>
            <Spacer />
            <Wrapper>
                <FlatList
                    horizontal
                    data={cardData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        const randomColor = colors[Math.floor(Math.random() * colors.length)];
                        return (
                            <TouchableOpacity onPress={onPress}>
                                <Wrapper style={{ marginRight: 10 }}>
                                    <Wrapper style={[styles.cardWrapper, { backgroundColor: randomColor }]}>
                                        <LargeText style={styles.projectName}>Project Name</LargeText>
                                        <MediumText style={styles.usageTime}>{item.usageTime}</MediumText>
                                    </Wrapper>
                                    <Spacer height={height(1)} />
                                </Wrapper>
                            </TouchableOpacity>
                        );
                    }}
                />
            </Wrapper>
        </Wrapper>
    );
};



const styles = StyleSheet.create({
    profileName: {
        fontSize: totalSize(1.4),
        color: colors.appTextColor4,
        marginTop: 8,
        paddingHorizontal: width(2)
    },
    dateWrapper: {
        backgroundColor: colors.appBgColor13
    },
    dateText: {
        fontSize: totalSize(1.1),
        fontFamily: fontFamily.appTextSemiBold

    },
    projectName: {
        fontSize: totalSize(1.5),
        color: colors.appTextColor1
    },
    cardWrapper: {
        backgroundColor: colors.appBgColor12,
        borderradius: 0,
        width: width(80),
        padding: 8
    },
    usageTime: {
        fontSize: totalSize(1.3),
        color: colors.appTextColor1
    }
})

