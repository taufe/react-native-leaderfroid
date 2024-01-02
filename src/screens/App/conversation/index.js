
import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useCallback, useEffect } from "react";
import {
    Bubble,
    GiftedChat,
    InputToolbar,
    Send,
} from "react-native-gifted-chat";
import { height, width, totalSize } from "react-native-dimension";
import { Icon } from "react-native-elements";
import { colors } from "../../../constants";
import { Hrline, LargeText, MainWrapper, PrimaryImage, RowWrapper, Spacer, Wrapper } from "../../../components";
import useConversation from "./hook";

const Conversation = ({ navigation, route }) => {
    const [messages, setMessages] = useState([]);

    const { } = useConversation(navigation)
    const groupData = route?.params?.item

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: "Hello developer",
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: "React Native",
                    avatar: "https://placeimg.com/140/140/any",
                },
            },
        ]);
    }, []);
    const onSend = useCallback((messages = []) => {
        setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, messages)
        );
    }, []);
    const customtInputToolbar = (props) => {
        return (
            <>
                <Hrline style={{ position: 'absolute', width: width(90), bottom: height(11) }} />
                <RowWrapper style={{ position: 'absolute', width: width(90), bottom: -10 }}>
                    <Wrapper style={{
                        borderRadius: totalSize(.8),
                        marginBottom: height(4),
                        paddingVertical: height(1.7),
                        backgroundColor: colors.appBgColor1,
                        paddingHorizontal: width(3),

                    }}>
                        <Icon style={{}} name="attachment" type="entypo" />
                    </Wrapper>
                    <InputToolbar
                        {...props}
                        containerStyle={{
                            marginVertical: -height(1),
                            backgroundColor: colors.appBgColor1,
                            borderTopColor: colors.appBorderColor1,
                            borderColor: colors.appBorderColor1,
                            borderWidth: 1,
                            borderTopWidth: 1,
                            borderRadius: totalSize(.8),
                            marginLeft: width(15),
                            marginBottom: height(4),
                        }}
                    />
                </RowWrapper >
            </>
        );
    };
    const renderChatFooter = () => {
        return (

            <Wrapper style={styles.chatFooterContainer}>
                <Wrapper style={styles.chatFooterInnerContainer}>
                    <Wrapper style={styles.imageWrapper}></Wrapper>
                </Wrapper>
            </Wrapper>
        );
    };
    const customOnPress = async (text, onSend) => {
        onSend({ text: text.trim() }, true);
    };

    const renderSend = (props) => {
        return (
            <Send
                sendButtonProps={{
                    ...props.sendButtonProps,
                    onPress: () => customOnPress(props.text, props.onSend),
                }}
                {...props}
                containerStyle={{
                    height: 49,
                    width: 49,
                    alignSelf: "center",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Icon name="send-o" type="font-awesome" />
            </Send>
        );
    };
    const renderChatBubble = (props) => (
        <Bubble
            {...props}
            textStyle={{
                right: {
                    color: colors.appTextColor1,
                },
                left: {
                    color: colors.appTextColor3,
                },
            }}
            wrapperStyle={{
                left: {
                    backgroundColor: colors.appBgColor1,
                },
                right: {
                    backgroundColor: colors.appBgColor2,
                },
            }}
        />
    );



    const profileImages = groupData?.profileImages;

    return (
        <MainWrapper>
            <Spacer isDoubleBase />
            <RowWrapper style={{ alignItems: 'center', }}>
                <TouchableOpacity style={styles.iconWrapper} onPress={() => navigation.goBack()} >
                    <Icon style={styles.icon} name='arrowleft' type='antdesign' size={22} color={colors.appIconColor2} />
                </TouchableOpacity>
                <Wrapper style={{ flexDirection: 'row', }}>
                    {profileImages ? profileImages?.map((element, index) =>
                        <PrimaryImage source={element?.image} size={totalSize(4)} styles={{ marginRight: -5 }}
                            borderRadius={totalSize(5)} />) : <PrimaryImage size={totalSize(4)} source={groupData?.profile} />}
                </Wrapper>
                <Wrapper>
                    <LargeText style={styles.groups}>{groupData?.groups ? groupData?.groups : groupData?.designation}</LargeText>
                    {groupData?.participant && (
                        <LargeText style={styles.participant}>{`${groupData?.participant} Participant`}</LargeText>
                    )}
                </Wrapper>
                <Icon color={colors.appIconColor3} size={totalSize(2.4)}
                    name="dots-three-vertical" type="entypo" />
            </RowWrapper>
            <Spacer />
            <Hrline />
            <Wrapper style={[{ flex: 1 }]}>
                <GiftedChat
                    alwaysShowSend
                    renderSend={renderSend}
                    messages={messages}
                    showUserAvatar={null}
                    renderBubble={(props) => renderChatBubble(props)}
                    renderInputToolbar={(props) => customtInputToolbar(props)}
                    renderChatFooter={renderChatFooter}
                    onSend={(messages) => onSend(messages)}
                    user={{
                        _id: 1,
                    }}
                />
            </Wrapper>
        </MainWrapper >
    );
};
const styles = StyleSheet.create({
    chatFooterContainer: {
        backgroundColor: colors.appBgColor1,
        width: width(90),
        marginBottom: height(6),
    },
    chatFooterInnerContainer: {
        flexDirection: "row",
        backgroundColor: colors.appBgColor1
    },
    imageWrapper: {
        justifyContent: "center",
    },

    card: {
        paddingVertical: height(2.2),
        borderLeftWidth: 3,
    },
    groups: {
        fontSize: totalSize(1.9)
    },
    participant: {
        fontSize: totalSize(1.2),
        color: colors.appTextColor10,



    },
    countWrapper: {
        backgroundColor: colors.appBgColor11,
        borderRadius: totalSize(5),
        paddingHorizontal: totalSize(1),
        verticalAlign: 'middle',
        textAlignVertical: 'center'
    },
    count: {
        fontSize: totalSize(1.2),
        color: colors.appTextColor2,
        marginVertical: height(1),

    },
    icon: {
        backgroundColor: colors.appBgColor1,
        padding: totalSize(.65),
        borderRadius: totalSize(5)
    },
    iconWrapper: {
        flexDirection: 'row'
    }
});

export default Conversation;
