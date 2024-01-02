import { Calendar, LocaleConfig } from 'react-native-calendars';
import { ComponentWrapper, MediumText, RegularText, RowWrapper, RowWrapperBasic } from '../../../../components';
import { totalSize, width } from 'react-native-dimension';
import { colors } from '../../../../constants';
import { StyleSheet } from 'react-native';

export const CalenderComponent = () => {
    return (
        <ComponentWrapper>
            {/* <RegularText>fsdd</RegularText> */}
            <Calendar
                hideArrows={true
                }
                style={{
                    borderRadius: totalSize(1.6),


                }}
                current={'2023-10-01'}
                onDayPress={day => {
                }}
                theme={{
                    selectedDayBackgroundColor: '#00adf5',

                }}
                markedDates={{
                    '2023-10-06': {
                        selected: true,
                        selectedColor: colors.appBgColor8,

                    },
                    '2023-10-07': {
                        selected: true,
                        selectedColor: colors.appBgColor8,
                    },
                    '2023-10-08': {
                        selected: true,
                        selectedColor: colors.appBgColor8,
                    },
                    '2023-10-09': {
                        selected: true,
                        selectedColor: colors.appBgColor8,
                    },
                    '2023-10-18': {
                        selected: true,
                        selectedColor: colors.appBgColor12,
                    },
                    '2023-10-24': {
                        selected: true,
                        selectedColor: colors.appBgColor12,
                    },
                    '2023-10-29': {
                        selected: true,
                        selectedColor: colors.appBgColor10,
                    },
                    '2023-10-30': {
                        selected: true,
                        selectedColor: colors.appBgColor10,
                    },
                }}
            />

        </ComponentWrapper>
    )
}

export const ProjectStatus = () => {
    return (
        <RowWrapper style={{ marginHorizontal: width(8) }}>
            <RowWrapperBasic>
                <RegularText style={styles.doingDot}>
                    {'\u2B24'}
                </RegularText>
                <MediumText style={styles.statusText}>On Doing</MediumText>
            </RowWrapperBasic>
            <RowWrapperBasic>
                <RegularText style={styles.completeDot}>
                    {'\u2B24'}
                </RegularText>
                <MediumText style={styles.statusText}>Completed</MediumText>
            </RowWrapperBasic>
            <RowWrapperBasic>
                <RegularText style={styles.progressDot}>
                    {'\u2B24'}
                </RegularText>
                <MediumText style={styles.statusText}>In Progress</MediumText>
            </RowWrapperBasic>
        </RowWrapper>
    )
}

const styles = StyleSheet.create({
    completeDot: {
        fontSize: totalSize(1.5),
        color: colors.appBgColor8
    },
    doingDot: {
        fontSize: totalSize(1.5),
        color: colors.appBgColor12
    },
    progressDot: {
        fontSize: totalSize(1.5),
        color: colors.appBgColor10
    },
    statusText: {
        fontSize: totalSize(1.5),
        paddingLeft: width(2)
    }
})