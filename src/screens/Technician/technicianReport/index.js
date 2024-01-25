
import { ButtonColored, ComponentWrapper, DateTimeModal, Hrline, LargeText, LargeTitle, MainHeader, MainWrapper, MediumText, ScrollView, Spacer, TextInputColored, Wrapper } from '../../../components'
import useTechnicianReport from './hook'
import moment from 'moment'
import { styles } from './styles'
import { HeaderComponent, WeekDays } from '../../../components/commonComponent'
import { AssignProjectComponent, Note } from './component'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Button } from 'react-native-elements'
import { colors } from '../../../constants'
import { width, height } from 'react-native-dimension';

const TechnicianReport = () => {
    const { setSelectedDay,
        showFromTimePicker,
        hideFromTimePicker,
        showToTimePicker,
        hideToTimePicker,
        handleConfirm,
        toTime,
        fromTime,
        isFromTimePickerVisible,
        isToTimePickerVisible,
        showTime, } = useTechnicianReport()
    const currentDate = moment().format('MMM DD, YYYY');
    return (
        <MainWrapper>
            <ScrollView>
                <MainHeader goBack title={'Hourly \nReport'} />
                <Spacer isTiny />
                <Hrline />
                <Spacer isSmall />
                <ComponentWrapper>
                    <MediumText style={styles.currentDate}>{currentDate}</MediumText>
                    <LargeText>Today</LargeText>
                </ComponentWrapper>
                <Spacer />
                <WeekDays setSelectedDay={setSelectedDay} />
                <Spacer />
                <AssignProjectComponent />
                <Spacer isSmall />
                <ComponentWrapper>
                    <HeaderComponent heading={'Hourly Report'} />
                    <TextInputColored
                        placeholder={'Write Comment'}
                        iconName={'attachment'}
                        iconType={'entypo'}
                        iconColor={colors.appTextColor2}
                        additionalIconName={'file-photo-o'}
                        additionalIconType={'font-awesome'}
                        additionalIconColor={colors.appIconColor2}
                        additionalIconStyle={{
                            borderLeftWidth: 1,
                            borderColor: colors.appBorderColor5,
                            paddingLeft: width(5),
                        }}
                    />
                    <Spacer />
                    <ButtonColored text='Submit' style={{ height: height(6) }} />
                    <Note />
                </ComponentWrapper>
                {/* <Button title="Select From Time" onPress={showFromTimePicker} />
                <DateTimePickerModal
                    isVisible={isFromTimePickerVisible}
                    mode="time"
                    onConfirm={(time) => handleConfirm(time, "from")}
                    onCancel={hideFromTimePicker}
                />

                <Button title="Select To Time" onPress={showToTimePicker} />
                <DateTimePickerModal
                    isVisible={isToTimePickerVisible}
                    mode="time"
                    onConfirm={(time) => handleConfirm(time, "to")}
                    onCancel={hideToTimePicker}
                /> */}

            </ScrollView>
        </MainWrapper>
    )
}

export default TechnicianReport