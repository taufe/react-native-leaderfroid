import { Icon } from "react-native-elements"
import { CardWrapper, ComponentWrapper, Custom, Hrline, LargeText, LargeTitle, MediumText, RegularText, RowWrapper, RowWrapperBasic, Spacer, Vrline, Wrapper } from "../../../../components"
import { AppIcons } from "../../../../assets"
import { colors } from "../../../../constants"
import { totalSize, height, width } from 'react-native-dimension';
import { StyleSheet } from "react-native";
import moment from "moment";

export const AssignProjectComponent = () => {
    const date = moment().format('MMM DD, YYYY')
    return (
        <ComponentWrapper>
            <CardWrapper style={styles.card}>
                <RowWrapper>
                    <Wrapper>
                        <RowWrapperBasic>
                            <LargeTitle style={styles.projectName}>{'projectName'}</LargeTitle>
                        </RowWrapperBasic>
                        <Spacer isTiny />
                        <LargeText style={styles.no}>{`No.${'22345'}`}</LargeText>
                        <Spacer height={height(1.5)} />
                        <Hrline Width={width(60)} style={{ opacity: .3 }} />
                        <Spacer isTiny />
                    </Wrapper>
                    <Wrapper style={styles.threeDotsWrapper}>
                        <Icon color={colors.appIconColor3} size={totalSize(2.4)}
                            name="dots-three-horizontal" type="entypo" />
                    </Wrapper>
                </RowWrapper>
                <RowWrapper>
                    <Wrapper>
                        <RowWrapperBasic>
                            <LargeText style={styles.dueDate}>Due date :</LargeText>
                            <LargeText style={styles.date}>{date}</LargeText>
                            <Vrline style={{ opacity: .3 }} />
                            <RegularText style={styles.dot}>{'\u2B24'}</RegularText>
                            <LargeText style={styles.doing}>{'On Doing'}</LargeText>
                        </RowWrapperBasic>
                    </Wrapper>
                    <Wrapper>
                        <Custom size={totalSize(2.2)} icon={AppIcons.messageText} />
                    </Wrapper>
                </RowWrapper>
            </CardWrapper>
        </ComponentWrapper>
    )
}

export const Note = () => {
    return (
        <CardWrapper style={{ ...styles.note, flex: 1 }}>
            <RowWrapperBasic>
                <Custom size={totalSize(3)} styles={{ paddingRight: width(2) }} icon={AppIcons.hand} />
                <LargeTitle style={styles.projectName}>Note*</LargeTitle>
            </RowWrapperBasic>
            <MediumText style={styles.dummyText}>
                Once you validate the project, so next time you can’t add or edit something in the project.            </MediumText>
        </CardWrapper>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.appBgColor1,
        paddingVertical: totalSize(2.5),

    },
    projectName: {
        fontSize: totalSize(1.9)
    },
    no: {
        fontSize: totalSize(1.6),
        color: colors.appTextColor3,
        backgroundColor: colors.appButton7,
        paddingHorizontal: width(4),
        alignSelf: 'flex-start',
        borderRadius: totalSize(1),
        paddingVertical: height(.5)
    },

    dueDate: {
        fontSize: totalSize(1.2),
        color: colors.appTextColor4,

    },
    date: {
        fontSize: totalSize(1.2),
        color: colors.appTextColor3,
        paddingRight: width(3),
        paddingLeft: width(1)
    },
    doing: {
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
        alignSelf: 'flex-start',

    },
    note: {
        width: width(90),
        paddingVertical: height(2),
        backgroundColor: 'transparent'
    },

    heading: {
        fontSize: totalSize(2.3),
        color: colors.appTextColor4
    },
})