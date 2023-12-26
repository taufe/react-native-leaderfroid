import { PrimaryImage } from "../images"
import { LargeText, LargeTitle, MediumText, RegularText } from "../text";
import { Wrapper } from "../wrappers"
import { height, width, totalSize } from 'react-native-dimension';
import { StyleSheet } from 'react-native';
import { FlatList } from "react-native";
import { GroupCard, ManagementComponent } from "../../screens/App/home/component";
import { DeliveryManagementData, GroupChatData, GroupData, ManagementData, PersonalManagementData, ProjectManagementData, ProjectManagementTabs, SalesManagementData, SalesManagementTabs } from "../../utilities/dummyaData";
import { colors } from "../../constants";
import { TabCard } from "../commonComponent";
import { Spacer } from "..";
import { ProjectManagementComponent } from "../../screens/App/projectManagement/component";
import { DeliveryManagementComponent } from "../../screens/App/deliveryManagement/component";
import { PersonalManagementComponent } from "../../screens/App/personalManagement/component";
import { SalesManagementComponent } from "../../screens/App/salesManagement/component";
import { AppImages } from "../../assets";
import { GroupChat } from "../../screens/App/chat/component";


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
                        onPressChatCard={onPressChatCard}

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

export const ProjectManagementList = () => {
    return (
        <FlatList
            data={ProjectManagementData}
            keyExtractor={(item, index) => index}
            ItemSeparatorComponent={<Spacer width={width(3)} />}
            renderItem={({ item, index }) => {
                return (
                    <ProjectManagementComponent
                        projectName={item?.projectName}
                        pending={item?.pending}
                        date={item?.date}
                        cost={item?.cost}
                        No={item?.No}

                    />
                )
            }}
        />
    )
}
export const DeliveryManagementList = () => {
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
                    />
                )
            }}
        />
    )
}
export const SalesManagementList = () => {
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

export const PersonalManagementList = () => {
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
                    />
                )
            }}
        />
    )
}


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
    }

})