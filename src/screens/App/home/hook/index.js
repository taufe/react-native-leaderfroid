

const useHome = (navigation) => {
    const onPressManagement = (item) => {
        navigation.navigate(item?.screen)
    }
    return { onPressManagement }
}

export default useHome