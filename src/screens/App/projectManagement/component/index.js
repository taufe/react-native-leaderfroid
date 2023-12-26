import { Icon } from "react-native-elements"
import { CardWrapper, ComponentWrapper, Custom, Hrline, LargeText, LargeTitle, RegularText, RowWrapper, RowWrapperBasic, Spacer, Vrline, Wrapper } from "../../../../components"
import { AppIcons } from "../../../../assets"
import { StyleSheet } from "react-native"
import { totalSize, width, height } from 'react-native-dimension';
import { colors } from "../../../../constants";

export const ProjectManagementComponent = ({ projectName, No, cost, date, pending }) => {
    return (
        <ComponentWrapper>
            <CardWrapper style={styles.card}>
                <RowWrapper>
                    <Wrapper>
                        <LargeTitle style={styles.projectName}>{projectName}</LargeTitle>
                        <Spacer isTiny />
                        <LargeText style={styles.no}>{`No.${No}`}</LargeText>
                        <Spacer isSmall />
                        <LargeTitle style={styles.cost}>{`Cost : ${cost}`}</LargeTitle>
                        <Spacer height={height(2.7)} />
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
                            <LargeText style={styles.createdAt}>Created on :</LargeText>
                            <LargeText style={styles.date}>{date}</LargeText>
                            <Vrline style={{ opacity: .3 }} />
                            <RegularText style={styles.dot}>{'\u2B24'}</RegularText>
                            <LargeText style={styles.pending}>{pending}</LargeText>
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

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.appBgColor1,
        paddingVertical: totalSize(2)
    },
    projectName: {
        fontSize: totalSize(1.9)
    },
    no: {
        fontSize: totalSize(1.6),
        color: colors.appTextColor3,
        backgroundColor: colors.appButton7,
        paddingHorizontal: width(2),
        alignSelf: 'flex-start',
        borderRadius: totalSize(1.6)
    },
    cost: {
        fontSize: totalSize(1.6),
        color: colors.appTextColor4,
        opacity: .6
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
        color: colors.appTextColor6,
        paddingLeft: width(3),
        paddingRight: width(2)
    },
    threeDotsWrapper: {
        alignSelf: 'flex-start',

    }
})