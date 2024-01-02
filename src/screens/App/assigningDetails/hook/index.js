import { useState } from "react"
import { selectCategoryData } from "../../../../utilities/dummyaData"
import { PickPhotoFromGallery } from "../../../../utilities"
const useAssignDetails = () => {
    // usestate
    const [selectCategory, setSelectCategory] = useState('')
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [profilePhotos, setprofilePhotos] = useState([{ path: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww" }])

    // adding picture
    const openGallery = async () => {
        const result = await PickPhotoFromGallery()
        if (result) {
            setprofilePhotos([...profilePhotos, { path: result.path }])
        }
    }

    // Return 
    return {
        selectCategory, setSelectCategory,
        selectCategoryData, date, setDate, open, setOpen,
        selectedDate, setSelectedDate, openGallery, profilePhotos
    }
}

export default useAssignDetails