import { StyleSheet } from "react-native"
import { CardWrapper, Custom, LargeText, LargeTitle, PrimaryImage, RegularText, RowWrapper, RowWrapperBasic, Spacer, Vrline, Wrapper } from "../../../../components"
import { Icon } from "react-native-elements"
import { totalSize, height, width } from 'react-native-dimension';
import { colors } from "../../../../constants";
import { AppIcons } from "../../../../assets";
import { TouchableOpacity } from "react-native";

export const CompleteDetails = () => {
    return (
        <RowWrapper>
            <Wrapper>
                <RowWrapperBasic>
                    <LargeTitle style={styles.projectName}>Project Name</LargeTitle>
                    <LargeText style={styles.no}>No.22345</LargeText>
                </RowWrapperBasic>
                <Spacer isSmall />
                <RowWrapperBasic>
                    <LargeText style={styles.createdAt}>On date :</LargeText>
                    <LargeText style={styles.date}>Oct 22, 2023</LargeText>
                    <Vrline style={{ opacity: .3 }} />
                    <RegularText style={styles.dot}>{'\u2B24'}</RegularText>
                    <LargeText style={styles.pending}>Completed</LargeText>
                </RowWrapperBasic>
            </Wrapper>
            <Wrapper style={styles.threeDotsWrapper}>
                <Icon color={colors.appIconColor3} size={totalSize(2.4)}
                    name="dots-three-horizontal" type="entypo" />
            </Wrapper>
        </RowWrapper>
    )
}
export const ChatComponent = ({ profile, designation, onpressChatCard }) => {
    return (
        <TouchableOpacity onPress={onpressChatCard}>
            <RowWrapper>
                <RowWrapperBasic>
                    <PrimaryImage size={totalSize(3.2)} source={profile} />
                    <LargeText style={styles.designationText}>{designation}</LargeText>
                </RowWrapperBasic>
                <Custom size={totalSize(2)} icon={AppIcons.messageText} styles={styles.iconBg} />
            </RowWrapper>
        </TouchableOpacity>
    )
}
export const HourlyReport = () => {
    return (
        <Wrapper style={styles.hourlyCard}>
            <RowWrapper>
                <Wrapper>
                    <LargeText style={styles.reportHeading}>Technician’s hours report</LargeText>
                    <LargeText style={styles.totalTime}>Total spent time : <LargeText style={styles.hour}>8 hours</LargeText></LargeText>
                </Wrapper>
                <Icon name="chevron-right" type="feather" size={totalSize(2.4)} />
            </RowWrapper>
        </Wrapper>
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
        color: colors.appTextColor8,
        paddingLeft: width(3),
        paddingRight: width(2)
    },
    threeDotsWrapper: {
        alignSelf: 'flex-start'
    },
    iconBg: {
        backgroundColor: colors.appBgColor13,
        padding: totalSize(1.2),
        borderRadius: totalSize(5)
    },
    designationText: {
        fontSize: totalSize(1.4),
        marginTop: 2,
        paddingLeft: width(3),
        color: colors.appTextColor3
    },
    hourlyCard: {
        backgroundColor: colors.appBgColor13,
        marginHorizontal: width(5),
        width: width(80),
        paddingVertical: height(1),
        borderRadius: totalSize(1.6)
    },
    reportHeading: {
        color: colors.appTextColor4,
        fontSize: totalSize(1.5)
    },
    totalTime: {
        color: colors.appTextColor3,
        fontSize: totalSize(1.2),

    },
    hour: {
        color: colors.appTextColor4,
        fontSize: totalSize(1.2),

    },
})