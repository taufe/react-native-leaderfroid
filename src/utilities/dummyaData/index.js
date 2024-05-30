import { AppIcons, AppImages } from "../../assets";
import { height, totalSize } from 'react-native-dimension';
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
        borderColor: '#1F8235',
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
        borderColor: '#F45A45',
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
        borderColor: '#367FFA',
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
        borderColor: '#BA68C8',
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
        borderColor: '#33A5C9',
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
export const PersonalChatData = [
    {
        id: 1,
        borderColor: '#1F8235',
        groups: 'Project Manager',
        profile: AppImages.profile1,
        usageTime: '11:12 PM',

    },
    {
        id: 2,
        borderColor: '#F45A45',
        groups: 'Project Manager',
        profile: AppImages.profile2,
        usageTime: '11:12 PM',

    },
    {
        id: 3,
        borderColor: '#367FFA',
        groups: 'Project Manager',
        profile: AppImages.profile1,
        usageTime: '11:12 PM',

    },
    {
        id: 4,
        borderColor: '#BA68C8',
        groups: 'Project Manager',
        profile: AppImages.profile1,
        usageTime: '11:12 PM',

    },
    {
        id: 5,
        borderColor: '#33A5C9',
        groups: 'Project Manager',
        profile: AppImages.profile1,
        usageTime: '11:12 PM',

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
export const ProfileInformationData = [
    {
        id: 1,
        projectName: 'Project name',
        No: '22345',
        assignedTo: [
            { image: AppImages.profile1 },
        ],
        date: moment().format('MMM DD, YYYY'),
        doing: 'On Doing'
    },
    {
        id: 2,
        projectName: 'Project name',
        No: '22345',
        date: moment().format('MMM DD, YYYY'),
        doing: 'On Doing'
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

export const DataIntegrationData = [
    {
        id: 1,
        fileImage: AppImages.file,
        fileName: 'Project file.csv',
        fileSize: '341 kb'

    },
    {
        id: 2,
        fileImage: AppImages.file,
        fileName: 'Project file.csv',
        fileSize: '341 kb'
    },
    {
        id: 3,
        fileImage: AppImages.file,
        fileName: 'Project file.csv',
        fileSize: '341 kb'
    },
    {
        id: 4,
        fileImage: AppImages.file,
        fileName: 'Project file.csv',
        fileSize: '341 kb'
    },
    {
        id: 5,
        fileImage: AppImages.file,
        fileName: 'Project file.csv',
        fileSize: '341 kb'
    },

]

export const NotificationsData = [
    {
        id: 1,
        icon: AppIcons.taskSquare,
        description: 'You have been added a \nnew task',
        time: '12:33 PM',
        size: totalSize(3.2)

    },
    {
        id: 2,
        icon: AppIcons.move,
        description: 'You have been added a \nnew task',
        time: '12:33 PM',
        size: totalSize(3.5)

    },
    {
        id: 3,
        icon: AppIcons.good,
        description: 'You have been added a \nnew task',
        time: '12:33 PM',
        size: totalSize(3.6)

    },
    {
        id: 4,
        icon: AppIcons.export,
        description: 'You have been added a \nnew task',
        time: '12:33 PM',
        size: totalSize(3)

    },


]
export const NotesData = [
    {
        id: 1,
        headiing: 'How to maintain \nsymptoms',
        description: "1. Lorem ipsum dolor sit amet, consecteturadipis. \n2. cing elit. Etiam eu turpis molestie, dictum est asollicitudin lacus. \n3. risus. Maecenas ut interdum. \n4. risus. Maecenas ut interdum risus. Maecenas ut interdum. \n5. risus. Maecenas ut interdum risus. Maecenas ut interdum. \n6. risus. Maecenas ut interdum risus. Maecenas ut interdum. ",
        bgColor: '#E8FFE9'
    },
    {
        id: 2,
        headiing: 'How to maintain \nsymptoms',
        description: "1. Lorem ipsum dolor sit amet, consecteturadipis. \n2. cing elit. Etiam eu turpis molestie, dictum est asollicitudin lacus. \n3. risus. Maecenas ut interdum. \n4. risus. Maecenas ut interdum risus. Maecenas ut interdum. \n5. risus. Maecenas ut interdum risus. Maecenas ut interdum. \n6. risus. Maecenas ut interdum risus. Maecenas ut interdum. ",
        bgColor: '#FFEADD'
    },

]
export const ChatData = [
    {
        id: 1,
        profile: AppImages.profile1,
        designation: "Project Manager",

    },
    {
        id: 2,
        profile: AppImages.profile2,
        designation: "Sales Manager",

    },
    {
        id: 3,
        profile: AppImages.profile3,
        designation: "Delivery Manager",

    },


]

export const ChooseSelectionData = [
    {
        id: 1,
        title: 'Continue as a Admin'
    },
    {
        id: 2,
        title: 'Continue as a Technician'
    },
]

export const ProjectManagementTabs = ['New Projects', 'To be Scheduled', 'Scheduled']
export const InformationTabs = ['On Doing', 'Completed']
export const SalesManagementTabs = ['New Lead', 'Assigned to Sales', 'SchedulAppointment Set']
export const StatusData = [
    { value: 'pending', label: 'pending' },
    { value: 'completed', label: 'completed' },
]
export const selectCategoryData = [
    { value: 'Technician', label: 'Technician' },
    { value: 'Mechinical', label: 'Mechinical' },
]
export const HolidaysData = [
    { value: '2 days', label: '2 days' },
    { value: '3 days', label: '3 days' },
]

export const dummyLocations = [
    {
        latitude: 37.78825,
        longitude: -122.4324,
        image: AppImages.profile1
    },
    {
        latitude: 37.7895,
        longitude: -122.4335,
        image: AppImages.profile2
    },
    {
        latitude: 37.787,
        longitude: -122.4312,
        image: AppImages.profile3
    },
];

export const ScheduleData = [
    {
        id: 1,
        assignedTo: [
            { image: AppImages.profile1 },
            { image: AppImages.profile2 },
        ],
        profileName: 'All Employees',
    },
    {
        id: 2,
        assignedTo: [
            { image: AppImages.profile1 },
            { image: AppImages.profile2 },
            { image: AppImages.profile3 },
        ],
        profileName: 'New Group',


    },
    {
        id: 3,
        assignedTo: [
            { image: AppImages.profile1 },
            { image: AppImages.profile2 },
        ],
        profileName: 'Olam Bazeer',


    },
    {
        id: 4,
        assignedTo: [
            { image: AppImages.profile1 },
            { image: AppImages.profile2 },
        ],
        profileName: 'Work Group',
    },
    {
        id: 5,
        assignedTo: [
            { image: AppImages.profile1 },
        ],
        profileName: 'Olam Bazeer',


    },
    {
        id: 6,
        assignedTo: [
            { image: AppImages.profile1 },
            { image: AppImages.profile2 },
            { image: AppImages.profile3 },
        ],
        profileName: 'Expert Group',


    },
    {
        id: 7,
        assignedTo: [
            { image: AppImages.profile1 },
        ],
        profileName: 'Olam Bazeer',
    },
]

// export const ScheduleData = [
//     {
//         title: '16 Feb',
//         data: [
//             {
//                 profileName: 'Taufeeq',
//                 profileImages: AppImages.profile1,
//             },
//             {

//                 profileName: 'Taufeeq',
//                 profileImages: AppImages.profile1,

//             },
//         ]
//     },
//     {
//         title: '17 Feb',
//         data: [
//             {
//                 profileName: 'Taufeeq',
//                 profileImages: AppImages.profile1,

//             },
//             {
//                 profileName: 'Taufeeq',
//                 profileImages: AppImages.profile1,

//             },

//         ]
//     },
//     {
//         title: '18 Feb',
//         data: [
//             {
//                 profileName: 'Taufeeq',
//                 profileImages: AppImages.profile1,
//             },
//             {

//                 profileName: 'Taufeeq',
//                 profileImages: AppImages.profile1,

//             },
//         ]
//     },
//     {
//         title: '19 Feb',
//         data: [
//             {
//                 profileName: 'Taufeeq',
//                 profileImages: AppImages.profile1,

//             },
//             {
//                 profileName: 'Taufeeq',
//                 profileImages: AppImages.profile1,

//             },

//         ]
//     },

// ]




