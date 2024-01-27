
import { ButtonColored, ComponentWrapper, DateTimeModal, Hrline, LargeText, LargeTitle, MainHeader, MainWrapper, MediumText, RegularText, RowWrapper, ScrollView, Spacer, TextInputColored, Wrapper } from '../../../components'
import useTechnicianReport from './hook'
import moment from 'moment'
import { styles } from './styles'
import { HeaderComponent, WeekDays } from '../../../components/commonComponent'
import { AssignProjectComponent, Note } from './component'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Button, Icon } from 'react-native-elements'
import { colors } from '../../../constants'
import { width, height } from 'react-native-dimension';
import { TextInput, TouchableOpacity } from 'react-native'
import { totalSize } from 'react-native-dimension';

const TechnicianReport = () => {
    const { isFromTimePickerVisible, isToTimePickerVisible, selectedToTime, showTimePicker,
        hideTimePicker, handleConfirm, formatTimeInCustomFormat, addField,
        deleteField, selectedFromTime, additionalFields, setSelectedDay } = useTechnicianReport()

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
                </ComponentWrapper>
                <Wrapper>
                    <RowWrapper>
                        <Wrapper>
                            <LargeTitle style={{ fontSize: totalSize(1.4) }}>From</LargeTitle>
                            <Spacer isTiny />
                            <TouchableOpacity onPress={() => showTimePicker('from')}>
                                <TextInput
                                    placeholderTextColor={'#000'}
                                    editable={false}
                                    placeholder={selectedFromTime ? formatTimeInCustomFormat(selectedFromTime) : '10:00 AM'}
                                    style={styles.inputField}
                                />
                            </TouchableOpacity>
                        </Wrapper>
                        <Wrapper>
                            <LargeTitle style={{ fontSize: totalSize(1.4) }}>From</LargeTitle>
                            <Spacer isTiny />
                            <TouchableOpacity onPress={() => showTimePicker('to')}>
                                <TextInput
                                    placeholderTextColor={'#000'}
                                    editable={false}
                                    placeholder={selectedToTime ? formatTimeInCustomFormat(selectedToTime) : '12:00 AM'}
                                    style={styles.inputField}
                                />
                            </TouchableOpacity>
                        </Wrapper>
                        <Wrapper style={styles.icon1}>
                            <Icon name='chevron-small-down' type='entypo' size={totalSize(3)} />
                        </Wrapper>
                        <Wrapper style={styles.icon2}>
                            <Icon name='chevron-small-down' type='entypo' size={totalSize(3)} />
                        </Wrapper>
                        <TouchableOpacity onPress={addField} style={{ alignSelf: 'flex-end', marginBottom: height(1) }}>
                            <Icon name='plus' type='feather' size={totalSize(2.7)} color={colors.appIconColor2} style={{ borderRadius: totalSize(10), borderColor: colors.appBorderColor2, borderWidth: 1.7, padding: 1 }} />
                        </TouchableOpacity>
                    </RowWrapper>
                    <Spacer isSmall />
                    {/* Render additional fields */}
                    {additionalFields?.map((field) => (
                        <Wrapper>
                            <RowWrapper key={field.id}>
                                <TouchableOpacity onPress={() => showTimePicker('from')}>
                                    <TextInput
                                        placeholderTextColor={'#000'}
                                        editable={false}
                                        placeholder={selectedFromTime ? formatTimeInCustomFormat(selectedFromTime) : '10:00 AM'}
                                        style={styles.inputField}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => showTimePicker('to')}>
                                    <TextInput
                                        placeholderTextColor={'#000'}
                                        editable={false}
                                        placeholder={selectedToTime ? formatTimeInCustomFormat(selectedToTime) : '12:00 AM'}
                                        style={styles.inputField}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => deleteField(field.id)}>
                                    <Icon name='trash' type='feather' color={colors.appIconColor6} />
                                </TouchableOpacity>
                            </RowWrapper>
                            <Spacer isSmall />
                        </Wrapper>

                    ))}

                    <DateTimePickerModal
                        isVisible={isFromTimePickerVisible}
                        mode='time'
                        onConfirm={(time) => handleConfirm(time, 'from')}
                        onCancel={() => hideTimePicker('from')}
                    />

                    <DateTimePickerModal
                        isVisible={isToTimePickerVisible}
                        mode='time'
                        onConfirm={(time) => handleConfirm(time, 'to')}
                        onCancel={() => hideTimePicker('to')}
                    />
                </Wrapper>
                <Spacer isSmall />
                <ComponentWrapper>
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

            </ScrollView>
        </MainWrapper>
    )
}

export default TechnicianReport

