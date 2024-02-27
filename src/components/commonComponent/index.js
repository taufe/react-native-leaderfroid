import { CardWrapper, ComponentWrapper, RowWrapper, RowWrapperBasic, Wrapper } from "../wrappers"
import { StyleSheet, TouchableOpacity } from "react-native"
import { totalSize, width, height } from 'react-native-dimension';
import { colors, fontFamily } from "../../constants"
import { Custom, LargeText, LargeTitle, MediumText, PrimaryImage, ReadMoreModal, RegularText, Spacer, TinyTitle } from ".."
import { AppIcons, AppImages } from "../../assets";
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from 'react-native-maps';
import React, { useRef, useState } from "react";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import moment from "moment";
import { dummyLocations } from "../../utilities/dummyaData";

export const HeaderComponent = ({ heading, fonSize }) => {
  return (
    <Wrapper>
      <LargeTitle style={{ ...styles.heading, fontSize: fonSize }}>{heading}</LargeTitle>
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
export const TabCardInformation = ({ item, onPress, isActive, bulletColor }) => {
  return (
    <Wrapper>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={{ ...styles.iformationtab, backgroundColor: isActive ? colors.appBgColor2 : colors.appBgColor1 }} >
        <LargeText style={{ ...styles.bullet, color: isActive ? colors.appTextColor12 : colors.appTextColor8 }}>{'\u2B24'}</LargeText>
        <LargeText style={{ ...styles.tabText, color: isActive ? colors.appTextColor1 : colors.appTextColor4 }}>{item}</LargeText>
      </TouchableOpacity>
    </Wrapper >
  )
}

export const ProjectStatus = () => {
  return (
    <RowWrapper style={{ marginHorizontal: width(8) }}>
      <RowWrapperBasic>
        <RegularText style={styles.doingDot}>
          {'\u2B24'}
        </RegularText>
        <MediumText style={styles.statusText}>On Doing</MediumText>
      </RowWrapperBasic>
      <RowWrapperBasic>
        <RegularText style={styles.completeDot}>
          {'\u2B24'}
        </RegularText>
        <MediumText style={styles.statusText}>Completed</MediumText>
      </RowWrapperBasic>
      <RowWrapperBasic>
        <RegularText style={styles.progressDot}>
          {'\u2B24'}
        </RegularText>
        <MediumText style={styles.statusText}>In Progress</MediumText>
      </RowWrapperBasic>
    </RowWrapper>
  )
}

export const AttachFiles = ({ bgColor, bgWidth }) => {

  return (
    <ComponentWrapper>
      <LargeText style={styles.attachFile}>Attached File</LargeText>
      <Spacer isSmall />
      <CardWrapper style={{ ...styles.atttachFileCard, backgroundColor: bgColor, width: bgWidth }}>
        <RowWrapper>
          <RowWrapperBasic>
            <Custom icon={AppIcons.pdf} />
            <LargeText style={styles.fileText}>Project file.pdf</LargeText>
          </RowWrapperBasic>
          <MediumText style={styles.fileKb}>341 kb</MediumText>
        </RowWrapper>
      </CardWrapper>
      <Spacer isSmall />
      <CardWrapper style={{ ...styles.atttachFileCard, backgroundColor: bgColor, width: bgWidth }}>
        <RowWrapper>
          <RowWrapperBasic>
            <Custom icon={AppIcons.googleDrive} />
            <LargeText style={styles.fileText}>Result Google Drive</LargeText>
          </RowWrapperBasic>
          <MediumText style={styles.fileKb}>341 kb</MediumText>
        </RowWrapper>
      </CardWrapper>
    </ComponentWrapper>
  )
}
export const ImagesComponent = () => {
  return (
    <ComponentWrapper>
      <LargeText style={styles.attachFile}>Images</LargeText>
      <Spacer isTiny />
      <Wrapper style={{ flexDirection: 'row' }}>
        <PrimaryImage styles={{ width: width(25), height: height(9), marginRight: width(2) }} source={AppImages.image1} />
        <PrimaryImage styles={{ width: width(25), height: height(9), marginRight: width(2) }} source={AppImages.image2} />
        <PrimaryImage styles={{ width: width(25), height: height(9) }} source={AppImages.image3} />
      </Wrapper>
    </ComponentWrapper>
  )
}

export const NotesComponent = ({ heading, pointList, bgColor }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [showFullPoints, setShowFullPoints] = useState(false);

  const toggle = () => {
    setModalVisible(!modalVisible);
    setShowFullPoints(false);
  }

  const pointsArray = pointList.split('\n');
  const displayedPoints = showFullPoints ? pointsArray : pointsArray.slice(0, 3);

  return (
    <Wrapper style={{ flexDirection: 'row' }}>
      <CardWrapper style={{ ...styles.noteCard, backgroundColor: bgColor }}>
        <LargeText style={styles.heading}>{heading}</LargeText>
        <Spacer isTiny />
        <TouchableOpacity onPress={toggle}>
          <LargeText style={styles.pointList}>
            {displayedPoints.map((point, index) => (
              <React.Fragment key={index}>
                {index > 0 && '\n'}
                {point}
                {index === 2 && !showFullPoints && (
                  <LargeText style={styles.readMore}>
                    Read More
                  </LargeText>
                )}
              </React.Fragment>
            ))}
          </LargeText>
        </TouchableOpacity>
        <ReadMoreModal isVisible={modalVisible} toggleModal={toggle} pointList={pointList} heading={heading} bgColor={bgColor} />
      </CardWrapper>
    </Wrapper>
  );
}

export const MapComponent = ({
  markerCoordinates,
  onPressMarker,
  title,

}) => {
  const navigation = useNavigation()
  const mapRef = useRef();
  return (
    <Wrapper style={styles.mapContainer}>
      <Wrapper style={styles.mapView}>
        <TinyTitle style={styles.mapTitle}>{title}</TinyTitle>
      </Wrapper>
      <MapView
        ref={mapRef}
        showsUserLocation
        provider={
          Platform.OS === 'android' ? PROVIDER_GOOGLE : PROVIDER_DEFAULT
        }
        style={styles.map}
        region={{
          latitude: markerCoordinates?.lat ?? 37.78825,
          longitude: markerCoordinates?.lng ?? -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>

        {dummyLocations.map((location, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            onPress={() => onPressMarker(markerCoordinates)}>
            <PrimaryImage size={totalSize(4)} source={location.image} />
          </Marker>
        ))}
      </MapView>
    </Wrapper>
  );
};

export const DashedborderImage = ({ borderRadius, size, resizeMode, source, onPress }) => {
  return (
    <Pressable style={styles.imgstyle} onPress={onPress} >
      <PrimaryImage styles={{ marginRight: 8, }} borderRadius={borderRadius ?? totalSize(2)} resizeMode={resizeMode ?? "cover"} size={size ?? totalSize(10)} source={source ?? { uri: AppImages.plusCircle }} />
    </Pressable>
  )
}

export const WeekDays = ({ setSelectedDay }) => {
  const [selectedDate, setSelectedDate] = useState(Date.parse(new Date()));
  const [next7Days, setNext7Days] = useState(getNext7Days(new Date(selectedDate)));
  const [activeDay, setActiveDay] = useState(1)

  return (
    <RowWrapper>
      {next7Days?.map((day, idx) => {
        return (
          <DateCard
            key={idx}
            date={moment(day).format('DD')}
            day={moment(day).format('ddd')}
            onPress={() => {
              setSelectedDay(moment(day).format('ddd'))
              setActiveDay(idx + 1)
            }}
            active={activeDay == idx + 1}
          />
        )
      })}
    </RowWrapper>
  )
}

export const getNext7Days = (date) => {
  const next7Days = [];
  for (let i = 0; i <= 6; i++) {
    const nextDay = new Date(date);
    nextDay.setDate(date?.getDate() + i);
    next7Days.push(nextDay);
  }
  return next7Days;
};

const DateCard = ({ onPress, active, day, date }) => {
  return (
    <TouchableOpacity activeOpacity={1}
      onPress={onPress} style={[styles.dateCard, active && styles.activeDateCard]}>
      <MediumText
        style={[styles.dateText, active && styles.activeDate]}>
        {date}
      </MediumText>
      <Spacer height={totalSize(.5)} />
      <MediumText
        style={[styles.dayText, active && styles.activeDay]}>
        {day}
      </MediumText>

    </TouchableOpacity >
  )
}

const styles = StyleSheet.create({
  tab: {
    paddingVertical: width(2.5),
    paddingHorizontal: width(5),
    borderRadius: totalSize(1),
  },
  iformationtab: {
    paddingVertical: width(2.5),
    paddingHorizontal: width(11),
    borderRadius: totalSize(1),
    flexDirection: 'row',
  },
  tabText: {
    fontSize: totalSize(1.5)
  },
  heading: {
    fontSize: totalSize(1.9),
    color: colors.appTextColor4
  },
  bullet: {
    fontSize: totalSize(1.4),
    paddingRight: width(2)
  },
  attachFile: {
    fontSize: totalSize(1.6)
  },
  atttachFileCard: {
    backgroundColor: colors.appBgColor13,
    width: width(82),
    paddingVertical: height(1)
  },
  fileText: {
    fontSize: totalSize(1.3),
    alignSelf: 'center',
    color: colors.appTextColor3,
    paddingLeft: width(2)
  },
  fileKb: {
    fontSize: totalSize(1.15),
    color: colors.appTextColor2,
    opacity: .7,
  },
  pointList: {
    fontSize: totalSize(1.3),
    color: colors.appTextColor3,
    opacity: .7,
  },
  noteCard: {
    width: width(52),
    paddingHorizontal: width(4),
    paddingVertical: height(1.5),
  },
  mapContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height(50),
    position: 'relative',
  },

  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  mapView: {
    position: 'absolute',
    zIndex: 10,
    top: height(2.5),
    left: width(4),
  },
  icon: {
    backgroundColor: colors.appBgColor1,
    padding: totalSize(.65),
    borderRadius: totalSize(5)
  },
  readMore: {
    textDecorationLine: 'underline',
    fontSize: totalSize(1.5),

  },
  activeDateCard: {
    backgroundColor: colors.appBgColor1,
    paddingHorizontal: width(3.5),
    paddingVertical: height(.7),
    borderRadius: totalSize(1.6)
  },
  activeDay: {
    color: colors.appTextColor2
  },
  dayText: {
    color: colors.appTextColor3
  },
  dayText: {
    color: colors.appTextColor3,
    fontSize: totalSize(1.3)
  },
  activeDate: {
    color: colors.appTextColor2,
    fontSize: totalSize(2),
    fontFamily: fontFamily.appTextSemiBold
  },
  dateText: {
    color: colors.appTextColor4,
    fontSize: totalSize(2),
    fontFamily: fontFamily.appTextSemiBold
  },

  completeDot: {
    fontSize: totalSize(1.5),
    color: colors.appBgColor8
  },
  doingDot: {
    fontSize: totalSize(1.5),
    color: colors.appBgColor12
  },
  progressDot: {
    fontSize: totalSize(1.5),
    color: colors.appBgColor10
  },
  statusText: {
    fontSize: totalSize(1.5),
    paddingLeft: width(2)
  }
})