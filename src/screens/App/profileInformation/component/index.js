import { Icon } from "react-native-elements"
import { AppIcons } from "../../../../assets"
import { CardWrapper, ComponentWrapper, Custom, Hrline, LargeText, LargeTitle, PrimaryImage, RegularText, RowWrapper, RowWrapperBasic, Spacer, Vrline, Wrapper } from "../../../../components"
import { totalSize, width, height } from 'react-native-dimension';
import { colors } from "../../../../constants";
import { StyleSheet, TouchableOpacity } from "react-native";

export const ProfileInformationComponent = ({ projectName, No, assignedTo, date, doing }) => {
    return (
        <ComponentWrapper>
            <CardWrapper style={styles.card}>
                <RowWrapper>
                    <Wrapper>
                        <RowWrapperBasic>
                            <LargeTitle style={styles.projectName}>{projectName}</LargeTitle>
                        </RowWrapperBasic>
                        <Spacer isTiny />
                        <LargeText style={styles.no}>{`No.${No}`}</LargeText>
                        <Spacer isSmall />
                        <RowWrapperBasic>
                            <LargeTitle style={styles.assignedTo}>Assigned to : </LargeTitle>
                            <LargeText style={styles.you}>You</LargeText>
                            {assignedTo?.map((item, index) => (
                                <PrimaryImage styles={{ marginLeft: 2 }} size={totalSize(2.9)}
                                    borderRadius={totalSize(5)} key={index}
                                    source={item.image} />
                            ))
                            }
                        </RowWrapperBasic>
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
                            <LargeText style={styles.doing}>{doing}</LargeText>
                        </RowWrapperBasic>
                    </Wrapper>
                    <Wrapper>
                        <Custom size={totalSize(2.2)} icon={AppIcons.messageText} />
                    </Wrapper>
                </RowWrapper>
            </CardWrapper>
            <Spacer />
            <Hrline Width={width(90)} style={{ opacity: .3 }} />
        </ComponentWrapper>
    )
}

export const AttachLeaveButtons = ({ onPressLeaveRequest }) => {
    return (
        <CardWrapper style={styles.buttonCard}>
            <RowWrapper>
                <TouchableOpacity style={styles.buttonWrapper}>
                    <Icon color={colors.appIconColor4} size={totalSize(2.5)} name="attachment" type="entypo" />
                    <LargeText style={styles.buttonText}>Attach Expense Report</LargeText>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonWrapper} onPress={onPressLeaveRequest}>
                    <Icon color={colors.appIconColor4} size={totalSize(2.5)} name="calendar-outline" type="ionicon" />
                    <LargeText style={styles.buttonText}>Leave Request</LargeText>
                </TouchableOpacity>
            </RowWrapper>
        </CardWrapper>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.appBgColor1,
        paddingVertical: totalSize(2)
    },
    buttonCard: {
        backgroundColor: colors.appBgColor1,
        paddingVertical: totalSize(2),
        width: width(100)
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
    you: {
        fontSize: totalSize(1.2),
        color: colors.appTextColor2,
        backgroundColor: colors.appButton7,
        borderRadius: totalSize(5),
        padding: totalSize(.45),
        alignSelf: 'center'

    },
    assignedTo: {
        fontSize: totalSize(1.6),
        color: colors.appTextColor3,
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
    tick: {
        marginTop: 6.5,
        marginLeft: width(2.3)
    },
    buttonWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingVertical: height(1),
        borderRadius: totalSize(1.2),
        backgroundColor: colors.appBorderColor13,
        width: width(44)
    },
    buttonText: {
        fontSize: totalSize(1.25),
        paddingLeft: width(3),
        color: colors.appTextColor4

    }
})