import { StyleSheet } from "react-native";
import { ButtonColored, CardWrapper, ComponentWrapper, LargeText, PrimaryImage, RowWrapper, RowWrapperBasic, Wrapper } from "../../../../components"
import { totalSize, width, height } from 'react-native-dimension';
import { colors } from "../../../../constants";

export const DataIntegration = ({ fileImage, fileName, fileSize }) => {
    return (
        <CardWrapper style={styles.card}>
            <RowWrapper>
                <RowWrapperBasic>
                    <PrimaryImage size={totalSize(4.2)} source={fileImage} />
                    <Wrapper style={{ paddingLeft: width(2) }}>
                        <LargeText style={styles.fileName}>{fileName}</LargeText>
                    </Wrapper>
                </RowWrapperBasic>
                <LargeText style={styles.size}>{fileSize}</LargeText>
            </RowWrapper>
        </CardWrapper>
    )
}

export const ButtonsComponent = () => {
    return (
        <RowWrapper style={styles.buttonWrapper}>
            <ButtonColored text="Export as CSV" style={{ width: width(43) }} />
            <ButtonColored textColor={colors.appTextColor2} text="Import as CSV" style={styles.importBtn} />
        </RowWrapper>
    )
}

const styles = StyleSheet.create({
    card: {
        marginHorizontal: width(5),
        paddingVertical: height(1.7),
    },
    fileName: {
        fontSize: totalSize(1.5),
        color: colors.appTextColor3,
        paddingTop: height(.8)

    },
    catergory: {
        fontSize: totalSize(1.2),
        color: colors.appTextColor2,
    },
    size: {
        fontSize: totalSize(1.2),
        color: colors.appTextColor2,

    },
    importBtn: {
        width: width(43),
        backgroundColor: colors.appBgColor1,
        borderWidth: 1,
        borderColor: colors.appBorderColor2,
        marginLeft: width(3)
    },
    buttonWrapper: {
        position: 'absolute',
        bottom: height(3),

    }

})
