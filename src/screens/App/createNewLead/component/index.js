import { Icon } from "react-native-elements"
import { CardWrapper, LargeText, MediumText, Spacer, Wrapper } from "../../../../components"
import { StyleSheet, TouchableOpacity } from "react-native"
import { height, totalSize } from "react-native-dimension"
import { colors } from "../../../../constants"

export const Uploadfile = ({ PickDocument, selectedFiles }) => {
    const KbSize = selectedFiles?.size / 1000
    return (
        <TouchableOpacity onPress={() => PickDocument()}>
            <Wrapper>
                <CardWrapper style={styles.card}>
                    <Icon name="upload-cloud" type="feather" color={colors.appBgColor3} size={totalSize(3)} />
                    <Spacer isTiny />
                    {selectedFiles ? <LargeText style={styles.uploadFile}>{`name: ${selectedFiles?.name}`}</LargeText> : <LargeText style={styles.uploadFile}>Browse here, File including</LargeText>}
                    <Spacer isTiny />
                    {selectedFiles ? <LargeText style={styles.fileName}>{`size: ${Math.trunc(KbSize)} kb`}</LargeText> : <LargeText style={styles.fileName}>Document, photos, notes</LargeText>}
                </CardWrapper>
                <Spacer isTiny />
                <Wrapper style={{ flexDirection: 'row', justifyContent: 'flex-end', }}>
                    <Icon name="plus" type="feather" color={colors.appTextColor10} size={totalSize(2.5)} />
                    <MediumText style={styles.addSection}>Add new section</MediumText>
                </Wrapper>
            </Wrapper>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        paddingVertical: height(3),

    },
    uploadFile: {
        fontSize: totalSize(1.5),
        color: colors.appTextColor2,
        alignSelf: 'center'
    },
    fileName: {
        fontSize: totalSize(1.4),
        color: colors.appTextColor3,
        alignSelf: 'center'
    },
    addSection: {
        fontSize: totalSize(1.6),
        color: colors.appTextColor10
    }
})