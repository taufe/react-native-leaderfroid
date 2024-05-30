import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { height, totalSize, width } from 'react-native-dimension';
import Modal from 'react-native-modal';
import { ButtonColored, CardWrapper, ComponentWrapper, Custom, Hrline, LargeText, LargeTitle, MediumText, PrimaryCheckBox, PrimaryImage, RegularText, RowWrapper, RowWrapperBasic, ScrollView, Spacer, TextInputColored, Vrline, Wrapper, } from '..';
import { AppIcons, AppImages } from '../../assets';
import { colors } from '../../constants';
import PrimaryDropDown from '../dropDown';
import { HolidaysData, NotesData } from '../../utilities/dummyaData';
import { Icon } from 'react-native-elements';
import { AttachFiles, ImagesComponent, NotesComponent } from '../commonComponent';
import { ChatList, NotesList } from '../listComponents';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import { CompleteDetails, HourlyReport } from '../../screens/App/deliverySheet/component';
import Signature from "react-native-signature-canvas";
import { Badge } from '@rneui/themed'


export const DateTimeModal = ({ isVisible, onConfirm, onCancel, date, mode }) => {
    return (

        <DateTimePickerModal
            isVisible={isVisible}
            date={date}
            mode={mode}
            onConfirm={onConfirm}
            onCancel={onCancel}


        />
    )
}

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
export const AssignProjectModal = ({ isVisible, toggleModal, swipeDisabled,
    onPressCancel }) => {

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
                    <Custom size={totalSize(5)} styles={styles.iconBg} icon={AppIcons.newList} />
                    <Spacer isSmall />
                    <LargeTitle style={styles.logout}>{'Create New List'}</LargeTitle>
                </ComponentWrapper>
                <Spacer isDoubleBase />
                <ComponentWrapper>
                    <TextInputColored placeholder={'Enter title'} />
                </ComponentWrapper>
                <Spacer isDoubleBase />
                <RowWrapper style={styles.buttonWrapper}>
                    <ButtonColored onPress={onPressCancel} textColor={colors.appTextColor2} text="Cancel" style={styles.importBtn} />
                    <ButtonColored text="Next" style={{ width: width(38) }} />
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
export const CreateProjectModal = ({ isVisible, toggleModal, swipeDisabled, isShown, onPressThreeDot, onpressMoveSetion }) => {
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
            <CardWrapper style={{ ...styles.card, flex: 1, }}>
                <RowWrapper>
                    <Wrapper>
                        <RowWrapperBasic>
                            <LargeTitle style={styles.projectName}>Project name</LargeTitle>
                            <RegularText style={styles.pendingDot}>{'\u2B24'}</RegularText>
                            <LargeText style={styles.pending}>{'pending'}</LargeText>
                        </RowWrapperBasic>
                        <Spacer isTiny />
                        <RowWrapperBasic>
                            <LargeText style={styles.createOn}>Created on :</LargeText>
                            <LargeText style={styles.createdDate}>Oct 22, 2023</LargeText>
                        </RowWrapperBasic>
                        <Spacer height={height(2.4)} />
                        <RowWrapperBasic>
                            <LargeText style={styles.createdBy}>Created By :</LargeText>
                            <LargeText style={styles.you}>You</LargeText>
                        </RowWrapperBasic>
                        <Spacer isSmall />
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
                <Spacer isSmall />
                <Hrline Width={width(80)} />
                <Spacer isSmall />
                <CardWrapper style={{ ...styles.note, flex: 1 }}>
                    <RowWrapperBasic>
                        <Custom size={totalSize(3)} styles={{ paddingRight: width(2) }} icon={AppIcons.hand} />
                        <LargeTitle style={styles.projectName}>Note*</LargeTitle>
                    </RowWrapperBasic>
                    <MediumText style={styles.dummyText}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.
                    </MediumText>
                </CardWrapper>
                <Spacer />
                <Wrapper style={{ flex: .1 }}>
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
                </Wrapper>
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
export const AssignToModal = ({ isVisible, toggleModal, onPressAssignProject }) => {
    const assignedTo = [
        { image: AppImages.profile1 },
        { image: AppImages.profile2 },
    ]

    return (
        <Modal
            animationType="slide"
            isVisible={isVisible}
            style={styles.modal}
            onBackdropPress={toggleModal}
            backdropOpacity={0.5}
        >
            <TouchableOpacity onPress={onPressAssignProject}>
                <ComponentWrapper>
                    <CardWrapper style={{ ...styles.card, width: width(82) }}>
                        <RowWrapper>
                            <Wrapper>
                                <RowWrapperBasic>
                                    <LargeTitle style={styles.projectName}>Project name</LargeTitle>
                                </RowWrapperBasic>
                                <Spacer isTiny />
                                <LargeText style={styles.no}>No. 22345</LargeText>
                                <Spacer isSmall />
                                <RowWrapperBasic>
                                    <LargeTitle style={styles.assignedTo}>Assigned to : </LargeTitle>
                                    {assignedTo?.map((item, index) => (
                                        <PrimaryImage styles={{ marginLeft: 2 }} size={totalSize(2.9)}
                                            borderRadius={totalSize(5)} key={index}
                                            source={item.image} />
                                    ))
                                    }
                                </RowWrapperBasic>
                                <Spacer height={height(1.5)} />
                                <Hrline Width={width(60)} style={{ opacity: .3 }} />
                                <Spacer isTiny />
                            </Wrapper>
                            <Wrapper style={styles.threeDotsWrapper}>
                                <Icon color={colors.appIconColor3} size={totalSize(2.4)}
                                    name="dots-three-horizontal" type="entypo" />
                            </Wrapper>
                        </RowWrapper>
                        <RowWrapper>
                            <Wrapper>
                                <RowWrapperBasic>
                                    <LargeText style={styles.onDate}>On date :</LargeText>
                                    <LargeText style={styles.date}>{moment().format("MMM D, YYYY")}</LargeText>
                                    <Vrline style={{ opacity: .3 }} />
                                    <RegularText style={{ ...styles.dot, color: colors.appBgColor12 }}>{'\u2B24'}</RegularText>
                                    <LargeText style={styles.completed}>pending</LargeText>
                                </RowWrapperBasic>
                            </Wrapper>
                            <Wrapper>
                                <Custom size={totalSize(2.2)} icon={AppIcons.messageText} />
                            </Wrapper>
                        </RowWrapper>
                    </CardWrapper>
                </ComponentWrapper>
            </TouchableOpacity>
        </Modal>
    );
};
export const ProjectViewModal = ({ isVisible, toggleModal }) => {
    return (
        <Modal
            animationType="slide"
            isVisible={isVisible}
            style={styles.modal}
            onBackdropPress={toggleModal}
            backdropOpacity={0.5}
        >
            <ScrollView>
                <CardWrapper style={styles.card}>
                    <CompleteDetails />
                    <Spacer isTiny />
                    <Hrline Width={width(80)} />
                    <Spacer />
                    <AttachFiles bgColor={colors.appBgColor13} bgWidth={width(80)} />
                    <Spacer />
                    <ImagesComponent />
                    <Spacer isSmall />
                    <Hrline Width={width(80)} />
                    <Spacer isSmall />
                    <ComponentWrapper style={styles.notes}>
                        <LargeText style={styles.attachFile}>Notes</LargeText>
                        <Spacer isTiny />
                        <NotesList data={NotesData} />
                        <Spacer />
                        <Hrline Width={width(80)} />
                        <Spacer isSmall />
                    </ComponentWrapper>
                    <ChatList />
                    <HourlyReport />
                    <Spacer isSmall />
                    <Hrline Width={width(80)} />
                    <Spacer />
                    <Wrapper >
                        <ComponentWrapper >
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
                    </Wrapper>
                    <Spacer isDoubleBase />
                </CardWrapper>
            </ScrollView>
        </Modal>
    );
};

export const SignatureModal = ({ isVisible, toggleModal }) => {
    const [signature, setSign] = useState(null);
    const [textInput, setTextInput] = useState('');
    const [showText, setShowText] = useState('')

    const handleDisplayText = () => {
        setShowText(textInput)
        setTextInput('')
    }


    const handleOK = (signature) => {
        console.log(signature);
        setSign(signature);
    };
    const handleEmpty = () => {
    };

    const style = `.m-signature-pad--footer
    .button {
      background-color: #1C3C88;
      color: #fff;
    }`;

    return (
        <Modal
            animationType="slide"
            isVisible={isVisible}
            style={styles.modal}
            onBackdropPress={toggleModal}
            backdropOpacity={0.5}>
            <CardWrapper style={styles.preview}>
                <RowWrapper style={{ marginHorizontal: width(2), justifyContent: 'flex-start' }}>
                    <LargeText style={styles.signatureHeading}>Signatures</LargeText>
                    <Custom size={totalSize(2.5)} icon={AppIcons.tick} />
                </RowWrapper>
                <RowWrapperBasic style={{ marginHorizontal: width(2) }}>
                    <LargeText style={{ color: colors.appTextColor3 }}>Client’s Name </LargeText>
                    <LargeText style={{ color: colors.appTextColor4 }}>{showText}</LargeText>
                </RowWrapperBasic>
                <RowWrapper style={{ justifyContent: 'flex-start', marginHorizontal: width(2) }}>
                    <LargeText style={styles.signatureCardHeading1}>Client's signature</LargeText>
                    <LargeText style={styles.signatureCardHeading2}>Manager’s signature</LargeText>
                </RowWrapper>
                <Spacer isSmall />
                <Wrapper style={{ flexDirection: 'row', }}>
                    <View>
                        {signature ? (
                            <Image
                                resizeMode={"contain"}
                                style={{ width: 35, height: 14 }}
                                source={{ uri: signature }}
                            />
                        ) : null}
                    </View>
                    <Signature
                        onOK={handleOK}
                        onEmpty={handleEmpty}
                        descriptionText="Sign"
                        confirmText="Save"
                        webStyle={style}
                        penColor={colors.appTextColor4}
                        style={styles.signatureClient}
                        overlayHeight={1}

                    />
                    <View>
                        {signature ? (
                            <Image
                                resizeMode={"contain"}
                                style={{ width: 35, height: 14 }}
                                source={{ uri: signature }}
                            />
                        ) : null}
                    </View>
                    <Signature
                        onOK={handleOK}
                        onEmpty={handleEmpty}
                        descriptionText="Sign"
                        confirmText="Save"
                        webStyle={style}
                        penColor={colors.appTextColor2}
                        style={styles.signatureManager}
                        overlayHeight={1}
                    />
                </Wrapper>
                <Spacer isSmall />
                <TextInput
                    style={styles.inPutFieldText}
                    onChangeText={(val) => setTextInput(val)}
                    value={textInput}
                    placeholder="Please Enter client Name"
                    onSubmitEditing={handleDisplayText}
                />
                <Spacer />
                <RowWrapper>
                    <ButtonColored onPress={() => handleOK()} text='Save' style={styles.saveButton} />
                    <ButtonColored onPress={() => handleOK()} text='Save' style={styles.saveButton} />
                </RowWrapper>
            </CardWrapper>
        </Modal >
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
    createdBy: {
        fontSize: totalSize(1.6),
        color: colors.appTextColor3,
        borderRadius: totalSize(1.6),
        marginTop: height(.2)
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

    you: {
        fontSize: totalSize(1.4),
        color: colors.appTextColor2,
        backgroundColor: colors.appBgColor1,
        borderRadius: totalSize(10),
        padding: 5,
        alignSelf: 'center',
        textAlign: 'center',
        marginLeft: width(2),

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
    note: {
        width: width(80),
        marginHorizontal: width(5),
        paddingVertical: height(2),
        paddingHorizontal: width(4),
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
    pending: {
        fontSize: totalSize(1.2),
        color: colors.appTextColor4,
        marginTop: height(.5)
    },
    pendingDot: {
        fontSize: totalSize(1.2),
        color: colors.appTextColor12,
        paddingLeft: width(3),
        paddingRight: width(2),
        marginTop: height(.55)
    },
    dummyText: {
        fontSize: totalSize(1.3),
        color: colors.appTextColor3
    },
    //Assign project css
    card: {
        backgroundColor: colors.appBgColor1,
        paddingVertical: totalSize(2)
    },
    projectName: {
        fontSize: totalSize(1.9)
    },
    no: {
        fontSize: totalSize(1.6),
        color: colors.appTextColor3,
        backgroundColor: colors.appButton7,
        paddingHorizontal: width(2),
        alignSelf: 'flex-start',
        borderRadius: totalSize(1.6)
    },
    assignedTo: {
        fontSize: totalSize(1.6),
        color: colors.appTextColor3,
    },
    onDate: {
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

    },
    tick: {
        marginTop: 6.5,
        marginLeft: width(2.3)
    },
    attachFile: {
        fontSize: totalSize(1.6),
    },
    notes: {
        marginLeft: width(5),
        marginHorizontal: width(0)
    },
    dateInputStyle: {
        backgroundColor: colors.appBgColor13,
        borderRadius: totalSize(1.2),
        paddingBottom: 5
    },
    saveButton: {
        width: width(35),
        // alignSelf: 'center',
        // position: 'absolute',
        // marginTop: -70
    },
    preview: {
        borderRadius: totalSize(1.2),
        height: height(50),
        paddingVertical: height(2),
        paddingHorizontal: width(2),
        backgroundColor: colors.appBgColor5
    },
    signatureClient: {
        height: height(15),
        width: width(40),
        marginHorizontal: width(2),
        borderRadius: totalSize(1.6)
    },
    signatureManager: {
        height: height(15),
        width: width(40),
        marginHorizontal: width(2),
        borderRadius: totalSize(1.6),
    },

    signatureHeading: {
        fontSize: totalSize(1.9),
        color: colors.appTextColor4,
        paddingRight: width(1)
    },
    signatureCardHeading1: {
        fontSize: totalSize(1.5),
        color: colors.appTextColor4
    },
    signatureCardHeading2: {
        fontSize: totalSize(1.5),
        color: colors.appTextColor4,
        paddingLeft: width(15)
    },
    inPutFieldText: {
        borderBottomColor: colors.appBorderColor5,
        // borderWidth: 1,
        color: colors.appTextColor4,
        backgroundColor: colors.appBorderColor1,
        borderRadius: totalSize(1.2),
        marginHorizontal: width(2)
    },
})