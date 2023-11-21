import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Image,
  TextInput,
  Modal,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  getVipBg,
  getVipColor,
  gradientColor1,
  gradientColor2,
  inputBackgroundColor,
  lettersLeftColor,
  lightBlackBg,
  normalTxtColor,
  placeHolderColor,
  profileColorBg1,
  profileColorBg2,
  profileHeaderSubtitle,
  rewrdTxtColor,
  selectImageColor,
} from '../../../Utils/Colors';
import BackArrow from '../../../Utils/Assets/icons/BackArrow';
import {scale} from 'react-native-size-matters';
import SettingIcon from '../../../Utils/Assets/icons/SettingIcon';
import Svg, {G, Rect, Path, Defs} from 'react-native-svg';
import {
  getHeightWithPercent,
  getWidthWithPercent,
} from '../../../Utils/Functions/GetStyles';
import GoldCoin from '../../../Utils/Assets/icons/GoldCoin';
import BadgeCrown from '../../../Utils/Assets/icons/BadgeCrown';
import CartIcon from '../../../Utils/Assets/icons/CartIcon';
import GoldCrown from '../../../Utils/Assets/icons/GoldCrown';
import ProfileHeaders from '../../../Components/ProfileHeaders';
import EditIcon from '../../../Utils/Assets/icons/EditIcon';
import UploadCloud from '../../../Utils/Assets/icons/UploadCloud';
import NextArrow from '../../../Utils/Assets/icons/NextArrow';
import CustomBtnSimple from '../../../Components/CustomBtnSimple';
import CustomGridBorderInput from '../../../Components/CustomGridBorderInput';
import CrossIcon from '../../../Utils/Assets/icons/CrossIcon';
import {textString} from '../../../Utils/Translation/Translation';
import AnimatedTopHeader from '../../../AnimatedComponents/AnimatedTopHeader';
import AnimatedView from '../../../AnimatedComponents/AnimatedView';
import NewScreenTemplate from '../../../Components/NewScreenTemplate';
import KingIcon from '../../../Utils/Assets/icons/KingIcon';
import SubscribeModal from '../../../Components/SubscribeModal';

interface Props {
  navigation: any;
}

