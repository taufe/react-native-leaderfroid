import { MainHeader, MainWrapper, Spacer } from '../../../components'
import { NotificationList } from '../../../components/listComponents'

const Notification = () => {
    return (
        <MainWrapper>
            <MainHeader goBack title={'Your \nNotification'} />
            <Spacer />
            <NotificationList />
        </MainWrapper>
    )
}

export default Notification