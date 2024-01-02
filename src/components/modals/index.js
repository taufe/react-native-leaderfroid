import React, { useState } from 'react';
import { Pressable, StyleSheet, TouchableOpacity, View } from 'react-native'
import { height, totalSize, width } from 'react-native-dimension';
import Modal from 'react-native-modal';
import { ButtonColored, CardWrapper, ComponentWrapper, Custom, Hrline, LargeText, LargeTitle, PrimaryCheckBox, PrimaryImage, RegularText, RowWrapper, RowWrapperBasic, Spacer, TextInputColored, Wrapper, } from '..';
import { AppIcons, AppImages } from '../../assets';
import { colors } from '../../constants';
import PrimaryDropDown from '../dropDown';
import { HolidaysData, NotesData } from '../../utilities/dummyaData';
import { Icon } from 'react-native-elements';
import { AttachFiles, ImagesComponent, NotesComponent } from '../commonComponent';
import { NotesList } from '../listComponents';


export const PrimaryModal = ({ isVisible, toggleModal, swipeDisabled,
    onPressCancelDelivery, onPressKeepDelivery, onPressClose, onPressSubmit, onPressCancel, }) => {
    const [dropDownData, setDropDownData] = useState('')
    return (
        <Modal
            animationType="slide"
            isVisible={isVisible}
            swipeDirection={swipeDisabled ? null : 'down'}
            onSwipeComplete={toggleModal}
            style={styles.modal}
            onBackdropPress={toggleModal}
            backdropOpacity={0.5}
        >
            <CardWrapper style={styles.card}>
                <ComponentWrapper>
                    <Custom size={totalSize(5)} styles={styles.iconBg} icon={AppIcons.calendarAdd} />
                    <Spacer isSmall />
                    <LargeTitle style={styles.leaveRequest}>Leave Request</LargeTitle>
                    <Spacer />
                    <PrimaryDropDown placeholder={'Holidays'} style={styles.inputField} items={HolidaysData} value={dropDownData} setValue={setDropDownData} />
                    <Spacer />
                    <TextInputColored placeholder={'write here..'} containerStyle={{ height: height(10) }} />
                </ComponentWrapper>
                <Spacer isDoubleBase />
                <RowWrapper style={styles.buttonWrapper}>
                    <ButtonColored onPress={onPressSubmit} text="Submit" style={{ width: width(38) }} />
                    <ButtonColored onPress={onPressCancel} textColor={colors.appTextColor2} text="Cancel" style={styles.importBtn} />
                </RowWrapper>
            </CardWrapper>
        </Modal>
    );
};
export const LogoutModal = ({ isVisible, toggleModal, swipeDisabled,
    onPressLogout, onPressCancel }) => {

    return (
        <Modal
            animationType="slide"
            isVisible={isVisible}
            swipeDirection={swipeDisabled ? null : 'down'}
            onSwipeComplete={toggleModal}
            style={styles.modal}
            onBackdropPress={toggleModal}
            backdropOpacity={0.5}>
            <CardWrapper style={styles.card}>
                <ComponentWrapper>
                    <Custom size={totalSize(5)} styles={styles.iconBg} icon={AppIcons.logout} />
                    <Spacer isSmall />
                    <LargeTitle style={styles.logout}>{'Are you sure to log out \nyour account?'}</LargeTitle>
                </ComponentWrapper>
                <Spacer isDoubleBase />
                <RowWrapper style={styles.buttonWrapper}>
                    <ButtonColored onPress={onPressLogout} text="Log out" style={{ width: width(38) }} />
                    <ButtonColored onPress={onPressCancel} textColor={colors.appTextColor2} text="Cancel" style={styles.importBtn} />
                </RowWrapper>
            </CardWrapper>
        </Modal>
    );
};

