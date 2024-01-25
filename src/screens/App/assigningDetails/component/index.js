import { StyleSheet } from "react-native"
import { LargeText, LargeTitle, RegularText, RowWrapper, RowWrapperBasic, Spacer, Vrline, Wrapper } from "../../../../components"
import { Icon } from "react-native-elements"
import { totalSize, height, width } from 'react-native-dimension';
import { colors } from "../../../../constants";

export const AssignDetails = () => {
    return (
        <RowWrapper>
            <Wrapper>
                <RowWrapperBasic>
                    <LargeTitle style={styles.projectName}>Project Name</LargeTitle>
                    <LargeText style={styles.no}>No.22345</LargeText>
                </RowWrapperBasic>
                <Spacer isSmall />
                <RowWrapperBasic>
                    <LargeText style={styles.createdAt}>Created on :</LargeText>
                    <LargeText style={styles.date}>Oct 22, 2023</LargeText>
                    <Vrline style={{ opacity: .3 }} />
                    <RegularText style={styles.dot}>{'\u2B24'}</RegularText>
                    <LargeText style={styles.pending}>pending</LargeText>
                </RowWrapperBasic>
            </Wrapper>
            <Wrapper style={styles.threeDotsWrapper}>
                <Icon color={colors.appIconColor3} size={totalSize(2.4)}
                    name="dots-three-horizontal" type="entypo" />
            </Wrapper>
        </RowWrapper>
    )
}

const styles = StyleSheet.create({
    projectName: {
        fontSize: totalSize(1.9)
    },
    no: {
        fontSize: totalSize(1.6),
        color: colors.appTextColor3,
        backgroundColor: colors.appButton7,
        paddingHorizontal: width(2),
        borderRadius: totalSize(1.6),
        marginLeft: width(3),
        marginTop: height(.3)
    },
    createdAt: {
        fontSize: totalSize(1.2),
        color: colors.appTextColor4,

    },
    date: {
        fontSize: totalSize(1.2),
        color: colors.appTextColor3,
        paddingRight: width(3),
        paddingLeft: width(1)
    },
    pending: {
        fontSize: totalSize(1.2),
        color: colors.appTextColor4,
    },
    dot: {
        fontSize: totalSize(1.2),
        color: colors.appTextColor12,
        paddingLeft: width(3),
        paddingRight: width(2)
    },
    threeDotsWrapper: {
        alignSelf: 'flex-start'
    }
})