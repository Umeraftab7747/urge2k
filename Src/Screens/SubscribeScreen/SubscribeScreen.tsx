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
import React, {useState, useRef} from 'react';
import {
  alertBorderColor,
  featureColor,
  gradientColor1,
  gradientColor2,
  inputBackgroundColor,
  normalTxtColor,
  profileColorBg1,
  profileColorBg2,
  profileHeaderSubtitle,
  rewrdTxtColor,
} from '../../Utils/Colors/index';
import LinearGradient from 'react-native-linear-gradient';
import {scale} from 'react-native-size-matters';
import {
  getHeightWithPercent,
  getWidthWithPercent,
} from '../../Utils/Functions/GetStyles';
import BackArrow from '../../Utils/Assets/icons/BackArrow';
import moment from 'moment';
import CustomGridBorderInput from '../../Components/CustomGridBorderInput';
import MostPopularProfile from '../../Components/MostPopularProfile';
import CustomBtnSimple from '../../Components/CustomBtnSimple';
import AppCurrency from '../../Utils/Assets/icons/AppCurrency';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {textString} from '../../Utils/Translation/Translation';
import AnimatedTopHeader from '../../AnimatedComponents/AnimatedTopHeader';
import AnimatedView from '../../AnimatedComponents/AnimatedView';
interface Props {
  navigation: any;
}
const SubscribeScreen: React.FC<Props> = ({navigation}) => {
  const packages = [
    {
      packageName: textString.prmumAcsTxtNm,
      price: '1,499',
      packageDuartion: textString.prmumMnthTxtNm,
    },
    {
      packageName: 'Bussiness Package',
      price: '1,050',
      packageDuartion: textString.prmumMnthTxtNm,
    },

    {
      packageName: 'Economy Access',
      price: '20',
      packageDuartion: textString.prmumWekTxtNm,
    },
  ];
  const crouselRef = useRef(null);
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
        <View style={styles.premiumOuterContainer}>
          <LinearGradient
            colors={[`${gradientColor2}`, `${gradientColor1}`]}
            style={styles.premiumOuterContainer}>
            <View style={styles.premiumInnerContainer}>
              <Image
                style={styles.crownImage}
                source={require('../../Utils/Assets/crown.png')}
              />
              <FlatList
                ListHeaderComponent={
                  <>
                    <View
                      style={{
                        alignSelf: 'center',
                        height: getHeightWithPercent(15),
                      }}>
                      <Carousel
                        ref={crouselRef}
                        data={packages}
                        indicatorStyle="white"
                        renderItem={({item, index}) => (
                          <>
                            <Text
                              style={{
                                ...styles.myHeading,
                              }}>
                              {item?.packageName}
                            </Text>
                            <View style={styles.packagePriceView}>
                              <Text style={styles.paymentTxt}>
                                ₦{item?.price}
                                <Text style={styles.monthTxt}>
                                  /{item.packageDuartion}
                                </Text>
                              </Text>
                            </View>
                            <Pagination
                              dotsLength={packages.length}
                              activeDotIndex={index}
                              containerStyle={{
                                paddingVertical: scale(0),
                                marginTop: scale(5),
                              }}
                              dotStyle={{
                                width: scale(15),
                                height: scale(5),
                                borderRadius: scale(5),
                                backgroundColor: normalTxtColor,
                              }}
                              inactiveDotStyle={{
                                width: scale(10),
                                height: scale(10),
                                backgroundColor: rewrdTxtColor,
                                borderRadius: scale(5),
                              }}
                            />
                          </>
                        )}
                        sliderWidth={getWidthWithPercent(80)}
                        itemWidth={getWidthWithPercent(80)}
                      />
                    </View>
                  </>
                }
                data={[
                  textString.subScribeFetureTxt1,
                  textString.subScribeFetureTxt2,
                  textString.subScribeFetureTxt3,
                  textString.subScribeFetureTxt4,
                  textString.subScribeFetureTxt4,
                ]}
                ItemSeparatorComponent={() => (
                  <View style={styles.bottomBorderView} />
                )}
                renderItem={({item}) => (
                  <Text style={styles.featureTxt}>{item}</Text>
                )}
                ListFooterComponent={
                  <CustomBtnSimple
                    title={textString.subscribeTxtBtn}
                    onClickFunction={() => navigation.navigate('PackageScreen')}
                  />
                }
              />
            </View>
          </LinearGradient>
        </View>
      </AnimatedView>
    </LinearGradient>
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  currencyaiMAGE: {
    width: scale(38),
    height: scale(45),
    objectFit: 'contain',
  },
  packagePriceView: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  monthTxt: {
    fontSize: scale(16),
    lineHeight: scale(65),
    fontWeight: '600',
    color: normalTxtColor,
  },
  paymentTxt: {
    fontSize: scale(44),
    lineHeight: scale(65),
    fontWeight: 'bold',
    color: normalTxtColor,
  },
  bottomBorderView: {
    width: '97%',
    height: scale(1),
    backgroundColor: alertBorderColor,
    alignSelf: 'center',
  },
  featureTxt: {
    fontSize: scale(13.5),
    lineHeight: scale(24),
    fontWeight: '300',
    color: alertBorderColor,
    textAlign: 'center',
    marginVertical: scale(12),
    letterSpacing: scale(-0.2),
  },
  myHeading: {
    fontSize: scale(22),
    // lineHeight: scale(36),
    fontWeight: '600',
    color: normalTxtColor,
    textAlign: 'center',
  },
  crownImage: {
    width: scale(80),
    height: scale(80),
    resizeMode: 'contain',
    marginTop: scale(18),
  },
  premiumOuterContainer: {
    width: getWidthWithPercent(90),
    height: getHeightWithPercent(75),
    borderRadius: scale(23),
    marginVertical: scale(19),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  premiumInnerContainer: {
    width: getWidthWithPercent(90) - 4,
    height: getHeightWithPercent(75) - 4,
    borderRadius: scale(23),
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    backgroundColor: inputBackgroundColor,
    paddingHorizontal: scale(12),
  },
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
    fontSize: scale(28),
    lineHeight: scale(42),
    textAlign: 'left',
    color: normalTxtColor,
  },
  ModalSubTitle: {
    fontWeight: '400',
    fontSize: scale(15),
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonContainer: {
    margin: scale(17),
    marginBottom: 0,
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
