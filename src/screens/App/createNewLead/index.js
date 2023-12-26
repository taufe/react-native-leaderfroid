import { View, Text } from 'react-native'
import React from 'react'
import { ComponentWrapper, Hrline, MainHeader, MainWrapper, ScrollView, Spacer, TextInputColored } from '../../../components'
import { HeaderComponent } from '../../../components/commonComponent'
import { height } from 'react-native-dimension';
import PrimaryDropDown from '../../../components/dropDown';
import useCreateNewLead from './hook';

const CreateNewLead = () => {
    const { selectStatus, setselectStatus, StatusData } = useCreateNewLead()
    return (
        <MainWrapper>
            <ScrollView>
                <MainHeader title={'Create \nNew Lead'} goBack />
                <Hrline />
                <Spacer isSmall />
                <ComponentWrapper>
                    <HeaderComponent heading={'Lead Information'} />
                    <TextInputColored placeholder={'Lead Name'} />
                    <Spacer height={height(1.5)} />
                    <TextInputColored placeholder={'Lead Contact'} />
                    <Spacer height={height(1.5)} />
                    <HeaderComponent heading={'Amount Information'} />
                    <TextInputColored placeholder={'$ Amount'} />
                    <Spacer height={height(1.5)} />
                    <HeaderComponent heading={'Status'} />
                    <PrimaryDropDown
                        items={StatusData}
                        value={selectStatus}
                        setValue={setselectStatus}
                        placeholder={'Select Your Status'}
                    />
                    <Spacer />
                    <Hrline />
                    <Spacer height={height(1.5)} />
                    <HeaderComponent heading={'Project Information'} />
                    <TextInputColored placeholder={'Project Title'} />
                    <Spacer height={height(1.5)} />
                    <TextInputColored placeholder={'Project Description'} containerStyle={{ height: height(13.5) }} />
                    <Spacer height={height(1.5)} />
                    <HeaderComponent heading={'Scheduling'} />

                </ComponentWrapper>
            </ScrollView>
        </MainWrapper>
    )
}

export default CreateNewLead