const ClientProfileScreen: React.FC<Props> = ({navigation}) => {
  const [buyCoinsModal, setBuyCoinsModal] = useState<boolean>(false);
  const [openPremiumModal, setopenPremiumModal] = useState<boolean>(false);
  return (
    <>
      <NewScreenTemplate
        inVisibleChildren={
          <>
            <AnimatedTopHeader style={styles.backButtonContainer}>
              <TouchableOpacity
                onPress={() => navigation.pop()}
                style={styles.backButtonCircle}>
                <BackArrow width={scale(35)} fill={`${normalTxtColor}`} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('SettingScreen')}
                style={styles.backButtonCircle}>
                <SettingIcon
                  width={scale(32)}
                  height={scale(30)}
                  fill={`${normalTxtColor}`}
                />
              </TouchableOpacity>
            </AnimatedTopHeader>
            <Image
              source={require('../../../Utils/Assets/profileAvate.png')}
              style={styles.avtarImage}
            />
            <Text style={styles.usernameTxt}>kristy 12</Text>
            <Text style={styles.emailTxt}>loremipsum@123.com</Text>
          </>
        }
        bgChildren={
          <>
            <AnimatedView style={styles.contentContainerBg}>
              <FlatList
                data={[]}
                ListHeaderComponent={
                  <>
                    <View style={styles.genderItemContainer}>
                      <LinearGradient
                        useAngle={true}
                        angle={100}
                        colors={[`${gradientColor1}`, `${gradientColor2}`]}
                        style={styles.genderItemContainerGrid}>
                        <View style={styles.genderItemContainerGridSmall}>
                          <View style={styles.firstContainerDiv}>
                            <Text style={styles.coinWalletTxt}>
                              {textString.coinWalletTxt}
                            </Text>
                            <View style={styles.rowDiv}>
                              <GoldCoin />
                              <Text style={styles.goldCoinsTxt}>0</Text>
                            </View>
                            <View style={styles.rowDiv}>
                              <BadgeCrown />
                              <Text style={styles.badgeTxt}>
                                {textString.regular}
                              </Text>
                            </View>
                          </View>
                          <View style={styles.buttonContainerDiv}>
                            <TouchableOpacity
                              style={{
                                ...styles.customBtnOutlay,
                                borderRadius: scale(10),
                              }}
                              onPress={() => setBuyCoinsModal(!buyCoinsModal)}>
                              <LinearGradient
                                colors={[
                                  `${gradientColor1}`,
                                  `${gradientColor2}`,
                                ]}
                                useAngle={true}
                                angle={100}
                                style={styles.linearGradient}>
                                <CartIcon
                                  height={scale(12)}
                                  width={scale(20)}
                                />
                                <Text style={styles.btnTxt}>
                                  {textString.byCoins}
                                </Text>
                              </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity
                              style={{
                                ...styles.customBtnOutlay,
                                ...styles.blackBtnShadow,
                                width: '85%',
                                alignSelf: 'flex-end',
                              }}
                              onPress={() =>
                                setopenPremiumModal(!openPremiumModal)
                              }>
                              <LinearGradient
                                colors={[`${getVipBg}`, `${getVipBg}`]}
                                useAngle={true}
                                angle={100}
                                style={styles.linearGradient}>
                                <GoldCrown
                                  height={scale(13)}
                                  width={scale(20)}
                                />
                                <Text
                                  style={{
                                    ...styles.btnTxt,
                                    color: getVipColor,
                                  }}>
                                  {textString.getVip}
                                </Text>
                              </LinearGradient>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </LinearGradient>
                    </View>
                    <ProfileHeaders
                      title={textString.aboutMe}
                      subTitle={textString.aboutMeSub}
                      buttonTitle={textString.edit}
                      buttonIcon={
                        <EditIcon height={scale(16)} width={scale(13)} />
                      }
                      children={
                        <>
                          <Text style={styles.ModalTitle}>
                            {textString.editBioMn}
                          </Text>
                          <Text style={styles.ModalSubTitle}>
                            {textString.editBioSb}
                          </Text>
                          <View style={styles.otherContentDiv}>
                            <FlatList
                              data={[]}
                              renderItem={({}) => null}
                              ListHeaderComponent={
                                <>
                                  <View
                                    style={{
                                      ...styles.genderItemContainer,
                                      height: scale(187),
                                      borderRadius: scale(11),
                                    }}>
                                    <LinearGradient
                                      useAngle={true}
                                      angle={100}
                                      colors={[
                                        `${gradientColor1}`,
                                        `${gradientColor2}`,
                                      ]}
                                      style={styles.genderItemContainerGrid}>
                                      <View
                                        style={{
                                          ...styles.genderItemContainerGridSmall,
                                          ...styles.AboutMeInputContainer,
                                        }}>
                                        <TextInput
                                          style={styles.AboutMeInput}
                                          placeholderTextColor={
                                            profileHeaderSubtitle
                                          }
                                          numberOfLines={8}
                                          multiline={true}
                                          placeholder={textString.descbSelf200}
                                        />
                                      </View>
                                    </LinearGradient>
                                  </View>
                                  <Text style={styles.remiainingTxt}>
                                    200 {textString.moreChrctr}
                                  </Text>
                                </>
                              }
                              ListFooterComponent={
                                <>
                                  <CustomBtnSimple
                                    title={textString.saveTxt}
                                    onClickFunction={() => console.log('done')}
                                  />
                                </>
                              }
                            />
                          </View>
                        </>
                      }
                    />
                    <View style={styles.bottomContainer}>
                      <View style={styles.emptyTxt}>
                        <Text style={styles.emptyText}>
                          {textString.tellAbtU}
                        </Text>
                      </View>
                    </View>
                    <ProfileHeaders
                      title={textString.gallery}
                      subTitle={textString.photVid}
                      buttonTitle={textString.uploads}
                      buttonIcon={
                        <UploadCloud height={scale(16)} width={scale(13)} />
                      }
                      children={
                        <>
                          <Text style={styles.ModalTitle}>
                            {textString.uploadMedHd}
                          </Text>
                          <Text style={styles.ModalSubTitle}>
                            {textString.uploadMedSb}
                          </Text>
                          <View style={styles.otherContentDiv}>
                            <FlatList
                              data={[]}
                              renderItem={({}) => null}
                              ListHeaderComponent={
                                <>
                                  <View
                                    style={{
                                      ...styles.genderItemContainer,
                                      height: scale(187),
                                      borderRadius: scale(11),
                                    }}>
                                    <LinearGradient
                                      useAngle={true}
                                      angle={100}
                                      colors={[
                                        `${gradientColor1}`,
                                        `${gradientColor2}`,
                                      ]}
                                      style={styles.genderItemContainerGrid}>
                                      <View
                                        style={{
                                          ...styles.genderItemContainerGridSmall,
                                          ...styles.AboutMeInputContainer,
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                          flexDirection: 'column',
                                        }}>
                                        <UploadCloud
                                          height={scale(70)}
                                          width={scale(70)}
                                          fill={profileHeaderSubtitle}
                                        />
                                        <View
                                          style={
                                            styles.selectImageContainerView
                                          }>
                                          <Text style={styles.selectImageTxt}>
                                            {textString.selectNimg}
                                          </Text>
                                        </View>
                                      </View>
                                    </LinearGradient>
                                  </View>
                                  <Text style={styles.uploadImageTxtBox}>
                                    {textString.uploadImgs}
                                  </Text>
                                  <View
                                    style={{
                                      ...styles.bottomContainer,
                                      height: scale(190),
                                    }}>
                                    <View style={styles.emptyTxt}>
                                      <Text style={styles.emptyText}>
                                        {textString.noMedFnd}
                                      </Text>
                                    </View>
                                  </View>
                                </>
                              }
                              ListFooterComponent={
                                <CustomBtnSimple
                                  title={textString.uploadMedHd}
                                  onClickFunction={() => console.log('done')}
                                />
                              }
                            />
                          </View>
                        </>
                      }
                    />
                    <View style={styles.bottomContainer}>
                      <View style={styles.emptyTxt}>
                        <Text style={styles.emptyText}>
                          {textString.noMedFnd}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.rowDivSwipeLeft}>
                      <Text style={styles.swipeTxt}>{textString.swipLeft}</Text>
                      <NextArrow
                        fill={profileHeaderSubtitle}
                        height={scale(15)}
                      />
                    </View>
                    <ProfileHeaders
                      title={textString.trasctHd}
                      subTitle={textString.trasctSb}
                    />
                    <View style={styles.bottomContainer}>
                      <View style={styles.emptyTxt}>
                        <Text style={styles.emptyText}>
                          {textString.trasctMT}
                        </Text>
                      </View>
                    </View>
                  </>
                }
                renderItem={() => null}
                ListFooterComponent={<View style={{height: scale(30)}} />}
              />
            </AnimatedView>
          </>
        }
      />
      <Modal
        animationType="slide"
        visible={buyCoinsModal}
        onRequestClose={() => setBuyCoinsModal(!buyCoinsModal)}>
        <StatusBar />
        <LinearGradient
          colors={[
            `${profileColorBg1}`,
            `${profileColorBg2}`,
            `${profileColorBg2}`,
          ]}
          style={styles.flexBg}>
          <AnimatedTopHeader style={styles.backButtonContainer}>
            <View style={styles.backButtonCircle}></View>
            <TouchableOpacity
              onPress={() => setBuyCoinsModal(!buyCoinsModal)}
              style={styles.backButtonCircle}>
              <CrossIcon
                width={scale(20)}
                height={scale(25)}
                fill={`${normalTxtColor}`}
              />
            </TouchableOpacity>
          </AnimatedTopHeader>
          <AnimatedView
            style={{...styles.childContainer, alignItems: 'flex-start'}}>
            <Text style={styles.ModalTitle}>{textString.byCoins}</Text>
            <Text style={styles.ModalSubTitle}>
              {textString.minimumAmount} N60{' '}
            </Text>
            <View style={styles.otherContentDiv}>
              <CustomGridBorderInput
                borderRadius={scale(10)}
                width={getWidthWithPercent(90)}
                placehoderTxt={textString.amuontTxt}
                value="60"
              />
            </View>
            <CustomBtnSimple
              title={textString.paymtCont}
              onClickFunction={() => setBuyCoinsModal(!buyCoinsModal)}
            />
          </AnimatedView>
        </LinearGradient>
      </Modal>
      <SubscribeModal
        modalValue={openPremiumModal}
        closingFunction={() => setopenPremiumModal(!openPremiumModal)}
        buttonOnPress={() => navigation.navigate('SubscribeScreen')}
      />
    </>
  );
};

