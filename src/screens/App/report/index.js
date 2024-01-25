import { ComponentWrapper, Hrline, LargeText, LargeTitle, MainHeader, MainWrapper, MediumText, PrimaryImage, ScrollView, Spacer, Wrapper } from "../../../components"
import { ReportComponent, TimeLine } from "./component"
import useReport from "./hook"
import { styles } from "./styles"
import { totalSize } from 'react-native-dimension';
import moment from "moment";
import { WeekDays } from "../../../components/commonComponent";

const Report = ({ navigation, route }) => {
    const { item } = route?.params
    const { setSelectedDay } = useReport()
    const currentDate = moment().format('MMM DD, YYYY');
    return (
        <MainWrapper>
            <ScrollView>
                <MainHeader goBack />
                <Wrapper style={styles.rowWrapper}>
                    <LargeTitle>{`${item?.profileName} \nReport`}</LargeTitle>
                    <PrimaryImage size={totalSize(7)} source={item?.profile} />
                </Wrapper>
                <Spacer isSmall />
                <Hrline />
                <Spacer isSmall />
                <ComponentWrapper>
                    <MediumText style={styles.currentDate}>{currentDate}</MediumText>
                    <LargeText>Today</LargeText>
                </ComponentWrapper>
                <Spacer />
                <WeekDays setSelectedDay={setSelectedDay} />
                <Spacer />
                <ReportComponent />
                <Spacer isSmall />
                <LargeText style={styles.hourlyReport}>Hourly report</LargeText>
                <TimeLine />
            </ScrollView>
        </MainWrapper>
    )
}

export default Report