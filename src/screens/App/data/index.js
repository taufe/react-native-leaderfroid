import { Hrline, MainHeader, ScrollView, Spacer } from '../../../components';
import { DataIntegrationList } from '../../../components/listComponents';
import { MainWrapper, Wrapper } from './../../../components/wrappers/index';
import { ButtonsComponent } from './component';

const Data = () => {
    return (
        <MainWrapper>
            <MainHeader title={'Data \nIntegration'} goBack />
            <Hrline />
            <Spacer />
            <ScrollView>
                <DataIntegrationList />
            </ScrollView>
            <ButtonsComponent />
        </MainWrapper>
    )
}

export default Data