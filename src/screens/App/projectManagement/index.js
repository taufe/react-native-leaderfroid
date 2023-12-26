
import { Hrline, MainHeader, MainWrapper, Spacer, Wrapper } from '../../../components'
import { ProjectManagementList, ProjectTabsList } from '../../../components/listComponents'
import useProjectManagement from './hook'
import { width } from 'react-native-dimension';

const ProjectManagement = ({ navigation }) => {
    const { onPressTab, activeTab } = useProjectManagement(navigation)
    return (
        <MainWrapper>
            <MainHeader title={'Project \nManagement'} goBack />
            <Hrline />
            <Spacer />
            <Wrapper style={{ marginLeft: width(5) }}>
                <ProjectTabsList onPress={onPressTab} activeTab={activeTab} />
            </Wrapper>
            <Spacer />
            <ProjectManagementList />
        </MainWrapper>
    )
}

export default ProjectManagement