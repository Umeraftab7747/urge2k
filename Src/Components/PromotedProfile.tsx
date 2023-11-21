import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {getWidthWithPercent} from '../Utils/Functions/GetStyles';
import {scale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import {
  gradientColor1,
  gradientColor2,
  lightBlackBg,
  newGradientBg,
  newGradientBg2,
  newProfilebg1,
  newProfilebg2,
  normalTxtColor,
  profileSideButtonBg,
} from '../Utils/Colors';
import NextArrow from '../Utils/Assets/icons/NextArrow';
import HomePlayBtn from '../Utils/Assets/icons/HomePlayBtn';
import ProfileIcon from '../Utils/Assets/icons/ProfileIcon';

interface Props {
  username: string;
  language: string;
  onClickFunction: () => void;
}

const PromotedProfile: React.FC<Props> = ({
  onClickFunction,
  username,
  language,
}) => {
  return (
    <TouchableOpacity onPress={onClickFunction} style={{alignSelf: 'center'}}>
      <LinearGradient
        colors={[`${newProfilebg1}`, `${newProfilebg2}`]}
        style={styles.promotedOuterContainer}>
        <ImageBackground
          source={require('../Utils/Assets/backup.jpg')}
          resizeMode="cover"
          style={{
            ...styles.promotedInerContainer,
            backgroundColor: normalTxtColor,
          }}>
          <LinearGradient
            colors={[
              `${normalTxtColor}`,
              `${newGradientBg}`,
              `${newGradientBg2}`,
            ]}
            style={{
              ...styles.promotedInerContainer,
              position: 'relative',
            }}>
            <View style={styles.topPlayBtn}>
              <HomePlayBtn />
            </View>
            <View style={styles.bottomUserInfo}>
              <ProfileIcon width={scale(22)} height={scale(22)} />
              <View style={styles.TextContenrBottom}>
                <Text style={styles.bottomUserName}>{username}</Text>
                <Text style={styles.bottomLanguage}>{language}</Text>
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default PromotedProfile;

const styles = StyleSheet.create({
  bottomUserName: {
    fontWeight: '700',
    fontSize: scale(10),
    lineHeight: scale(15),
    color: normalTxtColor,
  },
  bottomLanguage: {
    fontWeight: '400',
    fontSize: scale(8),
    lineHeight: scale(11),
    color: normalTxtColor,
  },
  promotedOuterContainer: {
    width: scale(134),
    height: scale(185),
    backgroundColor: 'red',
    borderRadius: scale(23),
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  promotedInerContainer: {
    width: scale(134) - 4,
    height: scale(185) - 4,
    borderRadius: scale(23),
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topPlayBtn: {
    position: 'absolute',
    top: scale(5),
    left: scale(5),
  },
  bottomUserInfo: {
    position: 'absolute',
    bottom: scale(10),
    backgroundColor: lightBlackBg,
    width: '90%',
    height: scale(32),
    borderRadius: scale(46),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: scale(8),
  },
  TextContenrBottom: {
    height: '100%',
    flex: 1,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    marginLeft: scale(7),
  },
});
