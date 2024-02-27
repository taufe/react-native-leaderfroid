import React, { Fragment, useRef } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as App from '../../screens/App'
import { SCREEN, colors, tabs } from '../../constants';
import { Icon, } from 'react-native-elements';
import { MediumText, RegularText } from '../../components';
import { height, totalSize, width } from 'react-native-dimension';
const Tab = createBottomTabNavigator();
const { Navigator, Screen } = createNativeStackNavigator();

function MyTabs() {
    const TabData = [
        {
            route: SCREEN.home,
            component: App.Home,
            iconName: 'home',
            iconType: 'octicon',
            label: 'Home',
            name: 'home',
            type: 'foundation',
        },
        {
            route: SCREEN.schedule,
            component: App.Schedule,
            iconName: 'calendar-number-outline',
            iconType: 'ionicon',
            label: 'Schedule',
            name: 'calendar-number',
            type: 'ionicon',

        },
        {
            route: SCREEN.data,
            component: App.Data,
            iconName: 'database',
            iconType: 'feather',
            label: 'Data',
            name: 'database',
            type: 'font-awesome',

        },
        {
            route: SCREEN.calender,
            component: App.Calender,
            iconName: 'calendar-outline',
            iconType: 'ionicon',
            label: 'Calendar',
            name: 'calendar',
            type: 'ionicon',

        },
        {
            route: SCREEN.profile,
            component: App.Profile,
            iconName: 'user-o',
            iconType: 'font-awesome',
            label: 'Account',
            name: 'user',
            type: 'font-awesome',
        },

    ]
    const iconSize = totalSize(3.2);
    return (
        <Tab.Navigator
            screenOptions={tabs.screenOptions}
            initialRouteName={SCREEN.home}

        >

            {TabData.map((item, index) => {
                return (
                    <Tab.Screen
                        key={index}
                        name={item?.route}
                        component={item?.component}
                        options={() => ({
                            tabBarShowLabel: false,
                            tabBarIcon: ({ color, focused }) => (
                                <Fragment>
                                    <Icon
                                        name={focused ? item.name : item.iconName}
                                        type={focused ? item.type : item.iconType}
                                        color={color}
                                        size={iconSize}
                                    />
                                    <MediumText style={{ color: colors.appTextColor2, fontSize: totalSize(1.45) }}>{focused ? item?.label : ''}</MediumText>
                                </Fragment>
                            ),
                        })}
                    >
                    </Tab.Screen>
                )
            })}

        </Tab.Navigator>

    )
}

const AppNavigation = () => {
    return (
        <Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={SCREEN.home}>
            <Screen name={SCREEN.tabs} component={MyTabs} />
            <Screen name={SCREEN.salesManagement} component={App.SalesManagement} />
            <Screen name={SCREEN.projectManagement} component={App.ProjectManagement} />
            <Screen name={SCREEN.deliveryManagement} component={App.DeliveryManagement} />
            <Screen name={SCREEN.personalManagement} component={App.PersonalManagement} />
            <Screen name={SCREEN.createNewLead} component={App.CreateNewLead} />
            <Screen name={SCREEN.conversation} component={App.Conversation} />
            <Screen name={SCREEN.profileInformation} component={App.ProfileInformation} />
            <Screen name={SCREEN.report} component={App.Report} />
            <Screen name={SCREEN.notifitcation} component={App.Notification} />
            <Screen name={SCREEN.assigningDetails} component={App.AssigningDetails} />
            <Screen name={SCREEN.deliverySheet} component={App.DeliverySheet} />
            <Screen name={SCREEN.map} component={App.Map} />
            <Screen name={SCREEN.chat} component={App.Chat} />
        </Navigator>
    );
};
export default AppNavigation


