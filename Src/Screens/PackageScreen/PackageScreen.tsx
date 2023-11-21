import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  alertBorderColor,
  genderTextColor,
  gradientColor1,
  gradientColor2,
  inputBackgroundColor,
  newPlaceHolderColor,
  normalTxtColor,
  placeHolderColor,
  toScreenBg,
} from '../../Utils/Colors';
import {
  getHeightWithPercent,
  getWidthWithPercent,
} from '../../Utils/Functions/GetStyles';
import {scale} from 'react-native-size-matters';
import CrossIcon from '../../Utils/Assets/icons/CrossIcon';
import CustomBtnSimple from '../../Components/CustomBtnSimple';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-snap-carousel';
import {textString} from '../../Utils/Translation/Translation';
import AnimatedTopHeader from '../../AnimatedComponents/AnimatedTopHeader';
import AnimatedView from '../../AnimatedComponents/AnimatedView';
interface Props {
  navigation: any;
}
interface planValue {
  montsValue: string;
  price: string;
}

const PackageScreen: React.FC<Props> = ({navigation}) => {
  const crouselRef = useRef(null);
  const [intrestedOffer, setintrestedOffer] = useState<planValue>({
    montsValue: '',
    price: '',
  });
  return (
    <View style={styles.fillBgMy}>
      <View style={styles.fillOtherBg}>
        <AnimatedTopHeader style={styles.TopHeader}>
          <TouchableOpacity
            onPress={() => navigation.pop()}
            style={styles.backButtonContainer}>
            <CrossIcon />
          </TouchableOpacity>
          <Text style={styles.TopHeaderTitle}>{textString.getPremumTxt}</Text>
          <View style={styles.backButtonContainer} />
        </AnimatedTopHeader>
        <AnimatedView style={{width: '100%', flex: 1}}>
          <FlatList
            data={[]}
            renderItem={() => null}
            ListHeaderComponent={
              <>
                <Image
                  style={styles.getPremiumImage}
                  source={require('../../Utils/Assets/GetPremium.png')}
                />
                <Text style={styles.whoLikeYouTxt}>{textString.whoLikeU}</Text>
                <Text style={styles.beelineTxt}>{textString.beelinTxt}</Text>
                <Text style={styles.googleWaltTxt}>{textString.gglWalt}</Text>
                <View style={styles.linearBorderLarge}>
                  <LinearGradient
                    useAngle={true}
                    angle={100}
                    colors={[`${gradientColor1}`, `${gradientColor2}`]}
                    style={styles.linearBorderSmall}
                  />
                  <View style={styles.linearBorderSmall} />
                </View>
                <View style={styles.itemContainerView}>
                  <Carousel
                    ref={crouselRef}
                    data={[
                      {
                        montsValue: 'Lifetime',
                        price: '$199.99',
                        mock: textString.lifeTimeTxt,
                        month: '∞',
                        save: textString.noSubScibeTxt,
                      },
                      {
                        montsValue: '1 month',
                        price: `$11.66/${textString.weekTxt}`,
                        mock: textString.monthTxt,
                        month: '1',
                        save: `${textString.saveTxt} 35%`,
                      },

                      {
                        montsValue: '6 months',
                        mock: textString.monthTxts,
                        price: `$5.44/${textString.weekTxt}`,
                        month: '6',
                        save: `${textString.saveTxt} 78%`,
                      },
                    ]}
                    inactiveSlideScale={0.8}
                    loop={true}
                    renderItem={({item, index}) => (
                      <TouchableOpacity
                        onPress={() =>
                          setintrestedOffer({
                            montsValue: item?.montsValue,
                            price: item?.price,
                          })
                        }
                        style={styles.genderItemContainer}>
                        <LinearGradient
                          useAngle={true}
                          angle={100}
                          colors={
                            intrestedOffer?.montsValue === item?.montsValue
                              ? [`${gradientColor1}`, `${gradientColor2}`]
                              : [genderTextColor, genderTextColor]
                          }
                          style={styles.genderItemContainerGrid}>
                          <View style={styles.genderItemContainerGridSmall}>
                            <View style={{height: scale(15)}} />
                            <Text style={styles.whoLikeYouTxt}>
                              {item?.month}
                            </Text>
                            <View style={{height: scale(4)}} />
                            <Text style={styles.googleWaltTxt}>
                              {item?.mock}
                            </Text>
                            <View style={{height: scale(10)}} />
                            <Text style={styles.googleWaltTxt}>
                              {item?.price}
                            </Text>
                            <View style={{height: scale(15)}} />

                            <View style={{width: '88%', alignSelf: 'center'}}>
                              <CustomBtnSimple
                                textColor={
                                  intrestedOffer?.montsValue ===
                                  item?.montsValue
                                    ? normalTxtColor
                                    : placeHolderColor
                                }
                                colorsArray={
                                  intrestedOffer?.montsValue ===
                                  item?.montsValue
                                    ? [`${gradientColor1}`, `${gradientColor2}`]
                                    : [`transparent`, `transparent`]
                                }
                                title={item?.save}
                                onClickFunction={() =>
                                  setintrestedOffer({
                                    montsValue: item?.montsValue,
                                    price: item?.price,
                                  })
                                }
                              />
                            </View>
                          </View>
                        </LinearGradient>
                      </TouchableOpacity>
                    )}
                    sliderWidth={getWidthWithPercent(90)}
                    itemWidth={getWidthWithPercent(45)}
                  />
                </View>
                <Text style={styles.oneTimeTxt}>{textString.oneTimeSub}</Text>
                <CustomBtnSimple
                  title={`${textString.getTxt} ${intrestedOffer?.montsValue} ${textString.fortXT} ${intrestedOffer?.price}`}
                  onClickFunction={() => console.log('hy')}
                />
              </>
            }
          />
        </AnimatedView>
      </View>
    </View>
  );
};

