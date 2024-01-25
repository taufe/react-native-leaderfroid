import { useState } from "react";
import { CardWrapper, ComponentWrapper, Custom, Hrline, LargeText, LargeTitle, MediumText, RegularText, RowWrapper, RowWrapperBasic, Spacer, Vrline, Vrlines, Wrapper } from "../../../../components";
import { StyleSheet } from "react-native";
import { totalSize, height, width } from 'react-native-dimension';
import { colors } from "../../../../constants";
import { Icon } from "react-native-elements";
import { AppIcons } from "../../../../assets";
import Timeline from 'react-native-timeline-flatlist'
import { AttachFiles } from "../../../../components/commonComponent";

export const ReportComponent = () => {
    return (
        <ComponentWrapper>
            <CardWrapper style={styles.card}>
                <RowWrapper>
                    <Wrapper>
                        <RowWrapperBasic>
                            <LargeTitle style={styles.projectName}>{"projectName"}</LargeTitle>
                        </RowWrapperBasic>
                        <Spacer isTiny />
                        <LargeText style={styles.no}>{`No.${'22334'}`}</LargeText>
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
                            <LargeText style={styles.date}>{'Oct 12,2023'}</LargeText>
                            <Vrline style={{ opacity: .3 }} />
                            <RegularText style={styles.dot}>{'\u2B24'}</RegularText>
                            <LargeText style={styles.doing}>On Doing</LargeText>
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

export const HourlyReportComponent = () => {
    return (
        <Wrapper style={styles.mainBg}>
            <RowWrapper style={styles.rowWrapper}>
                <RowWrapperBasic style={{ alignItems: 'center' }}>
                    <Wrapper>
                        <Wrapper style={{ flexDirection: 'row', marginLeft: 10 }}>
                            <MediumText>10:00 AM</MediumText>
                            <Icon
                                name="dot-fill"
                                type="octicon"
                                size={totalSize(2.5)}
                                color={colors.appIconColor2}
                                style={{ marginVertical: -6 }}
                            />
                        </Wrapper>
                        <Vrlines Height={height(10)} color={colors.appBorderColor2} />
                        <Icon
                            name="dot-fill"
                            type="octicon"
                            size={totalSize(2.5)}
                            color={colors.appIconColor2}
                            style={{ marginVertical: -6 }}
                        />
                    </Wrapper>
                    <Wrapper style={{ paddingLeft: 10, width: width(83) }}>
                        <CardWrapper>
                            <LargeText>Project plan template</LargeText>
                        </CardWrapper>
                    </Wrapper>
                </RowWrapperBasic>
            </RowWrapper>
        </Wrapper>
    )
}

export const TimeLine = () => {
    const [data] = useState([
        {
            id: 0,
            time: '09:00',
            title: 'para primary center', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec est a, mattis tellus. Sed dignissim, metus nec .'
        },
        { id: 1, time: '10:45', title: 'para/primary/center', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec .' },
        { id: 2, time: '12:00', title: null, description: <AttachFiles bgColor={colors.appBgColor13} bgWidth={width(61)} /> },
    ]);

    const renderDetail = (rowData) => {
        const { id, title, description, icon } = rowData;

        return (
            <CardWrapper style={styles.timelineCard}>
                <Wrapper style={styles.detailContainer}>
                    <Wrapper style={styles.threeDotsWrapperTime}>
                        <Icon color={colors.appIconColor3} size={totalSize(2.4)}
                            name="dots-three-horizontal" type="entypo" />
                    </Wrapper>
                    {id == 2 ? '' : <LargeText style={styles.title}>{title}</LargeText>}
                    <RegularText style={styles.description}>{description}</RegularText>

                </Wrapper>
            </CardWrapper>
        );
    };
    return (
        <Wrapper style={styles.container}>
            <Timeline
                circleSize={10}
                timeStyle={{ color: colors.appTextColor4 }}
                circleColor={colors.appTextColor2}
                lineColor={colors.appTextColor2}
                lineWidth={width(.5)}
                style={styles.list}
                data={data}
                renderDetail={renderDetail}
            />
        </Wrapper>
    );
};

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
    mainBg: {
        backgroundColor: colors.appBgColor1,
        flex: 1,

    },

    rowWrapper: {
        width: width(92),
        alignItems: 'center',
    },
    timelineCard: {
        backgroundColor: colors.appBgColor1,
        width: width(68),
        paddingRight: width(2),
        paddingLeft: width(1)
    },
    container: {
        flex: 1,
        padding: 10,

    },
    list: {
        flex: 1,
        marginTop: 8,
    },
    detailContainer: {
        marginLeft: 10,
        paddingVertical: 10,
        // backgroundColor: 'red'
    },
    time: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    title: {
        fontSize: totalSize(1.5),
        color: colors.appTextColor2,

    },
    description: {
        fontSize: 14,
        color: colors.appTextColor4,
        opacity: .6
    },
    threeDotsWrapperTime: {
        alignSelf: 'flex-end',

    },

})