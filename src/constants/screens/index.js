import { height } from 'react-native-dimension'
import { colors } from '../colors';
export const SCREEN = {
    // stacks
    authStack: 'authStack',
    appStack: 'appStack',
    tabs: 'tabs',
    technicianStack: 'technicianStack',
    // AuthNavigation
    splash: 'splash',
    signIn: 'signIn',
    onBoarding: 'onBoarding',
    signUp: 'signUp',
    chooseSelection: 'chooseSelection',

    // AppNavigation
    home: 'home',
    chat: 'chat',
    data: 'data',
    calender: 'calender',
    profile: 'profile',
    salesManagement: 'salesManagement',
    projectManagement: 'projectManagement',
    deliveryManagement: 'deliveryManagement',
    personalManagement: 'personalManagement',
    createNewLead: 'createNewLead',
    conversation: 'conversation',
    profileInformation: 'profileInformation',
    report: 'report',
    notifitcation: 'notifitcation',
    assigningDetails: 'assigningDetails',
    deliverySheet: 'deliverySheet',
    map: 'map',
    schedule: 'schedule',
    // Technician Navigator

    dashboard: 'dashboard',
    technicianChat: 'technicianChat',
    technicianReport: 'technicianReport',
    setting: 'setting',
    myInformation: 'myInformation',

}


export const tabs = {
    screenOptions: {
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: colors.appIconColor2,
        tabBarInactiveTintColor: colors.appIconColor3,
        tabBarStyle: {
            elevation: 5,
            backgroundColor: colors.appBgColor1,
            height: height(10),
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingTop: 10

        },
    }
};