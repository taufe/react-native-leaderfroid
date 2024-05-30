import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { AssignToModal, CreateProjectModal, Hrline, MainHeader, MainWrapper, ProjectViewModal, Spacer, Wrapper } from '../../../components'
import { ScheduleHeading } from './component'
import { ProjectStatus, WeekDays } from '../../../components/commonComponent'
import { ScheduleList } from '../../../components/listComponents'
import { colors } from '../../../constants'
import { height } from 'react-native-dimension';
import useSchedule from './hook'

const Schedule = () => {
    const { toggleModal, modalVisible, onPressAssignProject,
        projectModalVisible, setSelectedDay } = useSchedule()
    return (
        <MainWrapper>
            <MainHeader title={'Employee \nSchedule'} />
            <Hrline />
            <Spacer isTiny />
            <ScheduleHeading />
            <Spacer />
            <ProjectStatus />
            <Spacer height={height(1.5)} />
            <WeekDays setSelectedDay={setSelectedDay} />
            <ScrollView>
                <Wrapper style={{ backgroundColor: colors.appBgColor1, paddingVertical: height(2) }}>
                    <ScheduleList onPress={toggleModal} />
                    <AssignToModal isVisible={modalVisible} toggleModal={toggleModal} onPressAssignProject={onPressAssignProject} />
                    <ProjectViewModal isVisible={projectModalVisible} toggleModal={toggleModal} />
                </Wrapper>
            </ScrollView>
        </MainWrapper>
    )
}

export default Schedule