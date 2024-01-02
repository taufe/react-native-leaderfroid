import { CardWrapper, ComponentWrapper, RowWrapper, RowWrapperBasic, Wrapper } from "../wrappers"
import { StyleSheet, TouchableOpacity } from "react-native"
import { totalSize, width, height } from 'react-native-dimension';
import { colors } from "../../constants"
import { Custom, LargeText, LargeTitle, MediumText, PrimaryImage, ReadMoreModal, Spacer, TinyTitle } from ".."
import { AppIcons, AppImages } from "../../assets";
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from 'react-native-maps';
import React, { useRef, useState } from "react";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";

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
  goBack,
  title,
  lineCoordinates,
}) => {
  const navigation = useNavigation()
  const mapRef = useRef();
  return (
    <Wrapper style={styles.mapContainer}>
      <Wrapper style={styles.mapView}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: 'absolute',
            left: width(2),
          }}>
          <Icon
            color={colors.appIconColor2}
            style={styles.icon}
            name='arrowleft'
            type='antdesign'
            size={22}
          />
        </TouchableOpacity>
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
        {markerCoordinates && (
          <Marker
            coordinate={{
              latitude: markerCoordinates.lat,
              longitude: markerCoordinates.lng,
            }}
            onPress={() => onPressMarker(markerCoordinates)}
          />
        )}
        {lineCoordinates?.length > 0 && (
          <Polyline
            coordinates={lineCoordinates}
            strokeColor={colors.appBorderColor2}
            strokeWidth={3}
            lineDashPattern={[1]}
          />
        )}
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
    height: height(100),
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

  }
})