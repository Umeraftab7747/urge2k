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

const MostPopularProfile: React.FC<Props> = ({
  onClickFunction,
  username,
  language,
}) => {
  return (
    <TouchableOpacity onPress={onClickFunction} style={{alignSelf: 'center'}}>
      <LinearGradient
        colors={[`${newProfilebg1}`, `${newProfilebg2}`]}
        style={styles.recentOuterContainer}>
        <ImageBackground
          source={require('../Utils/Assets/backup.jpg')}
          resizeMode="cover"
          style={{
            ...styles.recentInnerContainer,
            backgroundColor: normalTxtColor,
          }}>
          <LinearGradient
            colors={[
              `${normalTxtColor}`,
              `${newGradientBg}`,
              `${newGradientBg2}`,
            ]}
            style={{
              ...styles.recentInnerContainer,
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

export default MostPopularProfile;

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
    lineHeight: scale(12),
    color: normalTxtColor,
  },
  recentOuterContainer: {
    width: getWidthWithPercent(42.5),
    height: scale(215),
    borderRadius: scale(23),
    overflow: 'hidden',
    alignSelf: 'center',
    marginBottom: scale(10),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  recentInnerContainer: {
    width: getWidthWithPercent(42.5) - 4,
    height: scale(215) - 4,
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
