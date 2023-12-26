
import { ComponentWrapper, Hrline, MainHeader, MainWrapper, Spacer } from '../../../components'
import { GroupChatList } from '../../../components/listComponents'
import useChat from './hook'

const Chat = ({ navigation }) => {
    const { onPressChatCard } = useChat(navigation)
    return (
        <MainWrapper>
            <MainHeader title={'Groups \nChat'} goBack />
            <Hrline />
            <Spacer />
            <ComponentWrapper>
                <GroupChatList onPressChatCard={onPressChatCard} />
            </ComponentWrapper>
        </MainWrapper>
    )
}

export default Chat