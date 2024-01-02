import { useState } from "react"
import { StatusData } from "../../../../utilities/dummyaData"
import { SCREEN } from "../../../../constants"
import DocumentPicker from 'react-native-document-picker'

const useCreateNewLead = (navigation) => {
    // UseState 
    const [selectStatus, setselectStatus] = useState('')
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [updateDate, setUpdateDate] = useState(new Date())
    const [updateOpen, setUpdateOpen] = useState(false)
    const [updateSelectDate, setUpdateSelectDate] = useState(new Date());
    const [selectedFiles, setSelectedFiles] = useState('')
    const onPressCreateNewLead = () => {
        navigation.navigate(SCREEN.salesManagement)
    }
    const onPressMap = () => {
        navigation.navigate(SCREEN.map)
    }

    const PickDocument = async () => {
        try {
            const result = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles]
            });
            setSelectedFiles({ name: result[0]?.name, size: result[0]?.size })
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
            } else {
                throw err;
            }
        }
    }
    return {
        selectStatus, setselectStatus, StatusData, date, setDate, open, setOpen,
        selectedDate, setSelectedDate, updateDate, setUpdateDate, updateOpen,
        setUpdateOpen, updateSelectDate, setUpdateSelectDate,
        onPressCreateNewLead, onPressMap, PickDocument, selectedFiles
    }
}

export default useCreateNewLead