import { Wrapper } from "../wrappers"
import { StyleSheet, TouchableOpacity } from "react-native"
import { totalSize, width, height } from 'react-native-dimension';
import { colors } from "../../constants"
import { LargeText, LargeTitle, Spacer } from ".."

export const HeaderComponent = ({ heading }) => {
  return (
    <Wrapper>
      <LargeTitle style={styles.heading}>{heading}</LargeTitle>
      <Spacer isSmall />
    </Wrapper>
  )
}

export const TabCard = ({ item, onPress, isActive }) => {
  return (
    <Wrapper>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={{ ...styles.tab, backgroundColor: isActive ? colors.appBgColor2 : colors.appBgColor1 }} >
        <LargeText style={{ ...styles.tabText, color: isActive ? colors.appTextColor1 : colors.appTextColor3 }}>{item}</LargeText>
      </TouchableOpacity>
    </Wrapper>
  )
}

const styles = StyleSheet.create({
  tab: {
    paddingVertical: width(2.5),
    paddingHorizontal: width(5),
    borderRadius: totalSize(1),
  },
  tabText: {
    fontSize: totalSize(1.5)
  },
  heading: {
    fontSize: totalSize(1.9),
    color: colors.appTextColor4
  }
})