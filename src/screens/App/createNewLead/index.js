import { ButtonColored, ComponentWrapper, Hrline, MainHeader, MainWrapper, MediumText, PrimaryImage, ScrollView, Spacer, TextInputColored, Wrapper } from '../../../components'
import { HeaderComponent } from '../../../components/commonComponent'
import { height, totalSize, width } from 'react-native-dimension';
import PrimaryDropDown from '../../../components/dropDown';
import useCreateNewLead from './hook';
import DatePicker from 'react-native-date-picker'
import { AppImages } from '../../../assets';
import { colors } from '../../../constants';
import { Uploadfile } from './component';
import { TouchableOpacity } from 'react-native';

const CreateNewLead = ({ navigation }) => {
    const { selectStatus, setselectStatus, StatusData, date, setDate, open, setOpen,
        selectedDate, setSelectedDate, updateDate, setUpdateDate, updateOpen,
        setUpdateOpen, updateSelectDate, setUpdateSelectDate,
        onPressCreateNewLead, onPressMap, PickDocument, selectedFiles, } = useCreateNewLead(navigation)

    return (
        <MainWrapper>
            <ScrollView>
                <MainHeader title={'Create \nNew Lead'} goBack />
                <Hrline style={{ opacity: .5 }} />
                <Spacer isSmall />
                <ComponentWrapper>
                    <HeaderComponent heading={'Lead Information'} />
                    <TextInputColored placeholder={'Lead Name'} />
                    <Spacer height={height(1.5)} />
                    <TextInputColored placeholder={'Lead Contact'} />
                    <Spacer height={height(1.5)} />
                    <HeaderComponent heading={'Amount Information'} />
                    <TextInputColored placeholder={'$ Amount'} />
                    <Spacer height={height(1.5)} />
                    <HeaderComponent heading={'Status'} />
                    <PrimaryDropDown
                        items={StatusData}
                        value={selectStatus}
                        setValue={setselectStatus}
                        placeholder={'pending'}
                        style={{ backgroundColor: colors.appBgColor1, height: height(7), borderRadius: totalSize(1.6) }}
                    />
                    <Spacer />
                    <Hrline style={{ opacity: .5 }} />
                    <Spacer height={height(1.5)} />
                    <HeaderComponent heading={'Project Information'} />
                    <TextInputColored placeholder={'Project Title'} />
                    <Spacer height={height(1.5)} />
                    <TextInputColored placeholder={'Project Description'} containerStyle={{ height: height(13.5) }} />
                    <Spacer height={height(1.5)} />
                    <HeaderComponent heading={'Scheduling'} />
                    <TextInputColored placeholder={'Select the date'}
                        iconName={'calendar-outline'} iconType={'ionicon'}
                        value={selectedDate.toLocaleDateString()}
                        onPress={() => setOpen(true)} editable={false} />
                    <DatePicker modal open={open} date={date} onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                        setSelectedDate(date)
                    }} onCancel={() => { setOpen(false) }}
                    />
                    <Spacer height={totalSize(1.5)} />
                    <HeaderComponent heading={'Map'} />
                    <TouchableOpacity onPress={onPressMap}>
                        <PrimaryImage styles={{ width: width(90), height: height(15) }} source={AppImages.map} />
                    </TouchableOpacity>
                    <Spacer isSmall />
                    <Hrline style={{ opacity: .5 }} />
                    <Spacer height={height(1.5)} />
                    <Wrapper style={{ flexDirection: 'row' }}>
                        <HeaderComponent heading={'Update Timeline'} />
                        <MediumText style={{ color: colors.appTextColor3, fontSize: totalSize(1.5), marginTop: 3, paddingLeft: 5 }}>(Days/Week/Months)</MediumText>
                    </Wrapper>
                    <TextInputColored placeholder={'Select the date'}
                        iconName={'calendar-outline'} iconType={'ionicon'}
                        value={updateSelectDate.toLocaleDateString()}
                        onPress={() => setUpdateOpen(true)} editable={false} />
                    <DatePicker modal open={updateOpen} date={updateDate} onConfirm={(date) => {
                        setUpdateOpen(false)
                        setUpdateDate(date)
                        setUpdateSelectDate(date)
                    }}
                        onCancel={() => { setUpdateOpen(false) }}
                    />
                    <Spacer />
                    <Hrline style={{ opacity: .5 }} />
                    <Spacer height={height(1.5)} />
                    <HeaderComponent heading={'Project File'} />
                    <Uploadfile PickDocument={PickDocument} selectedFiles={selectedFiles} />
                    <Spacer />
                    <ButtonColored text='Create Lead' onPress={onPressCreateNewLead} />
                    <Spacer height={height(3)} />
                </ComponentWrapper>
            </ScrollView>
        </MainWrapper>
    )
}

export default CreateNewLead