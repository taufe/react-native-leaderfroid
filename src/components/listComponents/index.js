import { PrimaryImage } from "../images"
import { LargeText, LargeTitle, MediumText } from "../text";
import { CardWrapper, RowWrapperBasic, Wrapper } from "../wrappers"
import { height, width, totalSize } from 'react-native-dimension';
import { ScrollView, SectionList, StyleSheet, View } from 'react-native';
import { FlatList } from "react-native";
import { GroupCard, ManagementComponent } from "../../screens/App/home/component";
import { ChatData, ChooseSelectionData, DataIntegrationData, DeliveryManagementData, GroupChatData, GroupData, InformationTabs, ManagementData, NotesData, NotificationsData, PersonalChatData, PersonalManagementData, ProfileInformationData, ProjectManagementData, ProjectManagementTabs, SalesManagementData, SalesManagementTabs, ScheduleData, SettingsData } from "../../utilities/dummyaData";
import { colors, fontFamily } from "../../constants";
import { DashedborderImage, NotesComponent, TabCard, TabCardInformation } from "../commonComponent";
import { Spacer } from "..";
import { ProjectManagementComponent } from "../../screens/App/projectManagement/component";
import { DeliveryManagementComponent } from "../../screens/App/deliveryManagement/component";
import { PersonalManagementComponent } from "../../screens/App/personalManagement/component";
import { SalesManagementComponent } from "../../screens/App/salesManagement/component";
import { AppIcons, AppImages } from "../../assets";
import { GroupChat } from "../../screens/App/chat/component";
import { DataIntegration } from "../../screens/App/data/component";
import { Setttings } from "../../screens/App/profile/component";
import { ProfileInformationComponent } from "../../screens/App/profileInformation/component";
import { Icon } from "react-native-elements";
import { ReportComponent } from "../../screens/App/report/component";
import { Notificaiton } from "../../screens/App/notifitcation/component";
import { ChatComponent } from "../../screens/App/deliverySheet/component";
import { PersonalChat } from "../../screens/Technician/technicianChat/component";
import { ChooseSelectionComponent } from "../../screens/Auth/chooseSelection/component";
import { ScheduleComponent } from "../../screens/App/schedule/component";


export const OnBoardingWrapper = ({ uri, skip, onPressSkip, title, description, bgColor, imageHeight, bottom }) => {
    return (

        <Wrapper style={{ backgroundColor: bgColor }}>
            <PrimaryImage styles={{ width: width(100), height: imageHeight }} source={uri} />
            <LargeText onPress={onPressSkip} style={styles.skipText}>{skip}</LargeText>
            <LargeTitle style={styles.title}>{title}</LargeTitle>
            <MediumText style={[styles.description, { bottom }]}>{description}</MediumText>
        </Wrapper >
    )
}

export const GroupList = () => {
    return (
        <FlatList
            data={GroupData}
            horizontal
            renderItem={({ item, index }) => {
                return (
                    <GroupCard groupImages={item?.groupImages} groupName={item?.groupName}
                        participationCount={item?.participationCount}
                        teamManagement={item?.teamManagement}
                        profileImages={item?.profileImages}
                        bgColor={item?.bgColor}
                    />
                )
            }}

        />
    )
}
export const GroupChatList = ({ onPressChatCard }) => {
    return (
        <FlatList
            data={GroupChatData}
            ItemSeparatorComponent={<Spacer isSmall />}
            renderItem={({ item, index }) => {
                return (
                    <GroupChat groups={item?.groups}
                        profileImages={item?.profileImages}
                        participationCount={item?.participationCount}
                        participant={item?.participant}
                        borderColor={item?.borderColor}
                        onPressChatCard={() => onPressChatCard(item)}

                    />
                )
            }}
        />
    )
}
export const PersonalChatList = ({ onPressChatCard }) => {
    return (
        <FlatList
            data={PersonalChatData}
            ItemSeparatorComponent={<Spacer isSmall />}
            renderItem={({ item, index }) => {
                return (
                    <PersonalChat groups={item?.groups}
                        profile={item?.profile}
                        participationCount={item?.participationCount}
                        usageTime={item?.usageTime}
                        borderColor={item?.borderColor}
                        onPressChatCard={() => onPressChatCard(item)}
                    />
                )
            }}
        />
    )
}
export const ManagementList = ({ onPress }) => {
    return (
        <FlatList
            data={ManagementData}
            numColumns={2}
            columnWrapperStyle={{ marginHorizontal: width(5), marginVertical: height(1) }}
            renderItem={({ item, index }) => {
                return (
                    <ManagementComponent icon={item?.icon}
                        managementText={item?.managementText}
                        bgColor={item?.bgColor}
                        onPress={() => onPress(item)}

                    />
                )
            }}

        />
    )
}