export const LeadModal = ({ isVisible, toggleModal, swipeDisabled, isShown, onPressThreeDot, onpressMoveSetion }) => {

    return (
        <Modal
            animationType="slide"
            isVisible={isVisible}
            swipeDirection={swipeDisabled ? null : 'down'}
            onSwipeComplete={toggleModal}
            style={styles.modal}
            onBackdropPress={toggleModal}
            hasBackdrop={true}
            backdropOpacity={0.5}>
            <CardWrapper style={styles.card}>
                <RowWrapper>
                    <Wrapper>
                        <RowWrapperBasic>
                            <LargeTitle style={styles.projectName}>{'Lead #1'}</LargeTitle>
                            <LargeTitle style={styles.costText}>( Cost :$450 )</LargeTitle>
                        </RowWrapperBasic>
                        <Spacer isTiny />
                        <RowWrapperBasic>
                            <LargeText style={styles.createOn}>Created on :</LargeText>
                            <LargeText style={styles.createdDate}>Oct 22, 2023</LargeText>
                        </RowWrapperBasic>
                        <Spacer isSmall />
                        <RowWrapperBasic>
                            <PrimaryImage source={AppImages.profile1} size={totalSize(2.3)}
                                borderRadius={totalSize(5)} />
                            <LargeTitle style={styles.profileName}>{'profileName'}</LargeTitle>
                        </RowWrapperBasic>
                        <Spacer height={height(1.5)} />
                    </Wrapper>
                    <Wrapper style={styles.threeDotsWrapper}>
                        <Pressable>
                            <Icon color={colors.appIconColor3} size={totalSize(2.4)}
                                name="dots-three-horizontal" type="entypo" onPress={onPressThreeDot} />
                        </Pressable>
                    </Wrapper>
                    {isShown ? (
                        <CardWrapper style={styles.dropDownCard}>

                            <TouchableOpacity >
                                <RowWrapper style={{ justifyContent: 'center', }}>
                                    <Icon
                                        name="delete"
                                        type="materialicon"
                                        size={totalSize(2)}
                                        color={colors.appIconColor6}
                                    />
                                    <LargeText style={styles.dropDownText}>Delete</LargeText>
                                </RowWrapper>
                            </TouchableOpacity>
                            <Hrline Width={width(25)} />
                            <Spacer isTiny />
                            <TouchableOpacity >
                                <RowWrapper style={{ justifyContent: 'center', }}>
                                    <Icon
                                        name="share"
                                        type="entypo"
                                        size={totalSize(2)}
                                        color={colors.appTextColor10}
                                    />
                                    <LargeText style={styles.dropDownText}>Send</LargeText>
                                </RowWrapper>
                            </TouchableOpacity>
                            <Spacer isTiny />
                            <Hrline Width={width(25)} />
                            <TouchableOpacity onPress={onpressMoveSetion}>
                                <RowWrapper style={{ justifyContent: 'center', }}>
                                    <Icon
                                        name="send"
                                        type="ionicon"
                                        size={totalSize(2)}
                                        color={colors.appTextColor8}
                                    />
                                    <LargeText style={styles.dropDownText}>Move</LargeText>
                                </RowWrapper>
                            </TouchableOpacity>
                        </CardWrapper>
                    ) : null}
                </RowWrapper>
                {/* <Hrline Width={width(80)} style={{ opacity: .3 }} /> */}
                <Spacer />
                <AttachFiles bgColor={colors.appBgColor1} bgWidth={width(80)} />
                <Spacer isSmall />
                <ImagesComponent />
                <Spacer isSmall />
                <Hrline Width={width(80)} />
                <Spacer />
                <ComponentWrapper style={{ marginRight: width(0) }}>
                    <LargeText style={styles.attachFile}>Notes</LargeText>
                    <Spacer isSmall />
                    <NotesList data={NotesData} />
                </ComponentWrapper>
                <Spacer />
                <Hrline Width={width(80)} />
                <Spacer isSmall />
                <ComponentWrapper>
                    <TextInputColored
                        placeholder={'Write Comment'}
                        iconName={'attachment'}
                        iconType={'entypo'}
                        iconColor={colors.appTextColor2}
                        additionalIconName={'file-photo-o'}
                        additionalIconType={'font-awesome'}
                        additionalIconColor={colors.appIconColor2}
                        additionalIconStyle={{
                            borderLeftWidth: 1,
                            borderColor: colors.appBorderColor5,
                            paddingLeft: width(5),
                        }}
                    />
                </ComponentWrapper>
            </CardWrapper>
        </Modal>
    );
};

export const MoveSectionModal = ({ isVisible, toggleModal, swipeDisabled }) => {

    return (
        <Modal
            animationType="slide"
            isVisible={isVisible}
            swipeDirection={swipeDisabled ? null : 'down'}
            onSwipeComplete={toggleModal}
            style={styles.modal}
            onBackdropPress={toggleModal}
            backdropOpacity={0.5}>
            <CardWrapper style={styles.card}>
                <ComponentWrapper>
                    <Custom size={totalSize(5)} styles={styles.iconBg} icon={AppIcons.move} />
                    <Spacer isSmall />
                    <LargeTitle style={styles.logout}>{'move Card'}</LargeTitle>
                </ComponentWrapper>
                <Spacer />
                <CardWrapper style={styles.moveCard}>
                    <RowWrapper >
                        <LargeText style={styles.moveText}>Project Section</LargeText>
                        <PrimaryCheckBox containerStyle={{ marginRight: -25 }} />
                    </RowWrapper>
                </CardWrapper>
                <Spacer isSmall />
                <CardWrapper style={styles.moveCard}>
                    <RowWrapper >
                        <LargeText style={styles.moveText}>Sales Section</LargeText>
                        <PrimaryCheckBox containerStyle={{ marginRight: -25 }} />
                    </RowWrapper>
                </CardWrapper>
                <Spacer isSmall />
                <CardWrapper style={styles.moveCard}>
                    <RowWrapper >
                        <LargeText style={styles.moveText}>Delivery Section</LargeText>
                        <PrimaryCheckBox containerStyle={{ marginRight: -25 }} />
                    </RowWrapper>
                </CardWrapper>
                <Spacer isSmall />
                <Spacer isDoubleBase />
                <RowWrapper style={styles.buttonWrapper}>
                    <ButtonColored text="Move" style={{ width: width(38) }} />
                    <ButtonColored textColor={colors.appTextColor2} text="Cancel" style={styles.importBtn} />
                </RowWrapper>
            </CardWrapper>
        </Modal>
    );
};

