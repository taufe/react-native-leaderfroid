import { Icon } from "react-native-elements"
import { CardWrapper, ComponentWrapper, Custom, Hrline, LargeText, LargeTitle, PrimaryImage, RegularText, RowWrapper, RowWrapperBasic, Spacer, Vrline, Wrapper } from "../../../../components"
import { AppIcons } from "../../../../assets"
import { StyleSheet } from "react-native"
import { totalSize, width, height } from 'react-native-dimension';
import { colors } from "../../../../constants";

export const DeliveryManagementComponent = ({ projectName, No, assignedTo, date, completed }) => {
    return (
        <ComponentWrapper>
            <CardWrapper style={styles.card}>
                <RowWrapper>
                    <Wrapper>
                        <RowWrapperBasic>
                            <LargeTitle style={styles.projectName}>{projectName}</LargeTitle>
                            <Custom styles={styles.tick} size={totalSize(2)} icon={AppIcons.tick} />
                        </RowWrapperBasic>
                        <Spacer isTiny />
                        <LargeText style={styles.no}>{`No.${No}`}</LargeText>
                        <Spacer isSmall />
                        <RowWrapperBasic>
                            <LargeTitle style={styles.assignedTo}>Assigned to : </LargeTitle>
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
                            <LargeText style={styles.onDate}>On date :</LargeText>
                            <LargeText style={styles.date}>{date}</LargeText>
                            <Vrline style={{ opacity: .3 }} />
                            <RegularText style={styles.dot}>{'\u2B24'}</RegularText>
                            <LargeText style={styles.completed}>{completed}</LargeText>
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
    assignedTo: {
        fontSize: totalSize(1.6),
        color: colors.appTextColor3,
    },
    onDate: {
        fontSize: totalSize(1.2),
        color: colors.appTextColor4,

    },
    date: {
        fontSize: totalSize(1.2),
        color: colors.appTextColor3,
        paddingRight: width(3),
        paddingLeft: width(1)
    },
    completed: {
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
        alignSelf: 'flex-start',

    },
    tick: {
        marginTop: 6.5,
        marginLeft: width(2.3)
    }
})