export const InformationTabList = ({ onPress, activeTab, }) => {
    return (
        <FlatList
            data={InformationTabs}
            contentContainerStyle={[styles.listContainer]}
            nestedScrollEnabled
            keyExtractor={(item, index) => index}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={<Spacer width={width(3)} />}
            renderItem={({ item, index }) => {
                return (
                    <TabCardInformation onPress={() => onPress(index)} isActive={index == activeTab} item={item} />
                )
            }}
        />
    )
}
export const ProjectTabsList = ({ onPress, activeTab, }) => {
    return (
        <FlatList
            data={ProjectManagementTabs}
            contentContainerStyle={[styles.listContainer]}
            nestedScrollEnabled
            keyExtractor={(item, index) => index}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={<Spacer width={width(3)} />}
            renderItem={({ item, index }) => {
                return (
                    <TabCard onPress={() => onPress(index)} isActive={index == activeTab} item={item} />
                )
            }}
        />
    )
}

export const ProjectManagementList = ({ onPress }) => {
    return (
        <FlatList
            data={ProjectManagementData}
            keyExtractor={(item, index) => index}
            ItemSeparatorComponent={<Spacer width={width(3)} />}
            ListEmptyComponent={<Wrapper style={styles.noDataWrapper}>
                <PrimaryImage size={totalSize(30)} source={AppImages.noTask} />
                <LargeText style={styles.noDataText}>{'No task assign yet!'}</LargeText>
            </Wrapper>}
            renderItem={({ item, index }) => {
                return (
                    <ProjectManagementComponent
                        projectName={item?.projectName}
                        pending={item?.pending}
                        date={item?.date}
                        cost={item?.cost}
                        No={item?.No}
                        onPress={onPress}

                    />
                )
            }}
        />
    )
}
export const DeliveryManagementList = ({ onPressDeliverySheet }) => {
    return (
        <FlatList
            data={DeliveryManagementData}
            keyExtractor={(item, index) => index}
            ItemSeparatorComponent={<Spacer />}
            ListFooterComponent={<Spacer />}
            renderItem={({ item, index }) => {
                return (
                    <DeliveryManagementComponent
                        projectName={item?.projectName}
                        completed={item?.completed}
                        date={item?.date}
                        assignedTo={item?.assignedTo}
                        No={item?.No}
                        onPressDeliverySheet={onPressDeliverySheet}
                    />
                )
            }}
        />
    )
}
export const ProfileInformationList = () => {
    return (
        <FlatList
            data={ProfileInformationData}
            keyExtractor={(item, index) => index}
            ItemSeparatorComponent={<Spacer />}
            ListFooterComponent={<Spacer />}
            renderItem={({ item, index }) => {
                return (
                    <ProfileInformationComponent
                        projectName={item?.projectName}
                        doing={item?.doing}
                        date={item?.date}
                        assignedTo={item?.assignedTo}
                        No={item?.No}
                    />
                )
            }}
        />
    )
}

export const SalesManagementList = ({ onpressLeadCard }) => {
    return (
        <FlatList
            data={SalesManagementData}
            keyExtractor={(item, index) => index}

            ItemSeparatorComponent={<Spacer />}
            ListFooterComponent={<Spacer />}
            ListEmptyComponent={<Wrapper style={styles.noDataWrapper}>
                <PrimaryImage size={totalSize(30)} source={AppImages.salesManagement} />
                <LargeText style={styles.noDataText}>{'Nothing to show right now'}</LargeText>
            </Wrapper>}
            renderItem={({ item, index }) => {
                return (
                    <SalesManagementComponent
                        projectName={item?.projectName}
                        date={item?.date}
                        profileImage={item?.profileImage}
                        price={item?.price}
                        profileName={item?.profileName}
                        onpressLeadCard={onpressLeadCard}

                    />
                )
            }}
        />
    )
}

export const SalesTabsList = ({ onPress, activeTab, }) => {
    return (
        <FlatList
            data={SalesManagementTabs}
            contentContainerStyle={[styles.listContainer]}
            nestedScrollEnabled
            keyExtractor={(item, index) => index}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={<Spacer width={width(3)} />}
            renderItem={({ item, index }) => {
                return (
                    <TabCard onPress={() => onPress(index)} isActive={index == activeTab} item={item} />
                )
            }}
        />
    )
}

export const PersonalManagementList = ({ onPressViewReport }) => {
    return (
        <FlatList
            data={PersonalManagementData}
            keyExtractor={(item, index) => index}
            ItemSeparatorComponent={<Spacer isSmall />}
            ListFooterComponent={<Spacer />}
            renderItem={({ item, index }) => {
                return (
                    <PersonalManagementComponent
                        profileImages={item?.profile}
                        profileName={item?.profileName}
                        catergory={item?.catergory}
                        onPressViewReport={() => onPressViewReport(item)}
                    />
                )
            }}
        />
    )
}
export const DataIntegrationList = () => {
    return (
        <FlatList
            data={DataIntegrationData}
            keyExtractor={(item, index) => index}
            ItemSeparatorComponent={<Spacer isSmall />}
            ListFooterComponent={<Spacer height={height(8)} />}
            ListEmptyComponent={<Wrapper style={styles.noDataWrapper}>
                <PrimaryImage size={totalSize(30)} source={AppImages.salesManagement} />
                <LargeText style={styles.noDataText}>{'Nothing to show right now'}</LargeText>
            </Wrapper>}
            renderItem={({ item, index }) => {
                return (
                    <DataIntegration
                        fileImage={item?.fileImage}
                        fileName={item?.fileName}
                        fileSize={item?.fileSize}
                    />
                )
            }}
        />
    )
}

