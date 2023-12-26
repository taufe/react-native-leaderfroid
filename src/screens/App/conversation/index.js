
import { StatusBar, StyleSheet } from "react-native";
import React, { useState, useCallback, useEffect } from "react";
import {
    Bubble,
    GiftedChat,
    InputToolbar,
    Send,
} from "react-native-gifted-chat";
import { height, width, totalSize } from "react-native-dimension";
import { Icon } from "react-native-elements";
import { colors, sizes } from "../../../constants";
import { MainWrapper, RegularText, RowWrapper, Wrapper } from "../../../components";

const Conversation = ({ navigation }) => {
    const [messages, setMessages] = useState([]);

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
            <RowWrapper>
                <Wrapper style={{
                    // borderWidth: 1,
                    // borderTopWidth: 1,
                    borderRadius: totalSize(.8),
                    marginBottom: height(4),
                    paddingVertical: height(1.7),
                    backgroundColor: colors.appBgColor1,
                    paddingHorizontal: width(2)
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
                        marginLeft: width(13),
                        marginBottom: height(4),
                    }}
                />
            </RowWrapper>
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
    return (
        <MainWrapper>
            <StatusBar
                backgroundColor={colors.appBgColor1}
                barStyle={"light-content"}
            />
            {/* <ChatInboxHeader
                name={"Adnan Akhtar"}
                image={AppImages.post}
                onPressBack={() => navigation.goBack()}
            /> */}
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
        </MainWrapper>
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
});

export default Conversation;