export default ClientProfileScreen;

const styles = StyleSheet.create({
  iconContainerKing: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: getHeightWithPercent(24),
  },
  premiumBtnDiv: {
    width: '49%',
  },
  ButtonPremiumContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '95%',
  },
  premiumHeading: {
    fontSize: scale(36),
    lineHeight: scale(54),
    fontWeight: '600',
    color: normalTxtColor,
    textAlign: 'center',
  },
  premiumSubHeading: {
    fontSize: scale(22),
    lineHeight: scale(33),
    fontWeight: '600',
    color: normalTxtColor,
    textAlign: 'center',
  },
  premiumDescHeading: {
    fontSize: scale(18),
    lineHeight: scale(27),
    fontWeight: '300',
    color: normalTxtColor,
    textAlign: 'center',
  },
  premiumOuterContainer: {
    width: getWidthWithPercent(90),
    height: getHeightWithPercent(65),
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
    height: getHeightWithPercent(65) - 4,
    borderRadius: scale(23),
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    backgroundColor: inputBackgroundColor,
    paddingHorizontal: scale(12),
  },
  childContainer: {
    width: getWidthWithPercent(87),
    alignSelf: 'center',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'relative',
  },
  selectImageTxt: {
    fontSize: scale(12),
    fontWeight: '400',
    color: profileHeaderSubtitle,
  },
  selectImageContainerView: {
    height: scale(45),
    width: scale(130),
    borderRadius: scale(48),
    backgroundColor: selectImageColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    overflow: 'hidden',
    marginTop: scale(19),
  },
  uploadImageTxtBox: {
    fontSize: scale(13),
    lineHeight: scale(20),
    fontWeight: '500',
    textAlign: 'left',
    color: normalTxtColor,
    marginVertical: scale(19),
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
    // height: '100%',
    textAlign: 'left',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    fontSize: scale(14),
    lineHeight: scale(21),
    fontWeight: '400',
    color: profileHeaderSubtitle,
    textAlignVertical: 'top',
  },
  remiainingTxt: {
    color: lettersLeftColor,
    fontSize: scale(11),
    lineHeight: scale(18),
    fontWeight: '400',
    textAlign: 'left',
    marginTop: scale(15),
    marginBottom: scale(20),
  },
  largeModalButton: {
    borderRadius: scale(10),
    height: scale(54),
    marginVertical: scale(15),
  },
  newBtnTxt: {fontSize: scale(20), lineHeight: scale(30), fontWeight: '400'},
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

  swipeTxt: {
    color: profileHeaderSubtitle,
    fontSize: scale(10),
    lineHeight: scale(18),
    fontWeight: '400',
    marginRight: scale(1),
  },
  emptyTxt: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  emptyText: {
    fontSize: scale(14),
    lineHeight: scale(30),
    fontWeight: '300',
    color: profileHeaderSubtitle,
  },
  rowDivSwipeLeft: {
    width: getWidthWithPercent(87),
    alignSelf: 'center',
    backgroundColor: profileColorBg2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  bottomContainer: {
    width: getWidthWithPercent(87),
    alignSelf: 'center',
    height: scale(130),
    backgroundColor: profileColorBg2,
  },
  buttonContainerDiv: {
    width: '38%',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  blackBtnShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.45,
    shadowRadius: 3.84,

    elevation: 5,
  },
  customBtnOutlay: {
    width: '100%',
    height: scale(30),
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: scale(54),
    overflow: 'hidden',
  },
  linearGradient: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
  btnTxt: {
    fontSize: scale(12),
    fontWeight: '400',
    lineHeight: scale(16),
    textAlign: 'center',
    color: normalTxtColor,
    marginLeft: scale(3),
  },
  badgeTxt: {
    fontSize: scale(12),
    fontWeight: '300',
    lineHeight: scale(16),
    textAlign: 'left',
    color: rewrdTxtColor,
    marginLeft: scale(5),
  },
  goldCoinsTxt: {
    fontSize: scale(27),
    fontWeight: '500',
    textAlign: 'left',
    color: normalTxtColor,
    marginLeft: scale(5),
  },
  coinWalletTxt: {
    fontSize: scale(12),
    fontWeight: '400',
    textAlign: 'left',
    color: normalTxtColor,
  },
  rowDiv: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  firstContainerDiv: {
    height: '100%',
    width: '62%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  genderItemContainer: {
    width: getWidthWithPercent(87),
    height: scale(98),
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
    height: scale(98) - 3,
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
  flexBg: {
    width: '100%',
    height: '100%',
  },
  usernameTxt: {
    marginTop: scale(15),
    fontSize: scale(18),
    fontWeight: '700',
    lineHeight: scale(20),
    color: normalTxtColor,
    textAlign: 'center',
  },
  emailTxt: {
    marginBottom: scale(15),
    fontSize: scale(11),
    fontWeight: '400',
    lineHeight: scale(15),
    color: normalTxtColor,
    textAlign: 'center',
  },
  avtarImage: {
    width: scale(95),
    height: scale(95),
    borderRadius: scale(108),
    overflow: 'hidden',
    marginTop: scale(35),
    alignSelf: 'center',
  },
  backButtonContainer: {
    margin: scale(17),
    height: scale(45),
    width: Dimensions.get('screen').width - 34,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  flexBgModal: {
    width: '100%',
    height: '100%',
    backgroundColor: lightBlackBg,
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
  contentContainerBg: {
    width: '100%',
    flex: 1,
    marginTop: scale(15),
  },
});