export const NotificationList = ({ toggleSwitch, setToggleSwitch }) => {
    return (
        <FlatList
            data={NotificationsData}
            keyExtractor={(item, index) => index}
            ItemSeparatorComponent={<Spacer />}
            ListFooterComponent={<Spacer />}
            renderItem={({ item, index }) => {
                return (
                    <Notificaiton
                        icon={item?.icon}
                        description={item?.description}
                        time={item?.time}
                        size={item?.size}
                    />
                )
            }}
        />
    )
}
export const NotesList = ({ data }) => {
    return (
        <FlatList
            horizontal={true}
            data={data}
            keyExtractor={(item, index) => index}
            ItemSeparatorComponent={<Spacer />}
            ListFooterComponent={<Spacer />}
            renderItem={({ item, index }) => {
                return (
                    <NotesComponent
                        heading={item?.headiing}
                        pointList={item?.description}
                        bgColor={item?.bgColor}
                    />
                )
            }}
        />
    )
}
export const ChatList = ({ onpressChatCard }) => {
    return (
        <FlatList
            data={ChatData}
            keyExtractor={(item, index) => index}
            ItemSeparatorComponent={<Spacer isSmall />}
            ListFooterComponent={<Spacer />}
            renderItem={({ item, index }) => {
                return (
                    <ChatComponent
                        profile={item?.profile}
                        designation={item?.designation}
                        onpressChatCard={() => onpressChatCard(item)}
                    />
                )
            }}
        />
    )
}
export const PhotoList = ({ onpressChatCard, profilePhotos, openGallery }) => {
    return (
        <RowWrapperBasic>
            <Wrapper style={{ maxWidth: width(70) }}>
                <FlatList
                    data={profilePhotos}
                    ListEmptyComponent={<DashedborderImage />}
                    horizontal
                    renderItem={({ item, index }) => {

                        return <DashedborderImage source={{ uri: item.path }}
                            borderRadius={totalSize(5)} size={totalSize(4)} />
                    }}
                    collapsable={true}
                />
            </Wrapper>
            <DashedborderImage source={AppImages.plusCircle} size={totalSize(4.65)} onPress={openGallery} />
        </RowWrapperBasic>
    )
}

export const ChooseSelectionList = ({ onPress, activeCard }) => {
    return (
        <FlatList
            data={ChooseSelectionData}
            ItemSeparatorComponent={<Spacer height={height(2.5)} />}
            renderItem={({ item, index }) => {
                return (
                    <ChooseSelectionComponent
                        title={item?.title}
                        onPress={() => onPress(index)}
                        isActive={index == activeCard}
                    />
                )
            }}
        />
    )
}


export const ScheduleList = ({ onPress }) => {
    return (
        <Wrapper style={{ flexDirection: 'row' }}>
            <SectionList
                sections={ScheduleData}
                keyExtractor={(item, index) => item}
                contentContainerStyle={{ paddingVertical: height(2) }}
                renderItem={({ item }) => (
                    <ScheduleComponent
                        profileName={item?.profileName}
                        profileImages={item?.profileImages}
                        onPress={onPress}
                    />
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <LargeText style={styles.header}>{title}</LargeText>
                )}
            />

        </Wrapper>
    );
};



export const styles = StyleSheet.create({
    skipText: {
        position: 'absolute',
        bottom: height(5),
        left: width(5),
        color: colors.appTextColor2
    },
    title: {
        marginHorizontal: width(7),
        position: 'absolute',
        bottom: height(27),
        color: colors.appTextColor2

    },
    description: {
        marginHorizontal: width(7),
        lineHeight: 18,
        position: 'absolute',
        // bottom: height(16),
        color: colors.appTextColor3
    },
    // ONBOARDING INDICATORS

    indicator: {
        height: height(0.5),
        width: height(5),
        borderRadius: height(0.5),
        backgroundColor: 'red',
        marginHorizontal: 3,
    },
    noDataWrapper: {
        alignSelf: 'center'
    },
    noDataText: {
        textAlign: 'center',
        fontSize: totalSize(1.9),
        color: colors.appTextColor4
    },
    header: {
        marginBottom: -30,
        fontFamily: fontFamily.appTextSemiBold,
        fontSize: totalSize(1.1),
        backgroundColor: colors.appTextColor13,
        padding: 5,
        width: width(9),
        borderTopRightRadius: totalSize(1.5),
        borderBottomRightRadius: totalSize(1.5)
    },


})