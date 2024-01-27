import moment from "moment";
import { useState } from "react";

const useTechnicianReport = () => {
    const [selectedDay, setSelectedDay] = useState('')
    const [isFromTimePickerVisible, setFromTimePickerVisibility] = useState(false);
    const [isToTimePickerVisible, setToTimePickerVisibility] = useState(false);
    const [selectedFromTime, setSelectedFromTime] = useState(null);
    const [selectedToTime, setSelectedToTime] = useState(null);
    const [additionalFields, setAdditionalFields] = useState([]);

    const showTimePicker = (type) => {
        if (type === 'from') {
            setFromTimePickerVisibility(true);
        } else if (type === 'to') {
            setToTimePickerVisibility(true);
        }
    };

    const hideTimePicker = (type) => {
        if (type === 'from') {
            setFromTimePickerVisibility(false);
        } else if (type === 'to') {
            setToTimePickerVisibility(false);
        }
    };

    const handleConfirm = (time, type) => {
        hideTimePicker(type);
        if (type === 'from') {
            setSelectedFromTime(time);
        } else if (type === 'to') {
            setSelectedToTime(time);
        }
    };

    const formatTimeInCustomFormat = (time) => {
        return time ? time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }) : '';
    };

    const addField = () => {
        setAdditionalFields([...additionalFields, { id: Date.now() }]);
    };

    const deleteField = (id) => {
        setAdditionalFields((fields) => fields?.filter((field) => field?.id !== id));
    };
    return {
        isFromTimePickerVisible, isToTimePickerVisible, selectedToTime, showTimePicker,
        hideTimePicker, handleConfirm, formatTimeInCustomFormat,
        addField, deleteField, selectedFromTime, additionalFields, setSelectedDay
    }
}

export default useTechnicianReport