export default PackageScreen;

const styles = StyleSheet.create({
  linearBorderLarge: {
    width: '100%',
    height: scale(3),
    backgroundColor: alertBorderColor,
    marginVertical: scale(10),
  },
  linearBorderSmall: {
    width: getWidthWithPercent(30),
    height: scale(3),
    alignSelf: 'center',
  },
  itemContainerView: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginVertical: scale(15),
  },
  genderItemContainer: {
    width: getWidthWithPercent(45),
    height: getHeightWithPercent(33),
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
    width: getWidthWithPercent(45) - 4,
    height: getHeightWithPercent(33) - 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: inputBackgroundColor,
    borderRadius: scale(20),
    overflow: 'hidden',
  },
  oneTimeTxt: {
    fontSize: scale(15),
    lineHeight: scale(23),
    fontWeight: '400',
    color: normalTxtColor,
    textAlign: 'center',
    marginVertical: scale(15),
  },
  whoLikeYouTxt: {
    fontSize: scale(24),
    lineHeight: scale(36),
    fontWeight: '600',
    color: normalTxtColor,
    textAlign: 'center',
  },
  googleWaltTxt: {
    fontSize: scale(16),
    lineHeight: scale(24),
    fontWeight: '500',
    color: normalTxtColor,
    textAlign: 'center',
  },
  beelineTxt: {
    fontSize: scale(16),
    lineHeight: scale(24),
    fontWeight: '400',
    color: newPlaceHolderColor,
    textAlign: 'center',
    marginVertical: scale(15),
    width: '80%',
    alignSelf: 'center',
  },
  TopHeaderTitle: {
    fontSize: scale(20),
    lineHeight: scale(30),
    fontWeight: '600',
    color: normalTxtColor,
    textAlign: 'center',
  },
  getPremiumImage: {
    width: getWidthWithPercent(50),
    height: getHeightWithPercent(12),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  fillBgMy: {
    width: getWidthWithPercent(100),
    height: '100%',
    backgroundColor: toScreenBg,
  },
  fillOtherBg: {
    width: getWidthWithPercent(100) - 32,
    alignSelf: 'center',
    height: '100%',
  },
  TopHeader: {
    width: '100%',
    height: scale(40),
    marginVertical: scale(15),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  backButtonContainer: {
    width: scale(40),
    height: scale(40),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
