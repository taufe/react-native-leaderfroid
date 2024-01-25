import { ComponentWrapper, Hrline, MainHeader, MainWrapper, Spacer } from '../../../components'
import { PersonalChatList } from '../../../components/listComponents'
import useTechnicianChat from './hook'

const TechnicianChat = ({ navigation }) => {
    const { onPressChatCard } = useTechnicianChat(navigation)
    return (
        <MainWrapper>
            <MainHeader title={'Personal \nChat'} goBack />
            <Hrline />
            <Spacer />
            <ComponentWrapper>
                <PersonalChatList onPressChatCard={onPressChatCard} />
            </ComponentWrapper>
        </MainWrapper>
    )
}

export default TechnicianChat