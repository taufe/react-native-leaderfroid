
import { ButtonColored, CardWrapper, ComponentWrapper, Hrline, LargeText, MainHeader, MainWrapper, ScrollView, Spacer, TextInputColored } from '../../../components'
import { AssignDetails } from './component'
import { styles } from './styles'
import { width, height } from 'react-native-dimension';
import { AttachFiles, HeaderComponent, ImagesComponent } from '../../../components/commonComponent'
import { NotesList, PhotoList } from '../../../components/listComponents'
import PrimaryDropDown from '../../../components/dropDown';
import useAssignDetails from './hook';
import { colors } from '../../../constants';
import DatePicker from 'react-native-date-picker'
import { NotesData } from '../../../utilities/dummyaData';

const AssigningDetails = () => {
    const { selectCategory, setSelectCategory, selectCategoryData, date, setDate, open, setOpen,
        selectedDate, setSelectedDate, openGallery, profilePhotos } = useAssignDetails()
    return (
        <MainWrapper>
            <MainHeader goBack title={'Assigning \nDetails'} />
            <Hrline />
            <Spacer />
            <ScrollView>
                <CardWrapper style={styles.card}>
                    <AssignDetails />
                    <Spacer isTiny />
                    <Hrline Width={width(80)} />
                    <Spacer />
                    <AttachFiles bgColor={colors.appBgColor13} bgWidth={width(80)} />
                    <Spacer />
                    <ImagesComponent />
                    <Spacer isSmall />
                    <Hrline Width={width(80)} />
                    <Spacer isSmall />
                    <ComponentWrapper style={styles.notes}>
                        <LargeText style={styles.attachFile}>Notes</LargeText>
                        <Spacer isTiny />
                        <NotesList data={NotesData} />
                        <Spacer />
                        <HeaderComponent heading={'Assign Project to'} />
                    </ComponentWrapper>
                    <ComponentWrapper>
                        <PrimaryDropDown items={selectCategoryData}
                            value={selectCategory}
                            setValue={setSelectCategory}
                            placeholder={'Technicial'}
                            bgColor={colors.appBgColor13}
                        />
                        <Spacer />
                        <PhotoList profilePhotos={profilePhotos} openGallery={openGallery} />
                        <HeaderComponent heading={'Scheduling'} />
                        <TextInputColored inputContainerStyle={styles.dateInputStyle}
                            placeholder={'Select the date'}
                            value={selectedDate.toLocaleDateString()}
                            iconName={'calendar-outline'}
                            iconType={'ionicon'}
                            onPress={() => setOpen(true)}
                            editable={false} />
                        <DatePicker modal open={open}
                            date={date} onConfirm={(date) => {
                                setOpen(false)
                                setDate(date)
                                setSelectedDate(date)
                            }} onCancel={() => { setOpen(false) }}
                        />
                        <Spacer height={height(3)} />
                        <ButtonColored text='Publish' />
                        <Spacer height={height(3)} />
                    </ComponentWrapper>
                </CardWrapper>
                <Spacer />
            </ScrollView>
        </MainWrapper>
    )
}

export default AssigningDetails