import { AppIcons, AppImages } from "../../assets";
import { height } from 'react-native-dimension';
import { SCREEN } from "../../constants";
import moment from "moment";

export const OnBoardingsData = [
    {
        id: '1', imageHeight: height(70), bottom: height(15.5), color: '#E0F1FD', uri: AppImages.onboarding1, title: 'Management \n System',
        description: 'The user needs to perform various tasks such as site management, staff management project scheduling, and handling offers'
    },
    {
        id: '2', imageHeight: height(62), bottom: height(18.5), color: '#E4E9FF', uri: AppImages.onboarding2, title: 'Handing \n Offers',
        description: 'Sequential offer numbering system where offers eventually transition into construction projects, Integration of leads.'
    },
    {
        id: '3', imageHeight: height(65), bottom: height(18), color: '#E3FFF2', uri: AppImages.onboarding3, title: 'Project \n Scheduling',
        description: 'Comprehensive view of all scheduled construction projects. Creation of teams for specific sites with color-coded differentiation'
    },
]

export const GroupData = [
    {
        id: 1,
        bgColor: '#E0F1FD',
        groupImages: AppImages.homeImage,
        groupName: 'New Group',
        teamManagement: 'Team \n Management',
        profileImages: [
            { image: AppImages.profile1 },
            { image: AppImages.profile2 },
            { image: AppImages.profile3 }
        ],
        participationCount: '45+',
    },
    {
        id: 2,
        bgColor: '#E4E9FF',
        groupImages: AppImages.salesManagement,
        groupName: 'New Group',
        teamManagement: 'Team \n Management',
        profileImages: [
            { image: AppImages.profile1 },
            { image: AppImages.profile2 },
            { image: AppImages.profile3 }
        ],
        participant: 20,
        participationCount: '45+',
    },
]
export const GroupChatData = [
    {
        id: 1,
        bgColor: '#E0F1FD',
        groups: 'All Employees',
        profileImages: [
            { image: AppImages.profile1 },
            { image: AppImages.profile2 },
            { image: AppImages.profile3 }
        ],
        participant: 20,
        participationCount: '45+',
    },
    {
        id: 2,
        bgColor: '#E0F1FD',
        groups: 'New Group',
        profileImages: [
            { image: AppImages.profile1 },
            { image: AppImages.profile2 },
            { image: AppImages.profile3 }
        ],
        participant: 18,
        participationCount: '45+',
    },
    {
        id: 3,
        bgColor: '#E0F1FD',
        groups: 'Worker Group',
        profileImages: [
            { image: AppImages.profile1 },
            { image: AppImages.profile2 },
            { image: AppImages.profile3 }
        ],
        participant: 25,
        participationCount: '45+',
    },
    {
        id: 4,
        bgColor: '#E0F1FD',
        groups: 'Experts Group',
        profileImages: [
            { image: AppImages.profile1 },
            { image: AppImages.profile2 },
            { image: AppImages.profile3 }
        ],
        participant: 20,
        participationCount: '45+',
    },
    {
        id: 5,
        bgColor: '#E0F1FD',
        groups: 'Customer Service',
        profileImages: [
            { image: AppImages.profile1 },
            { image: AppImages.profile2 },
            { image: AppImages.profile3 }
        ],
        participant: 30,
        participationCount: '45+',
    },

]

export const ManagementData = [
    {
        id: 1,
        icon: AppIcons.sales,
        managementText: 'Sales \n Management',
        bgColor: '#E0F1FD',
        screen: SCREEN.salesManagement
    },
    {
        id: 2,
        icon: AppIcons.project,
        managementText: 'Project \n Management',
        bgColor: '#E4E9FF',
        screen: SCREEN.projectManagement
    },
    {
        id: 3,
        icon: AppIcons.delivery,
        managementText: 'Delivery \n Management',
        bgColor: '#FFE3E3',
        screen: SCREEN.deliveryManagement
    },
    {
        id: 4,
        icon: AppIcons.personal,
        managementText: 'personal \n Management',
        bgColor: '#FEE4FF',
        screen: SCREEN.personalManagement
    },
]
export const ProjectManagementData = [
    {
        id: 1,
        projectName: 'Project name',
        No: '22345',
        cost: '$700',
        date: moment().format('MMM DD, YYYY'),
        pending: 'Pending'
    },
    {
        id: 2,
        projectName: 'Project name',
        No: '22345',
        cost: '$700',
        date: moment().format('MMM DD, YYYY'),
        pending: 'Pending'
    },
]
export const DeliveryManagementData = [
    {
        id: 1,
        projectName: 'Project name',
        No: '22345',
        assignedTo: [
            { image: AppImages.profile1 },
            { image: AppImages.profile2 },
        ],
        date: moment().format('MMM DD, YYYY'),
        completed: 'completed'
    },
    {
        id: 2,
        projectName: 'Project name',
        No: '22345',
        assignedTo: [{ image: AppImages.profile1 }],
        date: moment().format('MMM DD, YYYY'),
        completed: 'completed'
    },
    {
        id: 3,
        projectName: 'Project name',
        No: '22345',
        assignedTo: [{ image: AppImages.profile1 }],
        date: moment().format('MMM DD, YYYY'),
        completed: 'completed'
    },
]
export const SalesManagementData = [
    {
        id: 1,
        projectName: 'Lead #1',
        price: '50',
        profileImage: AppImages.profile1,
        profileName: 'RP (Hemal Burak)',
        date: moment().format('MMM DD, YYYY'),

    },
    {
        id: 2,
        projectName: 'Lead #2',
        price: '50',
        profileImage: AppImages.profile2,
        profileName: 'RP (Hemal Burak)',
        date: moment().format('MMM DD, YYYY'),

    },
    {
        id: 3,
        projectName: 'Lead #3',
        price: '50',
        profileImage: AppImages.profile3,
        profileName: 'RP (Hemal Burak)',
        date: moment().format('MMM DD, YYYY'),

    },
]

export const PersonalManagementData = [
    {
        id: 1,
        profile: AppImages.profile1,
        profileName: 'Olam Bazeer',
        catergory: 'Technician',
    },
    {
        id: 2,
        profile: AppImages.profile2,
        profileName: 'Olam Bazeer',
        catergory: 'Technician',
    },
    {
        id: 3,
        profile: AppImages.profile3,
        profileName: 'Helen Mask',
        catergory: 'Technician',
    },
    {
        id: 4,
        profile: AppImages.profile1,
        profileName: 'Olam Bazeer',
        catergory: 'Technician',
    },
    {
        id: 5,
        profile: AppImages.profile2,
        profileName: 'Helen Mask',
        catergory: 'Technician',
    },
    {
        id: 6,
        profile: AppImages.profile3,
        profileName: 'Jack Pot',
        catergory: 'Technician',
    },
]

export const ProjectManagementTabs = ['New Projects', 'To be Scheduled', 'Scheduled']
export const SalesManagementTabs = ['New Lead', 'Assigned to Sales', 'SchedulAppointment Set']
export const StatusData = [
    { value: 'pending', label: 'pending' },
    { value: 'completed', label: 'completed' },
]