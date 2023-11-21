import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList,
  ImageBackground,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  getVipBg,
  gradientColor1,
  gradientColor2,
  newGradientBg,
  newGradientBg2,
  newPlaceHolderColor,
  newProfilebg1,
  newProfilebg2,
  normalTxtColor,
  profileColorBg1,
  profileColorBg2,
  profileSideButtonBg,
} from '../../Utils/Colors';
import {scale} from 'react-native-size-matters';
import ChatIcon from '../../Utils/Assets/icons/ChatIcon';
import ProfileIcon from '../../Utils/Assets/icons/ProfileIcon';
import ProfileHeaders from '../../Components/ProfileHeaders';
import {
  getHeightWithPercent,
  getWidthWithPercent,
} from '../../Utils/Functions/GetStyles';
import HomePlayBtn from '../../Utils/Assets/icons/HomePlayBtn';
import CustomGridBorderBtn from '../../Components/CustomGridBorderBtn';
import MostPopularProfile from '../../Components/MostPopularProfile';
import PromotedProfile from '../../Components/PromotedProfile';
import {textString} from '../../Utils/Translation/Translation';
import AnimatedTopHeader from '../../AnimatedComponents/AnimatedTopHeader';
import AnimatedView from '../../AnimatedComponents/AnimatedView';

interface Props {
  navigation: any;
}
const HomeScreen: React.FC<Props> = ({navigation}) => {
  return (
    <LinearGradient
      colors={[
        `${profileColorBg1}`,
        `${profileColorBg2}`,
        `${profileColorBg2}`,
      ]}
      style={styles.flexBg}>
      <AnimatedTopHeader
        style={{...styles.backButtonContainer, marginBottom: scale(15)}}>
        <Text style={styles.mainHeading}>{textString.homeHead}</Text>
        <View style={styles.sideButtonsContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ChatScreen')}
            style={styles.buttonView}>
            <ChatIcon />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ClientProfileScreen')}
            style={styles.buttonView}>
            <ProfileIcon />
          </TouchableOpacity>
        </View>
      </AnimatedTopHeader>
      <AnimatedTopHeader
        style={{
          ...styles.backButtonContainer,
          marginVertical: scale(10),
          justifyContent: 'center',
        }}>
        <CustomGridBorderBtn
          width={getWidthWithPercent(87.4)}
          height={scale(40)}
          borderRadius={scale(11)}
          textAlignLeft={true}
          textColor={`${newPlaceHolderColor}`}
          placehoderTxt={textString.searchTxt}
          onClickFunction={() => navigation.navigate('DateScreen')}
          marginTop={scale(0)}
        />
      </AnimatedTopHeader>
      <AnimatedView style={styles.contentContainerBg}>
        <FlatList
          data={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
          numColumns={2}
          renderItem={({item}) => (
            <MostPopularProfile
              username="jay jay"
              language="English"
              onClickFunction={() => navigation.navigate('ActorProfile')}
            />
          )}
          columnWrapperStyle={{flex: 1, justifyContent: 'space-between'}}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <>
              <ProfileHeaders
                title={textString.promotedModalTxt}
                subTitle={textString.promotedModalSub}
              />
              <View style={styles.HorizantleListContainer}>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={[0, 1, 2, 4, 5, 6]}
                  renderItem={({item}) => (
                    <PromotedProfile
                      username="jay jay"
                      language="English"
                      onClickFunction={() =>
                        navigation.navigate('ActorProfile')
                      }
                    />
                  )}
                  ItemSeparatorComponent={() => (
                    <View style={{marginRight: scale(10)}} />
                  )}
                />
              </View>
              <ProfileHeaders
                title={textString.mostRecentTxt}
                subTitle={textString.mostRecentSub}
              />
            </>
          }
        />
      </AnimatedView>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  bottomUserName: {
    fontWeight: '700',
    fontSize: scale(10),
    lineHeight: scale(15),
    color: normalTxtColor,
  },
  bottomLanguage: {
    fontWeight: '400',
    fontSize: scale(11),
    lineHeight: scale(16),
    color: normalTxtColor,
  },
  topPlayBtn: {
    position: 'absolute',
    top: scale(5),
    left: scale(5),
  },
  bottomUserInfo: {
    position: 'absolute',
    bottom: scale(10),
    backgroundColor: profileSideButtonBg,
    width: '90%',
    height: scale(38),
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
  HorizantleListContainer: {
    width: '100%',
    //height: scale(190),
  },

  buttonView: {
    height: '100%',
    width: '48%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sideButtonsContainer: {
    width: scale(65),
    height: '100%',
    borderRadius: scale(48),
    backgroundColor: getVipBg,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  mainHeading: {
    fontSize: scale(20),
    lineHeight: scale(39),
    fontWeight: '700',
    color: normalTxtColor,
  },
  contentContainerBg: {
    width: Dimensions.get('screen').width - 54,
    alignSelf: 'center',
    flex: 1,
  },
  flexBg: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  backButtonContainer: {
    margin: scale(17),
    height: scale(35),
    width: Dimensions.get('screen').width - 54,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
