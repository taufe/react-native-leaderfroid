import { StyleSheet, TouchableOpacity } from "react-native"
import { CardWrapper, ComponentWrapper, Custom, LargeText, LargeTitle, MediumText, PrimaryImage, RegularText, RowWrapper, RowWrapperBasic, Spacer, Wrapper } from "../../../../components"
import { colors } from "../../../../constants"
import { AppIcons } from "../../../../assets"
import { totalSize, width, height } from 'react-native-dimension';

export const HomeNotification = ({ onPressNotification, onPressChat }) => {
    return (
        <RowWrapper>
            <LargeTitle style={styles.hey}>Hey!</LargeTitle>
            <RowWrapperBasic>
                <Custom onPress={onPressNotification} styles={styles.notification} size={totalSize(2.5)} icon={AppIcons.notificationBing} />
                <Custom onPress={onPressChat} styles={styles.notification} size={totalSize(2.5)} icon={AppIcons.chat} />
            </RowWrapperBasic>
        </RowWrapper>
    )
}

export const Heading = ({ heading }) => {
    return (
        <RowWrapper>
            <LargeTitle style={styles.heading}>{heading}</LargeTitle>
        </RowWrapper>
    )
}
export const GroupCard = ({ groupImages, groupName, teamManagement, profileImages, participationCount, bgColor }) => {
    return (
        <CardWrapper style={{ ...styles.card, backgroundColor: bgColor }}>
            <RowWrapper>
                <Wrapper>
                    <LargeTitle style={styles.groupName}>{groupName}</LargeTitle>
                    <LargeTitle style={styles.teamManagement}>{teamManagement}</LargeTitle>
                    <Spacer isSmall />
                    <RowWrapperBasic>
                        {profileImages?.map((item, index) => (
                            <PrimaryImage styles={{ marginLeft: -5 }} size={totalSize(2.9)}
                                borderRadius={totalSize(5)} key={index}
                                source={item.image} />
                        ))
                        }
                        <TouchableOpacity style={styles.countWrapper}>
                            <MediumText style={styles.count}>{participationCount}</MediumText>
                        </TouchableOpacity>
                        <RegularText style={styles.participant}>participant</RegularText>
                    </RowWrapperBasic>
                </Wrapper>
                <Wrapper>
                    <PrimaryImage source={groupImages} />
                </Wrapper>
            </RowWrapper>
        </CardWrapper>
    )
}

export const ManagementComponent = ({ icon, managementText, bgColor, onPress }) => {
    return (
        <Wrapper>
            <TouchableOpacity onPress={onPress}>
                <CardWrapper style={styles.CardWrapper}>
                    <Wrapper style={[{ backgroundColor: bgColor }, styles.iconBg]}>
                        <Custom size={totalSize(3)} styles={{ alignSelf: 'center' }} icon={icon} />
                    </Wrapper>
                    <Spacer isSmall />
                    <LargeText style={styles.manageMentText}>{managementText}</LargeText>
                    <Spacer />
                </CardWrapper>
            </TouchableOpacity>
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    card: {
        width: width(84.1)
    },
    hey: {
        color: colors.appTextColor4,
        fontSize: totalSize(2.2)
    },
    heading: {
        color: colors.appTextColor4,
        fontSize: totalSize(1.8)
    },
    notification: {
        backgroundColor: colors.appTextColor1,
        borderRadius: totalSize(5),
        padding: totalSize(.7),
        marginLeft: width(3)
    },
    groupName: {
        fontSize: totalSize(1.2),
        color: colors.appTextColor3
    },
    participant: {
        fontSize: totalSize(1.2),
        color: colors.appTextColor3,
        alignSelf: 'center',
        marginBottom: 5,
        paddingLeft: 5,
    },
    teamManagement: {
        fontSize: totalSize(2),
        color: colors.appTextColor2
    },
    countWrapper: {
        backgroundColor: colors.appBgColor1,
        borderRadius: totalSize(5),
        paddingVertical: totalSize(.5),
        paddingHorizontal: totalSize(.4)
    },
    count: {
        fontSize: totalSize(1.2),
        color: colors.appTextColor4,

    },
    CardWrapper: {
        backgroundColor: colors.appBgColor1,
        width: width(42.5),
        marginRight: width(4)
    },
    iconBg: {
        alignSelf: 'center',
        marginTop: height(2),
        borderRadius: totalSize(1.4),
        paddingVertical: height(.7),
        paddingHorizontal: width(2)
    },
    manageMentText: {
        textAlign: 'center'
    }
})