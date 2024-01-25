import { TouchableOpacity } from "react-native";
import { AssignProjectModal, CreateProjectModal, Hrline, MainHeader, MainWrapper, Spacer, Wrapper } from "../../../components"
import { ProjectManagementList, ProjectTabsList } from "../../../components/listComponents"
import { HomeNotification } from "../../App/home/component"
import useDashboard from "./hook"
import { width } from 'react-native-dimension';
import { styles } from "./styles";
import { Icon } from "react-native-elements";
import { colors } from "../../../constants";

const Dashboard = ({ navigation }) => {
    const { onPress, onPressTab, activeTab, toggle, modalVisible,
        onPressCancel, toggleModal, showModal, onPressThreeDot, isShown, onPressNotification } = useDashboard(navigation)
    return (
        <MainWrapper>
            <Spacer isDoubleBase />
            <HomeNotification onPressNotification={onPressNotification} />
            <MainHeader title={'Let’s start work \non projects'} />
            <Hrline />
            <Spacer isSmall />
            <Wrapper style={{ marginLeft: width(5) }}>
                <ProjectTabsList onPress={onPressTab} activeTab={activeTab} />
            </Wrapper>
            <Spacer />
            <Wrapper>
                <ProjectManagementList onPress={toggleModal} />
                <CreateProjectModal toggleModal={toggleModal} isVisible={showModal} onPressThreeDot={onPressThreeDot}
                    isShown={isShown} />
            </Wrapper>
            <TouchableOpacity style={styles.plusWrapper} onPress={toggle} >
                <Icon name='plus' type='antdesign' color={colors.appTextColor2} />
            </TouchableOpacity>
            <AssignProjectModal toggleModal={toggle} isVisible={modalVisible} onPressCancel={onPressCancel} />
        </MainWrapper>
    )
}

export default Dashboard