export const ReadMoreModal = ({ isVisible, toggleModal, pointList, bgColor, heading }) => {

    return (
        <Modal
            animationType="slide"
            isVisible={isVisible}
            style={styles.modal}
            onBackdropPress={toggleModal}
            backdropOpacity={0.5}
        >
            <CardWrapper style={{ ...styles.card, backgroundColor: bgColor }}>
                <ComponentWrapper>
                    <LargeText style={styles.heading}>{heading}</LargeText>
                    <Spacer isSmall />
                    <Hrline Width={width(80)} />
                    <Spacer isTiny />
                    <ComponentWrapper>
                        <LargeText style={styles.pointList}>{pointList}</LargeText>
                    </ComponentWrapper>
                </ComponentWrapper>
            </CardWrapper>
        </Modal>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.appBgColor13,
        width: width(90),
        paddingVertical: height(4),

    },
    modal: {
        borderWidth: 0,
    },
    iconBg: {
        backgroundColor: colors.appBgColor1,
        padding: totalSize(1.8),
        borderRadius: totalSize(5),
        alignSelf: 'center'
    },
    leaveRequest: {
        fontSize: totalSize(2.1),
        color: colors.appTextColor4,
        alignSelf: 'center'
    },
    logout: {
        fontSize: totalSize(2.1),
        color: colors.appTextColor4,
        alignSelf: 'center',
        textAlign: 'center'
    },
    inputField: {
        backgroundColor: colors.appBgColor1,
        height: height(7),
        borderRadius: totalSize(1.2)
    },
    importBtn: {
        width: width(38),
        backgroundColor: colors.appBgColor1,
        borderWidth: 1,
        borderColor: colors.appBorderColor2,
        marginLeft: width(3)
    },
    projectName: {
        fontSize: totalSize(1.9),
    },
    costText: {
        fontSize: totalSize(1.4),
        color: colors.appTextColor3,
        paddingLeft: width(2),
        marginTop: height(.2)
    },
    createdDate: {
        fontSize: totalSize(1.2),
        color: colors.appTextColor3,
        borderRadius: totalSize(1.6),
        paddingLeft: width(1)
    },
    createOn: {
        fontSize: totalSize(1.2),
        color: colors.appTextColor4,
        borderRadius: totalSize(1.6)
    },
    profileName: {
        fontSize: totalSize(1.6),
        color: colors.appTextColor10,
        paddingLeft: width(1.5)
    },
    createdAt: {
        fontSize: totalSize(1.2),
        color: colors.appTextColor4,

    },
    date: {
        fontSize: totalSize(1.2),
        color: colors.appTextColor3,
        paddingRight: width(3),
        paddingLeft: width(1)
    },
    completed: {
        fontSize: totalSize(1.2),
        color: colors.appTextColor4,
    },
    dot: {
        fontSize: totalSize(1.2),
        color: colors.appTextColor8,
        paddingLeft: width(3),
        paddingRight: width(2)
    },
    threeDotsWrapper: {
        alignSelf: 'flex-start',
        // backgroundColor: 'red',
        marginTop: -15

    },
    dropDownCard: {
        width: width(25),
        paddingVertical: height(1),
        borderRadius: totalSize(1),
        top: 12,
        right: -20,
        zIndex: 10,
        position: 'absolute',

    },
    dropDownText: {
        fontSize: totalSize(1.1),
        color: colors.appTextColor4,
        paddingLeft: width(2),
    },
    attachFile: {
        fontSize: totalSize(1.6),
    },
    noteCard: {
        width: width(52),
        paddingHorizontal: width(4),
        paddingVertical: height(1.5),
    },

    heading: {
        fontSize: totalSize(2.3),
        color: colors.appTextColor4
    },

    pointList: {
        fontSize: totalSize(1.8),
        color: colors.appTextColor3,
        opacity: .7,
        lineHeight: 27,
        textAlign: 'center'
    },
    moveCard: {
        marginHorizontal: width(5),
        width: width(80),
        paddingVertical: height(2)
    },
    moveText: {
        fontSize: totalSize(1.6),
        color: colors.appTextColor4
    }

})