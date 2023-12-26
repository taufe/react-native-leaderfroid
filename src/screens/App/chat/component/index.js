import { StyleSheet, TouchableOpacity } from "react-native"
import { CardWrapper, LargeText, MediumText, PrimaryImage, RowWrapper, RowWrapperBasic, Wrapper } from "../../../../components"
import { totalSize, height } from 'react-native-dimension';
import { colors } from "../../../../constants";

export const GroupChat = ({ groups, participant, profileImages, participationCount, onPressChatCard }) => {
    return (
        <TouchableOpacity onPress={onPressChatCard}>
            <CardWrapper style={styles.card}>
                <RowWrapper>
                    <Wrapper>
                        <LargeText style={styles.groups}>{groups}</LargeText>
                        <LargeText style={styles.participant}>{`${participant} participant`}</LargeText>
                    </Wrapper>
                    <RowWrapperBasic>
                        {profileImages?.map((item, index) => (
                            <PrimaryImage styles={{ marginRight: -5 }} size={totalSize(4)}
                                borderRadius={totalSize(5)} key={index}
                                source={item.image} />
                        ))
                        }
                        <TouchableOpacity style={styles.countWrapper}>
                            <MediumText style={styles.count}>{participationCount}</MediumText>
                        </TouchableOpacity>

                    </RowWrapperBasic>
                </RowWrapper>
            </CardWrapper>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        paddingVertical: height(1.7)
    },
    groups: {
        fontSize: totalSize(1.9)
    },
    participant: {
        fontSize: totalSize(1.2),
        color: colors.appTextColor10,


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