
import { Hrline, MainHeader, MainWrapper, ScrollView, Spacer } from '../../../components'
import { ProjectManagementList } from '../../../components/listComponents'
import { CalenderComponent, ProjectStatus } from './component'

const Calender = () => {
    return (
        <MainWrapper>
            <ScrollView>
                <MainHeader goBack title={'Assigned Projects \nSchedule'} />
                <Hrline />
                <Spacer />
                <CalenderComponent />
                <Spacer isSmall />
                <ProjectStatus />
                <Spacer />
                <ProjectManagementList />
                <Spacer />
            </ScrollView>
        </MainWrapper>
    )
}

export default Calender