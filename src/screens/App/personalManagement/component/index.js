import { StyleSheet } from "react-native";
import { CardWrapper, LargeText, MediumText, PrimaryImage, RowWrapper, RowWrapperBasic, Wrapper } from "../../../../components"
import { totalSize, width, height } from 'react-native-dimension';
import { colors } from "../../../../constants";
import { TouchableOpacity } from "react-native";

export const PersonalManagementComponent = ({ profileImages, profileName, catergory, onPressViewReport }) => {
    return (
        <TouchableOpacity onPress={onPressViewReport}>
            <CardWrapper style={styles.card}>
                <RowWrapper>
                    <RowWrapperBasic>
                        <PrimaryImage size={totalSize(4.2)} source={profileImages} />
                        <Wrapper style={{ paddingLeft: width(2) }}>
                            <LargeText style={styles.profileName}>{profileName}</LargeText>
                            <MediumText style={styles.catergory}>{catergory}</MediumText>
                        </Wrapper>
                    </RowWrapperBasic>
                    <LargeText style={styles.viewReport}>View the report</LargeText>
                </RowWrapper>
            </CardWrapper>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        marginHorizontal: width(5),
        paddingVertical: height(1.7),
    },
    profileName: {
        fontSize: totalSize(1.5),
        color: colors.appTextColor9,

    },
    catergory: {
        fontSize: totalSize(1.2),
        color: colors.appTextColor3,
    },
    viewReport: {
        fontSize: totalSize(1.2),
        color: colors.appTextColor2,
        textDecorationLine: 'underline'
    },

})
