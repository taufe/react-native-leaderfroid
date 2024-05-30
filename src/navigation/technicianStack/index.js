import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREEN, colors, tabs } from '../../constants';
import { Icon } from "react-native-elements";
import { Fragment } from "react";
import * as Technician from "../../screens/Technician";
import { totalSize } from 'react-native-dimension';
import { MediumText } from "../../components";
import { AssigningDetails, Conversation, DeliveryManagement, DeliverySheet, Notification, PersonalManagement, ProfileInformation, ProjectManagement, Report, SalesManagement } from "../../screens/App";
const Tab = createBottomTabNavigator();
const { Navigator, Screen } = createNativeStackNavigator();

function MyTabs() {
    const TabData = [
        {
            route: SCREEN.dashboard,
            component: Technician.Dashboard,
            iconName: 'home',
            iconType: 'octicon',
            label: 'Home',
            name: 'home',
            type: 'foundation',
        },
        {
            route: SCREEN.technicianChat,
            component: Technician.TechnicianChat,
            iconName: 'chatbox-outline',
            iconType: 'ionicon',
            label: 'Chat',
            name: 'chatbox',
            type: 'ionicon',

        },
        {
            route: SCREEN.technicianReport,
            component: Technician.TechnicianReport,
            iconName: 'file-2',
            iconType: 'fontisto',
            label: 'Report',
            name: 'file',
            type: 'font-awesome',

        },
        {
            route: SCREEN.setting,
            component: Technician.Setting,
            iconName: 'settings-outline',
            iconType: 'ionicon',
            label: 'Settings',
            name: 'settings',
            type: 'ionicon',
        },

    ]
    const iconSize = totalSize(3.2);
    return (
        <Tab.Navigator
            screenOptions={tabs.screenOptions}
            initialRouteName={SCREEN.home}  >
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
                                        name={focused ? item?.name : item?.iconName}
                                        type={focused ? item?.type : item?.iconType}
                                        color={color}
                                    // size={iconSize}
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

const TechnicianNavigation = () => {
    return (
        <Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={SCREEN.home}>
            <Screen name={SCREEN.tabs} component={MyTabs} />
            <Screen name={SCREEN.myInformation} component={Technician.MyInformation} />
            <Screen name={SCREEN.assigningDetails} component={AssigningDetails} />
            <Screen name={SCREEN.conversation} component={Conversation} />
            <Screen name={SCREEN.profileInformation} component={ProfileInformation} />
            <Screen name={SCREEN.notifitcation} component={Notification} />
            <Screen name={SCREEN.salesManagement} component={SalesManagement} />
            <Screen name={SCREEN.projectManagement} component={ProjectManagement} />
            <Screen name={SCREEN.deliveryManagement} component={DeliveryManagement} />
            <Screen name={SCREEN.personalManagement} component={PersonalManagement} />
            <Screen name={SCREEN.report} component={Report} />
            <Screen name={SCREEN.deliverySheet} component={DeliverySheet} />
        </Navigator>
    );
};
export default TechnicianNavigation