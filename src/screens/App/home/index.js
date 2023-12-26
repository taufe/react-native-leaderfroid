
import { ComponentWrapper, Hrline, MainHeader, MainWrapper, Spacer, Wrapper } from '../../../components'
import { GroupList, ManagementList } from '../../../components/listComponents'
import { Heading, HomeNotification } from './component'
import { height } from 'react-native-dimension';
import useHome from './hook';

const Home = ({ navigation }) => {
    const { onPressManagement } = useHome(navigation)
    return (
        <MainWrapper>
            <Spacer isDoubleBase />
            <HomeNotification />
            <MainHeader title={'Let’s begin to manage your projects'} />
            <Hrline />
            <Spacer isTiny />
            <Heading heading={'Groups'} />
            <Spacer height={height(1.5)} />
            <ComponentWrapper>
                <GroupList />
            </ComponentWrapper>
            <Spacer height={height(1.5)} />
            <Heading heading={'Do your work on'} />
            <Spacer height={height(1.5)} />
            <ManagementList onPress={onPressManagement} />
        </MainWrapper>
    )
}

export default Home