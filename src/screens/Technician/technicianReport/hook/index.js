// ... (import statements)

import moment from "moment";
import { useState } from "react";

const useTechnicianReport = () => {
    // UseState
    const [selectedDay, setSelectedDay] = useState();
    const [fromTime, setFromTime] = useState();
    const [toTime, setToTime] = useState();
    const [isFromTimePickerVisible, setFromTimePickerVisibility] = useState(false);
    const [isToTimePickerVisible, setToTimePickerVisibility] = useState(false);
    const [showTime, setShowTime] = useState('');

    const showFromTimePicker = () => {
        setFromTimePickerVisibility(true);
    };

    const hideFromTimePicker = () => {
        setFromTimePickerVisibility(false);
    };

    const showToTimePicker = () => {
        setToTimePickerVisibility(true);
    };

    const hideToTimePicker = () => {
        setToTimePickerVisibility(false);
    };

    const handleConfirm = (time, pickerType) => {
        console.warn("A time has been picked: ", time);
        const formattedTime = moment(time).format('h:mm A');

        if (pickerType === "from") {
            setFromTime(time);
            setShowTime(formattedTime);
        } else {
            setToTime(time);
            setShowTime(showTime + " - " + formattedTime);
            hideToTimePicker();
        }
    };

    return {
        setSelectedDay,
        showFromTimePicker,
        hideFromTimePicker,
        showToTimePicker,
        hideToTimePicker,
        handleConfirm,
        toTime,
        fromTime,
        isFromTimePickerVisible,
        isToTimePickerVisible,
        showTime,
    };
};

export default useTechnicianReport
