import { TouchableOpacity } from "react-native"
import { CardWrapper, LargeText, MediumText, PrimaryImage, RowWrapper, RowWrapperBasic, Wrapper } from "../../../../components"
import { StyleSheet } from "react-native"
import { height, totalSize, width } from 'react-native-dimension';
import { colors } from "../../../../constants";

export const PersonalChat = ({ groups, usageTime, profile, participationCount, onPressChatCard, borderColor }) => {
    return (
        <TouchableOpacity onPress={onPressChatCard}>
            <CardWrapper style={{ ...styles.card, borderLeftColor: borderColor }}>
                <RowWrapper>
                    <Wrapper>
                        <LargeText style={styles.groups}>{groups}</LargeText>
                        <LargeText style={styles.usageTime}>{`${usageTime}`}</LargeText>
                    </Wrapper>
                    <RowWrapperBasic>
                        <PrimaryImage size={totalSize(4)}
                            borderRadius={totalSize(5)} source={profile} />
                    </RowWrapperBasic>
                </RowWrapper>
            </CardWrapper>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        paddingVertical: height(2.2),
        borderLeftWidth: 3,
    },
    groups: {
        fontSize: totalSize(1.9)
    },
    usageTime: {
        fontSize: totalSize(1.2),
        color: colors.appTextColor3,


    },
    countWrapper: {
        backgroundColor: colors.appBgColor11,
        borderRadius: totalSize(5),
        paddingHorizontal: totalSize(1),
        verticalAlign: 'middle',
        textAlignVertical: 'center'
    },
    count: {
        fontSize: totalSize(1.2),
        color: colors.appTextColor2,
        marginVertical: height(1),

    },
})