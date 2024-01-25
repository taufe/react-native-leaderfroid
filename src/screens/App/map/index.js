import { Hrline, MainHeader, MainWrapper, ScrollView, Spacer, Wrapper } from '../../../components'
import { MapComponent } from '../../../components/commonComponent'
import { ProjectManagementList } from '../../../components/listComponents'

const Map = () => {
    return (
        <MainWrapper>
            <ScrollView>
                <MainHeader goBack title={'Track \nTechnicians'} />
                <Hrline />
                <Spacer />
                <MapComponent />
                <Spacer />
                <ProjectManagementList />
                <Spacer />
            </ScrollView>
        </MainWrapper>
    )
}

export default Map