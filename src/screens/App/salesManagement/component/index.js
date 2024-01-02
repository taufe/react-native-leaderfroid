import { Icon } from "react-native-elements"
import { CardWrapper, ComponentWrapper, Custom, Hrline, LargeText, LargeTitle, PrimaryImage, RegularText, RowWrapper, RowWrapperBasic, Spacer, Vrline, Wrapper } from "../../../../components"
import { AppIcons } from "../../../../assets"
import { StyleSheet, TouchableOpacity } from "react-native"
import { totalSize, width, height } from 'react-native-dimension';
import { colors } from "../../../../constants";

export const SalesManagementComponent = ({ projectName, price, profileImage, date, profileName, onpressLeadCard }) => {
    return (
        <TouchableOpacity onPress={onpressLeadCard}>
            <ComponentWrapper>
                <CardWrapper style={styles.card}>
                    <RowWrapper>
                        <Wrapper>
                            <LargeTitle style={styles.projectName}>{projectName}</LargeTitle>
                            <Spacer isTiny />
                            <LargeText style={styles.price}>{`$${price}`}</LargeText>
                            <Spacer isSmall />
                            <RowWrapperBasic>
                                <PrimaryImage source={profileImage} size={totalSize(2.9)}
                                    borderRadius={totalSize(5)} />
                                <LargeTitle style={styles.profileName}>{profileName}</LargeTitle>
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
                                <LargeText style={styles.createdAt}>Created On :</LargeText>
                                <LargeText style={styles.date}>{date}</LargeText>
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
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.appBgColor1,
        paddingVertical: totalSize(2)
    },
    projectName: {
        fontSize: totalSize(1.9),

    },
    price: {
        fontSize: totalSize(1.6),
        color: colors.appTextColor3,
        backgroundColor: colors.appButton7,
        paddingHorizontal: width(2),
        alignSelf: 'flex-start',
        borderRadius: totalSize(1.6)
    },
    profileName: {
        fontSize: totalSize(1.6),
        color: colors.appTextColor10,
        paddingLeft: width(1.5)
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