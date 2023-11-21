import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {
  gradientColor1,
  gradientColor2,
  inputBackgroundColor,
  normalTxtColor,
  profileColorBg1,
  profileColorBg2,
  profileHeaderSubtitle,
} from '../../Utils/Colors/index';
import LinearGradient from 'react-native-linear-gradient';
import {scale} from 'react-native-size-matters';
import {getWidthWithPercent} from '../../Utils/Functions/GetStyles';
import BackArrow from '../../Utils/Assets/icons/BackArrow';
import moment from 'moment';
import CustomGridBorderInput from '../../Components/CustomGridBorderInput';
import MostPopularProfile from '../../Components/MostPopularProfile';
import {textString} from '../../Utils/Translation/Translation';
import AnimatedTopHeader from '../../AnimatedComponents/AnimatedTopHeader';
import AnimatedView from '../../AnimatedComponents/AnimatedView';
interface Props {
  navigation: any;
}
const SearchScreen: React.FC<Props> = ({navigation}) => {
  return (
    <LinearGradient
      colors={[
        `${profileColorBg1}`,
        `${profileColorBg2}`,
        `${profileColorBg2}`,
      ]}
      style={styles.flexBg}>
      <AnimatedTopHeader style={styles.backButtonContainer}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          style={styles.backButtonCircle}>
          <BackArrow
            width={scale(20)}
            height={scale(25)}
            fill={`${normalTxtColor}`}
          />
        </TouchableOpacity>
        <View style={styles.backButtonCircle}></View>
      </AnimatedTopHeader>
      <AnimatedView style={styles.childContainer}>
        <Text style={styles.ModalTitle}>{textString.searchTxt}</Text>
        <Text style={styles.ModalSubTitle}>{textString.searchSub}</Text>
        <CustomGridBorderInput
          width={getWidthWithPercent(85)}
          borderRadius={scale(11)}
          placehoderTxt="Search"
        />
        <View style={styles.otherContentDiv}>
          <FlatList
            ListHeaderComponent={
              <Text style={styles.searchResultsTxt}>
                {textString.searchResults}
              </Text>
            }
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
          />
        </View>
      </AnimatedView>
    </LinearGradient>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  searchResultsTxt: {
    fontSize: scale(14),
    lineHeight: scale(21),
    fontWeight: '400',
    color: normalTxtColor,
    marginBottom: scale(17),
  },
  chatMsgTxt: {
    fontSize: scale(16),
    lineHeight: scale(24),
    fontWeight: '400',
    color: normalTxtColor,
  },
  chatOtherTxt: {
    fontSize: scale(13),
    lineHeight: scale(21),
    fontWeight: '500',
    color: normalTxtColor,
    textTransform: 'capitalize',
  },
  TextContainerChat: {
    height: '100%',
    flex: 1,
    marginLeft: scale(8),
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },
  chatAvtar: {
    width: scale(45),
    height: scale(45),
    borderRadius: scale(45),
  },
  chatItemContainer: {
    width: '100%',
    height: scale(75),
    borderRadius: scale(11),
    overflow: 'hidden',
    backgroundColor: inputBackgroundColor,
    paddingVertical: scale(15),
    paddingHorizontal: scale(9),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  reportTxt: {
    color: normalTxtColor,
    fontWeight: '500',
    fontSize: scale(13),
    lineHeight: scale(20),
  },
  ReportBtn: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  AboutMeInputContainer: {
    height: scale(185),
    borderRadius: scale(11),
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: scale(10),
  },
  AboutMeInput: {
    width: '100%',
    height: '100%',
    fontSize: scale(14),
    lineHeight: scale(21),
    fontWeight: '400',
    color: profileHeaderSubtitle,
    textAlignVertical: 'top',
  },
  otherContentDiv: {
    width: '100%',
    flex: 1,
    marginTop: scale(15),
  },
  ModalTitle: {
    fontWeight: '600',
    fontSize: scale(22),
    lineHeight: scale(42),
    textAlign: 'left',
    color: normalTxtColor,
  },
  ModalSubTitle: {
    fontWeight: '400',
    fontSize: scale(12),
    lineHeight: scale(18),
    textAlign: 'left',
    color: normalTxtColor,
  },
  flexBg: {
    width: '100%',
    height: '100%',
  },
  childContainer: {
    width: getWidthWithPercent(87),
    alignSelf: 'center',
    flex: 1,
  },
  backButtonContainer: {
    margin: scale(17),
    height: scale(45),
    width: Dimensions.get('screen').width - 34,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  backButtonCircle: {
    width: scale(45),
    height: scale(45),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: scale(45),
    overflow: 'hidden',
  },
  genderItemContainer: {
    width: getWidthWithPercent(87),
    height: scale(118),
    borderRadius: scale(20),
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    alignSelf: 'center',
  },
  genderItemContainerGrid: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  genderItemContainerGridSmall: {
    width: getWidthWithPercent(86.5),
    height: scale(115),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: inputBackgroundColor,
    borderRadius: scale(20),
    paddingHorizontal: scale(23),
    paddingVertical: scale(13),
    overflow: 'hidden',
  },
});
